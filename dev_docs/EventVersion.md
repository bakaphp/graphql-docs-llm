# OBJECT: EventVersion

## Estructura

| Campo                 | Tipo                                    | Descripción |
| :-------------------- | :-------------------------------------- | :---------- |
| id                    | `ID!`                                   |             |
| uuid                  | `String!`                               |             |
| name                  | `String!`                               |             |
| company               | `Company!`                              |             |
| event                 | `Event!`                                |             |
| user                  | `User!`                                 |             |
| version_number        | `Int!`                                  |             |
| version               | `String!`                               |             |
| slug                  | `String!`                               |             |
| agenda                | `Mixed`                                 |             |
| metadata              | `Mixed`                                 |             |
| description           | `String`                                |             |
| classification        | `String`                                |             |
| price_per_ticket      | `Money!`                                |             |
| currency              | `Currency`                              |             |
| eventStatus           | `EventStatus`                           |             |
| max_capacity          | `Int`                                   |             |
| created_at            | `DateTime`                              |             |
| updated_at            | `DateTime`                              |             |
| dates                 | `[EventVersionDate!]!`                  |             |
| total_attendees       | `Int!`                                  |             |
| start_at              | `String`                                |             |
| end_at                | `String`                                |             |
| followers             | `[User!]!`                              |             |
| channels              | `[SocialChannel]!`                      |             |
| notes                 | `SocialChannel`                         |             |
| participants          | `EventVersionParticipantPaginator!`     |             |
| facilitators          | `FacilitatorPaginator!`                 |             |
| participant_attendees | `EventVersionParticipantDatePaginator!` |             |
| files                 | `FilesystemPaginator!`                  |             |
| custom_fields         | `CustomFieldPaginator!`                 |             |
| tags                  | `TagPaginator!`                         |             |
| ai_session            | `AIAgentSessionPaginator!`              |             |
