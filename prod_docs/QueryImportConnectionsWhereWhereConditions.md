# INPUT_OBJECT: QueryImportConnectionsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`importConnections`.

## Estructura

| Campo    | Tipo                                                 | Descripción                                                                           |
| :------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryImportConnectionsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                        | The operator that is used for the condition.                                          |
| value    | `Mixed`                                              | The value that is used for the condition.                                             |
| AND      | `[QueryImportConnectionsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryImportConnectionsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryImportConnectionsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
