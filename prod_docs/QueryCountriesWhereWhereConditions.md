# INPUT_OBJECT: QueryCountriesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `countries`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryCountriesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryCountriesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryCountriesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryCountriesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
