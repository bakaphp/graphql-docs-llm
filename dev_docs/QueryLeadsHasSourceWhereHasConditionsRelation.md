# INPUT_OBJECT: QueryLeadsHasSourceWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasSource` argument of the
query `leads`.

## Estructura

| Campo     | Tipo                                                | Descripción                                         |
| :-------- | :-------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                           | The relation that is checked.                       |
| operator  | `SQLOperator`                                       | The comparison operator to test against the amount. |
| amount    | `Int`                                               | The amount to test.                                 |
| condition | `QueryLeadsHasSourceWhereHasConditionsHasCondition` | Additional condition logic.                         |
