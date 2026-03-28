# OBJECT: AgentAi

## Estructura

| Campo             | Tipo                    | Descripción |
| :---------------- | :---------------------- | :---------- |
| id                | `ID!`                   |             |
| company           | `[Company!]!`           |             |
| user              | `[User!]!`              |             |
| type              | `agentType!`            |             |
| model             | `AgentAiModel`          |             |
| companyTaskList   | `TaskList`              |             |
| parent            | `AgentAi`               |             |
| children          | `[AgentAi!]!`           |             |
| swarms            | `[AgentSwarm!]!`        |             |
| uuid              | `String!`               |             |
| name              | `String!`               |             |
| description       | `String`                |             |
| config            | `Mixed`                 |             |
| role              | `Mixed`                 |             |
| soul              | `String`                |             |
| instructions      | `String`                |             |
| output_format     | `String`                |             |
| identity          | `Mixed`                 |             |
| user_context      | `String`                |             |
| tools_config      | `String`                |             |
| deployment_status | `String!`               |             |
| activeDeployment  | `AgentDeploymentType`   |             |
| agent_model_id    | `ID`                    |             |
| parent_id         | `ID`                    |             |
| is_active         | `Boolean!`              |             |
| created_at        | `DateTime!`             |             |
| updated_at        | `DateTime!`             |             |
| files             | `FilesystemPaginator!`  |             |
| custom_fields     | `CustomFieldPaginator!` |             |
