# OBJECT: NervousSystemScheduledAction

## Estructura

| Campo              | Tipo        | Descripción |
| :----------------- | :---------- | :---------- |
| id                 | `ID!`       |             |
| uuid               | `String!`   |             |
| company            | `Company!`  |             |
| recipient          | `User`      |             |
| agent              | `AgentAi`   |             |
| action_type        | `String!`   |             |
| status             | `String!`   |             |
| run_at             | `DateTime!` |             |
| timezone           | `String!`   |             |
| is_recurring       | `Boolean!`  |             |
| recurrence_cron    | `String`    |             |
| recurrence_ends_at | `DateTime`  |             |
| max_occurrences    | `Int`       |             |
| occurrences_count  | `Int!`      |             |
| payload            | `Mixed`     |             |
| channel            | `String`    |             |
| session_uuid       | `String`    |             |
| source_entity_type | `String`    |             |
| source_entity_id   | `String`    |             |
| attempts           | `Int!`      |             |
| last_error         | `String`    |             |
| last_fired_at      | `DateTime`  |             |
| executed_at        | `DateTime`  |             |
| created_at         | `DateTime!` |             |
| updated_at         | `DateTime`  |             |
