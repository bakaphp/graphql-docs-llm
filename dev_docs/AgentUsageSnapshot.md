# OBJECT: AgentUsageSnapshot



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| uuid | `String!` |  |
| agent_deployment_id | `ID` |  |
| snapshot_date | `String!` |  |
| source | `String!` |  |
| input_tokens | `Int!` |  |
| output_tokens | `Int!` |  |
| total_tokens | `Int!` |  |
| cache_read_tokens | `Int!` |  |
| cache_write_tokens | `Int!` |  |
| provider | `String` |  |
| model | `String` |  |
| total_sessions | `Int!` |  |
| raw_output | `String!` |  |
| parsed_data | `JSON` |  |
| created_at | `DateTime!` |  |
| deployment | `AgentDeploymentType` |  |
