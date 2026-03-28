# OBJECT: ParticipantPass

## Estructura

| Campo                      | Tipo                    | Descripción |
| :------------------------- | :---------------------- | :---------- |
| id                         | `ID!`                   |             |
| event_id                   | `ID!`                   |             |
| event_version_id           | `ID!`                   |             |
| participant_id             | `ID`                    |             |
| participant_pass_motive_id | `ID!`                   |             |
| apps_id                    | `ID!`                   |             |
| companies_id               | `ID!`                   |             |
| users_id                   | `ID!`                   |             |
| code                       | `String`                |             |
| expiration_date            | `DateTime!`             |             |
| used_date                  | `DateTime!`             |             |
| is_deleted                 | `Boolean!`              |             |
| created_at                 | `DateTime!`             |             |
| updated_at                 | `DateTime!`             |             |
| event                      | `Event`                 |             |
| eventVersion               | `EventVersion`          |             |
| participant                | `Participant`           |             |
| motive                     | `ParticipantPassMotive` |             |
