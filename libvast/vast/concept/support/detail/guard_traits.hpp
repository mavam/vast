// SPDX-FileCopyrightText: (c) 2016 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include <type_traits>

#include <caf/detail/type_traits.hpp>

namespace vast::detail {

template <class Guard>
struct guard_traits {
  using traits = caf::detail::get_callable_trait<Guard>;
  using result_type = typename traits::result_type;

  static constexpr auto arity = traits::num_args;
  static constexpr bool returns_bool = std::is_same_v<result_type, bool>;
  static constexpr bool no_args_returns_bool = arity == 0 && returns_bool;
  static constexpr bool one_arg_returns_bool = arity == 1 && returns_bool;
};

} // namespace vast::detail


