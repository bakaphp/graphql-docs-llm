# INPUT_OBJECT: QueryDealsHasOwnerWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasOwner` argument of the
query `deals`.

## Estructura

| Campo     | Tipo                                               | Descripción                                         |
| :-------- | :------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                          | The relation that is checked.                       |
| operator  | `SQLOperator`                                      | The comparison operator to test against the amount. |
| amount    | `Int`                                              | The amount to test.                                 |
| condition | `QueryDealsHasOwnerWhereHasConditionsHasCondition` | Additional condition logic.                         |
