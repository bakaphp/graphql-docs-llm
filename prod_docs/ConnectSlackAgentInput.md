# INPUT_OBJECT: ConnectSlackAgentInput

## Estructura

| Campo          | Tipo      | Descripción                                                                                   |
| :------------- | :-------- | :-------------------------------------------------------------------------------------------- |
| agent_id       | `ID!`     |                                                                                               |
| bot_token      | `String!` | Bot token (xoxb-…) from the app's OAuth & Permissions page. A user token (xoxp-) is rejected. |
| signing_secret | `String!` | Signing secret from the app's Basic Information page. Used to verify every inbound event.     |
