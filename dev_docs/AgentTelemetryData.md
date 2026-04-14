# OBJECT: AgentTelemetryData

## Estructura

| Campo              | Tipo      | Descripción |
| :----------------- | :-------- | :---------- |
| deployment_id      | `ID!`     |             |
| collected_at       | `String!` |             |
| runtime_version    | `String`  |             |
| gateway_reachable  | `Boolean` |             |
| gateway_latency_ms | `Int`     |             |
| session_count      | `Int`     |             |
| default_model      | `String`  |             |
| memory_files       | `Int`     |             |
| memory_chunks      | `Int`     |             |
| os_label           | `String`  |             |
| security_critical  | `Int`     |             |
| security_warn      | `Int`     |             |
| raw                | `String`  |             |
| tools              | `String`  |             |
