# INPUT_OBJECT: QueryFilesystemImportHistoryHasSystemModuleWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasSystemModule` argument of the query `filesystemImportHistory`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryFilesystemImportHistoryHasSystemModuleWhereHasConditionsHasCondition` | Additional condition logic. |
