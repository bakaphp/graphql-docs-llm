# OBJECT: User

## Estructura

| Campo                       | Tipo                    | Descripción |
| :-------------------------- | :---------------------- | :---------- |
| id                          | `ID!`                   |             |
| uuid                        | `String!`               |             |
| firstname                   | `String`                |             |
| lastname                    | `String`                |             |
| displayname                 | `String!`               |             |
| description                 | `String`                |             |
| dob                         | `String`                |             |
| default_company             | `Int!`                  |             |
| default_company_uuid        | `String!`               |             |
| default_company_branch      | `Int!`                  |             |
| default_company_branch_uuid | `String!`               |             |
| email                       | `Email!`                |             |
| is_active                   | `Boolean!`              |             |
| verify_two_factor           | `Boolean!`              |             |
| contact                     | `ContactInfo`           |             |
| address                     | `AddressType`           |             |
| addresses                   | `[Address!]`            |             |
| sex                         | `String`                |             |
| user_active                 | `Boolean!`              |             |
| is_verified                 | `Boolean!`              |             |
| lastvisit                   | `String`                |             |
| timezone                    | `String`                |             |
| abilities                   | `Mixed!`                |             |
| roles                       | `Mixed!`                |             |
| mainRole                    | `String!`               |             |
| welcome                     | `Boolean!`              |             |
| created_at                  | `DateTime`              |             |
| systemModule                | `SystemModule!`         |             |
| updated_at                  | `DateTime`              |             |
| branches                    | `[CompanyBranch!]!`     |             |
| companies                   | `[Company!]!`           |             |
| apps                        | `[App!]!`               |             |
| photo                       | `Filesystem`            |             |
| social                      | `UserSocialInfo`        |             |
| total_unread_notifications  | `Int!`                  |             |
| currentSubscription         | `UserSubscription`      |             |
| pivot                       | `SocialChannelPivot`    |             |
| files                       | `FilesystemPaginator!`  |             |
| custom_fields               | `CustomFieldPaginator!` |             |
