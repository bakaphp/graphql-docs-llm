# INPUT_OBJECT: QueryParticipantPassMotivesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`participantPassMotives`.

## Estructura

| Campo    | Tipo                                                      | Descripción                                                                           |
| :------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryParticipantPassMotivesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                             | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                   | The value that is used for the condition.                                             |
| AND      | `[QueryParticipantPassMotivesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryParticipantPassMotivesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryParticipantPassMotivesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
