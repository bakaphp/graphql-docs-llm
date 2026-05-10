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
| confidence_score        | `Float`                 |             |
| requires_human_approval | `Boolean`               |             |
| files                   | `[FilesystemInputUrl!]` |             |
