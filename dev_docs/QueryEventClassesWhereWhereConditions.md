# INPUT_OBJECT: QueryEventClassesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `eventClasses`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryEventClassesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryEventClassesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryEventClassesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryEventClassesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
