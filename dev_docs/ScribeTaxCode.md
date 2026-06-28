# OBJECT: ScribeTaxCode

## Estructura

| Campo        | Tipo                | Descripción |
| :----------- | :------------------ | :---------- |
| id           | `ID!`               |             |
| code         | `String!`           |             |
| name         | `String!`           |             |
| description  | `String`            |             |
| country_code | `String`            |             |
| is_active    | `Boolean!`          |             |
| source       | `String`            |             |
| external_id  | `String`            |             |
| metadata     | `Mixed`             |             |
| company      | `Company!`          |             |
| rates        | `[ScribeTaxRate!]!` |             |
| created_at   | `DateTime!`         |             |
| updated_at   | `DateTime!`         |             |
