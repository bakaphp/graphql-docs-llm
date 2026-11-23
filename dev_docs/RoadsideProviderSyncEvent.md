# OBJECT: RoadsideProviderSyncEvent

## Estructura

| Campo      | Tipo      | Descripción                            |
| :--------- | :-------- | :------------------------------------- |
| id         | `String!` |                                        |
| type       | `String!` |                                        |
| payload    | `Mixed`   |                                        |
| status     | `String!` | One of: pending, sent, failed, skipped |
| attempts   | `Int!`    |                                        |
| last_error | `String`  |                                        |
| created_at | `String`  |                                        |
| updated_at | `String`  |                                        |
