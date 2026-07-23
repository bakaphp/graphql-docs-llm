# INPUT_OBJECT: QueryHrPositionsWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the
query `hrPositions`.

## Estructura

| Campo     | Tipo                                               | Descripción                                         |
| :-------- | :------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                          | The relation that is checked.                       |
| operator  | `SQLOperator`                                      | The comparison operator to test against the amount. |
| amount    | `Int`                                              | The amount to test.                                 |
| condition | `QueryHrPositionsWhereWhereConditionsHasCondition` | Additional condition logic.                         |
