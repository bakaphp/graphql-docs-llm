# OBJECT: LeadFollowUpPlan

A person's own follow-up plan on a lead, run by the engine in place of the stage
config: the active one, or the last one that ended. `paused_reason` is why an
active plan is not sending (lead_follow_up_disabled, ai_mode_off,
ai_mode_manual, lead_not_active).

## Estructura

| Campo              | Tipo       | Descripción |
| :----------------- | :--------- | :---------- |
| is_active          | `Boolean!` |             |
| channel            | `String!`  |             |
| message            | `String!`  |             |
| interval_minutes   | `Int!`     |             |
| max_attempts       | `Int!`     |             |
| attempts_sent      | `Int!`     |             |
| start_at           | `String!`  |             |
| stop_on_reply      | `Boolean!` |             |
| respect_work_hours | `Boolean!` |             |
| next_due_at        | `String`   |             |
| paused_reason      | `String`   |             |
| done_at            | `String`   |             |
| done_reason        | `String`   |             |
| set_at             | `String!`  |             |
| set_by_users_id    | `Int!`     |             |
