# INPUT_OBJECT: QueryPeoplesHasCustomFieldsWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasCustomFields` argument
of the query `peoples`.

## Estructura

| Campo     | Tipo                                                        | Descripción                                         |
| :-------- | :---------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                   | The relation that is checked.                       |
| operator  | `SQLOperator`                                               | The comparison operator to test against the amount. |
| amount    | `Int`                                                       | The amount to test.                                 |
| condition | `QueryPeoplesHasCustomFieldsWhereHasConditionsHasCondition` | Additional condition logic.                         |
