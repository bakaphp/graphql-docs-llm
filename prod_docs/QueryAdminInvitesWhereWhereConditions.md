# INPUT_OBJECT: QueryAdminInvitesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `adminInvites`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryAdminInvitesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryAdminInvitesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryAdminInvitesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryAdminInvitesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
