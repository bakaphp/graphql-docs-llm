# OBJECT: Organization

## Estructura

| Campo             | Tipo                       | Descripción |
| :---------------- | :------------------------- | :---------- |
| id                | `ID!`                      |             |
| uuid              | `String!`                  |             |
| company           | `Company!`                 |             |
| user              | `User!`                    |             |
| name              | `String!`                  |             |
| email             | `String`                   |             |
| phone             | `String`                   |             |
| address           | `String`                   |             |
| addresses         | `[OrganizationAddress!]!`  |             |
| billing_address   | `OrganizationAddress`      |             |
| organization_type | `OrganizationType`         |             |
| approvers         | `[OrganizationApprover!]!` |             |
| notes             | `SocialChannel`            |             |
| events            | `[Event!]!`                |             |
| channels          | `[SocialChannel!]!`        |             |
| total_employees   | `Int!`                     |             |
| created_at        | `DateTime!`                |             |
| updated_at        | `DateTime`                 |             |
| photo             | `Filesystem`               |             |
| leads             | `LeadPaginator!`           |             |
| tags              | `TagPaginator!`            |             |
| files             | `FilesystemPaginator!`     |             |
