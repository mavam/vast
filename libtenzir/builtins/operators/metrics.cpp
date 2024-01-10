//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>

namespace tenzir::plugins::metrics {

namespace {

class plugin final : public virtual operator_parser_plugin {
public:
  auto name() const -> std::string override {
    return "metrics";
  };

  auto signature() const -> operator_signature override {
    return {.transformation = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"metrics", "https://docs.tenzir.com/next/"
                                             "operators/metrics"};
    bool live = false;
    parser.add("--live", live);
    parser.parse(p);
    const auto definition
      = fmt::format("export --internal {}| where #schema == /tenzir.metrics.*/",
                    live ? " --live" : "");
    auto result = pipeline::internal_parse_as_operator(definition);
    if (not result) {
      diagnostic::error("failed to transform `metrics` operator into `{}`",
                        definition)
        .hint("{}", result.error())
        .throw_();
    }
    return std::move(*result);
  }
};

} // namespace

} // namespace tenzir::plugins::metrics

TENZIR_REGISTER_PLUGIN(tenzir::plugins::metrics::plugin)
