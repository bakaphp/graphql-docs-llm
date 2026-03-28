# INPUT_OBJECT: QueryChannelsWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the
query `channels`.

## Estructura

| Campo     | Tipo                                            | Descripción                                         |
| :-------- | :---------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                       | The relation that is checked.                       |
| operator  | `SQLOperator`                                   | The comparison operator to test against the amount. |
| amount    | `Int`                                           | The amount to test.                                 |
| condition | `QueryChannelsWhereWhereConditionsHasCondition` | Additional condition logic.                         |
