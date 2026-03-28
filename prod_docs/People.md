# OBJECT: People

## Estructura

| Campo              | Tipo                          | Descripción |
| :----------------- | :---------------------------- | :---------- |
| id                 | `ID!`                         |             |
| uuid               | `String!`                     |             |
| company            | `Company!`                    |             |
| user               | `User!`                       |             |
| name               | `String!`                     |             |
| firstname          | `String`                      |             |
| middlename         | `String`                      |             |
| lastname           | `String`                      |             |
| subscriptions      | `[PeopleSubscription!]!`      |             |
| dob                | `Date`                        |             |
| license_number     | `String`                      |             |
| organizations      | `[Organization!]`             |             |
| contacts           | `[Contact!]!`                 |             |
| address            | `[Address!]!`                 |             |
| created_at         | `DateTime!`                   |             |
| updated_at         | `DateTime`                    |             |
| employment_history | `[PeopleEmploymentHistory!]`  |             |
| files              | `FilesystemPaginator!`        |             |
| custom_fields      | `CustomFieldPaginator!`       |             |
| interactions       | `EntityInteractionPaginator!` |             |
| tags               | `TagPaginator!`               |             |
