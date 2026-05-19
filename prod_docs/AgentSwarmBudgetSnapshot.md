# OBJECT: AgentSwarmBudgetSnapshot

Live snapshot of the swarm's monthly budget vs. spend.

## Estructura

| Campo                   | Tipo       | Descripción |
| :---------------------- | :--------- | :---------- |
| id                      | `ID!`      |             |
| monthly_cost_cap_usd    | `Float`    |             |
| monthly_token_cap       | `Int`      |             |
| monthly_task_cap        | `Int`      |             |
| spent_usd               | `Float!`   |             |
| remaining_usd           | `Float`    |             |
| tokens_used             | `Int!`     |             |
| tasks_used              | `Int!`     |             |
| days_left_in_period     | `Int!`     |             |
| period_resets_on        | `Date!`    |             |
| warn_at_pct             | `Int!`     |             |
| hard_stop_at_cap        | `Boolean!` |             |
| warn_threshold_hit      | `Boolean!` |             |
| hard_stop_threshold_hit | `Boolean!` |             |
