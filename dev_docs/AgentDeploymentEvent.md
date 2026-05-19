# OBJECT: AgentDeploymentEvent

## Estructura

| Campo         | Tipo      | Descripción          |
| :------------ | :-------- | :------------------- |
| id            | `ID!`     |                      |
| deployment_id | `ID!`     |                      |
| event_type    | `String!` | One of: gateway_down |
| payload       | `String`  |                      |
| occurred_at   | `String!` |                      |
