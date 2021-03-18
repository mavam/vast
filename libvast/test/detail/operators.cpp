// SPDX-FileCopyrightText: (c) 2018 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#define SUITE operators
#include "vast/test/test.hpp"

#include "vast/detail/operators.hpp"

using namespace vast::detail;

namespace {

struct foo : addable<foo>,
             addable<foo, int> {
  explicit foo(int x) : value{x} {
    // nop
  }

  foo& operator+=(const foo& other) {
    value += other.value;
    return *this;
  }

  foo& operator+=(int x) {
    value += x;
    return *this;
  }

  int value;
};

} // namespace <anonymous>

TEST(commutative operators) {
  auto x = foo{42};
  auto y = foo{-3};
  auto result = 1 + x + 1 + y + 1;
  CHECK_EQUAL(result.value, 42);
}
