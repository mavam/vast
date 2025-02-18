//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/compile_ctx.hpp>
#include <tenzir/finalize_ctx.hpp>
#include <tenzir/ir.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/substitute_ctx.hpp>
#include <tenzir/tql2/eval.hpp>

#include <caf/actor_from_state.hpp>

namespace tenzir::plugins::head {

namespace {

struct operator_helper_state {
  exec::checkpoint_receiver_actor checkpoint_receiver;
  exec::operator_shutdown_actor operator_shutdown;
  exec::operator_stop_actor operator_stop;
  base_ctx ctx;
};

thread_local std::optional<operator_helper_state> helper_state;

template <class State>
class operator_helper {
public:
  using state_type = State;

  // operator_helper() {
  //   // We get this passed magically.
  //   TENZIR_ASSERT(helper_state);
  //   auto state = *std::exchange(helper_state, {});
  //   checkpoint_receiver_ = std::move(state.checkpoint_receiver);
  //   operator_shutdown_ = std::move(state.operator_shutdown);
  //   operator_stop_ = std::move(state.operator_stop);
  //   ctx_ = state.ctx;
  // }

  void initialize(exec::operator_actor::pointer self,
                  exec::checkpoint_receiver_actor checkpoint_receiver,
                  exec::operator_shutdown_actor operator_shutdown,
                  exec::operator_stop_actor operator_stop, base_ctx ctx,
                  State state) {
    self_ = self;
    checkpoint_receiver_ = std::move(checkpoint_receiver);
    operator_shutdown_ = std::move(operator_shutdown);
    operator_stop_ = std::move(operator_stop);
    ctx_ = ctx;
    state_ = std::move(state);
  }

  auto make_behavior() -> exec::operator_actor::behavior_type {
    return {
      [this](exec::handshake hs) -> caf::result<exec::handshake_response> {
        return start(std::move(hs));
      },
      [this](exec::checkpoint checkpoint) -> caf::result<void> {
        TENZIR_TODO();
      },
      [this](atom::stop) -> caf::result<void> {
        TENZIR_TODO();
      },
    };
  }

protected:
  auto self() const -> exec::operator_actor::pointer {
    TENZIR_ASSERT(self_ != nullptr);
    return self_;
  }

  auto ctx() const -> base_ctx {
    TENZIR_ASSERT(ctx_);
    return *ctx_;
  }

  /// Declare that we don't want any more input and produce no more output.
  void finish() const {
  }

  auto state() const -> State& {
    return state_;
  }

private:
  auto start(exec::handshake hs) -> caf::result<exec::handshake_response> {
    // TODO
    auto input = as<exec::stream<table_slice>>(hs.input);
    auto output
      = run(self_->observe(std::move(input), 10, 30))
          .to_typed_stream("output-stream", std::chrono::milliseconds{1}, 1);
    return exec::handshake_response{std::move(output)};
  }

  auto run(exec::observable<table_slice> input)
    -> exec::observable<table_slice> {
    return input;
  }

  exec::operator_actor::pointer self_{};
  exec::checkpoint_receiver_actor checkpoint_receiver_;
  exec::operator_shutdown_actor operator_shutdown_;
  exec::operator_stop_actor operator_stop_;
  // TODO: Better construction strategy.
  std::optional<base_ctx> ctx_;
  mutable State state_{};
};

struct head_state {
  uint64_t seen;

  friend auto inspect(auto& f, head_state& x) -> bool {
    return f.apply(x.seen);
  }
};

class head2 : public operator_helper<head_state> {
public:
  // TODO: What about the other parameters for the helper?
  explicit head2(size_t requested) : requested_{requested} {
  }

  // TODO: Can this have multiple inputs in-flight?
  void init() const {
    check_completion();
  }

