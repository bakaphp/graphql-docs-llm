# OBJECT: ScribeExpenseReceipt

## Estructura

| Campo       | Tipo             | Descripción |
| :---------- | :--------------- | :---------- |
| id          | `ID!`            |             |
| expense     | `ScribeExpense!` |             |
| filesystem  | `Filesystem!`    |             |
| uploaded_at | `DateTime!`      |             |
| uploaded_by | `User`           |             |
| metadata    | `Mixed`          |             |
