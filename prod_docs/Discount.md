# OBJECT: Discount

## Estructura

| Campo               | Tipo                   | Descripción |
| :------------------ | :--------------------- | :---------- |
| id                  | `ID!`                  |             |
| uuid                | `String!`              |             |
| name                | `String!`              |             |
| description         | `String`               |             |
| discount_type       | `DiscountType!`        |             |
| value               | `Float!`               |             |
| is_percentage       | `Boolean!`             |             |
| min_order_value     | `Float`                |             |
| max_discount_amount | `Float`                |             |
| code                | `String`               |             |
| start_date          | `DateTime`             |             |
| end_date            | `DateTime`             |             |
| is_active           | `Boolean!`             |             |
| usage_limit         | `Int`                  |             |
| usage_count         | `Int!`                 |             |
| is_one_per_customer | `Boolean!`             |             |
| company             | `Company!`             |             |
| conditions          | `[DiscountCondition!]` |             |
| order_discounts     | `[OrderDiscount!]`     |             |
| created_at          | `DateTime!`            |             |
| updated_at          | `DateTime!`            |             |
