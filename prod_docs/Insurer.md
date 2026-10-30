# OBJECT: Insurer

## Estructura

| Campo      | Tipo                      | Descripción |
| :--------- | :------------------------ | :---------- |
| id         | `ID!`                     |             |
| name       | `String!`                 |             |
| slug       | `String!`                 |             |
| provider   | `String`                  |             |
| logo       | `String`                  |             |
| status     | `InsuranceCatalogStatus!` |             |
| company    | `Company!`                |             |
| plans      | `[InsurancePlan!]!`       |             |
| created_at | `DateTime!`               |             |
| updated_at | `DateTime`                |             |
