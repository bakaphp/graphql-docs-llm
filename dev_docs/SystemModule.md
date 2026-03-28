# OBJECT: SystemModule

## Estructura

| Campo         | Tipo           | Descripción |
| :------------ | :------------- | :---------- |
| id            | `ID!`          |             |
| uuid          | `String!`      |             |
| name          | `String!`      |             |
| slug          | `String!`      |             |
| model_name    | `String!`      |             |
| browse_fields | `Mixed`        |             |
| fields        | `Mixed`        |             |
| app           | `App!`         |             |
| parent        | `SystemModule` |             |
| menu_order    | `Int`          |             |
| show          | `Int!`         |             |
| abilities     | `[Abilities!]` |             |
