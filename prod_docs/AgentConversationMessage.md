# OBJECT: AgentConversationMessage

## Estructura

| Campo        | Tipo                 | Descripción |
| :----------- | :------------------- | :---------- |
| id           | `ID!`                |             |
| conversation | `AgentConversation!` |             |
| user         | `User`               |             |
| agent        | `String!`            |             |
| role         | `String!`            |             |
| is_public    | `Boolean!`           |             |
| content      | `String`             |             |
| attachments  | `Mixed`              |             |
| tool_calls   | `Mixed`              |             |
| tool_results | `Mixed`              |             |
| usage        | `Mixed`              |             |
| meta         | `Mixed`              |             |
| created_at   | `DateTime!`          |             |
| updated_at   | `DateTime!`          |             |
