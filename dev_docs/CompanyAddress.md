# OBJECT: CompanyAddress

## Estructura

| Campo      | Tipo       | Descripción |
| :--------- | :--------- | :---------- |
| id         | `ID!`      |             |
| fullname   | `String`   |             |
| phone      | `String`   |             |
| address    | `String`   |             |
| address_2  | `String`   |             |
| city       | `String`   |             |
| county     | `String`   |             |
| state      | `String`   |             |
| zip        | `String`   |             |
| country    | `Country`  |             |
| latitude   | `Float`    |             |
| longitude  | `Float`    |             |
| is_default | `Boolean!` |             |
| countries  | `Country`  |             |
| states     | `States`   |             |
| cities     | `Cities`   |             |
