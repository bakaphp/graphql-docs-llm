# OBJECT: AgentSwarmMember

## Estructura

| Campo          | Tipo                   | Descripción |
| :------------- | :--------------------- | :---------- |
| id             | `ID!`                  |             |
| agent          | `AgentAi!`             |             |
| role           | `String`               |             |
| parent_id      | `ID`                   |             |
| reports_to     | `AgentSwarmMember`     |             |
| direct_reports | `[AgentSwarmMember!]!` |             |
| created_at     | `DateTime!`            |             |
| updated_at     | `DateTime`             |             |
