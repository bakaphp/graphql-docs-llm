# OBJECT: AgentDeploymentEvent

## Estructura

| Campo         | Tipo      | Descripción                                                                                              |
| :------------ | :-------- | :------------------------------------------------------------------------------------------------------- |
| id            | `ID!`     | Auto-increment primary key                                                                               |
| deployment_id | `ID!`     | ID of the AgentDeployment this event belongs to                                                          |
| event_type    | `String!` | One of: gateway_down                                                                                     |
| payload       | `String`  | JSON-encoded map of contextual values that triggered the event (previous/current states, counts, errors) |
| occurred_at   | `String!` | ISO-8601 timestamp when the event occurred                                                               |
