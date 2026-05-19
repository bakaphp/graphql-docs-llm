# INPUT_OBJECT: UpdateNervousSystemPlanInput

## Estructura

| Campo                   | Tipo                    | Descripción |
| :---------------------- | :---------------------- | :---------- |
| title                   | `String`                |             |
| description             | `String`                |             |
| status                  | `String`                |             |
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
