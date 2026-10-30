# OBJECT: InsuranceSearchEntry

## Estructura

| Campo             | Tipo                         | Descripción |
| :---------------- | :--------------------------- | :---------- |
| rank              | `Int!`                       |             |
| insurer           | `InsuranceSearchInsurer!`    |             |
| plan              | `InsuranceSearchPlan!`       |             |
| quote_number      | `String!`                    |             |
| price             | `Float`                      |             |
| premium           | `Float`                      |             |
| tax               | `Float`                      |             |
| total             | `Float`                      |             |
| currency          | `String`                     |             |
| can_emit          | `Boolean`                    |             |
| inspection_status | `String`                     |             |
| payment_options   | `[InsurancePaymentOption!]!` |             |
| is_sponsored      | `Boolean!`                   |             |
| is_recommended    | `Boolean!`                   |             |
| is_contractable   | `Boolean!`                   |             |
