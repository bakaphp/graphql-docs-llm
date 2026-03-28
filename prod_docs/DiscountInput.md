# INPUT_OBJECT: DiscountInput

## Estructura

| Campo               | Tipo                        | Descripción |
| :------------------ | :-------------------------- | :---------- |
| name                | `String!`                   |             |
| description         | `String!`                   |             |
| discount_type_id    | `ID!`                       |             |
| value               | `Float!`                    |             |
| is_percentage       | `Boolean`                   |             |
| min_order_value     | `Float`                     |             |
| max_discount_amount | `Float`                     |             |
| code                | `String`                    |             |
| start_date          | `DateTime`                  |             |
| end_date            | `DateTime`                  |             |
| is_active           | `Boolean`                   |             |
| usage_limit         | `Int`                       |             |
| is_one_per_customer | `Boolean`                   |             |
| conditions          | `[DiscountConditionInput!]` |             |
