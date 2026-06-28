# OBJECT: ScribeJournalEntryLine

## Estructura

| Campo                  | Tipo             | Descripción |
| :--------------------- | :--------------- | :---------- |
| id                     | `ID!`            |             |
| sort_order             | `Int!`           |             |
| account                | `ScribeAccount!` |             |
| debit_native           | `Money!`         |             |
| credit_native          | `Money!`         |             |
| debit_base             | `Money!`         |             |
| credit_base            | `Money!`         |             |
| currency               | `String!`        |             |
| fx_rate_to_base        | `Float!`         |             |
| customer_billable_type | `String`         |             |
| customer_billable_id   | `Int`            |             |
| vendor_billable_type   | `String`         |             |
| vendor_billable_id     | `Int`            |             |
| item_id                | `Int`            |             |
| class_id               | `Int`            |             |
| department_id          | `Int`            |             |
| memo                   | `String`         |             |
| metadata               | `Mixed`          |             |
