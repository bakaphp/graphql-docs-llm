# OBJECT: AgentDeploymentType

## Estructura

| Campo             | Tipo               | Descripción |
| :---------------- | :----------------- | :---------- |
| id                | `ID!`              |             |
| uuid              | `String!`          |             |
| agent_id          | `ID!`              |             |
| agent_machine_id  | `ID!`              |             |
| system_user       | `String!`          |             |
| home_directory    | `String!`          |             |
| gateway_port      | `Int!`             |             |
| proxy_port        | `Int!`             |             |
| container_name    | `String!`          |             |
| status            | `String!`          |             |
| launched_at       | `DateTime`         |             |
| terminated_at     | `DateTime`         |             |
| last_health_check | `DateTime`         |             |
| error_message     | `String`           |             |
| created_at        | `DateTime!`        |             |
| updated_at        | `DateTime!`        |             |
| agent             | `AgentAi`          |             |
| machine           | `AgentMachineType` |             |
