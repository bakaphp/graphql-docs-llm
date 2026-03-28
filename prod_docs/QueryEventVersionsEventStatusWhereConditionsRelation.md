# INPUT_OBJECT: QueryEventVersionsEventStatusWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `eventStatus` argument of
the query `eventVersions`.

## Estructura

| Campo     | Tipo                                                       | Descripción                                         |
| :-------- | :--------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                  | The relation that is checked.                       |
| operator  | `SQLOperator`                                              | The comparison operator to test against the amount. |
| amount    | `Int`                                                      | The amount to test.                                 |
| condition | `QueryEventVersionsEventStatusWhereConditionsHasCondition` | Additional condition logic.                         |
