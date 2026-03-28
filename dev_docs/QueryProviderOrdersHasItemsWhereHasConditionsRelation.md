# INPUT_OBJECT: QueryProviderOrdersHasItemsWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasItems` argument of the
query `providerOrders`.

## Estructura

| Campo     | Tipo                                                        | Descripción                                         |
| :-------- | :---------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                   | The relation that is checked.                       |
| operator  | `SQLOperator`                                               | The comparison operator to test against the amount. |
| amount    | `Int`                                                       | The amount to test.                                 |
| condition | `QueryProviderOrdersHasItemsWhereHasConditionsHasCondition` | Additional condition logic.                         |
