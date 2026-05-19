# OBJECT: NervousSystemPlan

## Estructura

| Campo                   | Tipo                    | Descripción |
| :---------------------- | :---------------------- | :---------- |
| id                      | `ID!`                   |             |
| uuid                    | `String!`               |             |
| company                 | `Company!`              |             |
| parent                  | `NervousSystemPlan`     |             |
| children                | `[NervousSystemPlan!]!` |             |
| agent                   | `AgentAi`               |             |
| swarm                   | `AgentSwarm`            |             |
| is_swarm_mission        | `Boolean!`              |             |
| user                    | `User`                  |             |
| entity_namespace        | `String`                |             |
| entity_id               | `Int`                   |             |
| plan_type               | `String!`               |             |
| title                   | `String!`               |             |
| description             | `String`                |             |
| status                  | `String!`               |             |
| priority                | `Int!`                  |             |
| deadline_at             | `DateTime`              |             |
| completion_pct          | `Int!`                  |             |
| input                   | `Mixed`                 |             |
| output                  | `Mixed`                 |             |
| impact_summary          | `String`                |             |
| status_pill             | `String`                |             |
| confidence_score        | `Float`                 |             |
| requires_human_approval | `Boolean!`              |             |
| approver                | `User`                  |             |
| approved_at             | `DateTime`              |             |
| review_outcome          | `String`                |             |
| started_at              | `DateTime`              |             |
| completed_at            | `DateTime`              |             |
| error_message           | `String`                |             |
| tasks                   | `[NervousSystemTask!]!` |             |
| created_at              | `DateTime!`             |             |
| updated_at              | `DateTime`              |             |
| files                   | `FilesystemPaginator!`  |             |
| tags                    | `TagPaginator!`         |             |
