# INPUT_OBJECT: QueryScheduleHistoryWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `scheduleHistory`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryScheduleHistoryWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryScheduleHistoryWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryScheduleHistoryWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryScheduleHistoryWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
