# INPUT_OBJECT: QueryMessagesHasAppModuleMessageWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasAppModuleMessage`
argument of the query `messages`.

## Estructura

| Campo     | Tipo                                                             | Descripción                                         |
| :-------- | :--------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                        | The relation that is checked.                       |
| operator  | `SQLOperator`                                                    | The comparison operator to test against the amount. |
| amount    | `Int`                                                            | The amount to test.                                 |
| condition | `QueryMessagesHasAppModuleMessageWhereHasConditionsHasCondition` | Additional condition logic.                         |
