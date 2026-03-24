# INPUT_OBJECT: QueryVariantsHasChannelWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasChannel` argument of the query `variants`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryVariantsHasChannelWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryVariantsHasChannelWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryVariantsHasChannelWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
