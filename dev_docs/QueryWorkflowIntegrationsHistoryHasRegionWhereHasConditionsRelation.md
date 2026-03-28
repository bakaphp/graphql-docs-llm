# INPUT_OBJECT: QueryWorkflowIntegrationsHistoryHasRegionWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasRegion` argument of the
query `workflowIntegrationsHistory`.

## Estructura

| Campo     | Tipo                                                                      | Descripción                                         |
| :-------- | :------------------------------------------------------------------------ | :-------------------------------------------------- |
| relation  | `String!`                                                                 | The relation that is checked.                       |
| operator  | `SQLOperator`                                                             | The comparison operator to test against the amount. |
| amount    | `Int`                                                                     | The amount to test.                                 |
| condition | `QueryWorkflowIntegrationsHistoryHasRegionWhereHasConditionsHasCondition` | Additional condition logic.                         |
