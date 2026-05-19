# OBJECT: AgentDailyCycle

## Estructura

| Campo                   | Tipo                  | Descripción |
| :---------------------- | :-------------------- | :---------- |
| id                      | `ID!`                 |             |
| cycle_date              | `Date!`               |             |
| awake_started_at        | `DateTime`            |             |
| awake_ended_at          | `DateTime`            |             |
| sleep_started_at        | `DateTime`            |             |
| sleep_ended_at          | `DateTime`            |             |
| awake_duration_minutes  | `Int!`                |             |
| sleep_duration_minutes  | `Int!`                |             |
| proactive_actions_count | `Int!`                |             |
| events_processed_count  | `Int!`                |             |
| last_action_at          | `DateTime`            |             |
| last_action_label       | `String`              |             |
| morning_briefing        | `String`              |             |
| proposed_actions        | `Mixed`               |             |
| skills_emerged          | `Mixed`               |             |
| self_improvement_score  | `String!`             |             |
| signed_by_text          | `String`              |             |
| phases                  | `[AgentSleepPhase!]!` |             |
| created_at              | `DateTime!`           |             |
| updated_at              | `DateTime`            |             |
