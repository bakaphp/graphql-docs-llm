# INPUT_OBJECT: ResourceScheduleInput

## Estructura

| Campo             | Tipo                   | Descripción                                                                                                          |
| :---------------- | :--------------------- | :------------------------------------------------------------------------------------------------------------------- |
| resources_id      | `ID!`                  |                                                                                                                      |
| resources_type    | `String!`              |                                                                                                                      |
| schedule_type     | `ScheduleType!`        |                                                                                                                      |
| days              | `[DayScheduleInput!]!` |                                                                                                                      |
| slot_duration_min | `Int`                  |                                                                                                                      |
| capacity_override | `Int`                  |                                                                                                                      |
| generate_slots    | `Boolean`              | When false, the schedule is saved and upcoming slots are cleared, but no new slots are generated (regenerate later). |
| start_at          | `Date`                 | First day to generate slots for. Defaults to today.                                                                  |
| end_at            | `Date`                 | Last day to generate slots for. Defaults to one year out.                                                            |
