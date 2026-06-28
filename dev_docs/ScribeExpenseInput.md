# INPUT_OBJECT: ScribeExpenseInput

## Estructura

| Campo                  | Tipo                         | Descripción |
| :--------------------- | :--------------------------- | :---------- |
| expense_date           | `Date!`                      |             |
| currency               | `String!`                    |             |
| fx_rate_to_base        | `Float`                      |             |
| paid_by                | `ScribeExpensePaidBy!`       |             |
| paid_by_users_id       | `Int`                        |             |
| payment_method_id      | `Int`                        |             |
| bank_account_id        | `Int`                        |             |
| vendor_organization_id | `Int`                        |             |
| expense_number         | `String`                     |             |
| notes                  | `String`                     |             |
| internal_notes         | `String`                     |             |
| regional_compliance    | `Mixed`                      |             |
| tax_metadata           | `Mixed`                      |             |
| metadata               | `Mixed`                      |             |
| lines                  | `[ScribeExpenseLineInput!]!` |             |
