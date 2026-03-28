# INPUT_OBJECT: ScheduleRulesUpdateInput

## Estructura

| Campo             | Tipo       | Descripción |
| :---------------- | :--------- | :---------- |
| resources_id      | `ID`       |             |
| resources_type    | `String`   |             |
| start_at          | `DateTime` |             |
| end_at            | `DateTime` |             |
| rrule             | `String`   |             |
| day_rrule         | `String`   |             |
| slot_duration_min | `Int`      |             |
| lead_time_min     | `Int`      |             |
| cutoff_time_min   | `Int`      |             |
| capacity_override | `Int`      |             |
