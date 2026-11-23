# OBJECT: RoadsideQuote

## Estructura

| Campo              | Tipo         | Descripción                                                                        |
| :----------------- | :----------- | :--------------------------------------------------------------------------------- |
| service_type       | `String!`    |                                                                                    |
| zone               | `String!`    | One of: amss, other_city, foraneo                                                  |
| base_fare          | `Float!`     |                                                                                    |
| distance_km        | `Float!`     | Straight-line km from Kilómetro Cero to the billed point                           |
| included_km        | `Float!`     |                                                                                    |
| billable_km        | `Int!`       |                                                                                    |
| per_km_rate        | `Float`      |                                                                                    |
| extra_km_amount    | `Float!`     |                                                                                    |
| additional_charges | `Float!`     |                                                                                    |
| surcharge_reasons  | `[String!]!` | Every condition that matched; the surcharge is applied once regardless of how many |
| subtotal           | `Float!`     |                                                                                    |
| surcharge_rate     | `Float!`     |                                                                                    |
| surcharge_amount   | `Float!`     |                                                                                    |
| taxable_base       | `Float!`     |                                                                                    |
| tax_rate           | `Float!`     |                                                                                    |
| tax_amount         | `Float!`     |                                                                                    |
| total              | `Float!`     |                                                                                    |
| quoted_at          | `String!`    |                                                                                    |
