# INPUT_OBJECT: QueryExportProductsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `exportProducts`.

## Estructura

| Campo    | Tipo                                              | Descripción                                                                           |
| :------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryExportProductsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                           | The value that is used for the condition.                                             |
| AND      | `[QueryExportProductsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryExportProductsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryExportProductsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
