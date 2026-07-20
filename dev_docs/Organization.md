# OBJECT: Organization

## Estructura

| Campo             | Tipo                      | Descripción                                                                                                                                             |
| :---------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                | `ID!`                     |                                                                                                                                                         |
| uuid              | `String!`                 |                                                                                                                                                         |
| company           | `Company!`                |                                                                                                                                                         |
| user              | `User!`                   |                                                                                                                                                         |
| name              | `String!`                 |                                                                                                                                                         |
| email             | `String`                  |                                                                                                                                                         |
| phone             | `String`                  |                                                                                                                                                         |
| address           | `String`                  | Legacy free-text address. Kept for the code that still reads it — use `addresses` for anything structured (invoicing, shipping, external billing APIs). |
| addresses         | `[OrganizationAddress!]!` | Structured addresses — typically one Billing and one Shipping. This is what Scribe invoices and external billing APIs read.                             |
| billing_address   | `OrganizationAddress`     | The address an invoice bills to: the one tagged Billing, else the default, else whichever exists.                                                       |
| organization_type | `OrganizationType`        |                                                                                                                                                         |
| total_employees   | `Int!`                    |                                                                                                                                                         |
| created_at        | `DateTime!`               |                                                                                                                                                         |
| updated_at        | `DateTime`                |                                                                                                                                                         |
| photo             | `Filesystem`              |                                                                                                                                                         |
| leads             | `LeadPaginator!`          |                                                                                                                                                         |
| tags              | `TagPaginator!`           |                                                                                                                                                         |
| files             | `FilesystemPaginator!`    |                                                                                                                                                         |
