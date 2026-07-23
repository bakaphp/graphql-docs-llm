# INPUT_OBJECT: HrEmployeeInput

## Estructura

| Campo               | Tipo                   | Descripción |
| :------------------ | :--------------------- | :---------- |
| users_id            | `ID!`                  |             |
| people_id           | `ID!`                  |             |
| position_id         | `ID!`                  |             |
| hired_at            | `Date!`                |             |
| department_id       | `ID`                   |             |
| manager_employee_id | `ID`                   |             |
| employee_number     | `String`               |             |
| description         | `String`               |             |
| employment_type     | `HrEmploymentTypeEnum` |             |
| home_entity         | `String`               |             |
| status              | `HrEmployeeStatusEnum` |             |
