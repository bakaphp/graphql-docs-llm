# OBJECT: TimeSlotStats

## Estructura

| Campo                | Tipo                          | Descripción |
| :------------------- | :---------------------------- | :---------- |
| period_start         | `String!`                     |             |
| period_end           | `String!`                     |             |
| capacity             | `Int!`                        |             |
| booked               | `Int!`                        |             |
| occupancy_percentage | `Float!`                      |             |
| slots_count          | `Int!`                        |             |
| byHour               | `[TimeSlotOccupancyBucket!]!` |             |
| byDay                | `[TimeSlotOccupancyBucket!]!` |             |
| peak                 | `TimeSlotOccupancyBucket`     |             |
| lowest               | `TimeSlotOccupancyBucket`     |             |
