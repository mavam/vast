// SPDX-FileCopyrightText: (c) 2016 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/defaults.hpp"
#include "vast/format/ostream_writer.hpp"

namespace vast::format::ascii {

class writer : public format::ostream_writer {
public:
  using super = format::ostream_writer;

  writer(ostream_ptr out, const caf::settings& options);

  caf::error write(const table_slice& x) override;

  const char* name() const override;
};

} // namespace vast::format::ascii
