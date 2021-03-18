// SPDX-FileCopyrightText: (c) 2018 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/aliases.hpp"
#include "vast/chunk.hpp"
#include "vast/fwd.hpp"
#include "vast/ids.hpp"
#include "vast/uuid.hpp"

#include <caf/expected.hpp>
#include <caf/fwd.hpp>

#include <cstdint>
#include <iterator>
#include <memory>
#include <vector>

namespace vast {

/// A sequence of table slices.
class segment {
  friend segment_builder;

public:
  /// Constructs a segment.
  /// @param header The header of the segment.
  /// @param chunk The chunk holding the segment data.
  static caf::expected<segment> make(chunk_ptr chunk);

  /// @returns The unique ID of this segment.
  uuid id() const;

  /// @returns the event IDs of all contained table slice.
  vast::ids ids() const;

  // @returns The number of table slices in this segment.
  size_t num_slices() const;

  /// @returns The underlying chunk.
  chunk_ptr chunk() const;

  /// Locates the table slices for a given set of IDs.
  /// @param xs The IDs to lookup.
  /// @returns The table slices according to *xs*.
  caf::expected<std::vector<table_slice>> lookup(const vast::ids& xs) const;

private:
  explicit segment(chunk_ptr chk);

  chunk_ptr chunk_;
};

} // namespace vast
