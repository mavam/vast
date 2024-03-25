//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/tql2/exec.hpp"

#include "tenzir/detail/assert.hpp"
#include "tenzir/diagnostics.hpp"
#include "tenzir/tql2/eval.hpp"
#include "tenzir/tql2/parser.hpp"
#include "tenzir/tql2/registry.hpp"
#include "tenzir/tql2/resolve.hpp"
#include "tenzir/tql2/tokens.hpp"
#include "tenzir/type.hpp"

#include <arrow/compute/api.h>
#include <arrow/util/utf8.h>

#include <chrono>

namespace tenzir::tql2 {

namespace {

using namespace ast;

class type_checker {
public:
  using result = std::optional<type>;

  explicit type_checker(context& ctx) : ctx_{ctx} {
  }

  auto visit(literal& x) -> result {
    return x.value.match(
      []<class T>(T&) -> type {
        return type{data_to_type_t<T>{}};
      },
      [](null&) -> type {
        return type{null_type{}};
      });
  }

  auto visit(selector& x) -> result {
    if (x.this_ && x.path.empty()) {
      return type{record_type{}};
    }
    return std::nullopt;
  }

  auto visit(expression& x) -> result {
    return x.match([&](auto& y) {
      return visit(y);
    });
  }

  auto visit(binary_expr& x) -> result {
    // TODO: This is just for testing.
    auto left = visit(x.left);
    auto right = visit(x.right);
    if (left && right && left != right) {
      diagnostic::error("cannot {} `{}` and `{}`", x.op.inner, *left, *right)
        .primary(x.op.source)
        .secondary(x.left.get_location(), "{}", *left)
        .secondary(x.right.get_location(), "{}", *right)
        .emit(ctx_.dh());
      return std::nullopt;
    }
    using enum binary_op;
    switch (x.op.inner) {
      case add:
      case sub:
      case mul:
      case div:
        if (left) {
          return left;
        }
        return right;
      case eq:
      case neq:
      case gt:
      case ge:
      case lt:
      case le:
      case and_:
      case or_:
      case in:
        return type{bool_type{}};
    }
    TENZIR_UNREACHABLE();
  }

  auto visit(unary_expr& x) -> result {
    // TODO
    auto ty_opt = visit(x.expr);
    if (not ty_opt) {
      return {};
    }
    auto ty = std::move(*ty_opt);
    switch (x.op.inner) {
      case unary_op::pos:
      case unary_op::neg:
        if (ty.kind().none_of<int64_type, double_type>()) {
          diagnostic::error("cannot {} `{}`", x.op.inner, ty)
            .primary(x.op.source)
            .secondary(x.expr.get_location(), "{}", ty)
            .emit(ctx_.dh());
          return std::nullopt;
        }
        return ty;
      case unary_op::not_:
        if (ty != type{bool_type{}}) {
          diagnostic::error("cannot {} `{}`", x.op.inner, ty)
            .primary(x.op.source)
            .secondary(x.expr.get_location(), "{}", ty)
            .emit(ctx_.dh());
          return std::nullopt;
        }
        return ty;
    }
    TENZIR_UNREACHABLE();
  }

  auto visit(function_call& x) -> result {
    auto subject = std::optional<result>{};
    if (x.subject) {
      subject = visit(*x.subject);
    }
    auto args = std::vector<result>{};
    for (auto& arg : x.args) {
      arg.match(
        [&](assignment& x) {
          args.push_back(visit(x.right));
        },
        [&](auto&) {
          args.push_back(visit(arg));
        });
    }
    if (not x.fn.ref.resolved()) {
      return std::nullopt;
    }
    // TODO: Improve.
    auto fn
      = std::get_if<std::unique_ptr<function_def>>(&ctx_.reg().get(x.fn.ref));
    TENZIR_ASSERT(fn);
    TENZIR_ASSERT(*fn);
    // TODO: This does not respect named arguments.
    auto info = function_def::check_info{x.fn.get_location(), x.args, args};
    return (*fn)->check(info, ctx_);
  }

