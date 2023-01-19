//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2022 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/arrow_table_slice.hpp>
#include <vast/concept/convertible/data.hpp>
#include <vast/concept/convertible/to.hpp>
#include <vast/concept/parseable/to.hpp>
#include <vast/concept/parseable/vast/data.hpp>
#include <vast/detail/inspection_common.hpp>
#include <vast/pipeline_operator.hpp>
#include <vast/plugin.hpp>
#include <vast/table_slice_builder.hpp>
#include <vast/type.hpp>

#include <arrow/table.h>

namespace vast::plugins::rename {

/// The configuration of the rename pipeline operator.
struct configuration {
  struct name_mapping {
    std::string from = {};
    std::string to = {};

    template <class Inspector>
    friend auto inspect(Inspector& f, name_mapping& x) {
      return detail::apply_all(f, x.from, x.to);
    }

    static inline const record_type& schema() noexcept {
      static auto result = record_type{
        {"from", string_type{}},
        {"to", string_type{}},
      };
      return result;
    }
  };

  std::vector<name_mapping> schemas = {};
  std::vector<name_mapping> fields = {};

  template <class Inspector>
  friend auto inspect(Inspector& f, configuration& x) {
    return detail::apply_all(f, x.schemas, x.fields);
  }

  static inline const record_type& schema() noexcept {
    // schemas:
    //   - from: zeek.conn
    //     to: zeek.aggregated_conn
    //   - from: suricata.flow
    //     to: suricata.aggregated_flow
    // fields:
    //   - from: resp_h
    //     to: response_h
    static auto result = record_type{
      {"schemas", list_type{name_mapping::schema()}},
      {"fields", list_type{name_mapping::schema()}},
    };
    return result;
  }
};

class rename_operator : public pipeline_operator {
public:
  rename_operator(configuration config) : config_{std::move(config)} {
    // nop
  }

  /// Applies the transformation to an Arrow Record Batch with a corresponding
  /// VAST schema.
  [[nodiscard]] caf::error
  add(type schema, std::shared_ptr<arrow::RecordBatch> batch) override {
    // Step 1: Adjust field names.
    if (!config_.fields.empty()) {
      auto field_transformations = std::vector<indexed_transformation>{};
      for (const auto& field : config_.fields) {
        for (const auto& index :
             caf::get<record_type>(schema).resolve_key_suffix(field.from,
                                                              schema.name())) {
          auto transformation
            = [&](struct record_type::field old_field,
                  std::shared_ptr<arrow::Array> array) noexcept
            -> std::vector<std::pair<struct record_type::field,
                                     std::shared_ptr<arrow::Array>>> {
            return {
              {{field.to, old_field.type}, array},
            };
          };
          field_transformations.push_back({index, std::move(transformation)});
        }
      }
      std::sort(field_transformations.begin(), field_transformations.end());
      std::tie(schema, batch)
        = transform_columns(schema, batch, field_transformations);
    }
    // Step 2: Adjust schema names.
    if (!config_.schemas.empty()) {
      const auto schema_mapping
        = std::find_if(config_.schemas.begin(), config_.schemas.end(),
                       [&](const auto& name_mapping) noexcept {
                         return name_mapping.from == schema.name();
                       });
      if (schema_mapping == config_.schemas.end()) {
        transformed_batches_.emplace_back(std::move(schema), std::move(batch));
        return caf::none;
      }
      auto rename_schema = [&](const concrete_type auto& pruned_schema) {
        VAST_ASSERT(!schema.has_attributes());
        return type{schema_mapping->to, pruned_schema};
      };
      schema = caf::visit(rename_schema, schema);
      batch = arrow::RecordBatch::Make(schema.to_arrow_schema(),
                                       batch->num_rows(), batch->columns());
    }
    // Finally, store the result for later retrieval.
    transformed_batches_.emplace_back(std::move(schema), std::move(batch));
    return caf::none;
  } // namespace vast::plugins::rename

  /// Retrieves the result of the transformation.
  [[nodiscard]] caf::expected<std::vector<pipeline_batch>> finish() override {
    return std::exchange(transformed_batches_, {});
  }

private:
  /// Cache for transformed batches.
  std::vector<pipeline_batch> transformed_batches_ = {};

  /// Step-specific configuration, including the schema name mapping.
  configuration config_ = {};
};

// -- plugin ------------------------------------------------------------------

class plugin final : public virtual pipeline_operator_plugin {
public:
  caf::error initialize(data options) override {
    // We don't use any plugin-specific configuration under
    // vast.plugins.rename, so nothing is needed here.
    if (caf::holds_alternative<caf::none_t>(options))
      return caf::none;
    if (const auto* rec = caf::get_if<record>(&options))
      if (rec->empty())
        return caf::none;
    return caf::make_error(ec::invalid_configuration, "expected empty "
                                                      "configuration under "
                                                      "vast.plugins.rename");
  }

  /// The name is how the pipeline operator is addressed in a transform
  /// definition.
  [[nodiscard]] std::string name() const override {
    return "rename";
  };

  /// This is called once for every time this pipeline operator appears in a
  /// transform definition. The configuration for the step is opaquely
  /// passed as the first argument.
  [[nodiscard]] caf::expected<std::unique_ptr<pipeline_operator>>
  make_pipeline_operator(const record& options) const override {
    auto config = to<configuration>(options);
    if (!config)
      return config.error();
    return std::make_unique<rename_operator>(std::move(*config));
  }

  [[nodiscard]] std::pair<std::string_view,
                          caf::expected<std::unique_ptr<pipeline_operator>>>
  make_pipeline_operator(std::string_view pipeline) const override {
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    using parsers::space, parsers::eoi, parsers::alnum, parsers::chr,
      parsers::data;
    using namespace parser_literals;
    const auto required_ws = ignore(+space);
    const auto optional_ws = ignore(*space);
    auto extractor_char = alnum | chr{'_'} | chr{'-'} | chr{':'};
    // An extractor cannot start with:
    //  - '-' to leave room for potential arithmetic expressions in operands
    auto extractor
      = (!('-'_p) >> (+extractor_char % '.'))
          .then([](std::vector<std::string> in) {
            return fmt::to_string(fmt::join(in.begin(), in.end(), "."));
          });
    const auto p
      = required_ws
        >> ((extractor >> optional_ws >> '=' >> optional_ws >> extractor)
            % (',' >> optional_ws))
        >> optional_ws >> ('|' | eoi);
    std::vector<std::tuple<std::string, std::string>> parsed_assignments;
    if (!p(f, l, parsed_assignments)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error, fmt::format("failed to parse extend "
                                                      "operator: '{}'",
                                                      pipeline)),
      };
    }
    auto config = configuration{};
    for (const auto& [to, from] : parsed_assignments) {
      if (from.starts_with(':')) {
        config.schemas.push_back({from.substr(1), to});
      } else {
        config.fields.push_back({from, to});
      }
    }
    return {
      std::string_view{f, l},
      std::make_unique<rename_operator>(std::move(config)),
    };
  }
};

} // namespace vast::plugins::rename

VAST_REGISTER_PLUGIN(vast::plugins::rename::plugin)
