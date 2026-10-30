# OBJECT: InsuranceQuoteResult

## Estructura

| Campo             | Tipo       | Descripción                                                                                |
| :---------------- | :--------- | :----------------------------------------------------------------------------------------- |
| provider          | `String!`  |                                                                                            |
| product           | `String!`  |                                                                                            |
| success           | `Boolean!` |                                                                                            |
| message           | `String!`  |                                                                                            |
| quote_number      | `String!`  |                                                                                            |
| premium           | `Float`    |                                                                                            |
| rate_per_km       | `Float`    | Usage-based products only: rate per kilometer driven, billed on top of the premium.        |
| tax               | `Float`    |                                                                                            |
| total             | `Float`    |                                                                                            |
| currency          | `String`   |                                                                                            |
| commission        | `Float`    | What the intermediary earns on this policy, when the insurer publishes it at quote time.   |
| can_emit          | `Boolean`  | The insurer's own verdict that this quote can become a policy. Null means they do not say. |
| inspection_status | `String`   | The insurer's inspection state for this quote, in their own words.                         |
| data              | `Mixed`    |                                                                                            |
