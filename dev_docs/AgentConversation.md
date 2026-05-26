# OBJECT: AgentConversation

A conversation record. Surfaces both in-Kanvas-runtime conversations (written by
KanvasConversationStore) and Hermes-runtime conversations (written by the
agentRuntimeCollectSessionTranscripts mutation). Existing in-Kanvas rows carry
agent=null; Hermes rows always link to their owning Agent.

## Estructura

| Campo      | Tipo                                 | Descripción                                                                                                                                |
| :--------- | :----------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| id         | `ID!`                                |                                                                                                                                            |
| agent      | `AgentAi`                            |                                                                                                                                            |
| user       | `User`                               |                                                                                                                                            |
| title      | `String!`                            |                                                                                                                                            |
| meta       | `Mixed`                              | Free-form runtime-specific session metadata. For Hermes: model, system_prompt, source, parent_session_id, costs, handoff_state, watermark. |
| created_at | `DateTime!`                          |                                                                                                                                            |
| updated_at | `DateTime!`                          |                                                                                                                                            |
| messages   | `AgentConversationMessagePaginator!` |                                                                                                                                            |
