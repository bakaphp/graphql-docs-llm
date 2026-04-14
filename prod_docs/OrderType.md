# OBJECT: OrderType

## Estructura

| Campo          | Tipo                    | Descripción |
| :------------- | :---------------------- | :---------- |
| id             | `ID!`                   |             |
| name           | `String!`               |             |
| title          | `String`                |             |
| total_statuses | `Int!`                  |             |
| created_at     | `String`                |             |
| updated_at     | `String`                |             |
| statuses       | `OrderStatusPaginator!` |             |
