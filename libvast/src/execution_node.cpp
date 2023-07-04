//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/execution_node.hpp"

#include "vast/actors.hpp"
#include "vast/chunk.hpp"
#include "vast/detail/weak_handle.hpp"
#include "vast/detail/weak_run_delayed.hpp"
#include "vast/diagnostics.hpp"
#include "vast/modules.hpp"
#include "vast/operator_control_plane.hpp"
#include "vast/si_literals.hpp"
#include "vast/table_slice.hpp"

#include <caf/downstream.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/exit_reason.hpp>
#include <caf/typed_event_based_actor.hpp>
#include <caf/typed_response_promise.hpp>

namespace vast {

namespace {

namespace defaults {

using namespace std::chrono_literals;
using namespace si_literals;

/// Defines the upper bound for the batch timeout used when requesting a batch
/// from the the previous execution node in the pipeline.
constexpr duration max_batch_timeout = 250ms;

/// Defines the upper bound for the batch size used when requesting a batch
/// from the the previous execution node in the pipeline.
constexpr uint64_t max_batch_size = 64_Ki;

/// Defines how much free capacity must be in the inbound buffer of the
/// execution node before it requests further data.
constexpr uint64_t min_batch_size = 8_Ki;

/// Defines the upper bound for the inbound and outbound buffer of the
/// execution node.
constexpr uint64_t max_buffered = 254_Ki;

} // namespace defaults

template <class Input, class Output>
struct exec_node_state;

class exec_node_diagnostic_handler final : public diagnostic_handler {
public:
  exec_node_diagnostic_handler(exec_node_actor::pointer self,
                               receiver_actor<diagnostic> diagnostic_handler)
    : self_{self}, diagnostic_handler_{std::move(diagnostic_handler)} {
  }

  void emit(diagnostic d) override {
    if (d.severity == severity::error) {
      has_seen_error_ = true;
    }
    self_->request(diagnostic_handler_, caf::infinite, std::move(d))
      .then([]() {},
            [](caf::error& e) {
              VAST_WARN("failed to send diagnostic: {}", e);
            });
  }

  auto has_seen_error() const -> bool override {
    return has_seen_error_;
  }

private:
  exec_node_actor::pointer self_ = {};
  receiver_actor<diagnostic> diagnostic_handler_ = {};
  bool has_seen_error_ = {};
};

template <class Input, class Output>
class exec_node_control_plane final : public operator_control_plane {
public:
  exec_node_control_plane(exec_node_state<Input, Output>& state,
                          receiver_actor<diagnostic> diagnostic_handler)
    : state_{state},
      diagnostic_handler_{std::make_unique<exec_node_diagnostic_handler>(
        state_.self, std::move(diagnostic_handler))} {
  }

  auto self() noexcept -> exec_node_actor::base& override {
    return *state_.self;
  }

  auto node() noexcept -> node_actor override {
    return state_.weak_node.lock();
  }

  auto abort(caf::error error) noexcept -> void override {
    VAST_ASSERT(error != caf::none);
    if (error != ec::silent) {
      diagnostic::error("{}", error)
        .note("from `{}`", state_.op->to_string())
        .emit(diagnostics());
    }
    if (not state_.abort) {
      state_.abort = caf::make_error(ec::silent, fmt::to_string(error));
    }
  }

  auto warn(caf::error error) noexcept -> void override {
    if (error != ec::silent) {
      diagnostic::warning("{}", error)
        .note("from `{}`", state_.op->to_string())
        .emit(diagnostics());
    }
  }

  auto emit(table_slice) noexcept -> void override {
    die("not implemented");
  }

  auto schemas() const noexcept -> const std::vector<type>& override {
    return vast::modules::schemas();
  }

  auto concepts() const noexcept -> const concepts_map& override {
    return vast::modules::concepts();
  }

