# OBJECT: Payment

## Estructura

| Campo               | Tipo            | Descripción |
| :------------------ | :-------------- | :---------- |
| id                  | `ID!`           |             |
| apps_id             | `ID!`           |             |
| company             | `Company!`      |             |
| payable_id          | `ID!`           |             |
| payable_type        | `String!`       |             |
| uuid                | `String!`       |             |
| user                | `User!`         |             |
| payment_method      | `PaymentMethod` |             |
| payment_method_type | `String`        |             |
| order               | `Order`         |             |
| payment_date        | `String!`       |             |
| concept             | `String!`       |             |
| notes               | `String`        |             |
| number              | `String`        |             |
| amount              | `Money`         |             |
| currency            | `String`        |             |
| status              | `String`        |             |
| metadata            | `Mixed`         |             |
| payment_logs        | `[PaymentLog!]` |             |
| created_at          | `String!`       |             |
| updated_at          | `String`        |             |
| is_deleted          | `Boolean!`      |             |
