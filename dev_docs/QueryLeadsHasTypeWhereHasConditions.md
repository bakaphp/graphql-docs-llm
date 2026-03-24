# INPUT_OBJECT: QueryLeadsHasTypeWhereHasConditions

Dynamic WHERE conditions for the `hasType` argument of the query `leads`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryLeadsHasTypeColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryLeadsHasTypeWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryLeadsHasTypeWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryLeadsHasTypeWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