  auto diagnostics() noexcept -> diagnostic_handler& override {
    return *diagnostic_handler_;
  }

private:
  exec_node_state<Input, Output>& state_;
  std::unique_ptr<exec_node_diagnostic_handler> diagnostic_handler_ = {};
};

auto size(const table_slice& slice) -> uint64_t {
  return slice.rows();
}

auto size(const chunk_ptr& chunk) -> uint64_t {
  return chunk ? chunk->size() : 0;
}

auto split(const chunk_ptr& chunk, size_t partition_point)
  -> std::pair<chunk_ptr, chunk_ptr> {
  if (partition_point == 0)
    return {{}, chunk};
  if (partition_point >= size(chunk))
    return {chunk, {}};
  return {
    chunk->slice(0, partition_point),
    chunk->slice(partition_point, size(chunk) - partition_point),
  };
}

auto split(std::vector<chunk_ptr> chunks, uint64_t partition_point)
  -> std::pair<std::vector<chunk_ptr>, std::vector<chunk_ptr>> {
  auto it = chunks.begin();
  for (; it != chunks.end(); ++it) {
    if (partition_point == size(*it)) {
      return {
        {chunks.begin(), it + 1},
        {it + 1, chunks.end()},
      };
    }
    if (partition_point < size(*it)) {
      auto lhs = std::vector<chunk_ptr>{};
      auto rhs = std::vector<chunk_ptr>{};
      lhs.reserve(std::distance(chunks.begin(), it + 1));
      rhs.reserve(std::distance(it, chunks.end()));
      lhs.insert(lhs.end(), std::make_move_iterator(chunks.begin()),
                 std::make_move_iterator(it));
      auto [split_lhs, split_rhs] = split(*it, partition_point);
      lhs.push_back(std::move(split_lhs));
      rhs.push_back(std::move(split_rhs));
      rhs.insert(rhs.end(), std::make_move_iterator(it + 1),
                 std::make_move_iterator(chunks.end()));
      return {
        std::move(lhs),
        std::move(rhs),
      };
    }
    partition_point -= size(*it);
  }
  return {
    std::move(chunks),
    {},
  };
}

template <class Input>
struct inbound_state_mixin {
  /// A handle to the previous execution node.
  exec_node_actor previous = {};
  bool signaled_demand = {};

  std::vector<Input> inbound_buffer = {};
  uint64_t inbound_buffer_size = {};
};

template <>
struct inbound_state_mixin<std::monostate> {};

template <class Output>
struct outbound_state_mixin {
  /// The outbound buffer of the operator contains elements ready to be
  /// transported to the next operator's execution node.
  std::vector<Output> outbound_buffer = {};
  uint64_t outbound_buffer_size = {};

