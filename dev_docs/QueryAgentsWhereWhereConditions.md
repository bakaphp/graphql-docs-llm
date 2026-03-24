# INPUT_OBJECT: QueryAgentsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `agents`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryAgentsWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryAgentsWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryAgentsWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryAgentsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
