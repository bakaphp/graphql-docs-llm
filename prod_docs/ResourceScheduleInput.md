# INPUT_OBJECT: ResourceScheduleInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| resources_id | `ID!` |  |
| resources_type | `String!` |  |
| schedule_type | `ScheduleType!` |  |
| days | `[DayScheduleInput!]!` |  |
| slot_duration_min | `Int` |  |
| capacity_override | `Int` |  |
