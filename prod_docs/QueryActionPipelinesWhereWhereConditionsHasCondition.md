# INPUT_OBJECT: QueryActionPipelinesWhereWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `where` argument of the query `actionPipelines`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryActionPipelinesWhereWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryActionPipelinesWhereWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryActionPipelinesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
