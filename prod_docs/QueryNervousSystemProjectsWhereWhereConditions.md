# INPUT_OBJECT: QueryNervousSystemProjectsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`nervousSystemProjects`.

## Estructura

| Campo    | Tipo                                                     | Descripción                                                                           |
| :------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryNervousSystemProjectsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                            | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                  | The value that is used for the condition.                                             |
| AND      | `[QueryNervousSystemProjectsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryNervousSystemProjectsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryNervousSystemProjectsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