  auto next(table_slice input) const -> caf::flow::observable<table_slice> {
    auto remaining = requested_ - seen();
    auto output = subslice(input, 0, std::min(remaining, input.rows()));
    seen() += output.rows();
    check_completion();
    return self()->make_observable().just(std::move(output)).as_observable();
  }

  // auto end() const -> caf::flow::observable<table_slice> {
  //   return self()->make_observable().empty<table_slice>().as_observable();
  // }

private:
  void check_completion() const {
    TENZIR_ASSERT(seen() < requested_);
    if (seen() == requested_) {
      finish();
    }
  }

  auto seen() const -> uint64_t& {
    return state().seen;
  }

  // TODO: ??
  size_t requested_;
};

template <class T>
class wrapper : public T {
public:
  template <class... Ts>
  wrapper(exec::operator_actor::pointer self,
          exec::checkpoint_receiver_actor checkpoint_receiver,
          exec::operator_shutdown_actor operator_shutdown,
          exec::operator_stop_actor operator_stop, base_ctx ctx,
          T::state_type state, Ts&&... xs)
    : T{std::forward<Ts>(xs)...} {
    this->initialize(self, std::move(checkpoint_receiver),
                     std::move(operator_shutdown), std::move(operator_stop),
                     ctx, std::move(state));
  }
};

template <class T, class... Args>
auto spawn_with_helper(bp::operator_base::spawn_args spawn_args, Args&&... args)
  -> exec::operator_actor {
  auto state = typename T::state_type{};
  if (spawn_args.restore) {
    // We are stateful, thus there must be a chunk for us if we restore.
    TENZIR_ASSERT(*spawn_args.restore);
    auto deserializer = caf::binary_deserializer{as_bytes(*spawn_args.restore)};
    auto ok = deserializer.apply(state);
    TENZIR_ASSERT(ok);
  }
  // helper_state
  //   = operator_helper_state{std::move(spawn_args.checkpoint_receiver),
  //                           std::move(spawn_args.operator_shutdown),
  //                           std::move(spawn_args.operator_stop),
  //                           spawn_args.ctx};
  return spawn_args.sys.spawn(caf::actor_from_state<wrapper<T>>,
                              std::move(spawn_args.checkpoint_receiver),
                              std::move(spawn_args.operator_shutdown),
                              std::move(spawn_args.operator_stop),
                              spawn_args.ctx, std::move(state),
                              std::forward<Args>(args)...);
}

class head {
public:
  head(exec::operator_actor::pointer self,
       exec::checkpoint_receiver_actor checkpoint_receiver,
       exec::operator_shutdown_actor operator_shutdown,
       exec::operator_stop_actor operator_stop, base_ctx ctx, uint64_t count,
       uint64_t seen)
    : self_{self},
      checkpoint_receiver_{std::move(checkpoint_receiver)},
      operator_shutdown_{std::move(operator_shutdown)},
      operator_stop_{std::move(operator_stop)},
      ctx_{ctx},
      count_{count},
      seen_{seen} {
  }

  auto start(exec::handshake hs) -> caf::result<exec::handshake_response> {
    return match(
      std::move(hs.input),
      [&](exec::stream<void>) {
        TENZIR_TODO();
        return exec::handshake_response{};
      },
      [&](exec::stream<table_slice> s) {
        auto output = run(self_->observe(std::move(s), 10, 30))
                        .to_typed_stream("output-stream",
                                         std::chrono::milliseconds{1}, 1);
        return exec::handshake_response{std::move(output)};
      });
  }

