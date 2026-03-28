# INPUT_OBJECT: QueryForYouMessagesHasTypeWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasType` argument of the
query `forYouMessages`.

## Estructura

| Campo     | Tipo                                                       | Descripción                                         |
| :-------- | :--------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                  | The relation that is checked.                       |
| operator  | `SQLOperator`                                              | The comparison operator to test against the amount. |
| amount    | `Int`                                                      | The amount to test.                                 |
| condition | `QueryForYouMessagesHasTypeWhereHasConditionsHasCondition` | Additional condition logic.                         |
