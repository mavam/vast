// SPDX-FileCopyrightText: (c) 2020 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/detail/stable_set.hpp"
#include "vast/fwd.hpp"
#include "vast/type.hpp"

namespace vast {

struct type_set : detail::stable_set<type> {
  using super = detail::stable_set<type>;
  using super::super;

  template <class Inspector>
  friend auto inspect(Inspector& f, type_set& x) {
    return f(caf::meta::type_name("vast.type_set"), static_cast<super&>(x));
  }
};

} // namespace vast
