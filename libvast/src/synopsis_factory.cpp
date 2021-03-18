// SPDX-FileCopyrightText: (c) 2019 Tenzir GmbH <info@tenzir.com>
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/synopsis_factory.hpp"

#include "vast/address_synopsis.hpp"
#include "vast/bool_synopsis.hpp"
#include "vast/concept/hashable/xxhash.hpp"
#include "vast/string_synopsis.hpp"
#include "vast/time_synopsis.hpp"

namespace vast {

void factory_traits<synopsis>::initialize() {
  factory<synopsis>::add(address_type{}, make_address_synopsis<xxhash64>);
  factory<synopsis>::add<bool_type, bool_synopsis>();
  factory<synopsis>::add(string_type{}, make_string_synopsis<xxhash64>);
  factory<synopsis>::add<time_type, time_synopsis>();
}

} // namespace vast
