// SPDX-FileCopyrightText: (c) 2016 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#include <unistd.h>

#include <cstdio>

#include "vast/detail/fdoutbuf.hpp"

namespace vast {
namespace detail {

fdoutbuf::fdoutbuf(int fd) : fd_{fd} {
}

fdoutbuf::int_type fdoutbuf::overflow(int_type c) {
  if (c != EOF) {
    char z = c;
    if (::write(fd_, &z, 1) != 1)
      return EOF;
  }
  return c;
}

std::streamsize fdoutbuf::xsputn(const char* s, std::streamsize n) {
  return ::write(fd_, s, n);
}

} // namespace detail
} // namespace vast
