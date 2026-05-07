# OBJECT: LedgerEvent

## Estructura

| Campo              | Tipo        | Descripción |
| :----------------- | :---------- | :---------- |
| id                 | `ID!`       |             |
| uuid               | `String!`   |             |
| company            | `Company!`  |             |
| source_domain      | `String!`   |             |
| source_entity_type | `String`    |             |
| source_entity_id   | `Int`       |             |
| event_type         | `String!`   |             |
| actor_type         | `String`    |             |
| actor_id           | `Int`       |             |
| status             | `String!`   |             |
| payload            | `Mixed`     |             |
| result             | `Mixed`     |             |
| error              | `Mixed`     |             |
| duration_ms        | `Int`       |             |
| correlation_id     | `String`    |             |
| occurred_at        | `DateTime!` |             |
| indexed_at         | `DateTime!` |             |
| is_archived        | `Boolean!`  |             |
