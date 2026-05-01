# OBJECT: AgentMachineType

## Estructura

| Campo            | Tipo        | Descripción |
| :--------------- | :---------- | :---------- |
| id               | `ID!`       |             |
| uuid             | `String!`   |             |
| name             | `String!`   |             |
| slug             | `String!`   |             |
| host             | `String!`   |             |
| ssh_port         | `Int!`      |             |
| ssh_user         | `String!`   |             |
| region           | `String`    |             |
| port_range_start | `Int!`      |             |
| port_range_end   | `Int!`      |             |
| max_agents       | `Int!`      |             |
| is_active        | `Boolean!`  |             |
| is_connected     | `Boolean!`  |             |
| last_ping_at     | `DateTime`  |             |
| created_at       | `DateTime!` |             |
| updated_at       | `DateTime!` |             |
