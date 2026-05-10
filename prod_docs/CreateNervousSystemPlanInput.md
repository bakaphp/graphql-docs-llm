# INPUT_OBJECT: CreateNervousSystemPlanInput

## Estructura

| Campo                   | Tipo                        | Descripción |
| :---------------------- | :-------------------------- | :---------- |
| title                   | `String!`                   |             |
| plan_type               | `String!`                   |             |
| agent_id                | `Int`                       |             |
| users_id                | `Int`                       |             |
| parent_plan_id          | `Int`                       |             |
| entity_namespace        | `String`                    |             |
| entity_id               | `Int`                       |             |
| description             | `String`                    |             |
| status                  | `String`                    |             |
| priority                | `Int`                       |             |
| deadline_at             | `DateTime`                  |             |
| input                   | `Mixed`                     |             |
| output                  | `Mixed`                     |             |
| confidence_score        | `Float`                     |             |
| requires_human_approval | `Boolean`                   |             |
| tasks                   | `[NervousSystemTaskInput!]` |             |
| files                   | `[FilesystemInputUrl!]`     |             |
