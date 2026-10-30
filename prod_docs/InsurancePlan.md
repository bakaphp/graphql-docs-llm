# OBJECT: InsurancePlan

## Estructura

| Campo             | Tipo                           | Descripción |
| :---------------- | :----------------------------- | :---------- |
| id                | `ID!`                          |             |
| name              | `String!`                      |             |
| slug              | `String!`                      |             |
| type              | `InsuranceCoverageCategory!`   |             |
| external_code     | `String`                       |             |
| base_price        | `Float`                        |             |
| validity_days     | `Int`                          |             |
| deductible        | `Float`                        |             |
| status            | `InsuranceCatalogStatus!`      |             |
| sponsored         | `Boolean!`                     |             |
| commission_rate   | `Float!`                       |             |
| recommended_score | `Int!`                         |             |
| insurer           | `Insurer!`                     |             |
| coverages         | `[InsuranceCoverage!]!`        |             |
| exclusions        | `[InsurancePlanExclusion!]!`   |             |
| requirements      | `[InsurancePlanRequirement!]!` |             |
| created_at        | `DateTime!`                    |             |
| updated_at        | `DateTime`                     |             |
