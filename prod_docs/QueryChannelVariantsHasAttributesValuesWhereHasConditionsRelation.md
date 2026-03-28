# INPUT_OBJECT: QueryChannelVariantsHasAttributesValuesWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasAttributesValues`
argument of the query `channelVariants`.

## Estructura

| Campo     | Tipo                                                                    | Descripción                                         |
| :-------- | :---------------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                               | The relation that is checked.                       |
| operator  | `SQLOperator`                                                           | The comparison operator to test against the amount. |
| amount    | `Int`                                                                   | The amount to test.                                 |
| condition | `QueryChannelVariantsHasAttributesValuesWhereHasConditionsHasCondition` | Additional condition logic.                         |
