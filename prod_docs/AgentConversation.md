# OBJECT: AgentConversation

## Estructura

| Campo       | Tipo                                 | Descripción |
| :---------- | :----------------------------------- | :---------- |
| id          | `ID!`                                |             |
| agent       | `AgentAi`                            |             |
| user        | `User`                               |             |
| participant | `AgentConversationParticipant`       |             |
| title       | `String!`                            |             |
| meta        | `Mixed`                              |             |
| created_at  | `DateTime!`                          |             |
| updated_at  | `DateTime!`                          |             |
| messages    | `AgentConversationMessagePaginator!` |             |
