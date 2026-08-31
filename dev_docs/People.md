# OBJECT: People

## Estructura

| Campo                   | Tipo                          | Descripción |
| :---------------------- | :---------------------------- | :---------- |
| id                      | `ID!`                         |             |
| uuid                    | `String!`                     |             |
| company                 | `Company!`                    |             |
| user                    | `User!`                       |             |
| name                    | `String!`                     |             |
| firstname               | `String`                      |             |
| middlename              | `String`                      |             |
| lastname                | `String`                      |             |
| subscriptions           | `[PeopleSubscription!]!`      |             |
| dob                     | `Date`                        |             |
| license_number          | `String`                      |             |
| license_expiration_date | `Date`                        |             |
| license_state           | `String`                      |             |
| people_type             | `PeopleType`                  |             |
| organizations           | `[Organization!]`             |             |
| contacts                | `[Contact!]!`                 |             |
| address                 | `[Address!]!`                 |             |
| created_at              | `DateTime!`                   |             |
| updated_at              | `DateTime`                    |             |
| first_message_at        | `DateTime`                    |             |
| last_message_at         | `DateTime`                    |             |
| active_leads_count      | `Int!`                        |             |
| photo                   | `Filesystem`                  |             |
| employment_history      | `[PeopleEmploymentHistory!]`  |             |
| files                   | `FilesystemPaginator!`        |             |
| custom_fields           | `CustomFieldPaginator!`       |             |
| interactions            | `EntityInteractionPaginator!` |             |
| tags                    | `TagPaginator!`               |             |
