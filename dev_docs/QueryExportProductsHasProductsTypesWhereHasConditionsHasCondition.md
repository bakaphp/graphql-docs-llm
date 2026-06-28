# INPUT_OBJECT: QueryExportProductsHasProductsTypesWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasProductsTypes` argument of the query
`exportProducts`.

## Estructura

| Campo    | Tipo                                                                   | Descripción                                                                           |
| :------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                               | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                                | The value that is used for the condition.                                             |
| AND      | `[QueryExportProductsHasProductsTypesWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryExportProductsHasProductsTypesWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryExportProductsHasProductsTypesWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
