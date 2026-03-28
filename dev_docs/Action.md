# OBJECT: Action

## Estructura

| Campo         | Tipo             | Descripción |
| :------------ | :--------------- | :---------- |
| id            | `ID!`            |             |
| uuid          | `String!`        |             |
| name          | `String!`        |             |
| slug          | `String!`        |             |
| description   | `String`         |             |
| companies_id  | `ID`             |             |
| icon          | `Mixed`          |             |
| form_fields   | `Mixed`          |             |
| form_config   | `Mixed`          |             |
| is_active     | `Boolean!`       |             |
| is_published  | `Boolean!`       |             |
| collects_info | `Boolean!`       |             |
| config        | `Mixed`          |             |
| pipeline      | `ActionPipeline` |             |
| parent        | `Action`         |             |
| children      | `[Action!]`      |             |
