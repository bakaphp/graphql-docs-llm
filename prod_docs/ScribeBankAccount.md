# OBJECT: ScribeBankAccount

Scribe.Banking — minimal bank-account surface backing GL Cash accounts.

## Estructura

| Campo                    | Tipo             | Descripción |
| :----------------------- | :--------------- | :---------- |
| id                       | `ID!`            |             |
| uuid                     | `String!`        |             |
| account_name             | `String!`        |             |
| account_number_last4     | `String`         |             |
| routing_number_masked    | `String`         |             |
| institution_name         | `String`         |             |
| currency                 | `String!`        |             |
| gl_account               | `ScribeAccount!` |             |
| current_balance_native   | `Money`          |             |
| available_balance_native | `Money`          |             |
| last_balance_sync_at     | `DateTime`       |             |
| is_active                | `Boolean!`       |             |
| source                   | `String!`        |             |
| external_id              | `String`         |             |
| last_synced_at           | `DateTime`       |             |
| metadata                 | `Mixed`          |             |
| company                  | `Company!`       |             |
| user                     | `User`           |             |
| created_at               | `DateTime!`      |             |
| updated_at               | `DateTime!`      |             |
