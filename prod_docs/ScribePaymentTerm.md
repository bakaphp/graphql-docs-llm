# OBJECT: ScribePaymentTerm

## Estructura

| Campo            | Tipo        | Descripción |
| :--------------- | :---------- | :---------- |
| id               | `ID!`       |             |
| name             | `String!`   |             |
| net_days         | `Int!`      |             |
| discount_days    | `Int`       |             |
| discount_percent | `Float`     |             |
| is_active        | `Boolean!`  |             |
| company          | `Company!`  |             |
| created_at       | `DateTime!` |             |
| updated_at       | `DateTime!` |             |
