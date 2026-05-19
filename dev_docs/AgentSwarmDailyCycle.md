# OBJECT: AgentSwarmDailyCycle

Daily mission briefing rolled up overnight from member AgentDailyCycle rows.

## Estructura

| Campo                          | Tipo                       | Descripción |
| :----------------------------- | :------------------------- | :---------- |
| id                             | `ID!`                      |             |
| uuid                           | `String!`                  |             |
| cycle_date                     | `Date!`                    |             |
| generated_at                   | `DateTime!`                |             |
| members_active_count           | `Int!`                     |             |
| members_idle_count             | `Int!`                     |             |
| events_processed_count         | `Int!`                     |             |
| proactive_actions_count        | `Int!`                     |             |
| mission_progress_pct           | `Float`                    |             |
| progress_delta_since_yesterday | `Float`                    |             |
| bottleneck_summary             | `String`                   |             |
| proposed_options               | `[SwarmProposedOption!]!`  |             |
| emergent_patterns              | `[SwarmEmergentPattern!]!` |             |
| briefing_text                  | `String`                   |             |
| signed_by_text                 | `String`                   |             |
| self_improvement_score         | `Float`                    |             |
