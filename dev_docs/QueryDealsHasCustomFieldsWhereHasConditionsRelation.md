# INPUT_OBJECT: QueryDealsHasCustomFieldsWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasCustomFields` argument
of the query `deals`.

## Estructura

| Campo     | Tipo                                                      | Descripción                                         |
| :-------- | :-------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                 | The relation that is checked.                       |
| operator  | `SQLOperator`                                             | The comparison operator to test against the amount. |
| amount    | `Int`                                                     | The amount to test.                                 |
| condition | `QueryDealsHasCustomFieldsWhereHasConditionsHasCondition` | Additional condition logic.                         |