  auto visit(assignment& x) -> result {
    visit(x.right);
    // TODO
    diagnostic::error("assignments are not allowed here")
      .primary(x.get_location())
      .hint("if you want to compare for equality, use `==` instead")
      .emit(ctx_.dh());
    return std::nullopt;
  }

  auto visit(pipeline_expr& x) -> result {
    // TODO: How would this work?
    (void)x;
    return std::nullopt;
  }

  auto visit(record& x) -> result {
    // TODO: Don't we want to propagate fields etc?
    // Or can we perhaps do this with const eval?
    for (auto& y : x.content) {
      y.match(
        [&](record::field& z) {
          visit(z.expr);
        },
        [&](record::spread& z) {
          diagnostic::error("not implemented yet")
            .primary(z.expr.get_location())
            .emit(ctx_.dh());
        });
    }
    return type{record_type{}};
  }

  auto visit(list& x) -> result {
    // TODO: Content type?
    for (auto& y : x.items) {
      visit(y);
    }
    return type{list_type{null_type{}}};
  }

  auto visit(field_access& x) -> result {
    // TODO: Field types?
    auto ty = visit(x.left);
    if (ty && ty->kind().is_not<record_type>()) {
      diagnostic::error("type `{}` has no fields", *ty)
        .primary(x.name.location)
        .emit(ctx_.dh());
    }
    return std::nullopt;
  }

  template <class T>
  auto visit(T&) -> result {
    TENZIR_WARN("missed: {}", typeid(T).name());
    return std::nullopt;
  }

private:
  context& ctx_;
};

/// A diagnostic handler that remembers when it emits an error.
class diagnostic_handler_wrapper final : public diagnostic_handler {
public:
  explicit diagnostic_handler_wrapper(std::unique_ptr<diagnostic_handler> inner)
    : inner_{std::move(inner)} {
  }

  void emit(diagnostic d) override {
    if (d.severity == severity::error) {
      error_ = true;
    }
    inner_->emit(std::move(d));
  }

  auto error() const -> bool {
    return error_;
  }

private:
  bool error_ = false;
  std::unique_ptr<diagnostic_handler> inner_;
};

struct sort_expr {
  enum class direction { asc, desc };

  sort_expr(expression expr, direction dir) : expr{std::move(expr)}, dir{dir} {
  }

  expression expr;
  direction dir;
};

class sort_use final : public operator_use {
public:
  explicit sort_use(entity self, std::vector<sort_expr> exprs)
    : self_{std::move(self)}, exprs_{std::move(exprs)} {
  }

