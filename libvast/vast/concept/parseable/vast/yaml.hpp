// SPDX-FileCopyrightText: (c) 2020 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/parseable/core/parser.hpp"
#include "vast/data.hpp"
#include "vast/detail/narrow.hpp"

namespace vast {

struct yaml_parser : parser<yaml_parser> {
  using attribute = data;

  template <class Iterator, class Attribute>
  bool parse(Iterator& f, const Iterator& l, Attribute& a) const {
    auto str = std::string_view{f, detail::narrow_cast<size_t>(l - f)};
    if (auto yaml = from_yaml(str)) {
      a = std::move(*yaml);
      f = l;
      return true;
    }
    return false;
  }
};

namespace parsers {

static auto const yaml = yaml_parser{};

} // namespace parsers

} // namespace vast
