//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/argument_parser.hpp"
#include "vast/pipeline.hpp"
#include "vast/table_slice.hpp"

#include <vast/concept/parseable/string/char_class.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/error.hpp>
#include <vast/logger.hpp>
#include <vast/plugin.hpp>

#include <arrow/type.h>

namespace vast::plugins::unflatten {

namespace {

constexpr auto default_unflatten_separator = ".";

class unflatten_operator final : public crtp_operator<unflatten_operator> {
public:
  unflatten_operator() = default;

  unflatten_operator(std::string separator) : separator_{std::move(separator)} {
  }

  auto
  operator()(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<table_slice> {
    for (auto&& slice : input) {
      auto result = vast::unflatten(slice, separator_);
      co_yield std::move(result);
    }
  }

  auto to_string() const -> std::string override {
    return fmt::format("unflatten '{}'", separator_);
  }

  auto name() const -> std::string override {
    return "unflatten";
  }

  friend auto inspect(auto& f, unflatten_operator& x) -> bool {
    return f.apply(x.separator_);
  }

private:
  std::string separator_ = default_unflatten_separator;
};

class plugin final : public virtual operator_plugin<unflatten_operator> {
public:
  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser
      = argument_parser{"head", "https://vast.io/next/"
                                "operators/transformations/unflatten"};
    auto sep = std::optional<located<std::string>>{};
    parser.add(sep, "<sep>");
    parser.parse(p);
    auto separator = (sep) ? sep->inner : default_unflatten_separator;
    return std::make_unique<unflatten_operator>(separator);
  }
};

} // namespace

} // namespace vast::plugins::unflatten

VAST_REGISTER_PLUGIN(vast::plugins::unflatten::plugin)
