# INPUT_OBJECT: QueryRulesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `rules`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryRulesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryRulesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryRulesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryRulesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
