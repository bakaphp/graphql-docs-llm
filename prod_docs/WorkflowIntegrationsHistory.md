# OBJECT: WorkflowIntegrationsHistory

## Estructura

| Campo              | Tipo                    | Descripción |
| :----------------- | :---------------------- | :---------- |
| id                 | `ID!`                   |             |
| entity_namespace   | `String!`               |             |
| entity_id          | `ID!`                   |             |
| integration        | `Integrations`          |             |
| integrationCompany | `IntegrationsCompanies` |             |
| status             | `Status`                |             |
| workflow           | `Workflow`              |             |
| action             | `WorkflowAction`        |             |
| input              | `Mixed`                 |             |
| response           | `Mixed`                 |             |
| exception          | `Mixed`                 |             |
| trigger            | `String`                |             |
| created_at         | `DateTime`              |             |
