# OBJECT: ParticipantStats

## Estructura

| Campo           | Tipo                      | Descripción                                                                          |
| :-------------- | :------------------------ | :----------------------------------------------------------------------------------- |
| total           | `Int!`                    |                                                                                      |
| new_count       | `Int!`                    | First booking ever falls inside the window. Only meaningful when from_date is given. |
| returning_count | `Int!`                    |                                                                                      |
| rows            | `[ParticipantActivity!]!` |                                                                                      |
