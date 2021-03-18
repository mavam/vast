// SPDX-FileCopyrightText: (c) 2018 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include <algorithm>
#include <vector>

namespace vast::detail {

template <class Collection>
auto unique_values(const Collection& xs) {
  std::vector<typename Collection::mapped_type> result;
  result.reserve(xs.size());
  for (auto& x : xs)
    result.emplace_back(x.second);
  std::sort(result.begin(), result.end());
  auto e = std::unique(result.begin(), result.end());
  if (e != result.end())
    result.erase(e, result.end());
  return result;
}

} // namespace vast::detail

