# INPUT_OBJECT: QueryWorkflowReceiverHistoryHasActionWhereHasConditions

Dynamic WHERE conditions for the `hasAction` argument of the query
`workflowReceiverHistory`.

## Estructura

| Campo    | Tipo                                                              | Descripción                                                                           |
| :------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryWorkflowReceiverHistoryHasActionColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                           | The value that is used for the condition.                                             |
| AND      | `[QueryWorkflowReceiverHistoryHasActionWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryWorkflowReceiverHistoryHasActionWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryWorkflowReceiverHistoryHasActionWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
