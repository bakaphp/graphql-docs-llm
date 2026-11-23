# INPUT_OBJECT: QueryMyMessagesHasTypeWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasType` argument of the
query `myMessages`.

## Estructura

| Campo     | Tipo                                                   | Descripción                                         |
| :-------- | :----------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                              | The relation that is checked.                       |
| operator  | `SQLOperator`                                          | The comparison operator to test against the amount. |
| amount    | `Int`                                                  | The amount to test.                                 |
| condition | `QueryMyMessagesHasTypeWhereHasConditionsHasCondition` | Additional condition logic.                         |
