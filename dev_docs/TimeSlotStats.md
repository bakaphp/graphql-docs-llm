# OBJECT: TimeSlotStats

## Estructura

| Campo                | Tipo                          | Descripción |
| :------------------- | :---------------------------- | :---------- |
| period_start         | `String!`                     |             |
| period_end           | `String!`                     |             |
| capacity             | `Int!`                        |             |
| booked               | `Int!`                        |             |
| admitted             | `Int!`                        |             |
| occupancy_percentage | `Float!`                      |             |
| slots_count          | `Int!`                        |             |
| byHour               | `[TimeSlotOccupancyBucket!]!` |             |
| byDay                | `[TimeSlotOccupancyBucket!]!` |             |
| byArrivalHour        | `[TimeSlotArrivalBucket!]!`   |             |
| peak                 | `TimeSlotOccupancyBucket`     |             |
| lowest               | `TimeSlotOccupancyBucket`     |             |
