# OBJECT: AgentSwarm

## Estructura

| Campo             | Tipo                   | Descripción |
| :---------------- | :--------------------- | :---------- |
| id                | `ID!`                  |             |
| uuid              | `String!`              |             |
| name              | `String!`              |             |
| slug              | `String!`              |             |
| description       | `String`               |             |
| status            | `String!`              |             |
| config            | `JSON`                 |             |
| agent_count       | `Int!`                 |             |
| deployment_status | `String!`              |             |
| is_active         | `Boolean!`             |             |
| agents            | `[AgentAi!]!`          |             |
| members           | `[AgentSwarmMember!]!` |             |
| created_at        | `DateTime!`            |             |
| updated_at        | `DateTime`             |             |
