# INPUT_OBJECT: UpdateNervousSystemProjectInput

## Estructura

| Campo                      | Tipo                    | Descripción |
| :------------------------- | :---------------------- | :---------- |
| title                      | `String`                |             |
| agent_id                   | `Int`                   |             |
| workspace_id               | `Int`                   |             |
| swarm_id                   | `Int`                   |             |
| objective                  | `String`                |             |
| description                | `String`                |             |
| status                     | `String`                |             |
| priority                   | `Int`                   |             |
| deadline_at                | `DateTime`              |             |
| heartbeat_interval_minutes | `Int`                   |             |
| files                      | `[FilesystemInputUrl!]` |             |
