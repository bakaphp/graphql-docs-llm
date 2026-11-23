# OBJECT: RoadsideAuditEntry

## Estructura

| Campo       | Tipo      | Descripción                        |
| :---------- | :-------- | :--------------------------------- |
| id          | `String!` |                                    |
| occurred_at | `String`  |                                    |
| event_type  | `String!` |                                    |
| result      | `String!` | success or error                   |
| actor_type  | `String`  | user or system                     |
| actor_id    | `Int`     |                                    |
| actor_name  | `String`  |                                    |
| module      | `String`  |                                    |
| action      | `String`  |                                    |
| channel     | `String`  | One of: web, apk, app, api, system |
| reason      | `String`  |                                    |
| before      | `Mixed`   |                                    |
| after       | `Mixed`   |                                    |
| ip          | `String`  |                                    |
| device      | `String`  |                                    |
