# INPUT_OBJECT: ProductDiscoveryNumericFilterInput

## Estructura

| Campo | Tipo      | Descripción                                                                               |
| :---- | :-------- | :---------------------------------------------------------------------------------------- |
| field | `String!` |                                                                                           |
| min   | `Float`   |                                                                                           |
| max   | `Float`   |                                                                                           |
| unit  | `String`  | Unit of min/max ("mi", "km"); converted to the field's own unit. Omit when already in it. |
