// SPDX-FileCopyrightText: (c) 2016 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include <utility>

#include "vast/concept/parseable/core/parser.hpp"
#include "vast/concept/parseable/detail/container.hpp"

namespace vast {

template <class Parser>
class plus_parser : public parser<plus_parser<Parser>> {
public:
  using container = detail::container<typename Parser::attribute>;
  using attribute = typename container::attribute;

  constexpr explicit plus_parser(Parser p) : parser_{std::move(p)} {
  }

  template <class Iterator, class Attribute>
  bool parse(Iterator& f, const Iterator& l, Attribute& a) const {
    if (!container::parse(parser_, f, l, a))
      return false;
    while (container::parse(parser_, f, l, a))
      ;
    return true;
  }

private:
  Parser parser_;
};

} // namespace vast
