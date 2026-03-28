# INPUT_OBJECT: QueryEventVersionsEventStatusWhereConditions

Dynamic WHERE conditions for the `eventStatus` argument of the query
`eventVersions`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryEventVersionsEventStatusColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryEventVersionsEventStatusWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryEventVersionsEventStatusWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryEventVersionsEventStatusWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
