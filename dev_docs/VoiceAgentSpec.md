# OBJECT: VoiceAgentSpec

## Estructura

| Campo          | Tipo                         | Descripción |
| :------------- | :--------------------------- | :---------- |
| agent_id       | `String!`                    |             |
| version        | `String!`                    |             |
| language       | `String`                     |             |
| prompts        | `VoiceAgentPrompts!`         |             |
| models         | `VoiceAgentModels!`          |             |
| telephony      | `VoiceAgentTelephony`        |             |
| context_schema | `[VoiceAgentContextField!]!` |             |
| tools          | `[VoiceAgentTool!]!`         |             |
