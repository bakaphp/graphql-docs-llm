# OBJECT: Region

## Estructura

| Campo        | Tipo        | Descripción |
| :----------- | :---------- | :---------- |
| id           | `ID!`       |             |
| companies_id | `Int!`      |             |
| currency_id  | `Int!`      |             |
| companies    | `Company`   |             |
| currencies   | `Currency!` |             |
| uuid         | `String!`   |             |
| name         | `String!`   |             |
| slug         | `String!`   |             |
| short_slug   | `String!`   |             |
| settings     | `String`    |             |
| is_default   | `Boolean!`  |             |
