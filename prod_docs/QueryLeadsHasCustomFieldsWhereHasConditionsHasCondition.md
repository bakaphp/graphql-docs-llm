# INPUT_OBJECT: QueryLeadsHasCustomFieldsWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasCustomFields` argument of the query `leads`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryLeadsHasCustomFieldsWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryLeadsHasCustomFieldsWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryLeadsHasCustomFieldsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
