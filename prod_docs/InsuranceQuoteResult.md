# OBJECT: InsuranceQuoteResult

## Estructura

| Campo        | Tipo       | Descripción                                                                         |
| :----------- | :--------- | :---------------------------------------------------------------------------------- |
| provider     | `String!`  |                                                                                     |
| product      | `String!`  |                                                                                     |
| success      | `Boolean!` |                                                                                     |
| message      | `String!`  |                                                                                     |
| quote_number | `String!`  |                                                                                     |
| premium      | `Float`    |                                                                                     |
| rate_per_km  | `Float`    | Usage-based products only: rate per kilometer driven, billed on top of the premium. |
| tax          | `Float`    |                                                                                     |
| total        | `Float`    |                                                                                     |
| currency     | `String`   |                                                                                     |
| data         | `Mixed`    |                                                                                     |