  auto run(exec::observable<table_slice> input)
    -> exec::observable<table_slice> {
    // TODO: Does this guarantee sequencing?
    return input.concat_map(
      [this](exec::message<table_slice> msg) -> exec::observable<table_slice> {
        return match(
          msg,
          [&](table_slice slice) -> exec::observable<table_slice> {
            // TODO: If this would be async, how do we ensure that we finish
            // processing it before we serialize?
            if (seen_ == count_) {
              return self_->make_observable()
                .empty<exec::message<table_slice>>()
                .as_observable();
            }
            TENZIR_ASSERT(seen_ < count_);
            auto left = detail::narrow<uint64_t>(count_ - seen_);
            auto result = subslice(slice, 0, std::min(left, slice.rows()));
            seen_ += result.rows();
            auto output = std::vector<exec::message<table_slice>>{};
            output.emplace_back(std::move(result));
            if (seen_ == count_) {
              // TODO: Do we want to wait until the diagnostic arrived? How does
              // this interact with checkpointing?
              // Maybe: We don't care right now.
              // Alternative: If diagnostics are considered observable behavior
              // that needs to be rolled back or awaited for…
              diagnostic::warning("wow, we got so many events").emit(ctx_);
              // The first time we reach this, we also emit `exhausted`.
              output.emplace_back(exec::exhausted{});
              // And we also signal the previous operator that we are done.
            }
            return self_->make_observable()
              .from_container(std::move(output))
              .as_observable();
          },
          [&](exec::checkpoint checkpoint) -> exec::observable<table_slice> {
            // TODO: How do we ensure that we processed all previous messages?
            // Async save... Does this need to block incoming messages? Yes!
            auto buffer = std::vector<std::byte>{};
            auto serializer = caf::binary_serializer{buffer};
            // TODO: Just `seen_`?
            auto ok = serializer.apply(seen_);
            TENZIR_ASSERT(ok);
            auto chunk = chunk::make(std::move(buffer));
            return self_->mail(checkpoint, std::move(chunk))
              .request(checkpoint_receiver_, caf::infinite)
              .as_observable()
              .map([checkpoint](caf::unit_t) -> exec::message<table_slice> {
                return checkpoint;
              })
              .as_observable();
          },
          [&](exec::exhausted exhausted) -> exec::observable<table_slice> {
            TENZIR_WARN("head received exhausted");
            self_->mail(atom::done_v)
              .request(operator_shutdown_, caf::infinite)
              .then([] {});
            self_->mail(atom::stop_v)
              .request(operator_stop_, caf::infinite)
              .then([] {});
            return self_->make_observable()
              .just(exec::message<table_slice>{exhausted})
              .as_observable();
          });
      });
  }

  auto post_commit(exec::checkpoint checkpoint) -> caf::result<void> {
    // Let's say we are kafka.
    // auto map = std::unordered_map<exec::checkpoint, int64_t>{};
    // auto it = map.find(checkpoint);
    // // TODO: Are we guaranteed that we previously tried to checkpoint this?
    // // TODO: Are we guaranteed that this gets called for every checkpoint?
    // TENZIR_ASSERT(it != map.end());
    // TENZIR_WARN("committing {}", it->second);
    // map.erase(it);
    return {};
  }

  auto stop() -> caf::result<void> {
    // The subsequent operator doesn't want any new input... Since `head` doesn't
    // create output out of thin air, we just tell our predecessor about it.
    // TODO: Or do we also from now on drop all output?
    TENZIR_TODO();
  }

  auto make_behavior() -> exec::operator_actor::behavior_type {
    return {
      [this](exec::handshake hs) -> caf::result<exec::handshake_response> {
        return start(std::move(hs));
      },
      [this](exec::checkpoint checkpoint) -> caf::result<void> {
        return post_commit(checkpoint);
      },
      [this](atom::stop) -> caf::result<void> {
        return stop();
      },
    };
  }

private:
  exec::operator_actor::pointer self_;
  exec::checkpoint_receiver_actor checkpoint_receiver_;
  exec::operator_shutdown_actor operator_shutdown_;
  exec::operator_stop_actor operator_stop_;
  base_ctx ctx_; // <-- assume we need a way to emit diags

  uint64_t count_; // <-- this should be immutable…
  uint64_t seen_;  // <-- this should be mutable…
};

class head_bp final : public bp::operator_base {
public:
  explicit head_bp(int64_t count) : count_{count} {
  }

