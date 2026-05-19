# INPUT_OBJECT: QueryFollowUpTemplatesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`followUpTemplates`.

## Estructura

| Campo    | Tipo                                                 | Descripción                                                                           |
| :------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryFollowUpTemplatesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                        | The operator that is used for the condition.                                          |
| value    | `Mixed`                                              | The value that is used for the condition.                                             |
| AND      | `[QueryFollowUpTemplatesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryFollowUpTemplatesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryFollowUpTemplatesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
