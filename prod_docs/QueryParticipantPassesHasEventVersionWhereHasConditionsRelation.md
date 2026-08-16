# INPUT_OBJECT: QueryParticipantPassesHasEventVersionWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasEventVersion` argument
of the query `participantPasses`.

## Estructura

| Campo     | Tipo                                                                  | Descripción                                         |
| :-------- | :-------------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                             | The relation that is checked.                       |
| operator  | `SQLOperator`                                                         | The comparison operator to test against the amount. |
| amount    | `Int`                                                                 | The amount to test.                                 |
| condition | `QueryParticipantPassesHasEventVersionWhereHasConditionsHasCondition` | Additional condition logic.                         |
