# INPUT_OBJECT: QueryLeadsHasReceiverWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasReceiver` argument of the query
`leads`.

## Estructura

| Campo    | Tipo                                                     | Descripción                                                                           |
| :------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                 | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                            | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                  | The value that is used for the condition.                                             |
| AND      | `[QueryLeadsHasReceiverWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryLeadsHasReceiverWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryLeadsHasReceiverWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
