# INPUT_OBJECT: QueryWorkflowIntegrationsHistoryHasRegionWhereHasConditions

Dynamic WHERE conditions for the `hasRegion` argument of the query
`workflowIntegrationsHistory`.

## Estructura

| Campo    | Tipo                                                                  | Descripción                                                                           |
| :------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryWorkflowIntegrationsHistoryHasRegionColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                         | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                               | The value that is used for the condition.                                             |
| AND      | `[QueryWorkflowIntegrationsHistoryHasRegionWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryWorkflowIntegrationsHistoryHasRegionWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryWorkflowIntegrationsHistoryHasRegionWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
