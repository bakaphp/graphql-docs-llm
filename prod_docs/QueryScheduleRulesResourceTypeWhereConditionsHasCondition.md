# INPUT_OBJECT: QueryScheduleRulesResourceTypeWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `resourceType` argument of the query
`scheduleRules`.

## Estructura

| Campo    | Tipo                                                           | Descripción                                                                           |
| :------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                       | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                  | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                        | The value that is used for the condition.                                             |
| AND      | `[QueryScheduleRulesResourceTypeWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryScheduleRulesResourceTypeWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryScheduleRulesResourceTypeWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
