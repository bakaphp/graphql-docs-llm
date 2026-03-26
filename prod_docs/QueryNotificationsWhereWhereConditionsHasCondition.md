# INPUT_OBJECT: QueryNotificationsWhereWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `where` argument of the query `notifications`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryNotificationsWhereWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryNotificationsWhereWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryNotificationsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
