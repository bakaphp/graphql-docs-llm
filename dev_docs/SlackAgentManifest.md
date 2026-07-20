# OBJECT: SlackAgentManifest

## Estructura

| Campo         | Tipo      | Descripción                                                                                          |
| :------------ | :-------- | :--------------------------------------------------------------------------------------------------- |
| manifest_json | `String!` | Slack app manifest for this agent. Paste into Slack's 'create from manifest' if the link is blocked. |
| install_url   | `String!` | Open this: Slack creates the app in the user's own workspace, pre-wired to us. Needs a Slack admin.  |
| request_url   | `String!` | Where the agent's Slack app posts events. Stable across disconnect/reconnect.                        |
