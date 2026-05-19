# INPUT_OBJECT: MigrateAgentToProviderInput

## Estructura

| Campo                  | Tipo             | Descripción |
| :--------------------- | :--------------- | :---------- |
| source_deployment_id   | `ID!`            |             |
| destination_machine_id | `ID!`            |             |
| target_provider        | `AgentProvider!` |             |
| source_path            | `String`         |             |
| destination_path       | `String`         |             |
