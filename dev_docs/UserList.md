# OBJECT: UserList



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| slug | `String!` |  |
| name | `String!` |  |
| description | `String` |  |
| is_public | `Boolean` |  |
| is_default | `Boolean!` |  |
| user | `User!` |  |
| apps | `[App]` |  |
| company | `Company!` |  |
| items | `[Message]` |  |
| entities | `[Entity]` |  |
