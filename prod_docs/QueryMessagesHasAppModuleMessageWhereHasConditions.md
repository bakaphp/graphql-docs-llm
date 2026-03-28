# INPUT_OBJECT: QueryMessagesHasAppModuleMessageWhereHasConditions

Dynamic WHERE conditions for the `hasAppModuleMessage` argument of the query
`messages`.

## Estructura

| Campo    | Tipo                                                         | Descripción                                                                           |
| :------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryMessagesHasAppModuleMessageColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                      | The value that is used for the condition.                                             |
| AND      | `[QueryMessagesHasAppModuleMessageWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMessagesHasAppModuleMessageWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMessagesHasAppModuleMessageWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
