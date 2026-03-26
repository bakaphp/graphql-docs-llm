# INPUT_OBJECT: QueryEventsStatusWhereConditions

Dynamic WHERE conditions for the `status` argument of the query `events`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryEventsStatusColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryEventsStatusWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryEventsStatusWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryEventsStatusWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
