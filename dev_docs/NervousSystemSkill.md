# OBJECT: NervousSystemSkill

## Estructura

| Campo              | Tipo        | Descripción |
| :----------------- | :---------- | :---------- |
| id                 | `ID!`       |             |
| uuid               | `String!`   |             |
| name               | `String!`   |             |
| description        | `String`    |             |
| skill_type         | `String!`   |             |
| handler            | `String`    |             |
| definition         | `Mixed`     |             |
| frameworks         | `Mixed!`    |             |
| version            | `String!`   |             |
| is_active          | `Boolean!`  |             |
| agents_using_count | `Int!`      |             |
| created_at         | `DateTime!` |             |
| updated_at         | `DateTime`  |             |
