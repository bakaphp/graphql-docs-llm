# OBJECT: CommunicationConnection

## Estructura

| Campo          | Tipo         | Descripción |
| :------------- | :----------- | :---------- |
| id             | `ID!`        |             |
| uuid           | `String!`    |             |
| provider       | `String!`    |             |
| account_key    | `String!`    |             |
| label          | `String`     |             |
| channels       | `[String!]!` |             |
| setup_status   | `String!`    |             |
| health         | `String!`    |             |
| enabled        | `Boolean!`   |             |
| last_error     | `String`     |             |
| last_probed_at | `DateTime`   |             |
