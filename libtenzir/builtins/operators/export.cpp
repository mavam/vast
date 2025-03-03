//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/actors.hpp>
#include <tenzir/argument_parser.hpp>
#include <tenzir/atoms.hpp>
#include <tenzir/catalog.hpp>
#include <tenzir/concept/parseable/string/char_class.hpp>
#include <tenzir/concept/parseable/tenzir/pipeline.hpp>
#include <tenzir/defaults.hpp>
#include <tenzir/detail/weak_run_delayed.hpp>
#include <tenzir/diagnostics.hpp>
#include <tenzir/error.hpp>
#include <tenzir/logger.hpp>
#include <tenzir/metric_handler.hpp>
#include <tenzir/passive_partition.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/query_context.hpp>
#include <tenzir/table_slice.hpp>
#include <tenzir/tql2/plugin.hpp>
#include <tenzir/uuid.hpp>

#include <arrow/type.h>
#include <caf/actor_registry.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/exit_reason.hpp>
#include <caf/scheduled_actor.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/stateful_actor.hpp>
#include <caf/timespan.hpp>
#include <caf/typed_event_based_actor.hpp>

#include <queue>

namespace tenzir::plugins::export_ {

namespace {

struct export_mode {
  bool retro = true;
  bool live = false;
  bool internal = false;
  uint64_t parallel = 3;

  export_mode() = default;

  export_mode(bool retro_, bool live_, bool internal_, uint64_t parallel_)
    : retro{retro_}, live{live_}, internal{internal_}, parallel{parallel_} {
    TENZIR_ASSERT(live or retro);
  }

  friend auto inspect(auto& f, export_mode& x) -> bool {
    return f.object(x).fields(f.field("retro", x.retro),
                              f.field("live", x.live),
                              f.field("internal", x.internal),
                              f.field("parallel", x.parallel));
  }
};

enum class event_source {
  unpersisted,
  live,
  retro,
};

struct bridge_state {
  static constexpr auto name = "export-bridge";

  caf::event_based_actor* self = {};

  caf::actor_addr importer_address = {};
  expression expr = {};
  std::unordered_map<type, caf::expected<expression>> bound_exprs = {};

  export_mode mode = {};

  bool checked_candidates = {};
  size_t inflight_partitions = {};
  size_t open_partitions = {};
  std::queue<std::pair<partition_info, query_context>> queued_partitions = {};
  std::optional<std::vector<table_slice>> unpersisted_events = {};

  filesystem_actor filesystem = {};

  struct metric {
    size_t emitted = {};
    size_t queued = {};
  };

  detail::flat_map<type, metric> metrics = {};
  size_t num_queued_total = {};
  metric_handler metrics_handler = {};

  shared_diagnostic_handler diagnostics_handler = {};

  std::queue<table_slice> buffer = {};
  caf::typed_response_promise<table_slice> buffer_rp = {};

  auto bind_expr(const type& schema, const expression& expr)
    -> const expression* {
    auto it = bound_exprs.find(schema);
    if (it == bound_exprs.end()) {
      it = bound_exprs.emplace_hint(it, schema, tailor(expr, schema));
    }
    if (not it->second) {
      return nullptr;
    }
    return &*it->second;
  }

  auto is_done() const -> bool {
    return not mode.live and buffer.empty() and inflight_partitions == 0
           and open_partitions == 0 and checked_candidates
           and queued_partitions.empty() and not unpersisted_events;
  }

  auto try_pop_partition() -> void {
    const auto size_threshold = defaults::max_partition_size * mode.parallel;
    if (num_queued_total >= size_threshold) {
      return;
    }
    for (auto i = inflight_partitions; i < mode.parallel; ++i) {
      detail::weak_run_delayed(self, duration::zero(), [this] {
        pop_partition();
      });
    }
  }

