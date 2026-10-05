# OBJECT: RoadsideServiceIntake

## Estructura

| Campo           | Tipo                      | Descripción                                                      |
| :-------------- | :------------------------ | :--------------------------------------------------------------- |
| service_type    | `String!`                 |                                                                  |
| label           | `String!`                 |                                                                  |
| requires_photos | `Boolean!`                | Whether the case is rejected without at least one photo attached |
| general_fields  | `[RoadsideIntakeField!]!` | Asked for every service before the service-specific block        |
| service_fields  | `[RoadsideIntakeField!]!` |                                                                  |
