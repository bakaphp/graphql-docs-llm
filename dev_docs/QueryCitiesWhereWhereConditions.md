# INPUT_OBJECT: QueryCitiesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `cities`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryCitiesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryCitiesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryCitiesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryCitiesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
