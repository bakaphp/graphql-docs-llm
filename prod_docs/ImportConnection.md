# OBJECT: ImportConnection

## Estructura

| Campo            | Tipo            | Descripción |
| :--------------- | :-------------- | :---------- |
| id               | `ID!`           |             |
| uuid             | `String!`       |             |
| name             | `String!`       |             |
| driver           | `ImportDriver!` |             |
| host             | `String!`       |             |
| port             | `Int!`          |             |
| username         | `String!`       |             |
| root             | `String`        |             |
| passive          | `Boolean!`      |             |
| default_schedule | `String`        |             |
| timezone         | `String`        |             |
| is_app_wide      | `Boolean!`      |             |
| created_at       | `DateTime!`     |             |
| updated_at       | `DateTime`      |             |
