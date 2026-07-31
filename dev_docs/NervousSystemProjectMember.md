# OBJECT: NervousSystemProjectMember

## Estructura

| Campo       | Tipo        | Descripción |
| :---------- | :---------- | :---------- |
| id          | `ID!`       |             |
| member_type | `String!`   |             |
| role        | `String!`   |             |
| is_active   | `Boolean!`  |             |
| user        | `User!`     |             |
| agent       | `AgentAi`   |             |
| created_at  | `DateTime!` |             |
| updated_at  | `DateTime`  |             |
