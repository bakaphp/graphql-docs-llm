# INPUT_OBJECT: QueryTimeSlotsResourceTypeWhereConditions

Dynamic WHERE conditions for the `resourceType` argument of the query `timeSlots`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryTimeSlotsResourceTypeColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryTimeSlotsResourceTypeWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryTimeSlotsResourceTypeWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryTimeSlotsResourceTypeWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
