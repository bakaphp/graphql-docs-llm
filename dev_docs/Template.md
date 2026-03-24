# OBJECT: Template



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| users_id | `Int!` |  |
| companies_id | `Int!` |  |
| user | `User` |  |
| company | `Company` |  |
| name | `String!` |  |
| parent_template_id | `Int` |  |
| parent_template | `Template` |  |
| template | `Mixed!` |  |
| template_variables | `[TemplateVariables!]` |  |
| created_at | `String` |  |
| updated_at | `String` |  |
| is_deleted | `Int` |  |
| is_system | `Boolean` |  |
| title | `String` |  |
| subject | `String` |  |
