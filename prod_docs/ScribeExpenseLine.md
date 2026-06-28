# OBJECT: ScribeExpenseLine

## Estructura

| Campo             | Tipo             | Descripción |
| :---------------- | :--------------- | :---------- |
| id                | `ID!`            |             |
| sort_order        | `Int!`           |             |
| item              | `ScribeItem`     |             |
| description       | `String`         |             |
| amount_native     | `Money!`         |             |
| amount_base       | `Money!`         |             |
| tax_amount_native | `Money!`         |             |
| tax_amount_base   | `Money!`         |             |
| expense_account   | `ScribeAccount!` |             |
| class_id          | `Int`            |             |
| department_id     | `Int`            |             |
| metadata          | `Mixed`          |             |
