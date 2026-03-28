# OBJECT: ResourceSchedule

## Estructura

| Campo         | Tipo                    | Descripción |
| :------------ | :---------------------- | :---------- |
| is_configured | `Boolean!`              |             |
| schedule_type | `ScheduleType`          |             |
| days_count    | `Int!`                  |             |
| days          | `[DaySchedule!]!`       |             |
| last_modified | `DateTime`              |             |
| rules         | `[ScheduleRules!]!`     |             |
| exceptions    | `[ScheduleException!]!` |             |
