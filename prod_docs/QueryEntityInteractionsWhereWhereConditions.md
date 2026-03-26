# INPUT_OBJECT: QueryEntityInteractionsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `entityInteractions`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryEntityInteractionsWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryEntityInteractionsWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryEntityInteractionsWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryEntityInteractionsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
