# INPUT_OBJECT: PeopleInput

## Estructura

| Campo                   | Tipo                              | Descripción |
| :---------------------- | :-------------------------------- | :---------- |
| id                      | `ID`                              |             |
| firstname               | `String!`                         |             |
| middlename              | `String`                          |             |
| lastname                | `String`                          |             |
| facebook_contact_id     | `String`                          |             |
| twitter_contact_id      | `String`                          |             |
| linkedin_contact_id     | `String`                          |             |
| google_contact_id       | `String`                          |             |
| license_number          | `String`                          |             |
| dob                     | `String`                          |             |
| contacts                | `[ContactInput!]`                 |             |
| address                 | `[AddressInput!]`                 |             |
| files                   | `[FilesystemInputUrl!]`           |             |
| custom_fields           | `[CustomFieldEntityInput!]`       |             |
| tags                    | `[TagInput!]`                     |             |
| peopleEmploymentHistory | `[EmploymentPeopleHistoryInput!]` |             |
| organization            | `String`                          |             |
| created_at              | `DateTime`                        |             |
