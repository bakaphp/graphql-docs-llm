# INPUT_OBJECT: QueryMessagesHasChannelWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasChannel` argument of the
query `messages`.

## Estructura

| Campo     | Tipo                                                    | Descripción                                         |
| :-------- | :------------------------------------------------------ | :-------------------------------------------------- |
| relation  | `String!`                                               | The relation that is checked.                       |
| operator  | `SQLOperator`                                           | The comparison operator to test against the amount. |
| amount    | `Int`                                                   | The amount to test.                                 |
| condition | `QueryMessagesHasChannelWhereHasConditionsHasCondition` | Additional condition logic.                         |
