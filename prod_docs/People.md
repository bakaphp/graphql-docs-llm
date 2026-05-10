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
| people_type             | `PeopleType`                  |             |
| organizations           | `[Organization!]`             |             |
| contacts                | `[Contact!]!`                 |             |
| address                 | `[Address!]!`                 |             |
| created_at              | `DateTime!`                   |             |
| updated_at              | `DateTime`                    |             |
| photo                   | `Filesystem`                  |             |
| employment_history      | `[PeopleEmploymentHistory!]`  |             |
| files                   | `FilesystemPaginator!`        |             |
| custom_fields           | `CustomFieldPaginator!`       |             |
| interactions            | `EntityInteractionPaginator!` |             |
| tags                    | `TagPaginator!`               |             |
