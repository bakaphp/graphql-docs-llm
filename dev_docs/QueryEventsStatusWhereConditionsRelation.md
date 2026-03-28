# INPUT_OBJECT: QueryEventsStatusWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `status` argument of the
query `events`.

## Estructura

| Campo     | Tipo                                           | Descripción                                         |
| :-------- | :--------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                      | The relation that is checked.                       |
| operator  | `SQLOperator`                                  | The comparison operator to test against the amount. |
| amount    | `Int`                                          | The amount to test.                                 |
| condition | `QueryEventsStatusWhereConditionsHasCondition` | Additional condition logic.                         |
