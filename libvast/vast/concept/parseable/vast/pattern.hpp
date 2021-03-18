// SPDX-FileCopyrightText: (c) 2016 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/pattern.hpp"

#include "vast/concept/parseable/core.hpp"
#include "vast/concept/parseable/string/quoted_string.hpp"

namespace vast {

using pattern_parser = quoted_string_parser<'/', '\\'>;

template <>
struct access::parser<pattern> : vast::parser<access::parser<pattern>> {
  using attribute = pattern;

  template <class Iterator>
  bool parse(Iterator& f, const Iterator& l, unused_type) const {
    return pattern_parser{}(f, l, unused);
  }

  template <class Iterator>
  bool parse(Iterator& f, const Iterator& l, pattern& a) const {
    return pattern_parser{}(f, l, a.str_);
  }
};

template <>
struct parser_registry<pattern> {
  using type = access::parser<pattern>;
};

namespace parsers {

static auto const pattern = make_parser<vast::pattern>();

} // namespace parsers

} // namespace vast

