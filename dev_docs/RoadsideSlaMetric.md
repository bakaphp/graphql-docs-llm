# OBJECT: RoadsideSlaMetric

## Estructura

| Campo             | Tipo       | Descripción                                                                             |
| :---------------- | :--------- | :-------------------------------------------------------------------------------------- |
| metric            | `String!`  | One of: dispatch, cabin_review, acceptance, reassignment, arrival, resolution, incident |
| started_at        | `String!`  |                                                                                         |
| ended_at          | `String`   |                                                                                         |
| minutes           | `Float!`   |                                                                                         |
| threshold_minutes | `Float!`   |                                                                                         |
| running           | `Boolean!` |                                                                                         |
| breached          | `Boolean!` |                                                                                         |
