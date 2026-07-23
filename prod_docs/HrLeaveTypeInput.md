# INPUT_OBJECT: HrLeaveTypeInput

## Estructura

| Campo               | Tipo                  | Descripción |
| :------------------ | :-------------------- | :---------- |
| name                | `String!`             |             |
| is_paid             | `Boolean`             |             |
| accrual_method      | `HrAccrualMethodEnum` |             |
| default_annual_days | `Float`               |             |
| carryover_max_days  | `Float`               |             |
| requires_approval   | `Boolean`             |             |
| color               | `String`              |             |
