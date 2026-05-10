# OBJECT: NervousSystemAgentSkill

## Estructura

| Campo      | Tipo                  | Descripción |
| :--------- | :-------------------- | :---------- |
| id         | `ID!`                 |             |
| uuid       | `String!`             |             |
| agent      | `AgentAi!`            |             |
| skill      | `NervousSystemSkill!` |             |
| grantedBy  | `User`                |             |
| granted_at | `DateTime!`           |             |
| expires_at | `DateTime`            |             |
| is_active  | `Boolean!`            |             |
| config     | `Mixed`               |             |
| created_at | `DateTime!`           |             |
| updated_at | `DateTime`            |             |
