# INPUT_OBJECT: QueryOrderTransitionHistoryToStatusWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `toStatus` argument of the
query `orderTransitionHistory`.

## Estructura

| Campo     | Tipo                                                             | Descripción                                         |
| :-------- | :--------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                        | The relation that is checked.                       |
| operator  | `SQLOperator`                                                    | The comparison operator to test against the amount. |
| amount    | `Int`                                                            | The amount to test.                                 |
| condition | `QueryOrderTransitionHistoryToStatusWhereConditionsHasCondition` | Additional condition logic.                         |
