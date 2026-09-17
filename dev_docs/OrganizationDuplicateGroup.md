# OBJECT: OrganizationDuplicateGroup

## Estructura

| Campo         | Tipo               | Descripción |
| :------------ | :----------------- | :---------- |
| canonical_id  | `Int!`             |             |
| member_ids    | `[Int!]!`          |             |
| reason        | `String!`          |             |
| sample_name   | `String!`          |             |
| organizations | `[Organization!]!` |             |
