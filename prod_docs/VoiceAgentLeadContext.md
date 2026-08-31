# OBJECT: VoiceAgentLeadContext

## Estructura

| Campo            | Tipo      | Descripción                                                             |
| :--------------- | :-------- | :---------------------------------------------------------------------- |
| lead_id          | `Int`     |                                                                         |
| name             | `String`  |                                                                         |
| status           | `String`  |                                                                         |
| stage            | `String`  |                                                                         |
| owner            | `String`  |                                                                         |
| vehicle_interest | `String`  |                                                                         |
| context_info     | `String`  |                                                                         |
| is_returning     | `Boolean` | True when we already know this number (has a lead, or a prior contact). |
| summary          | `String`  | Short natural-language block (who + recent history) for the LLM.        |
