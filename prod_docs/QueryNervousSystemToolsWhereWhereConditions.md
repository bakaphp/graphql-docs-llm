# INPUT_OBJECT: QueryNervousSystemToolsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`nervousSystemTools`.

## Estructura

| Campo    | Tipo                                                  | Descripción                                                                           |
| :------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryNervousSystemToolsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                         | The operator that is used for the condition.                                          |
| value    | `Mixed`                                               | The value that is used for the condition.                                             |
| AND      | `[QueryNervousSystemToolsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryNervousSystemToolsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryNervousSystemToolsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
