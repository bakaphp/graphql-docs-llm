# OBJECT: ScribeEcfRange

## Estructura

| Campo               | Tipo                    | Descripción                                                                    |
| :------------------ | :---------------------- | :----------------------------------------------------------------------------- |
| id                  | `ID!`                   |                                                                                |
| document_type       | `String!`               | e-CF type code: 31, 32, 33, 34, 41, 43, 44, 45, 46, 47.                        |
| document_type_label | `String`                | The authority's name for the type, e.g. Factura de Crédito Fiscal Electrónica. |
| first_number        | `String!`               |                                                                                |
| last_number         | `String!`               |                                                                                |
| next_number         | `String`                | The next e-NCF to be issued; null once the range is no longer active.          |
| remaining           | `Int`                   |                                                                                |
| expires_at          | `Date`                  |                                                                                |
| status              | `ScribeEcfRangeStatus!` |                                                                                |
| environment         | `String!`               |                                                                                |
| created_at          | `DateTime!`             |                                                                                |
