# OBJECT: UserChatResponse

## Estructura

| Campo                                                                                      | Tipo            | Descripción                                                                              |
| :----------------------------------------------------------------------------------------- | :-------------- | :--------------------------------------------------------------------------------------- |
| response                                                                                   | `Mixed!`        |                                                                                          |
| session_id                                                                                 | `String!`       |                                                                                          |
| message                                                                                    | `Message`       | Null when status is `pending` — the turn is on the queue. The broadcast then carries     |
| `message_id`; fetch the turn with it (`response` in the payload is dropped whenever the    |                 |                                                                                          |
| push exceeds Pusher's ~10KB cap, so never rely on it being there).                         |                 |                                                                                          |
| channel                                                                                    | `SocialChannel` | The session's channel. Null only on the very first turn of a brand-new session, which is |
| where the channel gets created; every later turn carries it, pending or not.               |                 |                                                                                          |
| status                                                                                     | `String!`       | `completed` when the reply is in this response, `pending` when it will be broadcast.     |
| broadcast_channel                                                                          | `String!`       | Broadcast channel to subscribe to for this session, e.g. `agent-chat-141-11569-<uuid>`.  |
| Events: `agent.chat.response` and `agent.chat.failed`. Always use this value — the name is |                 |                                                                                          |
| keyed on the AGENT's tenant, which for a global agent is not the caller's company.         |                 |                                                                                          |
