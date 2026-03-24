# INPUT_OBJECT: QueryChannelMessagesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `channelMessages`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryChannelMessagesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryChannelMessagesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryChannelMessagesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryChannelMessagesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
