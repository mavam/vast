// SPDX-FileCopyrightText: (c) 2018 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include <caf/fwd.hpp>

namespace vast::detail {

/// Fills `xs` state from the stream manager `mgr`.
void fill_status_map(caf::settings& xs, caf::stream_manager& mgr);

/// Fills `xs` state from `self`.
void fill_status_map(caf::settings& xs, caf::scheduled_actor* self);

} // namespace vast::detail
