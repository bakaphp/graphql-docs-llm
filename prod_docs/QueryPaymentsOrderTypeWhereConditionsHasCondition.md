# INPUT_OBJECT: QueryPaymentsOrderTypeWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `orderType` argument of the query `payments`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryPaymentsOrderTypeWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryPaymentsOrderTypeWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryPaymentsOrderTypeWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
