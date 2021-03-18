// SPDX-FileCopyrightText: (c) 2016 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/access.hpp"
#include "vast/pattern.hpp"
#include "vast/concept/printable/core.hpp"
#include "vast/concept/printable/string/any.hpp"
#include "vast/concept/printable/string/string.hpp"

namespace vast {

template <>
struct access::printer<vast::pattern>
  : vast::printer<access::printer<vast::pattern>> {
  using attribute = pattern;

  template <class Iterator>
  bool print(Iterator& out, const pattern& pat) const {
    auto p = '/' << printers::str << '/';
    return p.print(out, pat.str_);
  }
};

template <>
struct printer_registry<pattern> {
  using type = access::printer<pattern>;
};

} // namespace vast

