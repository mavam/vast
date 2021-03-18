// SPDX-FileCopyrightText: (c) 2020 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/parseable/parse.hpp"

#include <caf/config_value.hpp>
#include <caf/settings.hpp>
#include <caf/sum_type.hpp>

namespace vast {

/// Extracts a value from a settings object and assigns it to a variable.
/// @param to The value to assign to.
/// @param from The settings that holds the data.
/// @param path The location of the data inside the settings object.
/// @returns false on a type mismatch, true otherwise.
template <class T>
bool extract_settings(T& to, const caf::settings& from, std::string_view path) {
  auto cv = caf::get_if(&from, path);
  // TODO: It doesn't make much sense to indicate success if the key doesn't
  // exist, but we have other code that depends on it. We should clean this up
  // in the future.
  if (!cv)
    return true;
  if constexpr (caf::detail::tl_contains<caf::config_value::variant_type::types,
                                         T>::value) {
    auto x = caf::get_if<T>(&*cv);
    if (!x)
      return false;
    to = *x;
    return true;
  } else {
    auto x = caf::get_if<std::string>(&*cv);
    if (!x)
      return false;
    auto f = x->begin();
    return parse(f, x->end(), to);
  }
}

} // namespace vast
