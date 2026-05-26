# INPUT_OBJECT: FollowUpDayInput

## Estructura

| Campo             | Tipo      | Descripción |
| :---------------- | :-------- | :---------- |
| follow_up_id      | `ID!`     |             |
| pipeline_stage_id | `ID!`     |             |
| name              | `String!` |             |
| time_value        | `Int!`    |             |
| time_unit         | `String`  |             |
| weight            | `Int!`    |             |
| calendar_day      | `Boolean` |             |
| move_to_stage_id  | `Int`     |             |
| send_message      | `Boolean` |             |
