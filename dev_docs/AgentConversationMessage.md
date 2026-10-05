# OBJECT: AgentConversationMessage

## Estructura

| Campo        | Tipo                           | Descripción |
| :----------- | :----------------------------- | :---------- |
| id           | `ID!`                          |             |
| conversation | `AgentConversation!`           |             |
| user         | `User`                         |             |
| participant  | `AgentConversationParticipant` |             |
| agent        | `String!`                      |             |
| role         | `String!`                      |             |
| status       | `String!`                      |             |
| is_public    | `Boolean!`                     |             |
| content      | `String`                       |             |
| attachments  | `Mixed`                        |             |
| tool_calls   | `Mixed`                        |             |
| tool_results | `Mixed`                        |             |
| steps        | `Mixed`                        |             |
| usage        | `Mixed`                        |             |
| meta         | `Mixed`                        |             |
| created_at   | `DateTime!`                    |             |
| updated_at   | `DateTime!`                    |             |
