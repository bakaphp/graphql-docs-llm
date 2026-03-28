# OBJECT: OrderTransitionHistory

## Estructura

| Campo               | Tipo          | Descripción |
| :------------------ | :------------ | :---------- |
| id                  | `ID!`         |             |
| order_id            | `ID!`         |             |
| order               | `Order`       |             |
| fromStatus          | `OrderStatus` |             |
| toStatus            | `OrderStatus` |             |
| changedBy           | `User`        |             |
| endedBy             | `User`        |             |
| description         | `String`      |             |
| metadata            | `Mixed`       |             |
| is_current          | `Boolean`     |             |
| changed_at          | `String`      |             |
| ended_at            | `String`      |             |
| duration_in_seconds | `Int`         |             |
| payment_type        | `String`      |             |
| is_paid             | `Boolean!`    |             |
| payment             | `Payment`     |             |
