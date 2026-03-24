# INPUT_OBJECT: QueryLeadsHasOwnerWhereHasConditions

Dynamic WHERE conditions for the `hasOwner` argument of the query `leads`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryLeadsHasOwnerColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryLeadsHasOwnerWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryLeadsHasOwnerWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryLeadsHasOwnerWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
