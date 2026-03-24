# INPUT_OBJECT: QueryProductsHasAttributesValuesWhereHasConditions

Dynamic WHERE conditions for the `hasAttributesValues` argument of the query `products`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryProductsHasAttributesValuesColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryProductsHasAttributesValuesWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryProductsHasAttributesValuesWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryProductsHasAttributesValuesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
