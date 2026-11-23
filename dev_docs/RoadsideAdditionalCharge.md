# OBJECT: RoadsideAdditionalCharge

## Estructura

| Campo            | Tipo      | Descripción                                                         |
| :--------------- | :-------- | :------------------------------------------------------------------ |
| id               | `String!` |                                                                     |
| concept          | `String!` |                                                                     |
| amount           | `Float!`  |                                                                     |
| subtotal         | `Float!`  |                                                                     |
| surcharge_rate   | `Float!`  |                                                                     |
| surcharge_amount | `Float!`  |                                                                     |
| taxable_base     | `Float!`  |                                                                     |
| tax_rate         | `Float!`  |                                                                     |
| tax_amount       | `Float!`  |                                                                     |
| total            | `Float!`  |                                                                     |
| status           | `String!` | One of: pending, approved, rejected, cancelled                      |
| order_id         | `ID!`     | The child order the user pays through the normal order payment flow |
| order_uuid       | `String!` |                                                                     |
| notes            | `String`  |                                                                     |
| registered_at    | `String!` |                                                                     |