  auto pop_partition() -> void {
    if (queued_partitions.empty()) {
      if (open_partitions > 0) {
        --open_partitions;
      }
      if (buffer_rp.pending() and is_done()) {
        buffer_rp.deliver(table_slice{});
      }
      return;
    }
    // Now, open one partition.
    auto [info, ctx] = std::move(queued_partitions.front());
    queued_partitions.pop();
    ++inflight_partitions;
    auto next = [this] {
      --inflight_partitions;
      try_pop_partition();
    };
    // TODO: We may want to monitor the spawned partitions to be able to return
    // better diagnostics. As-is, we only get a caf::sec::request_receiver_down
    // if they quit, but not their actual error message.
    const auto partition = self->spawn(
      passive_partition, info.uuid, filesystem,
      std::filesystem::path{fmt::format("index/{:l}", info.uuid)});
    self->mail(atom::query_v, std::move(ctx))
      .request(partition, caf::infinite)
      .then(
        [next](uint64_t) {
          next();
        },
        [this, next, uuid = info.uuid](const caf::error& error) mutable {
          diagnostic::warning(error)
            .note("failed to open partition {}", uuid)
            .emit(diagnostics_handler);
          next();
        });
  }

  auto emit_metrics() -> void {
    TENZIR_ASSERT(not mode.internal);
    TENZIR_DEBUG("{} emits {}", *self, metrics.size());
    for (auto& [schema, metric] : metrics) {
      metrics_handler.emit({
        {"schema", std::string{schema.name()}},
        {"schema_id", schema.make_fingerprint()},
        {"events", std::exchange(metric.emitted, {})},
        {"queued_events", metric.queued},
      });
    }
  }

  auto add_events(table_slice slice, event_source source) -> void {
    if (slice.rows() == 0) {
      return;
    }
    // We ignore live events if we're not asked to listen to live events.
    if (source == event_source::live and not mode.live) {
      return;
    }
    // Live and unpersisted events we still need to filter.
    if (source != event_source::retro) {
      const auto* bound_expr = bind_expr(slice.schema(), expr);
      if (not bound_expr) {
        // failing to bind is not an error.
        return;
      }
      auto filtered = filter(slice, *bound_expr);
      if (not filtered) {
        return;
      }
      slice = std::move(*filtered);
    }
    if (source == event_source::live) {
      // We load up to N partitions depending on our parallel level, and then
      // limit our buffer to N+1 to account for live data.
      const auto size_threshold
        = (mode.parallel + 1) * defaults::max_partition_size;
      if (num_queued_total >= size_threshold) {
        diagnostic::warning("export failed to keep up and dropped events")
          .emit(diagnostics_handler);
        return;
      }
    }
    if (buffer_rp.pending()) {
      TENZIR_ASSERT(buffer.empty());
      TENZIR_ASSERT(not is_done());
      metrics[slice.schema()].emitted += slice.rows();
      buffer_rp.deliver(std::move(slice));
      return;
    }
    metrics[slice.schema()].queued += slice.rows();
    num_queued_total += slice.rows();
    buffer.push(std::move(slice));
  }

