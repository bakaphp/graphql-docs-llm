# OBJECT: HrEmployee

## Estructura

| Campo               | Tipo                         | Descripción |
| :------------------ | :--------------------------- | :---------- |
| id                  | `ID!`                        |             |
| uuid                | `String!`                    |             |
| employee_number     | `String`                     |             |
| description         | `String`                     |             |
| employment_type     | `HrEmploymentTypeEnum!`      |             |
| home_entity         | `String`                     |             |
| status              | `HrEmployeeStatusEnum!`      |             |
| hired_at            | `Date`                       |             |
| terminated_at       | `Date`                       |             |
| user                | `User`                       |             |
| people              | `People`                     |             |
| department          | `HrDepartment`               |             |
| position            | `HrPosition`                 |             |
| manager             | `HrEmployee`                 |             |
| reports             | `[HrEmployee!]!`             |             |
| seatAssignments     | `[HrSeatAssignment!]!`       |             |
| leaveBalances       | `[HrLeaveBalance!]!`         |             |
| leaveRequests       | `[HrLeaveRequest!]!`         |             |
| compensations       | `[HrEmployeeCompensation!]!` |             |
| currentCompensation | `HrEmployeeCompensation`     |             |
| company             | `Company!`                   |             |
| created_at          | `DateTime`                   |             |
| updated_at          | `DateTime`                   |             |
| files               | `FilesystemPaginator!`       |             |
