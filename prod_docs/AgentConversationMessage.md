# OBJECT: AgentConversationMessage

## Estructura

| Campo        | Tipo                 | Descripción                                                                                                                                         |
| :----------- | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| id           | `ID!`                |                                                                                                                                                     |
| conversation | `AgentConversation!` |                                                                                                                                                     |
| user         | `User`               |                                                                                                                                                     |
| agent        | `String!`            | Source-tag string. In-Kanvas-runtime: a Laravel\Ai\Agent class name. Hermes-runtime: the Kanvas Agent's UUID.                                       |
| role         | `String!`            |                                                                                                                                                     |
| content      | `String`             |                                                                                                                                                     |
| attachments  | `Mixed`              |                                                                                                                                                     |
| tool_calls   | `Mixed`              |                                                                                                                                                     |
| tool_results | `Mixed`              |                                                                                                                                                     |
| usage        | `Mixed`              |                                                                                                                                                     |
| meta         | `Mixed`              | Runtime-specific per-message fields: tool_call_id, tool_name, finish_reason, token_count, reasoning__, codex__, occurred_at, runtime_source_reader. |
| created_at   | `DateTime!`          |                                                                                                                                                     |
| updated_at   | `DateTime!`          |                                                                                                                                                     |
