# OBJECT: HrPosition

## Estructura

| Campo       | Tipo            | Descripción |
| :---------- | :-------------- | :---------- |
| id          | `ID!`           |             |
| uuid        | `String!`       |             |
| title       | `String!`       |             |
| level       | `String`        |             |
| description | `String`        |             |
| is_active   | `Boolean!`      |             |
| department  | `HrDepartment`  |             |
| payBands    | `[HrPayBand!]!` |             |
| company     | `Company!`      |             |
| created_at  | `DateTime`      |             |
| updated_at  | `DateTime`      |             |
