# OBJECT: ScribePurchaseOrderLine

## Estructura

| Campo        | Tipo     | Descripción |
| :----------- | :------- | :---------- |
| id           | `ID!`    |             |
| line_number  | `Int!`   |             |
| sku          | `String` |             |
| description  | `String` |             |
| order_qty    | `Float!` |             |
| open_qty     | `Float!` |             |
| received_qty | `Float!` |             |
| unit_cost    | `Float!` |             |
| ext_cost     | `Money!` |             |
| metadata     | `Mixed`  |             |
