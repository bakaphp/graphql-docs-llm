# OBJECT: AgentLogEntry

## Estructura

| Campo | Tipo      | Descripción                                                             |
| :---- | :-------- | :---------------------------------------------------------------------- |
| ts    | `String!` | ISO-8601 timestamp from the log line, empty string when unavailable     |
| level | `String!` | Log level: debug                                                        |
| msg   | `String!` | Human-readable log message                                              |
| meta  | `String`  | JSON-encoded map of any extra structured fields present in the log line |
