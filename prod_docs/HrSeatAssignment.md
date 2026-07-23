# OBJECT: HrSeatAssignment

## Estructura

| Campo          | Tipo            | Descripción |
| :------------- | :-------------- | :---------- |
| id             | `ID!`           |             |
| allocation_pct | `Int!`          |             |
| is_primary     | `Boolean!`      |             |
| effective_from | `Date!`         |             |
| effective_to   | `Date`          |             |
| employee       | `HrEmployee!`   |             |
| department     | `HrDepartment!` |             |
| created_at     | `DateTime`      |             |
| updated_at     | `DateTime`      |             |
