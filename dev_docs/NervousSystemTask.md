# OBJECT: NervousSystemTask

## Estructura

| Campo           | Tipo                    | Descripción |
| :-------------- | :---------------------- | :---------- |
| id              | `ID!`                   |             |
| uuid            | `String!`               |             |
| plan            | `NervousSystemPlan!`    |             |
| agent           | `AgentAi`               |             |
| parent          | `NervousSystemTask`     |             |
| children        | `[NervousSystemTask!]!` |             |
| sequence        | `Int!`                  |             |
| title           | `String!`               |             |
| description     | `String`                |             |
| status          | `String!`               |             |
| result          | `Mixed`                 |             |
| blocked_reason  | `String`                |             |
| wake_at         | `DateTime`              |             |
| waiting_on_user | `User`                  |             |
| revision        | `Int!`                  |             |
| started_at      | `DateTime`              |             |
| completed_at    | `DateTime`              |             |
| created_at      | `DateTime!`             |             |
| updated_at      | `DateTime`              |             |
