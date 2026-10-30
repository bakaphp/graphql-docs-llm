# INPUT_OBJECT: InsurancePlanInput

## Estructura

| Campo             | Tipo                               | Descripción |
| :---------------- | :--------------------------------- | :---------- |
| insurer_id        | `ID!`                              |             |
| name              | `String!`                          |             |
| slug              | `String`                           |             |
| type              | `InsuranceCoverageCategory!`       |             |
| external_code     | `String`                           |             |
| base_price        | `Float`                            |             |
| validity_days     | `Int`                              |             |
| deductible        | `Float`                            |             |
| status            | `InsuranceCatalogStatus`           |             |
| sponsored         | `Boolean`                          |             |
| commission_rate   | `Float`                            |             |
| recommended_score | `Int`                              |             |
| coverages         | `[InsuranceCoverageInput!]`        |             |
| exclusions        | `[InsurancePlanExclusionInput!]`   |             |
| requirements      | `[InsurancePlanRequirementInput!]` |             |
