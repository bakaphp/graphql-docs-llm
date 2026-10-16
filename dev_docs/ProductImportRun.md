# OBJECT: ProductImportRun

## Estructura

| Campo             | Tipo        | Descripción |
| :---------------- | :---------- | :---------- |
| id                | `ID!`       |             |
| status            | `String!`   |             |
| channel           | `Channel`   |             |
| batches_count     | `Int!`      |             |
| skus_count        | `Int!`      |             |
| published_count   | `Int!`      |             |
| unpublished_count | `Int!`      |             |
| skipped_reason    | `String`    |             |
| started_at        | `DateTime!` |             |
| finished_at       | `DateTime`  |             |
