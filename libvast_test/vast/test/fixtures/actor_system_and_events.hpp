// SPDX-FileCopyrightText: (c) 2018 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/test/fixtures/actor_system.hpp"
#include "vast/test/fixtures/events.hpp"

namespace fixtures {

/// A fixture with an actor system that uses the default work-stealing
/// scheduler and test data (events).
struct actor_system_and_events : actor_system, events {
  // nop
};

/// A fixture with an actor system that uses the test coordinator for
/// determinstic testing of actors and test data (events).
struct deterministic_actor_system_and_events : deterministic_actor_system,
                                               events {
  // nop
};

} // namespace fixtures

