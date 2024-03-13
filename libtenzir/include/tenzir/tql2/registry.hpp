//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/detail/heterogeneous_string_hash.hpp"
#include "tenzir/tql2/ast.hpp"
#include "tenzir/type.hpp"

namespace tenzir::tql2 {

class context;

// TODO: Change `entity_def` and everything related to it.

struct function_def {
  // bad argument count
  // bad argument type error
  // + maybe type

  class args_info {
  public:
    args_info(location fn, std::span<const ast::expression> exprs,
              std::span<const std::optional<type>> types)
      : fn_{fn}, exprs_{exprs}, types_{types} {
    }

    auto arg_count() const -> size_t {
      return exprs_.size();
    }

    auto fn_loc() const -> location {
      return fn_;
    }

    auto arg_loc(size_t x) const -> location {
      TENZIR_ASSERT(x < arg_count());
      return exprs_[x].get_location();
    }

    auto arg_type(size_t x) const -> const std::optional<type>& {
      TENZIR_ASSERT(x < arg_count());
      return types_[x];
    }

  private:
    location fn_;
    std::span<const ast::expression> exprs_;
    std::span<const std::optional<type>> types_;
  };

  std::function<auto(args_info, context& ctx)->std::optional<type>> check;
};

class operator_use {
public:
  virtual ~operator_use() = default;
};

class operator_def {
public:
  virtual ~operator_def() = default;

  virtual auto make(std::vector<ast::expression> args, context& ctx) const
    -> std::unique_ptr<operator_use>
    = 0;
};

using entity_def = variant<function_def, std::unique_ptr<operator_def>>;

class entity_def2 {
public:
  struct roles {
    bool function = false;
    bool operator_ = false;
    bool method = false;
  };

  virtual ~entity_def2() = default;

  virtual auto roles() -> roles = 0;
};

class registry {
public:
  // TODO: The interface of this class is drastically simplified for now. It
  // must be changed eventually to properly enable modules and use an interned
  // representation of `entity_path`.
  void add(std::string name, entity_def fn) {
    auto inserted = defs_.emplace(std::move(name), std::move(fn)).second;
    TENZIR_ASSERT(inserted);
  }

  auto try_get(const entity_path& path) const -> const entity_def* {
    if (path.segments().size() != 1) {
      // TODO: We pretend here that only single-name paths exist.
      return nullptr;
    }
    auto it = defs_.find(path.segments()[0]);
    if (it == defs_.end()) {
      return nullptr;
    }
    return &it->second;
  }

  auto get(const entity_path& path) const -> const entity_def& {
    auto result = try_get(path);
    TENZIR_ASSERT(result);
    return *result;
  }

private:
  // TODO: Lifetime?
  detail::heterogeneous_string_hashmap<entity_def> defs_;
};

auto thread_local_registry() -> const registry*;

void set_thread_local_registry(const registry* reg);

template <class F>
auto with_thread_local_registry(const registry& reg, F&& f) {
  auto prev = thread_local_registry();
  set_thread_local_registry(&reg);
  std::forward<F>(f)();
  set_thread_local_registry(prev);
}

class context {
public:
  context(registry& reg, diagnostic_handler& dh) : reg_{reg}, dh_{dh} {
  }

  auto reg() -> registry& {
    return reg_;
  }

  auto dh() -> diagnostic_handler& {
    return dh_;
  }

private:
  registry& reg_;
  diagnostic_handler& dh_;
};

} // namespace tenzir::tql2
