# INPUT_OBJECT: QueryAgentBackupsWhereWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `where` argument of the query
`agentBackups`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                               | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryAgentBackupsWhereWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryAgentBackupsWhereWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryAgentBackupsWhereWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
