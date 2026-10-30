# OBJECT: ProductDiscoveryMatch

## Estructura

| Campo    | Tipo                    | Descripción                                                                                                     |
| :------- | :---------------------- | :-------------------------------------------------------------------------------------------------------------- |
| product  | `DiscoveredProduct!`    |                                                                                                                 |
| variants | `[DiscoveredVariant!]!` | When the search had hard limits (price, numeric filters, category), only the variants that satisfy all of them. |
