# INPUT_OBJECT: UpdateHrEmployeeInput

## Estructura

| Campo               | Tipo                   | Descripción |
| :------------------ | :--------------------- | :---------- |
| people_id           | `ID`                   |             |
| department_id       | `ID`                   |             |
| position_id         | `ID`                   |             |
| manager_employee_id | `ID`                   |             |
| employee_number     | `String`               |             |
| description         | `String`               |             |
| employment_type     | `HrEmploymentTypeEnum` |             |
| home_entity         | `String`               |             |
| status              | `HrEmployeeStatusEnum` |             |
| hired_at            | `Date`                 |             |
| end_is_voluntary    | `Boolean`              |             |
