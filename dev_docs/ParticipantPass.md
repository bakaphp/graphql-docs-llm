# OBJECT: ParticipantPass

## Estructura

| Campo                      | Tipo                    | Descripción                                                                                           |
| :------------------------- | :---------------------- | :---------------------------------------------------------------------------------------------------- |
| id                         | `ID!`                   |                                                                                                       |
| event_id                   | `ID!`                   |                                                                                                       |
| event_version_id           | `ID!`                   |                                                                                                       |
| participant_id             | `ID`                    |                                                                                                       |
| participant_pass_motive_id | `ID!`                   |                                                                                                       |
| apps_id                    | `ID!`                   |                                                                                                       |
| companies_id               | `ID!`                   |                                                                                                       |
| users_id                   | `ID!`                   |                                                                                                       |
| code                       | `String`                |                                                                                                       |
| expiration_date            | `DateTime!`             |                                                                                                       |
| used_date                  | `DateTime`              | Null until the pass is scanned. The column has been nullable since passes stopped being pre-consumed. |
| is_deleted                 | `Boolean!`              |                                                                                                       |
| created_at                 | `DateTime!`             |                                                                                                       |
| updated_at                 | `DateTime!`             |                                                                                                       |
| event                      | `Event`                 |                                                                                                       |
| eventVersion               | `EventVersion`          |                                                                                                       |
| participant                | `Participant`           |                                                                                                       |
| motive                     | `ParticipantPassMotive` |                                                                                                       |
