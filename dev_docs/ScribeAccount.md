# OBJECT: ScribeAccount

## Estructura

| Campo            | Tipo                 | Descripción |
| :--------------- | :------------------- | :---------- |
| id               | `ID!`                |             |
| uuid             | `String!`            |             |
| account_number   | `String`             |             |
| name             | `String!`            |             |
| description      | `String`             |             |
| account_type     | `ScribeAccountType!` |             |
| account_sub_type | `String`             |             |
| parent_account   | `ScribeAccount`      |             |
| currency         | `String!`            |             |
| is_active        | `Boolean!`           |             |
| is_system        | `Boolean!`           |             |
| source           | `String`             |             |
| external_id      | `String`             |             |
| metadata         | `Mixed`              |             |
| company          | `Company!`           |             |
| user             | `User`               |             |
| created_at       | `DateTime!`          |             |
| updated_at       | `DateTime!`          |             |
