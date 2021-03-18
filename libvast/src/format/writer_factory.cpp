// SPDX-FileCopyrightText: (c) 2020 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/format/writer_factory.hpp"

#include "vast/config.hpp"
#include "vast/detail/make_io_stream.hpp"
#include "vast/format/ascii.hpp"
#include "vast/format/csv.hpp"
#include "vast/format/json.hpp"
#include "vast/format/null.hpp"
#include "vast/format/writer.hpp"
#include "vast/format/zeek.hpp"

#if VAST_ENABLE_PCAP
#  include "vast/format/pcap.hpp"
#endif

#if VAST_ENABLE_ARROW
#  include "vast/format/arrow.hpp"
#endif

namespace vast {

template <class Writer>
caf::expected<std::unique_ptr<format::writer>>
make_writer(const caf::settings& options) {
  using namespace std::string_literals;
  using ostream_ptr = std::unique_ptr<std::ostream>;
  if constexpr (std::is_constructible_v<Writer, ostream_ptr, caf::settings>) {
    auto out = detail::make_output_stream(options);
    if (!out)
      return out.error();
    return std::make_unique<Writer>(std::move(*out), options);
  } else {
    return std::make_unique<Writer>(options);
  }
}

void factory_traits<format::writer>::initialize() {
  using namespace format;
  using fac = factory<writer>;
  fac::add("ascii", make_writer<ascii::writer>);
  fac::add("csv", make_writer<csv::writer>);
  fac::add("json", make_writer<format::json::writer>);
  fac::add("null", make_writer<null::writer>);
  fac::add("zeek", make_writer<zeek::writer>);
#if VAST_ENABLE_PCAP
  fac::add("pcap", make_writer<pcap::writer>);
#endif
#if VAST_ENABLE_ARROW
  fac::add("arrow", make_writer<arrow::writer>);
#endif
}

} // namespace vast
