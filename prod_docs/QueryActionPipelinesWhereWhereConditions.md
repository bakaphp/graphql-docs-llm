# INPUT_OBJECT: QueryActionPipelinesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `actionPipelines`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryActionPipelinesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryActionPipelinesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryActionPipelinesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryActionPipelinesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
