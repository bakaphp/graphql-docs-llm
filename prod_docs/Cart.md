# OBJECT: Cart

## Estructura

| Campo          | Tipo             | Descripción |
| :------------- | :--------------- | :---------- |
| id             | `ID!`            |             |
| items          | `[CartItem!]!`   |             |
| discounts      | `[CartDiscount]` |             |
| total_discount | `Money!`         |             |
| total          | `Money!`         |             |
| shipping       | `CartShipping`   |             |
| subtotal       | `Money!`         |             |