  // void, byte, chunk, event
  // void, chunk_ptr, vector<chunk_ptr>, table_slice

private:
  entity self_;
  std::vector<sort_expr> exprs_;
};

class sort_def final : public operator_def {
public:
  auto make(ast::entity self, std::vector<expression> args, context& ctx) const
    -> std::unique_ptr<operator_use> override {
    auto exprs = std::vector<sort_expr>{};
    exprs.reserve(args.size());
    for (auto& arg : args) {
      arg.match(
        [&](tql2::ast::unary_expr& un_expr) {
          if (un_expr.op.inner == tql2::ast::unary_op::neg) {
            exprs.emplace_back(std::move(un_expr.expr),
                               sort_expr::direction::desc);
          } else {
            exprs.emplace_back(std::move(arg), sort_expr::direction::asc);
          }
        },
        [&](assignment& x) {
          diagnostic::error("we don't like assignments around here")
            .primary(x.get_location())
            .emit(ctx.dh());
        },
        [&](auto&) {
          exprs.emplace_back(std::move(arg), sort_expr::direction::asc);
        });
    }
    for (auto& expr : exprs) {
      type_checker{ctx}.visit(expr.expr);
    }
    return std::make_unique<sort_use>(std::move(self), std::move(exprs));
  }
};

class from_use final : public operator_use {
public:
};

class from_def final : public operator_def {
public:
  auto make(ast::entity self, std::vector<ast::expression> args,
            context& ctx) const -> std::unique_ptr<operator_use> override {
    (void)self;
    if (args.size() != 1) {
      diagnostic::error("`from` expects exactly one argument")
        .primary(args.empty() ? self.get_location() : args[1].get_location())
        .emit(ctx.dh());
      if (args.empty()) {
        return nullptr;
      }
    }
    auto arg = std::move(args[0]);
    auto ty = type_checker{ctx}.visit(arg);
    if (ty && ty != string_type{}) {
      diagnostic::error("expected `string` but got `{}`", *ty)
        .primary(arg.get_location())
        .emit(ctx.dh());
      return nullptr;
    }
    // TODO: This should be some kind of const-eval, but for now, we just expect
    // a string literal.
    using result = std::optional<located<std::string>>;
    auto url = arg.match(
      [](literal& x) -> result {
        return x.value.match(
          [&](std::string& y) -> result {
            return {{y, x.source}};
          },
          [](auto&) -> result {
            return std::nullopt;
          });
      },
      [](auto&) -> result {
        return std::nullopt;
      });
    if (not url) {
      diagnostic::error("expected a string literal")
        .primary(arg.get_location())
        .emit(ctx.dh());
      return nullptr;
    }
    (void)url;
    return std::make_unique<from_use>();
  }
};

class load_file_use final : public operator_use {
public:
  explicit load_file_use(std::optional<ast::expression> path)
    : path_{std::move(path)} {
  }

private:
  std::optional<ast::expression> path_;
};

class load_file_def final : public operator_def {
public:
  auto make(ast::entity self, std::vector<ast::expression> args,
            context& ctx) const -> std::unique_ptr<operator_use> override {
    (void)self;
    (void)args;
    auto usage = "load_file path, follow=false, mmap=false, timeout=null";
    auto docs = "https://docs.tenzir.com/operators/load_file";
    if (args.empty()) {
      diagnostic::error("expected at least one argument")
        .primary(self.get_location())
        .usage(usage)
        .docs(docs)
        .emit(ctx.dh());
    }
    // assume we want `"foo.json"` and `path="foo.json"`.
    auto path = std::optional<ast::expression>{};
    for (auto& arg : args) {
      arg.match(
        [&](assignment& x) {
          auto ty = type_checker{ctx}.visit(x.right);
          if (not x.left.this_ && x.left.path.size() == 1
              && x.left.path[0].name == "path") {
            if (ty && ty != type{string_type{}}) {
              diagnostic::error("expected `string` but got `{}`", *ty)
                .primary(x.right.get_location())
                .usage(usage)
                .docs(docs)
                .emit(ctx.dh());
            }
            path = std::move(x.right);
          } else {
            diagnostic::error("unknown named argument")
              .primary(x.left.get_location())
              .usage(usage)
              .docs(docs)
              .emit(ctx.dh());
          }
        },
        [&](auto& x) {
          auto ty = type_checker{ctx}.visit(x);
          if (path) {
            diagnostic::error("path was already specified")
              .secondary(path->get_location(), "previous definition")
              .primary(x.get_location(), "new definition")
              .usage(usage)
              .docs(docs)
              .emit(ctx.dh());
            return;
          }
          if (ty && ty != type{string_type{}}) {
            diagnostic::error("expected `string`, got `{}`", *ty)
              .primary(x.get_location())
              .usage(usage)
              .docs(docs)
              .emit(ctx.dh());
          }
          path = std::move(x);
        });
    };
    return std::make_unique<load_file_use>(std::move(path));
  }
};

class drop_use final : public operator_use {
public:
  explicit drop_use(std::vector<selector> selectors)
    : selectors_{std::move(selectors)} {
  }

private:
  std::vector<selector> selectors_;
};

class drop_def final : public operator_def {
public:
  auto make(ast::entity self, std::vector<ast::expression> args,
            context& ctx) const -> std::unique_ptr<operator_use> override {
    (void)self;
    auto selectors = std::vector<selector>{};
    for (auto& arg : args) {
      arg.match(
        [&](selector& x) {
          selectors.push_back(std::move(x));
        },
        [&](auto& x) {
          diagnostic::error("expected selector")
            .primary(x.get_location())
            .emit(ctx.dh());
        });
    }
    return std::make_unique<drop_use>(std::move(selectors));
  }
};

struct pipeline_use {
  pipeline_use() = default;