  auto name() const -> std::string override {
    return "head_bp";
  }

  auto spawn(spawn_args args) const -> exec::operator_actor override {
#if 1
    return spawn_with_helper<head2>(std::move(args),
                                    // TODO
                                    detail::narrow<uint64_t>(count_));
#else
    // TODO:
    (void)args.restore;
    (void)args.ctx;
    auto seen = uint64_t{0};
    if (args.restore) {
      // We are stateful, thus there must be a chunk for us if we restore.
      TENZIR_ASSERT(*args.restore);
      auto deserializer = caf::binary_deserializer{as_bytes(*args.restore)};
      auto ok = deserializer.apply(seen);
      TENZIR_ASSERT(ok);
    }
    return args.sys.spawn(caf::actor_from_state<head>,
                          std::move(args.checkpoint_receiver),
                          std::move(args.operator_shutdown),
                          std::move(args.operator_stop), args.ctx, count_,
                          seen);
#endif
  }

  friend auto inspect(auto& f, head_bp& x) -> bool {
    return f.apply(x.count_);
  }

private:
  int64_t count_;
};

class head_ir final : public ir::operator_base {
public:
  head_ir() = default;

  explicit head_ir(ast::expression count) : count_{std::move(count)} {
  }

  auto name() const -> std::string override {
    return "head_ir";
  }

  auto substitute(substitute_ctx ctx, bool instantiate)
    -> failure_or<void> override {
    if (auto expr = try_as<ast::expression>(count_)) {
      TRY(expr->substitute(ctx));
      if (instantiate or expr->is_deterministic(ctx)) {
        TRY(auto value, const_eval(*expr, ctx));
        auto count = try_as<int64_t>(value);
        if (not count or *count < 0) {
          diagnostic::error("TODO").primary(*expr).emit(ctx);
          return failure::promise();
        }
        count_ = *count;
      }
    }
    return {};
  }

  auto infer_type(operator_type2 input, diagnostic_handler& dh) const
    -> failure_or<std::optional<operator_type2>> override {
    // TODO!
    TENZIR_ASSERT(input.is<table_slice>());
    return operator_type2{tag_v<table_slice>};
  }

  auto finalize(finalize_ctx ctx) && -> failure_or<bp::pipeline> override {
    return std::make_unique<head_bp>(as<int64_t>(count_));
  }

  friend auto inspect(auto& f, head_ir& x) -> bool {
    return f.apply(x.count_);
  }

private:
  variant<ast::expression, int64_t> count_;
};

class plugin final : public virtual operator_parser_plugin,
                     public virtual operator_compiler_plugin {
public:
  auto name() const -> std::string override {
    return "head";
  };

  auto signature() const -> operator_signature override {
    return {.transformation = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"head", "https://docs.tenzir.com/"
                                          "operators/head"};
    auto count = std::optional<uint64_t>{};
    parser.add(count, "<limit>");
    parser.parse(p);
    auto result = pipeline::internal_parse_as_operator(
      fmt::format("slice :{}", count.value_or(10)));
    if (not result) {
      diagnostic::error("failed to transform `head` into `slice` operator: {}",
                        result.error())
        .throw_();
    }
    return std::move(*result);
  }

  auto compile(ast::invocation inv, compile_ctx ctx) const
    -> failure_or<ir::operator_ptr> override {
    // TODO: Actual parsing.
    TENZIR_ASSERT(inv.args.size() == 1);
    return std::make_unique<head_ir>(std::move(inv.args[0]));
  }
};

} // namespace

} // namespace tenzir::plugins::head

TENZIR_REGISTER_PLUGIN(tenzir::plugins::head::plugin)
TENZIR_REGISTER_PLUGIN(tenzir::inspection_plugin<tenzir::ir::operator_base,
                                                 tenzir::plugins::head::head_ir>)
