# OBJECT: Tag



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| parent_id | `ID` |  |
| parent | `Tag` |  |
| user | `User!` |  |
| name | `String!` |  |
| slug | `String` |  |
| description | `String` |  |
| weight | `Int` |  |
| is_feature | `Int` |  |
| created_at | `String` |  |
| updated_at | `String` |  |
| taggables | `[TagEntity!]!` |  |
| files | `FilesystemPaginator!` |  |
| children | `TagPaginator!` |  |
