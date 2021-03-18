// SPDX-FileCopyrightText: (c) 2016 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/printable/core/printer.hpp"

namespace vast {

template <class Printer>
class not_printer : public printer<not_printer<Printer>> {
public:
  using attribute = unused_type;

  explicit not_printer(Printer p) : printer_{std::move(p)} {
  }

  template <class Iterator, class Attribute>
  bool print(Iterator& out, const Attribute&) const {
    return !printer_.print(out, unused);
  }

private:
  Printer printer_;
};

} // namespace vast


