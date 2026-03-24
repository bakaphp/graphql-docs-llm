# INPUT_OBJECT: QueryProductsHasCategoriesWhereHasConditions

Dynamic WHERE conditions for the `hasCategories` argument of the query `products`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryProductsHasCategoriesColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryProductsHasCategoriesWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryProductsHasCategoriesWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryProductsHasCategoriesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
