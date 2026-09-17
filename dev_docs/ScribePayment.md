# OBJECT: ScribePayment

## Estructura

| Campo           | Tipo                      | Descripción |
| :-------------- | :------------------------ | :---------- |
| id              | `ID!`                     |             |
| uuid            | `String!`                 |             |
| amount_native   | `Money!`                  |             |
| amount_base     | `Money!`                  |             |
| currency        | `String!`                 |             |
| fx_rate_to_base | `Float!`                  |             |
| fx_rate_at      | `DateTime`                |             |
| payment_date    | `Date!`                   |             |
| cleared_at      | `DateTime`                |             |
| reconciled_at   | `DateTime`                |             |
| direction       | `ScribePaymentDirection!` |             |
| method          | `ScribePaymentMethod!`    |             |
| status          | `ScribePaymentStatus!`    |             |
| bank_account    | `ScribeBankAccount`       |             |
| reference       | `String`                  |             |
| notes           | `String`                  |             |
| source          | `String!`                 |             |
| external_id     | `String`                  |             |
| external_url    | `String`                  |             |
| reversed_at     | `DateTime`                |             |
| reversed_by     | `User`                    |             |
| reversal_reason | `String`                  |             |
| metadata        | `Mixed`                   |             |
| user            | `User`                    |             |
| company         | `Company!`                |             |
| created_at      | `DateTime!`               |             |
| updated_at      | `DateTime!`               |             |
| files           | `FilesystemPaginator!`    |             |
