# INPUT_OBJECT: AgentAiInput

## Estructura

| Campo                  | Tipo                           | Descripción |
| :--------------------- | :----------------------------- | :---------- |
| agent_type_id          | `Int!`                         |             |
| name                   | `String!`                      |             |
| agent_model_id         | `Int`                          |             |
| description            | `String`                       |             |
| config                 | `Mixed!`                       |             |
| role                   | `Mixed!`                       |             |
| soul                   | `String`                       |             |
| instructions           | `String`                       |             |
| output_format          | `String`                       |             |
| identity               | `Mixed`                        |             |
| user_context           | `String`                       |             |
| tools_config           | `String`                       |             |
| parent_agent_id        | `ID`                           |             |
| is_active              | `Boolean!`                     |             |
| company_task_list_id   | `Int`                          |             |
| communication_channels | `[CommunicationChannelPivot!]` |             |
| swarm_ids              | `[ID!]`                        |             |
