# INPUT_OBJECT: QueryLeadsHasReceiverWhereHasConditions

Dynamic WHERE conditions for the `hasReceiver` argument of the query `leads`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryLeadsHasReceiverColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryLeadsHasReceiverWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryLeadsHasReceiverWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryLeadsHasReceiverWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
