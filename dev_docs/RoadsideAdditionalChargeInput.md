# INPUT_OBJECT: RoadsideAdditionalChargeInput

## Estructura

| Campo    | Tipo                                   | Descripción                                               |
| :------- | :------------------------------------- | :-------------------------------------------------------- |
| order_id | `ID!`                                  |                                                           |
| concept  | `RoadsideAdditionalChargeConceptEnum!` |                                                           |
| amount   | `Float!`                               | Real amount the technician paid, before surcharge and tax |
| notes    | `String`                               |                                                           |
