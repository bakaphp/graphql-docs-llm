# INPUT_OBJECT: QueryWorkflowReceiverHistoryHasActionWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasAction` argument of the
query `workflowReceiverHistory`.

## Estructura

| Campo     | Tipo                                                                  | Descripción                                         |
| :-------- | :-------------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                             | The relation that is checked.                       |
| operator  | `SQLOperator`                                                         | The comparison operator to test against the amount. |
| amount    | `Int`                                                                 | The amount to test.                                 |
| condition | `QueryWorkflowReceiverHistoryHasActionWhereHasConditionsHasCondition` | Additional condition logic.                         |
