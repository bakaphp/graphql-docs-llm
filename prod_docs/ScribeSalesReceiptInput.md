# INPUT_OBJECT: ScribeSalesReceiptInput

## Estructura

| Campo                    | Tipo                              | Descripción |
| :----------------------- | :-------------------------------- | :---------- |
| customer_organization_id | `Int`                             |             |
| receipt_date             | `Date`                            |             |
| currency                 | `String!`                         |             |
| fx_rate_to_base          | `Float`                           |             |
| receipt_number           | `String`                          |             |
| bank_account_id          | `Int`                             |             |
| notes                    | `String`                          |             |
| internal_notes           | `String`                          |             |
| regional_compliance      | `Mixed`                           |             |
| tax_metadata             | `Mixed`                           |             |
| metadata                 | `Mixed`                           |             |
| lines                    | `[ScribeSalesReceiptLineInput!]!` |             |
