# INPUT_OBJECT: QueryGetActivityLogWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `getActivityLog`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryGetActivityLogWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryGetActivityLogWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryGetActivityLogWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryGetActivityLogWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
