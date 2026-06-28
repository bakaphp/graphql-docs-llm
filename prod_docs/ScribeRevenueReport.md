# OBJECT: ScribeRevenueReport

## Estructura

| Campo               | Tipo                   | Descripción |
| :------------------ | :--------------------- | :---------- |
| period_start        | `Date!`                |             |
| period_end          | `Date!`                |             |
| currency            | `String!`              |             |
| group_by            | `String!`              |             |
| rows                | `[ScribeRevenueRow!]!` |             |
| total_gross_revenue | `Money!`               |             |
| total_discounts     | `Money!`               |             |
| total_net_revenue   | `Money!`               |             |
| total_invoice_count | `Int!`                 |             |
