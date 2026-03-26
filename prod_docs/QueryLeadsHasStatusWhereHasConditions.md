# INPUT_OBJECT: QueryLeadsHasStatusWhereHasConditions

Dynamic WHERE conditions for the `hasStatus` argument of the query `leads`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryLeadsHasStatusColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryLeadsHasStatusWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryLeadsHasStatusWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryLeadsHasStatusWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
