# OBJECT: InsuranceSearchPlan

## Estructura

| Campo         | Tipo                         | Descripción |
| :------------ | :--------------------------- | :---------- |
| id            | `ID!`                        |             |
| name          | `String!`                    |             |
| slug          | `String!`                    |             |
| type          | `InsuranceCoverageCategory!` |             |
| deductible    | `Float`                      |             |
| validity_days | `Int`                        |             |
| variant_id    | `ID`                         |             |
