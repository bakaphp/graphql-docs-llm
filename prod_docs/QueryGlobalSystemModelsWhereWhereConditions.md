# INPUT_OBJECT: QueryGlobalSystemModelsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `globalSystemModels`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryGlobalSystemModelsWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryGlobalSystemModelsWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryGlobalSystemModelsWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryGlobalSystemModelsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
