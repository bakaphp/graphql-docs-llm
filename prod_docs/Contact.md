# OBJECT: Contact

## Estructura

| Campo             | Tipo           | Descripción |
| :---------------- | :------------- | :---------- |
| id                | `ID!`          |             |
| type              | `ContactType!` |             |
| people            | `People!`      |             |
| value             | `String`       |             |
| is_opt_out        | `Boolean!`     |             |
| weight            | `Int!`         |             |
| validation_status | `String!`      |             |
| bounced_at        | `String`       |             |
| is_deliverable    | `Boolean!`     |             |
