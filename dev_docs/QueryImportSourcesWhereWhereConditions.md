# INPUT_OBJECT: QueryImportSourcesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `importSources`.

## Estructura

| Campo    | Tipo                                             | Descripción                                                                           |
| :------- | :----------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryImportSourcesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                    | The operator that is used for the condition.                                          |
| value    | `Mixed`                                          | The value that is used for the condition.                                             |
| AND      | `[QueryImportSourcesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryImportSourcesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryImportSourcesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
