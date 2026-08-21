# OBJECT: ProductDiscoveryResult

## Estructura

| Campo           | Tipo                        | Descripción                                                                                                                                     |
| :-------------- | :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| request_id      | `String!`                   | The id this search was recorded under. Send it back with any click or purchase so the outcome can be attributed to the search that produced it. |
| recommendations | `[ProductDiscoveryMatch!]!` |                                                                                                                                                 |
