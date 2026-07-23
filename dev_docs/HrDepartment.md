# OBJECT: HrDepartment

## Estructura

| Campo           | Tipo                   | Descripción |
| :-------------- | :--------------------- | :---------- |
| id              | `ID!`                  |             |
| uuid            | `String!`              |             |
| name            | `String!`              |             |
| slug            | `String!`              |             |
| code            | `String`               |             |
| outcome_line    | `String`               |             |
| description     | `String`               |             |
| parent          | `HrDepartment`         |             |
| children        | `[HrDepartment!]!`     |             |
| employees       | `[HrEmployee!]!`       |             |
| seatAssignments | `[HrSeatAssignment!]!` |             |
| company         | `Company!`             |             |
| created_at      | `DateTime`             |             |
| updated_at      | `DateTime`             |             |
