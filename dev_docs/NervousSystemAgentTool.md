# OBJECT: NervousSystemAgentTool

## Estructura

| Campo      | Tipo                 | Descripción |
| :--------- | :------------------- | :---------- |
| id         | `ID!`                |             |
| uuid       | `String!`            |             |
| agent      | `AgentAi!`           |             |
| tool       | `NervousSystemTool!` |             |
| grantedBy  | `User`               |             |
| granted_at | `DateTime!`          |             |
| expires_at | `DateTime`           |             |
| is_active  | `Boolean!`           |             |
| is_deleted | `Boolean!`           |             |
| config     | `Mixed`              |             |
| created_at | `DateTime!`          |             |
| updated_at | `DateTime`           |             |
