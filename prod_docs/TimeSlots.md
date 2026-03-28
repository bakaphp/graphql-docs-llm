# OBJECT: TimeSlots

## Estructura

| Campo                 | Tipo               | Descripción |
| :-------------------- | :----------------- | :---------- |
| id                    | `ID!`              |             |
| apps_id               | `ID!`              |             |
| companies_id          | `ID!`              |             |
| resources_id          | `ID!`              |             |
| resources_type        | `String!`          |             |
| schedule_rules_id     | `ID`               |             |
| start_at              | `DateTime!`        |             |
| end_at                | `DateTime!`        |             |
| initial_capacity      | `Int!`             |             |
| capacity              | `Int!`             |             |
| booked_slots          | `Int!`             |             |
| available_slots       | `Int!`             |             |
| is_fully_booked       | `Boolean!`         |             |
| status                | `String`           |             |
| price_snapshot        | `Float`            |             |
| currency              | `String`           |             |
| meta                  | `Mixed`            |             |
| created_at            | `DateTime`         |             |
| updated_at            | `DateTime`         |             |
| resource              | `TimeSlotResource` |             |
| scheduleRule          | `ScheduleRules`    |             |
| is_from_schedule_rule | `Boolean!`         |             |
| is_standalone         | `Boolean!`         |             |
