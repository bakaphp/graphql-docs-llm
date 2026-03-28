# INPUT_OBJECT: QueryWorkflowIntegrationsHistoryWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`workflowIntegrationsHistory`.

## Estructura

| Campo    | Tipo                                                           | Descripción                                                                           |
| :------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `WorkFlowIntegrationsHistoryEnumColumn`                        | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                  | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                        | The value that is used for the condition.                                             |
| AND      | `[QueryWorkflowIntegrationsHistoryWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryWorkflowIntegrationsHistoryWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryWorkflowIntegrationsHistoryWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
