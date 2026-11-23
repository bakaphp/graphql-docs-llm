# INPUT_OBJECT: RoadsideQuoteInput

## Estructura

| Campo        | Tipo                        | Descripción                                                                                     |
| :----------- | :-------------------------- | :---------------------------------------------------------------------------------------------- |
| service_type | `RoadsideServiceTypeEnum!`  |                                                                                                 |
| location     | `RoadsideCoordinatesInput!` | Where the user is; decides the zone, and the billable distance for on-site services             |
| destination  | `RoadsideCoordinatesInput`  | Drop-off point; required for tows and designated driver, where it decides the billable distance |
| requested_at | `DateTime`                  | Defaults to now; decides the peak-hour, late-night and holiday surcharge                        |
