# OBJECT: Notification

## Estructura

| Campo           | Tipo                | Descripción |
| :-------------- | :------------------ | :---------- |
| id              | `ID!`               |             |
| users           | `User!`             |             |
| fromUsers       | `User`              |             |
| companies       | `Company`           |             |
| systemModule    | `SystemModule`      |             |
| interaction     | `Interaction`       |             |
| interaction_id  | `Int`               |             |
| types           | `NotificationType!` |             |
| entity_id       | `String!`           |             |
| entity          | `Mixed`             |             |
| entity_children | `Mixed`             |             |
| content         | `String`            |             |
| read            | `Int!`              |             |
| content_group   | `String`            |             |
| created_at      | `String!`           |             |
| updated_at      | `String`            |             |
