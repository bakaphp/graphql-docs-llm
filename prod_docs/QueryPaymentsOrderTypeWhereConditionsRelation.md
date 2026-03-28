# INPUT_OBJECT: QueryPaymentsOrderTypeWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `orderType` argument of the
query `payments`.

## Estructura

| Campo     | Tipo                                                | Descripción                                         |
| :-------- | :-------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                           | The relation that is checked.                       |
| operator  | `SQLOperator`                                       | The comparison operator to test against the amount. |
| amount    | `Int`                                               | The amount to test.                                 |
| condition | `QueryPaymentsOrderTypeWhereConditionsHasCondition` | Additional condition logic.                         |
