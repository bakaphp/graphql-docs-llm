# INPUT_OBJECT: QueryMessagesGroupByDateHasUserWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasUser` argument of the
query `messagesGroupByDate`.

## Estructura

| Campo     | Tipo                                                            | Descripción                                         |
| :-------- | :-------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                       | The relation that is checked.                       |
| operator  | `SQLOperator`                                                   | The comparison operator to test against the amount. |
| amount    | `Int`                                                           | The amount to test.                                 |
| condition | `QueryMessagesGroupByDateHasUserWhereHasConditionsHasCondition` | Additional condition logic.                         |
