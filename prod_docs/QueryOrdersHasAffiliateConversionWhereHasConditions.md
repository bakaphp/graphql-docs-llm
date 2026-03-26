# INPUT_OBJECT: QueryOrdersHasAffiliateConversionWhereHasConditions

Dynamic WHERE conditions for the `hasAffiliateConversion` argument of the query `orders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryOrdersHasAffiliateConversionColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryOrdersHasAffiliateConversionWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryOrdersHasAffiliateConversionWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryOrdersHasAffiliateConversionWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
