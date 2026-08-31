# INPUT_OBJECT: QueryVariantsHasTagsWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasTags` argument of the
query `variants`.

## Estructura

| Campo     | Tipo                                                 | Descripción                                         |
| :-------- | :--------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                            | The relation that is checked.                       |
| operator  | `SQLOperator`                                        | The comparison operator to test against the amount. |
| amount    | `Int`                                                | The amount to test.                                 |
| condition | `QueryVariantsHasTagsWhereHasConditionsHasCondition` | Additional condition logic.                         |
