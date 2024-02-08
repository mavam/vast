//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/detail/default_formatter.hpp"
#include "tenzir/diagnostics.hpp"
#include "tenzir/location.hpp"
#include "tenzir/tql2/lexer.hpp"

namespace tenzir::tql2::ast {

struct assignment;
struct field_access;
struct expression;
struct identifier;
struct invocation;
struct pipeline;
struct record;
struct selector;

struct identifier {
  identifier(std::string name, location location)
    : name{std::move(name)}, location{location} {
  }

  identifier(std::string_view name, location location)
    : identifier{std::string(name), location} {
  }

  std::string name;
  location location;

  friend auto inspect(auto& f, identifier& x) -> bool {
    if (auto dbg = as_debug_writer(f)) {
      return dbg->apply(x.name) && dbg->append(" @ {:?}", x.location);
    }
    return f.object(x).fields(f.field("symbol", x.name),
                              f.field("location", x.location));
  }
};

struct selector {
  selector(std::optional<location> this_, std::vector<identifier> path)
    : this_{this_}, path{std::move(path)} {
  }

  // TODO
  std::optional<location> this_;
  std::vector<identifier> path;

  friend auto inspect(auto& f, selector& x) -> bool {
    return f.object(x).fields(f.field("this", x.this_),
                              f.field("path", x.path));
  }
};

struct string : located<std::string> {
  using located::located;
};

using expression_kind
  = variant<record, selector, pipeline, string, field_access>;

struct expression {
  template <class T>
  explicit(false) expression(T&& x)
    : kind{std::make_unique<expression_kind>(std::forward<T>(x))} {
  }

  expression(expression&&) = default;
  auto operator=(expression&&) -> expression& = default;

  explicit expression(record x);

  template <class... Fs>
  auto match(Fs&&... fs) -> decltype(auto);

  std::unique_ptr<expression_kind> kind;

  friend auto inspect(auto& f, expression& x) -> bool;
};

struct field_access {
  field_access(expression left, location dot, identifier name)
    : left{std::move(left)}, dot{dot}, name{std::move(name)} {
  }

  expression left;
  location dot;
  identifier name;

  friend auto inspect(auto& f, field_access& x) -> bool {
    return f.object(x).fields(f.field("left", x.left), f.field("dot", x.dot),
                              f.field("name", x.name));
  }
};

struct record {
  struct spread {
    expression expr;

    friend auto inspect(auto& f, spread& x) -> bool {
      return f.object(x).fields(f.field("expr", x.expr));
    }
  };

  struct field {
    field(identifier name, expression expr)
      : name{std::move(name)}, expr{std::move(expr)} {
    }

    identifier name;
    expression expr;

    friend auto inspect(auto& f, field& x) -> bool {
      return f.object(x).fields(f.field("name", x.name),
                                f.field("expr", x.expr));
    }
  };

  using content_kind = variant<field, spread>;

  record(location left, std::vector<content_kind> content, location right)
    : begin{left}, content{std::move(content)}, end{right} {
  }

  location begin;
  std::vector<content_kind> content;
  location end;

  friend auto inspect(auto& f, record& x) -> bool {
    return f.apply(x.content);
  }
};

struct assignment {
  assignment(selector left, location equals, expression right)
    : left{std::move(left)}, equals{equals}, right{std::move(right)} {
  }

  selector left;
  location equals;
  expression right;

  friend auto inspect(auto& f, assignment& x) -> bool {
    return f.object(x).fields(f.field("left", x.left),
                              f.field("equals", x.equals),
                              f.field("right", x.right));
  }
};

using invocation_arg = variant<expression, assignment>;

struct invocation {
  identifier op;
  std::vector<invocation_arg> args;

  friend auto inspect(auto& f, invocation& x) -> bool {
    return f.object(x).fields(f.field("op", x.op), f.field("args", x.args));
  }
};

struct pipeline {
  using step = variant<assignment, invocation>;

  explicit pipeline(std::vector<step> steps) : steps{std::move(steps)} {
  }

  std::vector<step> steps;

  friend auto inspect(auto& f, pipeline& x) -> bool {
    return f.apply(x.steps);
  }
};

template <class... Fs>
auto expression::match(Fs&&... fs) -> decltype(auto) {
  TENZIR_ASSERT_CHEAP(kind);
  return kind->match(std::forward<Fs>(fs)...);
}

inline expression::expression(record x)
  : kind{std::make_unique<expression_kind>(std::move(x))} {
}

auto inspect(auto& f, expression& x) -> bool {
  // TODO
  TENZIR_ASSERT_CHEAP(x.kind);
  return f.apply(*x.kind);
}

} // namespace tenzir::tql2::ast

namespace tenzir::tql2 {

// TODO
auto parse(std::span<token> tokens, std::string_view source,
           diagnostic_handler& diag) -> ast::pipeline;

} // namespace tenzir::tql2

namespace tenzir {

template <>
inline constexpr auto enable_default_formatter<tenzir::tql2::ast::pipeline>
  = true;

template <>
inline constexpr auto enable_default_formatter<tenzir::tql2::ast::expression>
  = true;

} // namespace tenzir