  ~bridge_state() noexcept {
    if (not mode.internal) {
      emit_metrics();
    }
  }
};

auto make_bridge(caf::stateful_actor<bridge_state>* self, expression expr,
                 export_mode mode, filesystem_actor filesystem,
                 metric_handler metrics_handler,
                 shared_diagnostic_handler diagnostics_handler)
  -> caf::behavior {
  self->state().self = self;
  self->state().expr = normalize(std::move(expr));
  self->state().mode = mode;
  self->state().metrics_handler = std::move(metrics_handler);
  self->state().diagnostics_handler = std::move(diagnostics_handler);
  self->state().filesystem = std::move(filesystem);
  TENZIR_ASSERT(self->state().filesystem);
  if (not self->state().mode.internal) {
    detail::weak_run_delayed_loop(self, defaults::metrics_interval, [self] {
      self->state().emit_metrics();
    });
  }
  const auto importer
    = self->system().registry().get<importer_actor>("tenzir.importer");
  TENZIR_ASSERT(importer);
  self->state().importer_address = importer->address();
  self->state().unpersisted_events.emplace();
  self
    ->mail(atom::subscribe_v,
           caf::actor_cast<receiver_actor<table_slice>>(self),
           self->state().mode.internal)
    .request(importer, caf::infinite)
    .await(
      [self, mode](std::vector<table_slice>& unpersisted_events) {
        TENZIR_DEBUG("{} subscribed to importer", *self);
        if (mode.retro) {
          TENZIR_ASSERT(self->state().unpersisted_events);
          TENZIR_ASSERT(self->state().unpersisted_events->empty());
          *self->state().unpersisted_events = std::move(unpersisted_events);
        }
      },
      [self](const caf::error& err) {
        self->quit(diagnostic::error(err)
                     .note("{} failed to subscribe to importer", *self)
                     .to_error());
      });
  // If we're retro, then we can query the catalog immediately.
  if (mode.retro) {
    const auto catalog
      = self->system().registry().get<catalog_actor>("tenzir.catalog");
    TENZIR_ASSERT(catalog);
    auto query_context
      = tenzir::query_context::make_extract("export", self, self->state().expr);
    query_context.id = uuid::random();
    TENZIR_DEBUG("export operator starts catalog lookup with id {} and "
                 "expression {}",
                 query_context.id, self->state().expr);
    self->mail(atom::candidates_v, query_context)
      .request(catalog, caf::infinite)
      .then(
        [self, query_context](catalog_lookup_result& result) {
          self->state().checked_candidates = true;
          auto max_import_time = time::min();
          for (auto& [type, info] : result.candidate_infos) {
            if (info.partition_infos.empty()) {
              continue;
            }
            const auto* bound_expr = self->state().bind_expr(type, info.exp);
            if (not bound_expr) {
              // failing to bind is not an error.
              continue;
            }
            auto ctx = query_context;
            ctx.expr = *bound_expr;
            for (auto& partition_info : info.partition_infos) {
              max_import_time
                = std::max(max_import_time, partition_info.max_import_time);
              self->state().queued_partitions.emplace(std::move(partition_info),
                                                      ctx);
            }
            while (self->state().open_partitions
                   < self->state().mode.parallel) {
              ++self->state().open_partitions;
              detail::weak_run_delayed(self, duration::zero(), [self] {
                self->state().pop_partition();
              });
            }
          }
          TENZIR_ASSERT(self->state().unpersisted_events);
          for (auto& slice : *self->state().unpersisted_events) {
            if (slice.import_time() > max_import_time) {
              self->state().add_events(std::move(slice),
                                       event_source::unpersisted);
            }
          }
          self->state().unpersisted_events.reset();
          // In case we get zero partitions back from the catalog we need to
          // already signal that we're done here.
          if (self->state().buffer_rp.pending() and self->state().is_done()) {
            self->state().buffer_rp.deliver(table_slice{});
          }
        },
        [self](const caf::error& err) {
          self->quit(
            diagnostic::error(err)
              .note("{} failed to retrieve candidates from catalog", *self)
              .to_error());
        });
  }
  return {
    [self](table_slice& slice) -> caf::result<void> {
      self->state().add_events(std::move(slice),
                               self->current_sender()
                                   == self->state().importer_address
                                 ? event_source::live
                                 : event_source::retro);
      return {};
    },
    [self](atom::get) -> caf::result<table_slice> {
      // Forbid concurrent requests.
      TENZIR_ASSERT(not self->state().buffer_rp.pending());
      if (self->state().is_done()) {
        return table_slice{};
      }
      if (not self->state().buffer.empty()) {
        auto slice = std::move(self->state().buffer.front());
        self->state().buffer.pop();
        TENZIR_ASSERT(slice.rows() > 0);
        auto& metric = self->state().metrics[slice.schema()];
        TENZIR_ASSERT(metric.queued >= slice.rows());
        metric.emitted += slice.rows();
        metric.queued -= slice.rows();
        self->state().num_queued_total -= slice.rows();
        self->state().try_pop_partition();
        return slice;
      }
      self->state().buffer_rp = self->make_response_promise<table_slice>();
      return self->state().buffer_rp;
    },
    [self](caf::exit_msg& msg) {
      self->quit(std::move(msg.reason));
    },
  };
}

class export_operator final : public crtp_operator<export_operator> {
public:
  export_operator() = default;

  explicit export_operator(expression expr, export_mode mode)
    : expr_{std::move(expr)}, mode_{mode} {
  }

