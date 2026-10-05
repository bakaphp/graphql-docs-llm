# OBJECT: OrganizationEventHistoryEntry

One event version a client company's people registered for.

## Estructura

| Campo            | Tipo                               | Descripción      |
| :--------------- | :--------------------------------- | :--------------- |
| event_version_id | `ID!`                              |                  |
| event_name       | `String!`                          |                  |
| version_name     | `String!`                          |                  |
| event_date       | `Date`                             |                  |
| registrations    | `Int!`                             |                  |
| participants     | `Int!`                             | Distinct people. |
| people           | `[OrganizationEventParticipant!]!` |                  |
