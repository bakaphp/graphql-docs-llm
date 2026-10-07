# OBJECT: AgentConversation

## Estructura

| Campo                                                                      | Tipo                                 | Descripción                                                                              |
| :------------------------------------------------------------------------- | :----------------------------------- | :--------------------------------------------------------------------------------------- |
| id                                                                         | `ID!`                                |                                                                                          |
| agent                                                                      | `AgentAi`                            |                                                                                          |
| user                                                                       | `User`                               |                                                                                          |
| participant                                                                | `AgentConversationParticipant`       |                                                                                          |
| title                                                                      | `String!`                            |                                                                                          |
| meta                                                                       | `Mixed`                              |                                                                                          |
| created_at                                                                 | `DateTime!`                          |                                                                                          |
| updated_at                                                                 | `DateTime!`                          |                                                                                          |
| messages                                                                   | `AgentConversationMessagePaginator!` | The chat as the person sees it. Compaction summaries and tool rounds are left out unless |
| include_internal is true, which is the backend view of what the agent did. |                                      |                                                                                          |
