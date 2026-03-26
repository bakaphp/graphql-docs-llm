# OBJECT: ScheduleRules



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| uuid | `String!` |  |
| apps_id | `ID!` |  |
| companies_id | `ID!` |  |
| resources_id | `ID!` |  |
| resources_type | `String!` |  |
| start_at | `DateTime!` |  |
| end_at | `DateTime` |  |
| rrule | `String!` |  |
| day_rrule | `String` |  |
| slot_duration_min | `Int!` |  |
| lead_time_min | `Int!` |  |
| cutoff_time_min | `Int!` |  |
| capacity_override | `Int` |  |
| is_deleted | `Boolean!` |  |
| created_at | `DateTime` |  |
| updated_at | `DateTime` |  |
| resource | `TimeSlotResource` |  |
