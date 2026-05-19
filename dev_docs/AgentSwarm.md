# OBJECT: AgentSwarm

## Estructura

| Campo                   | Tipo                       | Descripción                                                                                                            |
| :---------------------- | :------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| id                      | `ID!`                      |                                                                                                                        |
| uuid                    | `String!`                  |                                                                                                                        |
| name                    | `String!`                  |                                                                                                                        |
| slug                    | `String!`                  |                                                                                                                        |
| description             | `String`                   |                                                                                                                        |
| status                  | `String!`                  |                                                                                                                        |
| config                  | `JSON`                     |                                                                                                                        |
| agent_count             | `Int!`                     |                                                                                                                        |
| deployment_status       | `String!`                  |                                                                                                                        |
| is_active               | `Boolean!`                 |                                                                                                                        |
| agents                  | `[AgentAi!]!`              |                                                                                                                        |
| members                 | `[AgentSwarmMember!]!`     |                                                                                                                        |
| active_mission          | `NervousSystemPlan`        |                                                                                                                        |
| created_at              | `DateTime!`                |                                                                                                                        |
| updated_at              | `DateTime`                 |                                                                                                                        |
| cost_today              | `Float!`                   | Today's accumulated USD cost across all member deployments. Updates as the deployment-usage cron runs (nightly today). |
| daily_cycle             | `AgentSwarmDailyCycle`     | Overnight-generated mission briefing. NULL until the swarm cycle cron runs for the given date (defaults to today).     |
| budget                  | `AgentSwarmBudgetSnapshot` | Live budget snapshot for the current period. NULL if no budget has been set.                                           |
| needs_attention         | `SwarmNeedsAttention`      | The single highest-severity alert to surface in the 'Needs attention' header card. NULL when all clear.                |
| active_agents_count     | `Int!`                     | Count of members currently in an active awake_state.                                                                   |
| pending_decisions_count | `Int!`                     | Plans tied to this swarm that are awaiting a human decision.                                                           |
