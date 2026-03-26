# INPUT_OBJECT: QueryProductsHasAttributesWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasAttributes` argument of the query `products`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryProductsHasAttributesWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryProductsHasAttributesWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryProductsHasAttributesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
