# OBJECT: NervousSystemTask

## Estructura

| Campo          | Tipo                 | Descripción |
| :------------- | :------------------- | :---------- |
| id             | `ID!`                |             |
| uuid           | `String!`            |             |
| plan           | `NervousSystemPlan!` |             |
| agent          | `AgentAi`            |             |
| sequence       | `Int!`               |             |
| title          | `String!`            |             |
| description    | `String`             |             |
| status         | `String!`            |             |
| result         | `Mixed`              |             |
| blocked_reason | `String`             |             |
| started_at     | `DateTime`           |             |
| completed_at   | `DateTime`           |             |
| created_at     | `DateTime!`          |             |
| updated_at     | `DateTime`           |             |
