// SPDX-FileCopyrightText: (c) 2016 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/schema.hpp"
#include "vast/concept/printable/core.hpp"
#include "vast/concept/printable/string/char.hpp"
#include "vast/concept/printable/string/string.hpp"
#include "vast/concept/printable/vast/type.hpp"

namespace vast {

struct schema_printer : printer<schema_printer> {
  using attribute = schema;

  template <class Iterator>
  bool print(Iterator& out, const schema& s) const {
    auto p = "type "
          << printers::str
          << " = "
          << printers::type<policy::type_only>
          << '\n';
    for (auto& t : s)
      if (!p(out, t.name(), t))
        return false;
    return true;
  }
};

template <>
struct printer_registry<schema> {
  using type = schema_printer;
};

} // namespace vast

