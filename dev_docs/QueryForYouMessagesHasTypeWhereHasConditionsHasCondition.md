# INPUT_OBJECT: QueryForYouMessagesHasTypeWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasType` argument of the query
`forYouMessages`.

## Estructura

| Campo    | Tipo                                                          | Descripción                                                                           |
| :------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `String`                                                      | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                 | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                       | The value that is used for the condition.                                             |
| AND      | `[QueryForYouMessagesHasTypeWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryForYouMessagesHasTypeWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryForYouMessagesHasTypeWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