  explicit pipeline_use(std::vector<std::unique_ptr<operator_use>> ops)
    : ops{std::move(ops)} {
  }

  std::vector<std::unique_ptr<operator_use>> ops;
};

class if_use final : public operator_use {
public:
  explicit if_use(expression condition, pipeline_use then,
                  std::optional<pipeline_use> else_)
    : condition_{std::move(condition)},
      then_{std::move(then)},
      else_{std::move(else_)} {
  }

private:
  expression condition_;
  pipeline_use then_;
  std::optional<pipeline_use> else_;
};

class set_use final : public operator_use {
public:
  explicit set_use(std::vector<assignment> assignments)
    : assignments_{std::move(assignments)} {
  }

private:
  std::vector<assignment> assignments_;
};

void check_assignment(assignment& x, context& ctx) {
  auto ty = type_checker{ctx}.visit(x.right);
  if (x.left.this_ && x.left.path.empty()) {
    if (ty && *ty != type{record_type{}}) {
      diagnostic::error("only records can be assigned to `this`")
        .primary(x.right.get_location(), "this is `{}`", *ty)
        .emit(ctx.dh());
    }
  }
}

class set_def final : public operator_def {
public:
  auto make(ast::entity self, std::vector<ast::expression> args,
            context& ctx) const -> std::unique_ptr<operator_use> override {
    (void)self;
    auto usage = "set <path>=<expr>...";
    auto docs = "https://docs.tenzir.com/operators/set";
    auto assignments = std::vector<assignment>{};
    for (auto& arg : args) {
      arg.match(
        [&](assignment& x) {
          check_assignment(x, ctx);
          assignments.push_back(std::move(x));
        },
        [&](auto&) {
          diagnostic::error("expected assignment")
            .primary(arg.get_location())
            .usage(usage)
            .docs(docs)
            .emit(ctx.dh());
        });
    }
    return std::make_unique<set_use>(std::move(assignments));
  }
};

class head_use final : public operator_use {
public:
  explicit head_use(uint64_t count) : count_{count} {
  }

private:
  uint64_t count_;
};

class head_def final : public operator_def {
public:
  auto make(ast::entity self, std::vector<ast::expression> args,
            context& ctx) const -> std::unique_ptr<operator_use> override {
    if (args.empty()) {
      diagnostic::error("expected number")
        .primary(self.get_location())
        .emit(ctx.dh());
      return nullptr;
    }
    if (args.size() > 1) {
      diagnostic::error("expected only one argument")
        .primary(args[1].get_location())
        .emit(ctx.dh());
    }
    // TODO: We want to have better errors here.
    auto value = evaluate(args[0], ctx);
    if (not value) {
      return nullptr;
    }
    // TODO: Better promotion?
    auto count = caf::get_if<int64_t>(&*value);
    if (not count) {
      diagnostic::error("expected integer")
        .primary(args[0].get_location())
        .emit(ctx.dh());
      return nullptr;
    }
    if (*count < 0) {
      diagnostic::error("expected count to be non-negative but got {}", *count)
        .primary(args[0].get_location(), "this is {}")
        .emit(ctx.dh());
      return nullptr;
    }
    return std::make_unique<head_use>(detail::narrow<uint64_t>(*count));
  }
};

class group_use final : public operator_use {
public:
};

class group_def final : public operator_def {
public:
  auto make(ast::entity self, std::vector<ast::expression> args,
            context& ctx) const -> std::unique_ptr<operator_use> override {
    if (args.empty()) {
      diagnostic::error("expected at least one argument")
        .primary(self.get_location())
        .emit(ctx.dh());
      return nullptr;
    }
    for (auto& arg : args) {
      type_checker{ctx}.visit(arg);
    }
    // evaluate(args.back(), ctx);
    diagnostic::error("not implemented yet")
      .primary(self.get_location())
      .emit(ctx.dh());
    return std::make_unique<group_use>();
  }
};

class where_use final : public operator_use {
public:
  explicit where_use(ast::expression expr) : expr_{std::move(expr)} {
  }

private:
  ast::expression expr_;
};

class where_def final : public operator_def {
public:
  auto make(ast::entity self, std::vector<ast::expression> args,
            context& ctx) const -> std::unique_ptr<operator_use> override {
    if (args.size() != 1) {
      diagnostic::error("expected exactly one argument")
        .primary(self.get_location())
        .emit(ctx.dh());
      return nullptr;
    }
    auto ty = type_checker{ctx}.visit(args[0]);
    if (ty && ty->kind().is_not<bool_type>()) {
      diagnostic::error("expected `bool`, got `{}`", *ty)
        .primary(args[0].get_location())
        .emit(ctx.dh());
    }
    return std::make_unique<where_use>(std::move(args[0]));
  }
};

class source_use final : public operator_use {
public:
  explicit source_use(std::vector<tenzir::record> events)
    : events_{std::move(events)} {
  }

private:
  std::vector<tenzir::record> events_;
};

class source_def final : public operator_def {
public:
  auto make(ast::entity self, std::vector<ast::expression> args,
            context& ctx) const -> std::unique_ptr<operator_use> override {
    auto usage = "source [{...}, ...]";
    auto docs = "https://docs.tenzir.com/operators/source";
    if (args.size() != 1) {
      diagnostic::error("expected exactly one argument")
        .primary(self.get_location())
        .usage(usage)
        .docs(docs)
        .emit(ctx.dh());
    }
    if (args.empty()) {
      return nullptr;
    }
    // TODO: We want to const-eval instead.
    auto events = std::vector<tenzir::record>{};
    args[0].match(
      [&](ast::list& x) {
        for (auto& y : x.items) {
          auto item = evaluate(y, ctx);
          if (not item) {
            continue;
          }
          auto rec = caf::get_if<tenzir::record>(&*item);
          if (not rec) {
            diagnostic::error("expected a record")
              .primary(y.get_location())
              .usage(usage)
              .docs(docs)
              .emit(ctx.dh());
            continue;
          }
          events.push_back(std::move(*rec));
        }
      },
      [&](auto&) {
        diagnostic::error("expected a list")
          .primary(args[0].get_location())
          .usage(usage)
          .docs(docs)
          .emit(ctx.dh());
      });
    return std::make_unique<source_use>(std::move(events));
  }
};

class sqrt_def final : public function_def {
public:
  auto check(check_info info, context& ctx) const
    -> std::optional<type> override {
    auto dbl = type{double_type{}};
    if (info.arg_count() == 0) {
      diagnostic::error("`sqrt` expects one argument")
        .primary(info.fn_loc())
        .emit(ctx.dh());
      return dbl;
    }
    auto& ty = info.arg_type(0);
    if (ty && ty != dbl) {
      // TODO: Use name of function?
      diagnostic::error("`sqrt` expected `{}` but got `{}`", dbl, *ty)
        .primary(info.arg_loc(0), "this is `{}`", *ty)
        .secondary(info.fn_loc(), "this expected `{}`", dbl)
        .emit(ctx.dh());
    }
    if (info.arg_count() > 1) {
      diagnostic::error("`sqrt` expects only one argument")
        .primary(info.arg_loc(1))
        .emit(ctx.dh());
    }
    return dbl;
  }

