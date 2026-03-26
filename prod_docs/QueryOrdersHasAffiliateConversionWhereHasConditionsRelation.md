# INPUT_OBJECT: QueryOrdersHasAffiliateConversionWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasAffiliateConversion` argument of the query `orders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryOrdersHasAffiliateConversionWhereHasConditionsHasCondition` | Additional condition logic. |
