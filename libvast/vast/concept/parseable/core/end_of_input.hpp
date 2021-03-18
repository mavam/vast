// SPDX-FileCopyrightText: (c) 2019 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/parseable/core/parser.hpp"

namespace vast {

/// Matches the input when the input is exhausted.
class end_of_input_parser : public parser<end_of_input_parser> {
public:
  using attribute = unused_type;

  template <class Iterator, class Attribute>
  bool parse(Iterator& f, const Iterator& l, Attribute&) const {
    return f == l;
  }
};

namespace parsers {

auto const eoi = end_of_input_parser{};

} // namespace parsers
} // namespace vast
