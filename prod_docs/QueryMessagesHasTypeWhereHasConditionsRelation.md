# INPUT_OBJECT: QueryMessagesHasTypeWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasType` argument of the
query `messages`.

## Estructura

| Campo     | Tipo                                                 | Descripción                                         |
| :-------- | :--------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                            | The relation that is checked.                       |
| operator  | `SQLOperator`                                        | The comparison operator to test against the amount. |
| amount    | `Int`                                                | The amount to test.                                 |
| condition | `QueryMessagesHasTypeWhereHasConditionsHasCondition` | Additional condition logic.                         |
