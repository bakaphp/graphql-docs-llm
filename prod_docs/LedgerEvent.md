# OBJECT: LedgerEvent

## Estructura

| Campo                  | Tipo                         | Descripción                                                                                                                             |
| :--------------------- | :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| id                     | `ID!`                        |                                                                                                                                         |
| uuid                   | `String!`                    |                                                                                                                                         |
| company                | `Company!`                   |                                                                                                                                         |
| source_domain          | `String!`                    |                                                                                                                                         |
| source_entity_type     | `String`                     |                                                                                                                                         |
| source_entity_id       | `Int`                        |                                                                                                                                         |
| event_type             | `String!`                    |                                                                                                                                         |
| actor_type             | `String`                     |                                                                                                                                         |
| actor_id               | `Int`                        |                                                                                                                                         |
| status                 | `String!`                    |                                                                                                                                         |
| category               | `NervousSystemEventCategory` |                                                                                                                                         |
| payload                | `Mixed`                      |                                                                                                                                         |
| payload_schema_version | `Int!`                       |                                                                                                                                         |
| change_count           | `Int!`                       | Count of payload.changed_fields — filter `change_count GT 0` to get only change-bearing events.                                         |
| material_change_count  | `Int!`                       | Count of real before/after changes only (excludes flags like new_account) = rows the feed renders. Filter `material_change_count GT 0`. |
| result                 | `Mixed`                      |                                                                                                                                         |
| error                  | `Mixed`                      |                                                                                                                                         |
| duration_ms            | `Int`                        |                                                                                                                                         |
| correlation_id         | `String`                     |                                                                                                                                         |
| causation_id           | `String`                     |                                                                                                                                         |
| occurred_at            | `DateTime!`                  |                                                                                                                                         |
| indexed_at             | `DateTime!`                  |                                                                                                                                         |
