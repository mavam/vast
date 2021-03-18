// SPDX-FileCopyrightText: (c) 2020 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/fwd.hpp"

#include "vast/span.hpp"

#include <cstddef>
#include <filesystem>

namespace vast::io {

/// Writes a buffer to a temporary file and atomically renames it to *filename*
/// afterwards.
/// @param filename The file to write to.
/// @param xs The buffer to read from.
/// @returns An error if the operation failed.
[[nodiscard]] caf::error
save(const std::filesystem::path& filename, span<const std::byte> xs);

} // namespace vast::io
