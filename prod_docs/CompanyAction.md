# OBJECT: CompanyAction



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| uuid | `String!` |  |
| action | `Action!` |  |
| company | `Company!` |  |
| name | `String!` |  |
| description | `String` |  |
| config | `Mixed` |  |
| form_config | `Mixed` |  |
| pdf_config | `Mixed` |  |
| status | `String` |  |
| is_active | `Boolean!` |  |
| is_published | `Boolean!` |  |
| weight | `Float!` |  |
| pipeline | `ActionPipeline` |  |
| parent | `CompanyAction` |  |
| children | `[CompanyAction!]` |  |
| files | `FilesystemPaginator!` |  |
| custom_fields | `CustomFieldPaginator!` |  |
