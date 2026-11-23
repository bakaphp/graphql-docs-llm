# OBJECT: IntegrationsCompanies

## Estructura

| Campo       | Tipo           | Descripción                                                                                       |
| :---------- | :------------- | :------------------------------------------------------------------------------------------------ |
| id          | `ID!`          |                                                                                                   |
| company     | `Company`      |                                                                                                   |
| integration | `Integrations` |                                                                                                   |
| status      | `Status`       |                                                                                                   |
| region      | `Region`       |                                                                                                   |
| is_active   | `Boolean!`     |                                                                                                   |
| oauth_url   | `String`       | Opens the provider's consent screen for an OAuth integration (e.g. Microsoft). Null for the rest. |
| updated_at  | `DateTime`     |                                                                                                   |