  auto evaluate(location fn, std::vector<located<data>> args,
                context& ctx) const -> std::optional<data> override {
    // TODO: integrate this with `check`?
    (void)fn;
    TENZIR_ASSERT(args.size() == 1);
    auto arg = caf::get_if<double>(&args[0].inner);
    if (not arg) {
      // TODO
      diagnostic::error("`sqrt` expected `double` bot got `{}`", args[0].inner)
        .primary(args[0].source)
        .emit(ctx.dh());
      return std::nullopt;
    }
    // TODO: nan, inf, negative, etc?
    auto val = *arg;
    if (val < 0.0) {
      diagnostic::error("`sqrt` received negative value `{}`", val)
        .primary(args[0].source)
        .emit(ctx.dh());
      return std::nullopt;
    }
    return std::sqrt(*arg);
  }

  auto test(const arrow::DoubleArray& x) const
    -> std::shared_ptr<arrow::DoubleArray> {
    // TODO: This is a test!!
    {
      // TODO: This is UB and useless. Do not copy. Do not even read. Stop!
#if 0
      auto alloc = arrow::AllocateBuffer(x.length() * sizeof(double));
      TENZIR_ASSERT(alloc.ok());
      auto buffer = std::move(*alloc);
      TENZIR_ASSERT(buffer);
      auto target = new (buffer->mutable_data()) double[x.length()];
      auto begin = x.raw_values();
      auto end = begin + x.length();
      auto null_alloc = arrow::AllocateBuffer((x.length() + 7) / 8);
      TENZIR_ASSERT(null_alloc.ok());
      auto null_buffer = std::move(*null_alloc);
      TENZIR_ASSERT(null_buffer);
      auto null_target = null_buffer->mutable_data();
      if (auto nulls = x.null_bitmap()) {
        std::memcpy(null_target, nulls->data(), nulls->size());
      } else {
        std::memset(null_target, 0xFF, (x.length() + 7) / 8);
      }
      while (begin != end) {
        auto val = *begin;
        if (val < 0.0) [[unlikely]] {
          auto mask = 0xFF ^ (0x01 << ((begin - end) % 8));
          null_target[(begin - end) / 8] &= mask;
        }
        *target = std::sqrt(*begin);
        ++begin;
        ++target;
      }
      return std::make_shared<arrow::DoubleArray>(x.length(), std::move(buffer),
                                                  std::move(null_buffer));
#endif
    }
    // TODO
    auto b = arrow::DoubleBuilder{};
    (void)b.Reserve(x.length());
    for (auto y : x) {
      if (not y) {
        // TODO: Warning?
        b.UnsafeAppendNull();
        continue;
      }
      auto z = *y;
      if (z < 0.0) {
        // TODO: Warning?
        b.UnsafeAppendNull();
        continue;
      }
      b.UnsafeAppend(std::sqrt(z));
    }
    auto result = std::shared_ptr<arrow::DoubleArray>{};
    (void)b.Finish(&result);
    return result;
  }
};

class random_def final : public function_def {
public:
  auto check(check_info info, context& ctx) const
    -> std::optional<type> override {
    // TODO
    TENZIR_UNUSED(info, ctx);
    return type{double_type{}};
  }

