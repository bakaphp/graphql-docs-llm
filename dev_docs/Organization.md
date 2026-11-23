# OBJECT: Organization

## Estructura

| Campo             | Tipo                       | Descripción                                                                                                  |
| :---------------- | :------------------------- | :----------------------------------------------------------------------------------------------------------- |
| id                | `ID!`                      |                                                                                                              |
| uuid              | `String!`                  |                                                                                                              |
| company           | `Company!`                 |                                                                                                              |
| user              | `User!`                    |                                                                                                              |
| name              | `String!`                  |                                                                                                              |
| tax_id            | `String`                   | The organization's tax id for any country (RNC, NIT, RUC, RFC, EIN…); digits only when it is a plain number. |
| tax_id_type       | `TaxIdType`                |                                                                                                              |
| tax_id_label      | `String`                   | Human name of the id for its country: RNC, Cédula, NIT, RFC, EIN…                                            |
| email             | `String`                   |                                                                                                              |
| phone             | `String`                   |                                                                                                              |
| address           | `String`                   |                                                                                                              |
| addresses         | `[OrganizationAddress!]!`  |                                                                                                              |
| billing_address   | `OrganizationAddress`      |                                                                                                              |
| organization_type | `OrganizationType`         |                                                                                                              |
| approvers         | `[OrganizationApprover!]!` |                                                                                                              |
| notes             | `SocialChannel`            |                                                                                                              |
| events            | `[Event!]!`                |                                                                                                              |
| channels          | `[SocialChannel!]!`        |                                                                                                              |
| total_employees   | `Int!`                     |                                                                                                              |
| created_at        | `DateTime!`                |                                                                                                              |
| updated_at        | `DateTime`                 |                                                                                                              |
| photo             | `Filesystem`               |                                                                                                              |
| leads             | `LeadPaginator!`           |                                                                                                              |
| tags              | `TagPaginator!`            |                                                                                                              |
| files             | `FilesystemPaginator!`     |                                                                                                              |
