# INPUT_OBJECT: QueryOrderTransitionHistoryHasVariantWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasVariant` argument of the query `orderTransitionHistory`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryOrderTransitionHistoryHasVariantWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryOrderTransitionHistoryHasVariantWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryOrderTransitionHistoryHasVariantWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
