# OBJECT: ScribeTrialBalance

## Estructura

| Campo         | Tipo                        | Descripción |
| :------------ | :-------------------------- | :---------- |
| as_of         | `Date!`                     |             |
| currency      | `String!`                   |             |
| rows          | `[ScribeTrialBalanceRow!]!` |             |
| total_debits  | `Money!`                    |             |
| total_credits | `Money!`                    |             |
| is_balanced   | `Boolean!`                  |             |
