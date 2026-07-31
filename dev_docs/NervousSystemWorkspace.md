# OBJECT: NervousSystemWorkspace

## Estructura

| Campo          | Tipo                       | Descripción |
| :------------- | :------------------------- | :---------- |
| id             | `ID!`                      |             |
| uuid           | `String!`                  |             |
| name           | `String!`                  |             |
| slug           | `String!`                  |             |
| description    | `String`                   |             |
| status         | `String!`                  |             |
| owner          | `User!`                    |             |
| oversightAgent | `AgentAi`                  |             |
| projects       | `[NervousSystemProject!]!` |             |
| created_at     | `DateTime!`                |             |
| updated_at     | `DateTime`                 |             |
