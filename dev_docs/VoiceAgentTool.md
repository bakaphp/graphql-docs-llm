# OBJECT: VoiceAgentTool

## Estructura

| Campo       | Tipo       | Descripción                                                                                                                                                                  |
| :---------- | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | `String!`  |                                                                                                                                                                              |
| description | `String`   |                                                                                                                                                                              |
| parameters  | `Mixed`    | JSON Schema for the tool's arguments: { type, properties, required }.                                                                                                        |
| read_only   | `Boolean!` | True for tools with no side effects: the runtime runs them in the background while the agent keeps talking. False means a write (the agent waits; repeats are deduplicated). |
