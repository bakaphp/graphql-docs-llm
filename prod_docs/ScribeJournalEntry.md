# OBJECT: ScribeJournalEntry

## Estructura

| Campo              | Tipo                         | Descripción |
| :----------------- | :--------------------------- | :---------- |
| id                 | `ID!`                        |             |
| uuid               | `String!`                    |             |
| je_number          | `String`                     |             |
| posted_at          | `DateTime!`                  |             |
| source_type        | `String!`                    |             |
| source_id          | `Int`                        |             |
| source_external_id | `String`                     |             |
| memo               | `String`                     |             |
| status             | `ScribeJournalEntryStatus!`  |             |
| is_adjustment      | `Boolean!`                   |             |
| reversal_of        | `ScribeJournalEntry`         |             |
| source             | `String!`                    |             |
| external_id        | `String`                     |             |
| origin             | `ScribeJournalEntryOrigin!`  |             |
| metadata           | `Mixed`                      |             |
| company            | `Company!`                   |             |
| user               | `User`                       |             |
| lines              | `[ScribeJournalEntryLine!]!` |             |
| created_at         | `DateTime!`                  |             |
| updated_at         | `DateTime!`                  |             |
