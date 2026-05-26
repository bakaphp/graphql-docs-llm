# OBJECT: FollowUpDay

## Estructura

| Campo            | Tipo                   | Descripción |
| :--------------- | :--------------------- | :---------- |
| id               | `ID!`                  |             |
| followUp         | `FollowUp!`            |             |
| pipelineStage    | `LeadPipelineStage!`   |             |
| templates        | `[FollowUpTemplate!]!` |             |
| name             | `String!`              |             |
| time_value       | `Int!`                 |             |
| time_unit        | `String`               |             |
| weight           | `Int!`                 |             |
| calendar_day     | `Boolean!`             |             |
| move_to_stage_id | `Int`                  |             |
| send_message     | `Boolean!`             |             |
| is_deleted       | `Boolean!`             |             |
| created_at       | `DateTime!`            |             |
| updated_at       | `DateTime!`            |             |
