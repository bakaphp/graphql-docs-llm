# INPUT_OBJECT: UpdateNervousSystemPlanInput

## Estructura

| Campo                   | Tipo                    | Descripción |
| :---------------------- | :---------------------- | :---------- |
| title                   | `String`                |             |
| project_id              | `Int`                   |             |
| description             | `String`                |             |
| status                  | `String`                |             |
| board_column_key        | `String`                |             |
| priority                | `Int`                   |             |
| deadline_at             | `DateTime`              |             |
| input                   | `Mixed`                 |             |
| output                  | `Mixed`                 |             |
| impact_summary          | `String`                |             |
| status_pill             | `String`                |             |
| confidence_score        | `Float`                 |             |
| requires_human_approval | `Boolean`               |             |
| swarm_id                | `Int`                   |             |
| is_swarm_mission        | `Boolean`               |             |
| files                   | `[FilesystemInputUrl!]` |             |
