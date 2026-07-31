# OBJECT: VoiceAgentSpec

Compiled agent spec consumed by the external voice runtime (Pipecat / Cloud Run)
at the start of each call. Read-only, server-to-server (@guardByAppKey).

## Estructura

| Campo          | Tipo                         | Descripción                                                               |
| :------------- | :--------------------------- | :------------------------------------------------------------------------ |
| agent_id       | `String!`                    | The agent uuid; the runtime caches by agent_id + version.                 |
| version        | `String!`                    | Changes whenever the agent is edited, so the runtime refreshes its cache. |
| language       | `String`                     |                                                                           |
| prompts        | `VoiceAgentPrompts!`         |                                                                           |
| models         | `VoiceAgentModels!`          |                                                                           |
| telephony      | `VoiceAgentTelephony`        |                                                                           |
| context_schema | `[VoiceAgentContextField!]!` |                                                                           |
