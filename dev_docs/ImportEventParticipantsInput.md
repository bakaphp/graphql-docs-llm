# INPUT_OBJECT: ImportEventParticipantsInput

## Estructura

| Campo            | Tipo                                 | Descripción |
| :--------------- | :----------------------------------- | :---------- |
| event_version_id | `ID!`                                |             |
| rows             | `[EventParticipantImportRowInput!]!` |             |
| email_template   | `String`                             |             |
| code_length      | `Int`                                |             |
| reissue          | `Boolean`                            |             |
