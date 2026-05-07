# OBJECT: LedgerEventPaginator

A paginated list of LedgerEvent items.

## Estructura

| Campo         | Tipo              | Descripción                                     |
| :------------ | :---------------- | :---------------------------------------------- |
| paginatorInfo | `PaginatorInfo!`  | Pagination information about the list of items. |
| data          | `[LedgerEvent!]!` | A list of LedgerEvent items.                    |
