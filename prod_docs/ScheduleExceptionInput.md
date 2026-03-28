# INPUT_OBJECT: ScheduleExceptionInput

## Estructura

| Campo          | Tipo                     | Descripción |
| :------------- | :----------------------- | :---------- |
| resources_id   | `ID!`                    |             |
| resources_type | `String!`                |             |
| window_start   | `DateTime!`              |             |
| window_end     | `DateTime!`              |             |
| kind           | `ScheduleExceptionKind!` |             |
| reason         | `String`                 |             |
