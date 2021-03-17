/******************************************************************************
 *                    _   _____   __________                                  *
 *                   | | / / _ | / __/_  __/     Visibility                   *
 *                   | |/ / __ |_\ \  / /          Across                     *
 *                   |___/_/ |_/___/ /_/       Space and Time                 *
 *                                                                            *
 * This file is part of VAST. It is subject to the license terms in the       *
 * LICENSE file found in the top-level directory of this distribution and at  *
 * http://vast.io/license. No part of VAST, including this file, may be       *
 * copied, modified, propagated, or distributed except according to the terms *
 * contained in the LICENSE file.                                             *
 ******************************************************************************/

#include "vast/io/read.hpp"

#include "vast/error.hpp"
#include "vast/file.hpp"
#include "vast/logger.hpp"

#include <cstddef>
#include <filesystem>

namespace vast::io {

caf::error read(const std::filesystem::path& filename, span<std::byte> xs) {
  file f{filename.string()};
  if (!f.open(file::read_only))
    return caf::make_error(ec::filesystem_error, "failed open file");
  auto bytes_read = f.read(xs.data(), xs.size());
  if (!bytes_read)
    return bytes_read.error();
  if (*bytes_read != xs.size())
    return caf::make_error(ec::filesystem_error, "incomplete read of",
                           filename.string());
  return caf::none;
}

caf::expected<std::vector<std::byte>>
read(const std::filesystem::path& filename) {
  std::error_code err{};
  const auto size = std::filesystem::file_size(filename, err);
  if (size == static_cast<std::uintmax_t>(-1))
    return caf::make_error(ec::filesystem_error,
                           fmt::format("failed to get file size for filename "
                                       "{}: {}",
                                       filename, err.message()));
  std::vector<std::byte> buffer(size);
  if (auto err = read(filename, span<std::byte>{buffer}))
    return err;
  return buffer;
}

} // namespace vast::io
