# OBJECT: Organization

## Estructura

| Campo             | Tipo                   | Descripción |
| :---------------- | :--------------------- | :---------- |
| id                | `ID!`                  |             |
| uuid              | `String!`              |             |
| company           | `Company!`             |             |
| user              | `User!`                |             |
| name              | `String!`              |             |
| email             | `String`               |             |
| phone             | `String`               |             |
| address           | `String`               |             |
| organization_type | `OrganizationType`     |             |
| total_employees   | `Int!`                 |             |
| created_at        | `DateTime!`            |             |
| updated_at        | `DateTime`             |             |
| photo             | `Filesystem`           |             |
| leads             | `LeadPaginator!`       |             |
| tags              | `TagPaginator!`        |             |
| files             | `FilesystemPaginator!` |             |