  auto operator()(operator_control_plane& ctrl) const
    -> generator<table_slice> {
    co_yield {};
    const auto filesystem
      = ctrl.self().system().registry().get<filesystem_actor>(
        "tenzir.filesystem");
    TENZIR_ASSERT(filesystem);
    auto metrics_handler = ctrl.metrics({
      "tenzir.metrics.export",
      record_type{
        {"schema", string_type{}},
        {"schema_id", string_type{}},
        {"events", uint64_type{}},
        {"queued_events", uint64_type{}},
      },
    });
    auto diagnostics_handler = ctrl.shared_diagnostics();
    auto bridge = ctrl.self().spawn<caf::linked>(
      make_bridge, expr_, mode_, std::move(filesystem),
      std::move(metrics_handler), std::move(diagnostics_handler));
    co_yield {};
    while (true) {
      auto result = table_slice{};
      ctrl.set_waiting(true);
      ctrl.self()
        .mail(atom::get_v)
        .request(bridge, caf::infinite)
        .then(
          [&](table_slice& slice) {
            ctrl.set_waiting(false);
            result = std::move(slice);
          },
          [&](const caf::error& err) {
            diagnostic::error(err)
              .note("from export-bridge")
              .emit(ctrl.diagnostics());
          });
      co_yield {};
      if (result.rows() == 0) {
        co_return;
      }
      co_yield std::move(result);
    }
  }

  auto name() const -> std::string override {
    return "export";
  }

  auto detached() const -> bool override {
    return false;
  }

  auto location() const -> operator_location override {
    return operator_location::remote;
  }

  auto internal() const -> bool override {
    return true;
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)order;
    auto clauses = std::vector<expression>{};
    if (expr_ != caf::none and expr_ != trivially_true_expression()) {
      clauses.push_back(expr_);
    }
    if (filter != caf::none and filter != trivially_true_expression()) {
      clauses.push_back(filter);
    }
    auto expr = clauses.empty()
                  ? trivially_true_expression()
                  : (clauses.size() == 1 ? std::move(clauses[0])
                                         : conjunction{std::move(clauses)});
    return optimize_result{trivially_true_expression(), event_order::ordered,
                           std::make_unique<export_operator>(std::move(expr),
                                                             mode_)};
  }

