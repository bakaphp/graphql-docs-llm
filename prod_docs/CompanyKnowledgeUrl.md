# OBJECT: CompanyKnowledgeUrl

A page added as company knowledge; indexing runs in the background and the
status says where it is.

## Estructura

| Campo      | Tipo      | Descripción                                           |
| :--------- | :-------- | :---------------------------------------------------- |
| url        | `String!` |                                                       |
| status     | `String!` | PENDING                                               |
| chunks     | `Int!`    |                                                       |
| added_at   | `String`  |                                                       |
| indexed_at | `String`  |                                                       |
| error      | `String`  | A code, never an internal message: knowledge_disabled |
