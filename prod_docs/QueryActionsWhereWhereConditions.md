# INPUT_OBJECT: QueryActionsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `actions`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryActionsWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryActionsWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryActionsWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryActionsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
