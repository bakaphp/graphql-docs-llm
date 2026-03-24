# INPUT_OBJECT: QueryProductsHasVariantsWhereHasConditions

Dynamic WHERE conditions for the `hasVariants` argument of the query `products`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryProductsHasVariantsColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryProductsHasVariantsWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryProductsHasVariantsWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryProductsHasVariantsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
