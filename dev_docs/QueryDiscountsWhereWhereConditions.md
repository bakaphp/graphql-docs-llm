# INPUT_OBJECT: QueryDiscountsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `discounts`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryDiscountsWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryDiscountsWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryDiscountsWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryDiscountsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
