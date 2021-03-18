// SPDX-FileCopyrightText: (c) 2016 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/parseable/core/parser.hpp"
#include "vast/expression.hpp"

namespace vast {

struct predicate_parser : parser<predicate_parser> {
  using attribute = predicate;

  template <class Iterator>
  bool parse(Iterator& f, const Iterator& l, unused_type) const;

  template <class Iterator>
  bool parse(Iterator& f, const Iterator& l, predicate& a) const;
};

template <>
struct parser_registry<predicate> {
  using type = predicate_parser;
};

namespace parsers {

static auto const predicate = make_parser<vast::predicate>();

} // namespace parsers

struct expression_parser : parser<expression_parser> {
  using attribute = expression;

  template <class Iterator, class Attribute>
  bool parse(Iterator& f, const Iterator& l, Attribute& x) const;
};

template <>
struct parser_registry<expression> {
  using type = expression_parser;
};

namespace parsers {

static auto const expr = make_parser<vast::expression>();

} // namespace parsers
} // namespace vast
