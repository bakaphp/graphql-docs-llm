# INPUT_OBJECT: QueryNervousSystemWorkspacesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`nervousSystemWorkspaces`.

## Estructura

| Campo    | Tipo                                                       | Descripción                                                                           |
| :------- | :--------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryNervousSystemWorkspacesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                              | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                    | The value that is used for the condition.                                             |
| AND      | `[QueryNervousSystemWorkspacesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryNervousSystemWorkspacesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryNervousSystemWorkspacesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
