# OBJECT: PaginatorInfo

Information about pagination using a fully featured paginator.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| count | `Int!` | Number of items in the current page. |
| currentPage | `Int!` | Index of the current page. |
| firstItem | `Int` | Index of the first item in the current page. |
| hasMorePages | `Boolean!` | Are there more pages after this one? |
| lastItem | `Int` | Index of the last item in the current page. |
| lastPage | `Int!` | Index of the last available page. |
| perPage | `Int!` | Number of items per page. |
| total | `Int!` | Number of total available items. |
