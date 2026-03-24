# INPUT_OBJECT: QueryAppsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `apps`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryAppsWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryAppsWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryAppsWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryAppsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
