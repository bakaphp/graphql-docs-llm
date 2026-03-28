# INPUT_OBJECT: PeopleParticipantInput

## Estructura

| Campo                 | Tipo              | Descripción |
| :-------------------- | :---------------- | :---------- |
| id                    | `ID`              |             |
| firstname             | `String!`         |             |
| middlename            | `String`          |             |
| lastname              | `String`          |             |
| participants_types_id | `ID!`             |             |
| facebook_contact_id   | `String`          |             |
| twitter_contact_id    | `String`          |             |
| linkedin_contact_id   | `String`          |             |
| google_contact_id     | `String`          |             |
| dob                   | `Date`            |             |
| contacts              | `[ContactInput!]` |             |
| address               | `[AddressInput!]` |             |
