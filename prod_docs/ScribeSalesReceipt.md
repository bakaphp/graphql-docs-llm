# OBJECT: ScribeSalesReceipt

## Estructura

| Campo                 | Tipo                         | Descripción |
| :-------------------- | :--------------------------- | :---------- |
| id                    | `ID!`                        |             |
| uuid                  | `String!`                    |             |
| receipt_number        | `String`                     |             |
| customer              | `Organization`               |             |
| billable_display_name | `String`                     |             |
| billable_email        | `String`                     |             |
| status                | `ScribeSalesReceiptStatus!`  |             |
| receipt_date          | `Date!`                      |             |
| voided_at             | `DateTime`                   |             |
| void_reason_code      | `String`                     |             |
| currency              | `String!`                    |             |
| fx_rate_to_base       | `Float!`                     |             |
| subtotal_native       | `Money!`                     |             |
| tax_native            | `Money!`                     |             |
| discount_native       | `Money!`                     |             |
| total_native          | `Money!`                     |             |
| subtotal_base         | `Money!`                     |             |
| tax_base              | `Money!`                     |             |
| discount_base         | `Money!`                     |             |
| total_base            | `Money!`                     |             |
| tax_metadata          | `Mixed`                      |             |
| regional_compliance   | `Mixed`                      |             |
| notes                 | `String`                     |             |
| internal_notes        | `String`                     |             |
| source                | `String!`                    |             |
| external_id           | `String`                     |             |
| origin                | `ScribeJournalEntryOrigin!`  |             |
| metadata              | `Mixed`                      |             |
| company               | `Company!`                   |             |
| user                  | `User`                       |             |
| lines                 | `[ScribeSalesReceiptLine!]!` |             |
| bank_account          | `ScribeBankAccount`          |             |
| created_at            | `DateTime!`                  |             |
| updated_at            | `DateTime!`                  |             |
