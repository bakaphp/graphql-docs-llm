# OBJECT: ActivityLog

## Estructura

| Campo        | Tipo        | Descripción |
| :----------- | :---------- | :---------- |
| id           | `ID!`       |             |
| log_name     | `String!`   |             |
| description  | `String`    |             |
| subject_type | `String`    |             |
| event        | `String`    |             |
| entity_id    | `Int`       |             |
| causer_id    | `Int!`      |             |
| properties   | `Mixed`     |             |
| created_at   | `DateTime!` |             |
