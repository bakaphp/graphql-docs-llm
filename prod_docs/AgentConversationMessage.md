# OBJECT: AgentConversationMessage

## Estructura

| Campo        | Tipo                           | Descripción                                                                                                             |
| :----------- | :----------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| id           | `ID!`                          |                                                                                                                         |
| conversation | `AgentConversation!`           |                                                                                                                         |
| user         | `User`                         |                                                                                                                         |
| participant  | `AgentConversationParticipant` |                                                                                                                         |
| agent        | `String!`                      |                                                                                                                         |
| role         | `String!`                      |                                                                                                                         |
| status       | `String!`                      |                                                                                                                         |
| is_public    | `Boolean!`                     |                                                                                                                         |
| kind         | `String`                       | null for a conversational turn; `summary`, `tool_call` or `tool_call_result` for the rows the person's chat leaves out. |
| content      | `String`                       |                                                                                                                         |
| attachments  | `Mixed`                        |                                                                                                                         |
| tool_calls   | `Mixed`                        |                                                                                                                         |
| tool_results | `Mixed`                        |                                                                                                                         |
| steps        | `Mixed`                        |                                                                                                                         |
| usage        | `Mixed`                        |                                                                                                                         |
| meta         | `Mixed`                        |                                                                                                                         |
| created_at   | `DateTime!`                    |                                                                                                                         |
| updated_at   | `DateTime!`                    |                                                                                                                         |
