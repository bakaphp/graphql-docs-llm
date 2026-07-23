# OBJECT: HrLeaveRequest

## Estructura

| Campo      | Tipo                        | Descripción |
| :--------- | :-------------------------- | :---------- |
| id         | `ID!`                       |             |
| uuid       | `String!`                   |             |
| start_date | `Date!`                     |             |
| end_date   | `Date!`                     |             |
| days       | `Float!`                    |             |
| reason     | `String`                    |             |
| status     | `HrLeaveRequestStatusEnum!` |             |
| decided_at | `DateTime`                  |             |
| employee   | `HrEmployee!`               |             |
| leaveType  | `HrLeaveType!`              |             |
| approver   | `HrEmployee`                |             |
| created_at | `DateTime`                  |             |
