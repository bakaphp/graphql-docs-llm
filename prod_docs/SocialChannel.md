# OBJECT: SocialChannel



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| name | `String!` |  |
| uuid | `String` |  |
| slug | `String` |  |
| description | `String!` |  |
| entity_namespace | `String!` |  |
| entity_id | `ID!` |  |
| last_message_id | `ID` |  |
| title | `String` |  |
| messages | `[Message!]!` |  |
| users | `[User!]!` |  |
| systemModule | `SystemModule!` |  |
| created_at | `DateTime!` |  |
| updated_at | `DateTime` |  |
| categories | `CategoryPaginator!` |  |
