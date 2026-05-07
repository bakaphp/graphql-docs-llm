# INPUT_OBJECT: QueryAgentBackupsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `agentBackups`.

## Estructura

| Campo    | Tipo                                            | Descripción                                                                           |
| :------- | :---------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryAgentBackupsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                   | The operator that is used for the condition.                                          |
| value    | `Mixed`                                         | The value that is used for the condition.                                             |
| AND      | `[QueryAgentBackupsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryAgentBackupsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryAgentBackupsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
