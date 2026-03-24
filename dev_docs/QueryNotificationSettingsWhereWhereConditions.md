# INPUT_OBJECT: QueryNotificationSettingsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `notificationSettings`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryNotificationSettingsWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryNotificationSettingsWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryNotificationSettingsWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryNotificationSettingsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