  auto evaluate(location fn, std::vector<located<data>> args,
                context& ctx) const -> std::optional<data> override {
    // TODO
    return 123.45;
  }
};

class now_def final : public function_def {
public:
  auto check(check_info info, context& ctx) const
    -> std::optional<type> override {
    if (info.arg_count() > 0) {
      diagnostic::error("`now` does not expect any arguments")
        .primary(info.arg_loc(0))
        .emit(ctx.dh());
    }
    return type{duration_type{}};
  }

  auto evaluate(location fn, std::vector<located<data>> args,
                context& ctx) const -> std::optional<data> override {
    TENZIR_ASSERT(args.empty());
    return time{time::clock::now()};
  }
};

auto prepare_pipeline(pipeline&& pipe, context& ctx) -> pipeline_use {
  auto result = pipeline_use{};
  for (auto& stmt : pipe.body) {
    // let_stmt, if_stmt, match_stmt
    stmt.match(
      [&](invocation& x) {
        if (not x.op.ref.resolved()) {
          // This was already reported. We don't know how the operator would
          // interpret its arguments, hence we make no attempt of reporting
          // additional errors for them.
          return;
        }
        // TODO: Where do we check that this succeeds?
        auto def = std::get_if<std::unique_ptr<operator_def>>(
          &ctx.reg().get(x.op.ref));
        TENZIR_ASSERT(def);
        TENZIR_ASSERT(*def);
        auto use = (*def)->make(x.op, std::move(x.args), ctx);
        if (use) {
          result.ops.push_back(std::move(use));
        } else {
          // We assume we emitted an error.
        }
      },
      [&](assignment& x) {
        check_assignment(x, ctx);
        auto assignments = std::vector<assignment>();
        assignments.push_back(std::move(x));
        result.ops.push_back(std::make_unique<set_use>(std::move(assignments)));
      },
      [&](if_stmt& x) {
        auto ty = type_checker{ctx}.visit(x.condition);
        if (ty && *ty != type{bool_type{}}) {
          diagnostic::error("condition type must be `bool`, but is `{}`", *ty)
            .primary(x.condition.get_location())
            .emit(ctx.dh());
        }
        auto then = prepare_pipeline(std::move(x.then), ctx);
        auto else_ = std::optional<pipeline_use>{};
        if (x.else_) {
          else_ = prepare_pipeline(std::move(*x.else_), ctx);
        }
        result.ops.push_back(std::make_unique<if_use>(
          std::move(x.condition), std::move(then), std::move(else_)));
      },
      [&](auto& x) {
        diagnostic::error("statement not implemented yet")
          .primary(x.get_location())
          .emit(ctx.dh());
      });
  }
  return result;
}

} // namespace

auto exec(std::string content, std::unique_ptr<diagnostic_handler> diag,
          const exec_config& cfg, caf::actor_system& sys) -> bool {
  (void)sys;
  auto content_view = std::string_view{content};
  auto tokens = tql2::tokenize(content);
  auto diag_wrapper = diagnostic_handler_wrapper{std::move(diag)};
  // TODO: Refactor this.
  arrow::util::InitializeUTF8();
  if (not arrow::util::ValidateUTF8(content)) {
    // Figure out the exact token.
    auto last = size_t{0};
    for (auto& token : tokens) {
      if (not arrow::util::ValidateUTF8(content_view.substr(last, token.end))) {
        // TODO: We can't really do this directly, unless we handle invalid
        // UTF-8 in diagnostics.
        diagnostic::error("invalid UTF8")
          .primary(location{last, token.end})
          .emit(diag_wrapper);
      }
      last = token.end;
    }
    return false;
  }
  if (cfg.dump_tokens) {
    auto last = size_t{0};
    auto has_error = false;
    for (auto& token : tokens) {
      fmt::print("{:>15} {:?}\n", token.kind,
                 content_view.substr(last, token.end - last));
      last = token.end;
      has_error |= token.kind == tql2::token_kind::error;
    }
    return not has_error;
  }
  for (auto& token : tokens) {
    if (token.kind == tql2::token_kind::error) {
      auto begin = size_t{0};
      if (&token != tokens.data()) {
        begin = (&token - 1)->end;
      }
      diagnostic::error("could not parse token")
        .primary(location{begin, token.end})
        .emit(diag_wrapper);
    }
  }
  if (diag_wrapper.error()) {
    return false;
  }
  auto parsed = tql2::parse(tokens, content, diag_wrapper);
  if (diag_wrapper.error()) {
    return false;
  }
  auto reg = registry{};
  // operators
  reg.add("drop", std::make_unique<drop_def>());
  reg.add("from", std::make_unique<from_def>());
  reg.add("group", std::make_unique<group_def>());
  reg.add("head", std::make_unique<head_def>());
  reg.add("load_file", std::make_unique<load_file_def>());
  reg.add("set", std::make_unique<set_def>());
  reg.add("sort", std::make_unique<sort_def>());
  reg.add("source", std::make_unique<source_def>());
  reg.add("where", std::make_unique<where_def>());
  // functions
  reg.add("now", std::make_unique<now_def>());
  reg.add("sqrt", std::make_unique<sqrt_def>());
  tql2::resolve_entities(parsed, reg, diag_wrapper);
  if (cfg.dump_ast) {
    with_thread_local_registry(reg, [&] {
      fmt::println("{:#?}", parsed);
    });
    return not diag_wrapper.error();
  }
  // TODO
  auto ctx = context{reg, diag_wrapper};
  auto pipe = prepare_pipeline(std::move(parsed), ctx);
  if (diag_wrapper.error()) {
    return false;
  }
  diagnostic::warning(
    "pipeline is syntactically valid, but execution is not yet implemented")
    .hint("use `--dump-ast` to show AST")
    .emit(diag_wrapper);
  return true;
}

} // namespace tenzir::tql2
