# INPUT_OBJECT: CreateOrderStatusInput

## Estructura

| Campo            | Tipo        | Descripción |
| :--------------- | :---------- | :---------- |
| order_type_id    | `ID!`       |             |
| name             | `String!`   |             |
| slug             | `String!`   |             |
| is_default       | `Boolean`   |             |
| is_final         | `Boolean`   |             |
| sequence         | `Int!`      |             |
| transitions_from | `[String!]` |             |
