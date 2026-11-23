# INPUT_OBJECT: RoadsideEvidenceInput

## Estructura

| Campo      | Tipo                        | Descripción                                          |
| :--------- | :-------------------------- | :--------------------------------------------------- |
| order_id   | `ID!`                       |                                                      |
| phase      | `RoadsideEvidencePhaseEnum` |                                                      |
| file_uuids | `[String!]`                 | Filesystem uuids of photos taken with the APK camera |
| comment    | `String`                    | Operative comment; internal, never shown to the user |
| source     | `String`                    |                                                      |
