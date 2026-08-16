# INPUT_OBJECT: QueryParticipantPassesHasEventVersionWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasEventVersion` argument of the query
`participantPasses`.

## Estructura

| Campo    | Tipo                                                                     | Descripción                                                                           |
| :------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                                 | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                            | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                                  | The value that is used for the condition.                                             |
| AND      | `[QueryParticipantPassesHasEventVersionWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryParticipantPassesHasEventVersionWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryParticipantPassesHasEventVersionWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
