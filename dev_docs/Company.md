# OBJECT: Company

## Estructura

| Campo          | Tipo                       | Descripción |
| :------------- | :------------------------- | :---------- |
| id             | `ID!`                      |             |
| uuid           | `String!`                  |             |
| name           | `String!`                  |             |
| website        | `String`                   |             |
| address        | `String`                   |             |
| zipcode        | `Int`                      |             |
| email          | `String`                   |             |
| language       | `String`                   |             |
| timezone       | `String`                   |             |
| phone          | `String`                   |             |
| user           | `User`                     |             |
| groups         | `[CompanyGroup!]!`         |             |
| branches       | `[CompanyBranch!]!`        |             |
| photo          | `Filesystem`               |             |
| countries      | `Country`                  |             |
| states         | `States`                   |             |
| cities         | `States`                   |             |
| address_2      | `String`                   |             |
| city           | `String`                   |             |
| state          | `String`                   |             |
| country        | `String`                   |             |
| zip            | `String`                   |             |
| is_active      | `Boolean!`                 |             |
| users          | `[User]`                   |             |
| country_code   | `String`                   |             |
| created_at     | `DateTime`                 |             |
| updated_at     | `DateTime`                 |             |
| total_users    | `Int!`                     |             |
| total_branches | `Int!`                     |             |
| files          | `FilesystemPaginator!`     |             |
| addresses      | `CompanyAddressPaginator!` |             |
| custom_fields  | `CustomFieldPaginator!`    |             |
