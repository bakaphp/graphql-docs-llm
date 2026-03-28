# INPUT_OBJECT: QueryMapperImportersTemplatesHasAttributesWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasAttributes` argument of
the query `mapperImportersTemplates`.

## Estructura

| Campo     | Tipo                                                                       | Descripción                                         |
| :-------- | :------------------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                                  | The relation that is checked.                       |
| operator  | `SQLOperator`                                                              | The comparison operator to test against the amount. |
| amount    | `Int`                                                                      | The amount to test.                                 |
| condition | `QueryMapperImportersTemplatesHasAttributesWhereHasConditionsHasCondition` | Additional condition logic.                         |
