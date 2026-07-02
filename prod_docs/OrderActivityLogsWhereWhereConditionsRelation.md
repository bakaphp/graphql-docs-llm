# INPUT_OBJECT: OrderActivityLogsWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the
query `activityLogs`.

## Estructura

| Campo     | Tipo                                                | Descripción                                         |
| :-------- | :-------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                           | The relation that is checked.                       |
| operator  | `SQLOperator`                                       | The comparison operator to test against the amount. |
| amount    | `Int`                                               | The amount to test.                                 |
| condition | `OrderActivityLogsWhereWhereConditionsHasCondition` | Additional condition logic.                         |
