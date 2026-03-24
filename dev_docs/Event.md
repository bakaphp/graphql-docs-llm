# OBJECT: Event



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| uuid | `String!` |  |
| name | `String!` |  |
| slug | `String!` |  |
| description | `String` |  |
| version_count | `Int!` |  |
| start_at | `String` |  |
| end_at | `String` |  |
| user | `User!` |  |
| company | `Company!` |  |
| theme | `EventTheme` |  |
| themeArea | `EventThemeArea` |  |
| eventStatus | `EventClass` |  |
| type | `EventType` |  |
| class | `EventClass` |  |
| category | `EventCategory` |  |
| resources_id | `ID` |  |
| resources_type | `String` |  |
| resource | `EventResourceUnion` |  |
| resources | `[EventResource!]!` |  |
| created_at | `DateTime` |  |
| updated_at | `DateTime` |  |
| orders | `OrderPaginator!` |  |
| versions | `EventVersionPaginator!` |  |
| files | `FilesystemPaginator!` |  |
| custom_fields | `CustomFieldPaginator!` |  |
| tags | `TagPaginator!` |  |
