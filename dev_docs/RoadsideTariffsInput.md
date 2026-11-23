# INPUT_OBJECT: RoadsideTariffsInput

## Estructura

| Campo          | Tipo       | Descripción                                                                                |
| :------------- | :--------- | :----------------------------------------------------------------------------------------- |
| tariffs        | `JSON!`    | Same shape as the movipass_roadside_tariffs setting; omitted keys keep the launch defaults |
| reason         | `String!`  |                                                                                            |
| effective_from | `DateTime` | Defaults to now; cannot be in the past                                                     |
