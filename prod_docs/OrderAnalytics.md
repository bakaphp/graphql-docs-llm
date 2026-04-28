# OBJECT: OrderAnalytics

## Estructura

| Campo                 | Tipo                         | Descripción                                                                     |
| :-------------------- | :--------------------------- | :------------------------------------------------------------------------------ |
| periods               | `[AnalyticsPoint!]!`         | Count + total revenue per bucket.                                               |
| total                 | `Int!`                       |                                                                                 |
| total_value           | `Float!`                     | Sum of `total_gross_amount` across the date range (ignores currency mix in v1). |
| by_status             | `[AnalyticsCategoryPoint!]!` |                                                                                 |
| by_payment_status     | `[AnalyticsCategoryPoint!]!` |                                                                                 |
| by_fulfillment_status | `[AnalyticsCategoryPoint!]!` |                                                                                 |
