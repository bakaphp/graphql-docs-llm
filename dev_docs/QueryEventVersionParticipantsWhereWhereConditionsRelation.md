# INPUT_OBJECT: QueryEventVersionParticipantsWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the
query `eventVersionParticipants`.

## Estructura

| Campo     | Tipo                                                            | Descripción                                         |
| :-------- | :-------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                       | The relation that is checked.                       |
| operator  | `SQLOperator`                                                   | The comparison operator to test against the amount. |
| amount    | `Int`                                                           | The amount to test.                                 |
| condition | `QueryEventVersionParticipantsWhereWhereConditionsHasCondition` | Additional condition logic.                         |