  friend auto inspect(auto& f, export_operator& x) -> bool {
    return f.object(x).fields(f.field("expression", x.expr_),
                              f.field("mode", x.mode_));
  }

private:
  expression expr_;
  export_mode mode_;
};

class export_plugin final : public virtual operator_plugin<export_operator>,
                            public virtual operator_factory_plugin {
public:
  auto signature() const -> operator_signature override {
    return {.source = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"export", "https://docs.tenzir.com/"
                                            "operators/export"};
    auto retro = false;
    auto live = false;
    auto internal = false;
    auto parallel = std::optional<located<uint64_t>>{};
    parser.add("--retro", retro);
    parser.add("--live", live);
    parser.add("--internal", internal);
    parser.add("--parallel", parallel, "<level>");
    parser.parse(p);
    if (not live) {
      retro = true;
    }
    if (parallel and parallel->inner == 0) {
      diagnostic::error("parallel level must be greater than zero")
        .primary(parallel->source)
        .throw_();
      return nullptr;
    }
    return std::make_unique<export_operator>(
      expression{
        predicate{
          meta_extractor{meta_extractor::internal},
          relational_operator::equal,
          data{internal},
        },
      },
      export_mode{retro, live, internal, parallel ? parallel->inner : 3});
  }

  auto make(invocation inv, session ctx) const
    -> failure_or<operator_ptr> override {
    auto live = false;
    auto retro = false;
    auto internal = false;
    auto parallel = std::optional<located<uint64_t>>{};
    argument_parser2::operator_("export")
      .named("live", live)
      .named("retro", retro)
      .named("internal", internal)
      .named("parallel", parallel)
      .parse(inv, ctx)
      .ignore();
    if (not live) {
      // TODO: export live=false, retro=false
      retro = true;
    }
    if (parallel and parallel->inner == 0) {
      diagnostic::error("parallel level must be greater than zero")
        .primary(parallel->source)
        .emit(ctx);
      return nullptr;
    }
    return std::make_unique<export_operator>(
      expression{
        predicate{
          meta_extractor{meta_extractor::internal},
          relational_operator::equal,
          data{internal},
        },
      },
      export_mode{retro, live, internal, parallel ? parallel->inner : 3});
  }
};

class diagnostics_plugin final : public virtual operator_parser_plugin,
                                 public virtual operator_factory_plugin {
public:
  auto name() const -> std::string override {
    return "diagnostics";
  };

  auto signature() const -> operator_signature override {
    return {.source = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"diagnostics", "https://docs.tenzir.com/"
                                                 "operators/diagnostics"};
    auto live = false;
    auto retro = false;
    const auto internal = true;
    auto parallel = std::optional<located<uint64_t>>{};
    parser.add("--live", live);
    parser.add("--retro", retro);
    parser.add("--parallel", parallel, "<level>");
    parser.parse(p);
    if (not live) {
      retro = true;
    }
    return std::make_unique<export_operator>(
      expression{
        conjunction{
          predicate{
            meta_extractor{meta_extractor::internal},
            relational_operator::equal,
            data{internal},
          },
          predicate{
            meta_extractor{meta_extractor::schema},
            relational_operator::equal,
            data{"tenzir.diagnostic"},
          },
        },
      },
      export_mode{retro, live, internal, parallel ? parallel->inner : 3});
  }

  auto make(invocation inv, session ctx) const
    -> failure_or<operator_ptr> override {
    auto live = false;
    auto retro = false;
    const auto internal = true;
    auto parallel = std::optional<located<uint64_t>>{};
    TRY(argument_parser2::operator_("diagnostics")
          .named("live", live)
          .named("retro", retro)
          .named("parallel", parallel)
          .parse(inv, ctx));
    if (not live) {
      retro = true;
    }
    return std::make_unique<export_operator>(
      expression{
        conjunction{
          predicate{
            meta_extractor{meta_extractor::internal},
            relational_operator::equal,
            data{internal},
          },
          predicate{
            meta_extractor{meta_extractor::schema},
            relational_operator::equal,
            data{"tenzir.diagnostic"},
          },
        },
      },
      export_mode{retro, live, internal, parallel ? parallel->inner : 3});
  }
};

class metrics_plugin final : public virtual operator_parser_plugin,
                             public virtual operator_factory_plugin {
public:
  auto name() const -> std::string override {
    return "metrics";
  };

  auto signature() const -> operator_signature override {
    return {.source = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"metrics", "https://docs.tenzir.com/"
                                             "operators/metrics"};
    auto name = std::optional<std::string>{};
    auto live = false;
    auto retro = false;
    const auto internal = true;
    auto parallel = std::optional<located<uint64_t>>{};
    parser.add(name, "<name>");
    parser.add("--live", live);
    parser.add("--retro", retro);
    parser.add("--parallel", parallel, "<level>");
    parser.parse(p);
    if (not live) {
      retro = true;
    }
    static const auto all_metrics = [] {
      auto result = pattern::make("tenzir\\.metrics\\..*");
      TENZIR_ASSERT(result);
      return std::move(*result);
    }();
    return std::make_unique<export_operator>(
      expression{
        conjunction{
          predicate{
            meta_extractor{meta_extractor::internal},
            relational_operator::equal,
            data{internal},
          },
          predicate{
            meta_extractor{meta_extractor::schema},
            relational_operator::equal,
            name ? data{fmt::format("tenzir.metrics.{}", *name)}
                 : data{all_metrics},
          },
        },
      },
      export_mode{retro, live, internal, parallel ? parallel->inner : 3});
  }

  auto make(invocation inv, session ctx) const
    -> failure_or<operator_ptr> override {
    auto name = std::optional<located<std::string>>{};
    auto live = false;
    auto retro = false;
    const auto internal = true;
    auto parallel = std::optional<located<uint64_t>>{};
    TRY(argument_parser2::operator_("metrics")
          .positional("name", name)
          .named("live", live)
          .named("retro", retro)
          .named("parallel", parallel)
          .parse(inv, ctx));
    if (not live) {
      retro = true;
    }
    static const auto all_metrics = [] {
      auto result = pattern::make("tenzir\\.metrics\\..*");
      TENZIR_ASSERT(result);
      return std::move(*result);
    }();
    if (name and name->inner == "operator") {
      diagnostic::warning("operator metrics are deprecated")
        .hint("use `pipeline` metrics instead")
        .primary(*name)
        .emit(ctx);
    }
    return std::make_unique<export_operator>(
      expression{
        conjunction{
          predicate{
            meta_extractor{meta_extractor::internal},
            relational_operator::equal,
            data{internal},
          },
          predicate{
            meta_extractor{meta_extractor::schema},
            relational_operator::equal,
            name ? data{fmt::format("tenzir.metrics.{}", name->inner)}
                 : data{all_metrics},
          },
        },
      },
      export_mode{retro, live, internal, parallel ? parallel->inner : 3});
  }
};

} // namespace

} // namespace tenzir::plugins::export_

TENZIR_REGISTER_PLUGIN(tenzir::plugins::export_::export_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::export_::diagnostics_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::export_::metrics_plugin)
