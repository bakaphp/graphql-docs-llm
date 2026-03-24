# INPUT_OBJECT: QueryNotificationTypesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `notificationTypes`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryNotificationTypesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryNotificationTypesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryNotificationTypesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryNotificationTypesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
