// SPDX-FileCopyrightText: (c) 2020 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

namespace vast::system {

/// Spawns a sink based on the output format name.
/// @param sys The actor system to spawn the sink in.
/// @param output_format A valid output format name.
/// @param options The invocation options for configuring writer and sink.
caf::expected<caf::actor>
make_sink(caf::actor_system& sys, const std::string& output_format,
          const caf::settings& options);

} // namespace vast::system
