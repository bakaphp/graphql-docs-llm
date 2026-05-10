# OBJECT: AgentBackupType

## Estructura

| Campo               | Tipo                  | Descripción |
| :------------------ | :-------------------- | :---------- |
| id                  | `ID!`                 |             |
| uuid                | `String!`             |             |
| agent_deployment_id | `ID!`                 |             |
| status              | `String!`             |             |
| file_path           | `String`              |             |
| file_size_bytes     | `Int`                 |             |
| notes               | `String`              |             |
| error_message       | `String`              |             |
| completed_at        | `DateTime`            |             |
| created_at          | `DateTime!`           |             |
| updated_at          | `DateTime!`           |             |
| deployment          | `AgentDeploymentType` |             |
| download_url        | `String`              |             |