  /// The currently open demand.
  struct demand {
    caf::typed_response_promise<void> rp = {};
    exec_node_sink_actor sink = {};
    const uint64_t batch_size = {};
    const std::chrono::steady_clock::time_point batch_timeout = {};
    bool ongoing = {};
  };
  std::optional<demand> current_demand = {};
  bool reject_demand = {};
};

template <>
struct outbound_state_mixin<std::monostate> {};

template <class Input, class Output>
struct exec_node_state : inbound_state_mixin<Input>,
                         outbound_state_mixin<Output> {
  static constexpr auto name = "exec-node";

  /// A pointer to the parent actor.
  exec_node_actor::pointer self = {};

  /// The operator owned by this execution node.
  operator_ptr op = {};

  /// The instance created by the operator. Must be created at most once.
  struct resumable_generator {
    generator<Output> gen = {};
    generator<Output>::iterator it = {};
  };
  std::optional<resumable_generator> instance = {};

  // Metrics that track the total number of inbound and outbound elements that
  // passed through this operator.
  uint64_t inbound_total = {};
  uint64_t outbound_total = {};

  // Indicates whether the operator has stalled, i.e., the generator should not
  // be advanced.
  bool stalled = {};

  /// A pointer to te operator control plane passed to this operator during
  /// execution, which acts as an escape hatch to this actor.
  std::unique_ptr<exec_node_control_plane<Input, Output>> ctrl = {};

  /// A weak handle to the node actor.
  detail::weak_handle<node_actor> weak_node = {};

  /// The next run of this actor's internal run loop.
  bool run_scheduled = {};

  /// Set by `ctrl.abort(...)`, to be checked by `start()` and `run()`.
  caf::error abort;

  auto start(std::vector<caf::actor> previous) -> caf::result<void> {
    VAST_DEBUG("{} received start request for `{}`", *self, op->to_string());
    if (instance.has_value()) {
      return caf::make_error(ec::logic_error,
                             fmt::format("{} was already started", *self));
    }
    if constexpr (std::is_same_v<Input, std::monostate>) {
      if (not previous.empty()) {
        return caf::make_error(ec::logic_error,
                               fmt::format("{} runs a source operator and must "
                                           "not have a previous exec-node",
                                           *self));
      }
    } else {
      // The previous exec-node must be set when the operator is not a source.
      if (previous.empty()) {
        return caf::make_error(
          ec::logic_error, fmt::format("{} runs a transformation/sink operator "
                                       "and must have a previous exec-node",
                                       *self));
      }
      this->previous
        = caf::actor_cast<exec_node_actor>(std::move(previous.back()));
      previous.pop_back();
      self->monitor(this->previous);
      self->set_down_handler([this](const caf::down_msg& msg) {
        if (msg.source != this->previous.address()) {
          VAST_DEBUG("ignores down msg from unknown source: {}", msg.reason);
          return;
        }
        VAST_DEBUG("{} got down from previous execution node: {}", op->name(),
                   msg.reason);
        this->previous = nullptr;
        // We empirically noticed that sometimes, we get a down message from a
        // previous execution node in a different actor system, but do not get
        // an error response to our demand request. To be able to shutdown
        // correctly, we must set `signaled_demand` to false as a workaround.
        this->signaled_demand = false;
        schedule_run();
        if (msg.reason) {
          ctrl->abort(caf::make_error(
            ec::unspecified, fmt::format("{} shuts down because of irregular "
                                         "exit of previous operator: {}",
                                         op, msg.reason)));
        }
      });
    }
    // Instantiate the operator with its input type.
    auto output_generator = op->instantiate(make_input_adapter(), *ctrl);
    if (not output_generator) {
      VAST_DEBUG("{} could not instantiate operator: {}", *self,
                 output_generator.error());
      return add_context(output_generator.error(),
                         "{} failed to instantiate operator", *self);
    }
    if (not std::holds_alternative<generator<Output>>(*output_generator)) {
      return caf::make_error(
        ec::logic_error, fmt::format("{} expected {}, but got {}", *self,
                                     operator_type_name<Output>(),
                                     operator_type_name(*output_generator)));
    }
    instance.emplace();
    instance->gen = std::get<generator<Output>>(std::move(*output_generator));
    VAST_DEBUG("{} calls begin on instantiated operator", *self);
    instance->it = instance->gen.begin();
    if (abort) {
      VAST_DEBUG("{} was aborted during begin: {}", *self, op->to_string(),
                 abort);
      return abort;
    }
    if constexpr (std::is_same_v<Output, std::monostate>) {
      VAST_DEBUG("{} is the sink and requests start from {}", *self,
                 this->previous);
      auto rp = self->make_response_promise<void>();
      self
        ->request(this->previous, caf::infinite, atom::start_v,
                  std::move(previous))
        .then(
          [this, rp]() mutable {
            VAST_DEBUG("{} schedules run of sink after successful startup",
                       *self);
            schedule_run();
            rp.deliver();
          },
          [this, rp](caf::error& error) mutable {
            VAST_DEBUG("{} forwards error during startup: {}", *self, error);
            rp.deliver(std::move(error));
          });
      return rp;
    }
    if constexpr (not std::is_same_v<Input, std::monostate>) {
      VAST_DEBUG("{} delegates start to {}", *self, this->previous);
      return self->delegate(this->previous, atom::start_v, std::move(previous));
    }
    return {};
  }

  auto request_more_input() -> void
    requires(not std::is_same_v<Input, std::monostate>)
  {
    // There are a few reasons why we would not be able to request more input:
    // 1. The space in our inbound buffer is below the minimum batch size.
    // 2. The previous execution node is down.
    // 3. We already have an open request for more input.
    VAST_ASSERT(this->inbound_buffer_size <= defaults::max_buffered);
    const auto batch_size
      = std::min(defaults::max_buffered - this->inbound_buffer_size,
                 defaults::max_batch_size);
    if (not this->previous or this->signaled_demand
        or batch_size < defaults::min_batch_size) {
      return;
    }
    /// Issue the actual request. If the inbound buffer is empty, we await the
    /// response, causing this actor to be suspended until the events have
    /// arrived.
    auto handle_result = [this]() mutable {
      this->signaled_demand = false;
      schedule_run();
    };
    auto handle_error = [this](caf::error& error) {
      this->signaled_demand = false;
      schedule_run();
      if (error == caf::sec::request_receiver_down
          or error == caf::sec::broken_promise) {
        return;
      }
      // We failed to get results from the previous; let's emit a diagnostic
      // instead.
      if (this->previous) {
        diagnostic::warning("{}", error)
          .note("`{}` failed to pull from previous execution node",
                op->to_string())
          .emit(ctrl->diagnostics());
      }
    };
    this->signaled_demand = true;
    auto response_handle
      = self->request(this->previous, caf::infinite, atom::pull_v,
                      static_cast<exec_node_sink_actor>(self), batch_size,
                      defaults::max_batch_timeout);
    std::move(response_handle)
      .then(std::move(handle_result), std::move(handle_error));
  }

  auto advance_generator() -> void {
    VAST_ASSERT(instance);
    VAST_ASSERT(instance->it != instance->gen.end());
    if constexpr (not std::is_same_v<Output, std::monostate>) {
      if (this->outbound_buffer_size >= defaults::max_buffered) {
        return;
      }
      auto next = std::move(*instance->it);
      ++instance->it;
      if (size(next) > 0) {
        this->outbound_buffer_size += size(next);
        this->outbound_buffer.push_back(std::move(next));
      }
    } else {
      ++instance->it;
    }
    if (abort) {
      self->quit(abort);
    }
  }

  auto make_input_adapter() -> std::monostate
    requires std::is_same_v<Input, std::monostate>
  {
    return {};
  }

  auto make_input_adapter() -> generator<Input>
    requires(not std::is_same_v<Input, std::monostate>)
  {
    auto stall_guard = caf::detail::make_scope_guard([this] {
      stalled = false;
    });
    while (this->previous or this->inbound_buffer_size > 0
           or this->signaled_demand) {
      if (this->inbound_buffer_size == 0) {
        VAST_ASSERT(this->inbound_buffer.empty());
        stalled = true;
        co_yield {};
        continue;
      }
      while (not this->inbound_buffer.empty()) {
        auto next = std::move(this->inbound_buffer.front());
        VAST_ASSERT(size(next) != 0);
        this->inbound_buffer_size -= size(next);
        this->inbound_buffer.erase(this->inbound_buffer.begin());
        stalled = false;
        co_yield std::move(next);
      }
    }
  }

  auto schedule_run() -> void {
    if (not instance or run_scheduled) {
      return;
    }
    run_scheduled = true;
    // We *always* use the delayed variant here instead of scheduling
    // immediately as that has two distinct advantages:
    // - It allows for using a weak actor pointer on the click, i.e., it does
    //   not prohibit shutdown.
    // - It does not get run immediately, which would conflict with operators
    //   using `ctrl.self().request(...).await(...)`.
    self->clock().schedule(self->clock().now(),
                           caf::make_action(
                             [this] {
                               VAST_ASSERT(run_scheduled);
                               run_scheduled = false;
                               run();
                             },
                             caf::action::state::waiting),
                           caf::weak_actor_ptr{self->ctrl()});
  }

  auto deliver_batches(std::chrono::steady_clock::time_point now, bool force)
    -> void
    requires(not std::is_same_v<Output, std::monostate>)
  {
    if (not this->current_demand or this->current_demand->ongoing) {
      return;
    }
    VAST_ASSERT(instance);
    if (not force
        and ((instance->it == instance->gen.end()
              or this->outbound_buffer_size < this->current_demand->batch_size)
             and (this->current_demand->batch_timeout > now))) {
      return;
    }
    this->current_demand->ongoing = true;
    const auto capped_demand
      = std::min(this->outbound_buffer_size, this->current_demand->batch_size);
    if (capped_demand == 0) {
      VAST_DEBUG("{} short-circuits delivery of zero batches", op->name());
      this->current_demand->rp.deliver();
      this->current_demand.reset();
      schedule_run();
      return;
    }
    auto [lhs, _] = split(this->outbound_buffer, capped_demand);
    auto handle_result = [this, capped_demand]() {
      outbound_total += capped_demand;
      auto [lhs, rhs] = split(this->outbound_buffer, capped_demand);
      this->outbound_buffer = std::move(rhs);
      this->outbound_buffer_size
        = std::transform_reduce(this->outbound_buffer.begin(),
                                this->outbound_buffer.end(), uint64_t{},
                                std::plus{}, [](const Output& x) {
                                  return size(x);
                                });
      this->current_demand->rp.deliver();
      this->current_demand.reset();
      schedule_run();
    };
    auto handle_error = [this](caf::error& error) {
      this->current_demand->rp.deliver(std::move(error));
      this->current_demand.reset();
      schedule_run();
    };
    auto response_handle = self->request(
      this->current_demand->sink, caf::infinite, atom::push_v, std::move(lhs));
    if (force) {
      std::move(response_handle)
        .await(std::move(handle_result), std::move(handle_error));
    } else {
      std::move(response_handle)
        .then(std::move(handle_result), std::move(handle_error));
    }
  };

  auto run() -> void {
    VAST_TRACE("{} enters run loop", op->name());
    VAST_ASSERT(instance);
    const auto now = std::chrono::steady_clock::now();
    // Check if we're done.
    if (instance->it == instance->gen.end()) {
      VAST_DEBUG("{} is at the end of its generator", op->name());
      // Shut down the previous execution node immediately if we're done.
      // We send an unreachable error here slightly before this execution
      // node shuts down. This is merely an optimization; we call self->quit
      // a tiny bit later anyways, which would send the same exit reason
      // upstream implicitly. However, doing this early is nice because we
      // can prevent the upstream operators from running unnecessarily.
      if constexpr (not std::is_same_v<Input, std::monostate>) {
        if (this->previous) {
          VAST_DEBUG("{} shuts down previous operator", op->name());
          self->send_exit(this->previous, caf::exit_reason::normal);
        }
      }
      // When we're done, we must make sure that we have delivered all results
      // to the next operator. This has the following pre-requisites:
      // - The generator must be completed (already checked here).
      // - There must not be any outstanding demand.
      // - There must not be anything remaining in the buffer.
      if constexpr (not std::is_same_v<Output, std::monostate>) {
        if (this->current_demand and this->outbound_buffer_size == 0) {
          VAST_DEBUG("{} rejects further demand from next operator",
                     op->name());
          this->reject_demand = true;
        }
        if (this->current_demand or this->outbound_buffer_size > 0) {
          VAST_DEBUG("{} forcibly delivers batches", op->name());
          deliver_batches(now, true);
          schedule_run();
          return;
        }
        VAST_ASSERT(not this->current_demand);
        VAST_ASSERT(this->outbound_buffer_size == 0);
      }
      VAST_DEBUG("{} is done; in={} out={}", op, inbound_total, outbound_total);
      self->quit();
      return;
    }
    // Try to deliver.
    if constexpr (not std::is_same_v<Output, std::monostate>) {
      deliver_batches(now, false);
    }
    // Request more input if there's more to be retrieved.
    if constexpr (not std::is_same_v<Input, std::monostate>) {
      request_more_input();
    }
    // Produce more output if there's more to be produced, then schedule the
    // next run. For sinks, this happens delayed when there is no input. For
    // everything else, it needs to happen only when there's enough space in the
    // outbound buffer.
    advance_generator();
    if constexpr (std::is_same_v<Output, std::monostate>) {
      if (not stalled) {
        schedule_run();
      } else {
        VAST_ASSERT(this->signaled_demand);
      }
    } else if constexpr (std::is_same_v<Input, std::monostate>) {
      if (not stalled
          and (this->current_demand
               or (this->outbound_buffer_size < defaults::max_buffered
                   and instance->it != instance->gen.end()))) {
        schedule_run();
      }
    } else {
      auto can_generate = this->outbound_buffer_size < defaults::max_buffered
                          and instance->it != instance->gen.end();
      auto should_produce = this->current_demand.has_value();
      auto is_previous_dead = not this->previous;
      // VAST_DEBUG("{} {} {} {}", VAST_ARG(can_generate),
      //            VAST_ARG(should_produce), VAST_ARG(is_previous_dead),
      //            VAST_ARG(stalled));
      if (is_previous_dead
          or (not stalled and (should_produce or can_generate))) {
        schedule_run();
      }
    }
  }

  auto
  pull(exec_node_sink_actor sink, uint64_t batch_size, duration batch_timeout)
    -> caf::result<void>
    requires(not std::is_same_v<Output, std::monostate>)
  {
    if (this->reject_demand) {
      auto rp = self->make_response_promise<void>();
      detail::weak_run_delayed(self, batch_timeout, [rp]() mutable {
        rp.deliver();
      });
      return {};
    }
    schedule_run();
    if (this->current_demand) {
      return caf::make_error(ec::logic_error, "concurrent pull");
    }
    auto& pr = this->current_demand.emplace(
      self->make_response_promise<void>(), std::move(sink), batch_size,
      std::chrono::steady_clock::now() + batch_timeout);
    return pr.rp;
  }

  auto push(std::vector<Input> input) -> caf::result<void>
    requires(not std::is_same_v<Input, std::monostate>)
  {
    const auto input_size = std::transform_reduce(
      input.begin(), input.end(), uint64_t{}, std::plus{}, [](const Input& x) {
        return size(x);
      });
    if (input_size == 0) {
      return caf::make_error(ec::logic_error, "received empty batch");
    }
    if (this->inbound_buffer_size + input_size > defaults::max_buffered) {
      return caf::make_error(ec::logic_error, "inbound buffer full");
    }
    this->inbound_buffer.insert(this->inbound_buffer.end(),
                                std::make_move_iterator(input.begin()),
                                std::make_move_iterator(input.end()));
    this->inbound_buffer_size += input_size;
    inbound_total += input_size;
    return {};
  }
};

template <class Input, class Output>
auto exec_node(
  exec_node_actor::stateful_pointer<exec_node_state<Input, Output>> self,
  operator_ptr op, node_actor node,
  receiver_actor<diagnostic> diagnostic_handler)
  -> exec_node_actor::behavior_type {
  self->state.self = self;
  self->state.op = std::move(op);
  self->state.ctrl = std::make_unique<exec_node_control_plane<Input, Output>>(
    self->state, std::move(diagnostic_handler));
  // The node actor must be set when the operator is not a source.
  if (self->state.op->location() == operator_location::remote and not node) {
    self->quit(caf::make_error(
      ec::logic_error,
      fmt::format("{} runs a remote operator and must have a node", *self)));
    return exec_node_actor::behavior_type::make_empty_behavior();
  }
  self->state.weak_node = node;
  return {
    [self](atom::start,
           std::vector<caf::actor>& previous) -> caf::result<void> {
      return self->state.start(std::move(previous));
    },
    [self](atom::push, std::vector<table_slice>& events) -> caf::result<void> {
      if constexpr (std::is_same_v<Input, table_slice>) {
        return self->state.push(std::move(events));
      } else {
        return caf::make_error(ec::logic_error,
                               fmt::format("{} does not accept events as input",
                                           *self));
      }
    },
    [self](atom::push, std::vector<chunk_ptr>& bytes) -> caf::result<void> {
      if constexpr (std::is_same_v<Input, chunk_ptr>) {
        return self->state.push(std::move(bytes));
      } else {
        return caf::make_error(ec::logic_error,
                               fmt::format("{} does not accept bytes as input",
                                           *self));
      }
    },
    [self](atom::pull, exec_node_sink_actor& sink, uint64_t batch_size,
           duration batch_timeout) -> caf::result<void> {
      if constexpr (not std::is_same_v<Output, std::monostate>) {
        return self->state.pull(std::move(sink), batch_size, batch_timeout);
      } else {
        return caf::make_error(
          ec::logic_error,
          fmt::format("{} is a sink and must not be pulled from", *self));
      }
    },
  };
}

} // namespace

auto spawn_exec_node(caf::scheduled_actor* self, operator_ptr op,
                     operator_type input_type, node_actor node,
                     receiver_actor<diagnostic> diagnostic_handler)
  -> caf::expected<std::pair<exec_node_actor, operator_type>> {
  VAST_ASSERT(self);
  VAST_ASSERT(op != nullptr);
  VAST_ASSERT(node != nullptr
              or not(op->location() == operator_location::remote));
  VAST_ASSERT(diagnostic_handler != nullptr);
  auto output_type = op->infer_type(input_type);
  if (not output_type) {
    return caf::make_error(ec::logic_error,
                           fmt::format("failed to spawn exec-node for '{}': {}",
                                       op->to_string(), output_type.error()));
  }
  auto f = [&]<caf::spawn_options SpawnOptions>() {
    return [&]<class Input, class Output>(tag<Input>,
                                          tag<Output>) -> exec_node_actor {
      using input_type
        = std::conditional_t<std::is_void_v<Input>, std::monostate, Input>;
      using output_type
        = std::conditional_t<std::is_void_v<Output>, std::monostate, Output>;
      if constexpr (std::is_void_v<Input> and std::is_void_v<Output>) {
        die("unimplemented");
      } else {
        auto result
          = self->spawn<SpawnOptions>(exec_node<input_type, output_type>,
                                      std::move(op), std::move(node),
                                      std::move(diagnostic_handler));
        return result;
      }
    };
  };
  return std::pair{
    op->detached() ? std::visit(f.template operator()<caf::detached>(),
                                input_type, *output_type)
                   : std::visit(f.template operator()<caf::no_spawn_options>(),
                                input_type, *output_type),
    *output_type,
  };
};

} // namespace vast
