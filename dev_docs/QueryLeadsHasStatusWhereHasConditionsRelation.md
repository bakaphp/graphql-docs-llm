# INPUT_OBJECT: QueryLeadsHasStatusWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasStatus` argument of the
query `leads`.

## Estructura

| Campo     | Tipo                                                | Descripción                                         |
| :-------- | :-------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                           | The relation that is checked.                       |
| operator  | `SQLOperator`                                       | The comparison operator to test against the amount. |
| amount    | `Int`                                               | The amount to test.                                 |
| condition | `QueryLeadsHasStatusWhereHasConditionsHasCondition` | Additional condition logic.                         |
