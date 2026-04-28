# INPUT_OBJECT: MigrateAgentWorkspaceInput

## Estructura

| Campo                  | Tipo     | Descripción                                                                                   |
| :--------------------- | :------- | :-------------------------------------------------------------------------------------------- |
| source_deployment_id   | `ID!`    |                                                                                               |
| destination_machine_id | `ID!`    |                                                                                               |
| source_path            | `String` | Full path to the workspace directory on the source server (defaults to ~/.openclaw)           |
| destination_path       | `String` | Parent directory to extract into on the destination server (defaults to agent home directory) |
