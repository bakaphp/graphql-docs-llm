# INPUT_OBJECT: QueryDiscountTypesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `discountTypes`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryDiscountTypesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryDiscountTypesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryDiscountTypesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryDiscountTypesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
