//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/detail/patricia.hpp"

#include "tenzir/concept/parseable/tenzir/data.hpp"
#include "tenzir/concept/parseable/to.hpp"
#include "tenzir/test/test.hpp"

using namespace tenzir;
using namespace tenzir::detail;

namespace {

struct subnet_keymaker {
  template <class U>
  struct rebind {
    using other = subnet_keymaker;
  };

  auto operator()(const ip& addr) const -> sk::patricia_key {
    return {as_bytes(addr), 128};
  }

  auto operator()(const subnet& sn) const -> sk::patricia_key {
    return {as_bytes(sn.network()), sn.length()};
  }
};

} // namespace

TEST(prefix matching) {
  auto xs = sk::patricia_map<subnet, int, subnet_keymaker>{};
  auto sn_0_24 = *to<subnet>("192.168.0.0/24");
  auto sn_0_25 = *to<subnet>("192.168.0.0/25");
  auto sn_1_24 = *to<subnet>("192.168.1.0/24");
  auto sn_0_23 = *to<subnet>("192.168.0.0/23");
  xs[sn_0_24] = 0;
  xs[sn_0_25] = 1;
  xs[sn_1_24] = 2;
  xs[sn_0_23] = 3;
  // Prefix match of IP addresses.
  auto i0 = xs.prefix_match(*to<ip>("192.168.0.1"));
  REQUIRE_NOT_EQUAL(i0, xs.end());
  CHECK_EQUAL(i0->first, sn_0_25);
  CHECK_EQUAL(i0->second, 1);
  auto i1 = xs.prefix_match(*to<ip>("192.168.0.132"));
  REQUIRE_NOT_EQUAL(i1, xs.end());
  CHECK_EQUAL(i1->first, sn_0_24);
  CHECK_EQUAL(i1->second, 0);
  // Exact match of a subnet.
  auto i2 = xs.prefix_match(sn_0_23);
  REQUIRE_NOT_EQUAL(i2, xs.end());
  CHECK_EQUAL(i2->first, sn_0_23);
  CHECK_EQUAL(i2->second, 3);
  // Prefix match of a subnet.
  auto sn_0_26 = *to<subnet>("192.168.0.64/26");
  auto i3 = xs.prefix_match(sn_0_26);
  REQUIRE_NOT_EQUAL(i3, xs.end());
  CHECK_EQUAL(i3->first, sn_0_25);
  // Check const overload.
  const auto ys = xs;
  auto j0 = ys.prefix_match(*to<ip>("192.168.1.42"));
  REQUIRE_NOT_EQUAL(j0, ys.end());
  CHECK_EQUAL(j0->first, sn_1_24);
  CHECK_EQUAL(j0->second, 2);
}
