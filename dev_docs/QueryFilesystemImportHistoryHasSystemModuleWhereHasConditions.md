# INPUT_OBJECT: QueryFilesystemImportHistoryHasSystemModuleWhereHasConditions

Dynamic WHERE conditions for the `hasSystemModule` argument of the query
`filesystemImportHistory`.

## Estructura

| Campo    | Tipo                                                                    | Descripción                                                                           |
| :------- | :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryFilesystemImportHistoryHasSystemModuleColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                           | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                                 | The value that is used for the condition.                                             |
| AND      | `[QueryFilesystemImportHistoryHasSystemModuleWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryFilesystemImportHistoryHasSystemModuleWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryFilesystemImportHistoryHasSystemModuleWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
