# OBJECT: ApprovalRequestApprover

## Estructura

| Campo        | Tipo       | Descripción |
| :----------- | :--------- | :---------- |
| id           | `ID!`      |             |
| user         | `User!`    |             |
| email        | `String`   |             |
| step         | `Int!`     |             |
| decision     | `String!`  |             |
| decided_at   | `DateTime` |             |
| comment      | `String`   |             |
| delegated_to | `User`     |             |
| notified_at  | `DateTime` |             |
