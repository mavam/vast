// SPDX-FileCopyrightText: (c) 2020 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/system/writer_command.hpp"

#include "vast/logger.hpp"
#include "vast/system/make_sink.hpp"
#include "vast/system/sink_command.hpp"

#include <caf/actor.hpp>
#include <caf/make_message.hpp>

#include <string>

namespace vast::system {

command::fun make_writer_command(std::string_view format) {
  return [format = std::string{format}](const invocation& inv,
                                        caf::actor_system& sys) {
    VAST_TRACE_SCOPE("{}", inv);
    auto snk = make_sink(sys, format, inv.options);
    if (!snk)
      return make_message(snk.error());
    return caf::make_message(sink_command(inv, sys, std::move(*snk)));
  };
}

} // namespace vast::system
