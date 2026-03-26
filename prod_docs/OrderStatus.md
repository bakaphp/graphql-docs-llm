# OBJECT: OrderStatus



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| companies_id | `ID!` |  |
| company | `Company!` |  |
| name | `String!` |  |
| slug | `String!` |  |
| order_type_id | `ID!` |  |
| order_type | `OrderType!` |  |
| is_default | `Boolean!` |  |
| is_final | `Boolean!` |  |
| sequence | `Int!` |  |
| metadata | `Mixed` |  |
