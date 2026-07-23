# OBJECT: HrLeaveType

## Estructura

| Campo               | Tipo                   | Descripción |
| :------------------ | :--------------------- | :---------- |
| id                  | `ID!`                  |             |
| uuid                | `String!`              |             |
| name                | `String!`              |             |
| slug                | `String!`              |             |
| is_paid             | `Boolean!`             |             |
| accrual_method      | `HrAccrualMethodEnum!` |             |
| default_annual_days | `Float`                |             |
| carryover_max_days  | `Float`                |             |
| requires_approval   | `Boolean!`             |             |
| color               | `String`               |             |
| is_active           | `Boolean!`             |             |
| company             | `Company!`             |             |
| created_at          | `DateTime`             |             |
| updated_at          | `DateTime`             |             |
