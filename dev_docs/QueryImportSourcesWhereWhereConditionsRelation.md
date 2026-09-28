# INPUT_OBJECT: QueryImportSourcesWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the
query `importSources`.

## Estructura

| Campo     | Tipo                                                 | Descripción                                         |
| :-------- | :--------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                            | The relation that is checked.                       |
| operator  | `SQLOperator`                                        | The comparison operator to test against the amount. |
| amount    | `Int`                                                | The amount to test.                                 |
| condition | `QueryImportSourcesWhereWhereConditionsHasCondition` | Additional condition logic.                         |
