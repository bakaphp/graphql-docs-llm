# INPUT_OBJECT: QueryPeoplesHasTagsWhereHasConditions

Dynamic WHERE conditions for the `hasTags` argument of the query `peoples`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryPeoplesHasTagsColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryPeoplesHasTagsWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryPeoplesHasTagsWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryPeoplesHasTagsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
