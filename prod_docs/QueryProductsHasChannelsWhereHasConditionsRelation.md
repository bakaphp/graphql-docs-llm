# INPUT_OBJECT: QueryProductsHasChannelsWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasChannels` argument of
the query `products`.

## Estructura

| Campo     | Tipo                                                     | Descripción                                         |
| :-------- | :------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                | The relation that is checked.                       |
| operator  | `SQLOperator`                                            | The comparison operator to test against the amount. |
| amount    | `Int`                                                    | The amount to test.                                 |
| condition | `QueryProductsHasChannelsWhereHasConditionsHasCondition` | Additional condition logic.                         |
