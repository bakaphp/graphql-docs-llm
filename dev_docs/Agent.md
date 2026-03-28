# OBJECT: Agent

## Estructura

| Campo        | Tipo           | Descripción |
| :----------- | :------------- | :---------- |
| id           | `ID!`          |             |
| name         | `String!`      |             |
| member_id    | `Int!`         |             |
| user         | `User!`        |             |
| owner        | `User!`        |             |
| company      | `Company!`     |             |
| total_leads  | `Int!`         |             |
| status       | `AgentStatus!` |             |
| sponsor_name | `String`       |             |
| sponsor      | `User`         |             |
| created_at   | `DateTime!`    |             |
