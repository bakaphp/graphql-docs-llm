# OBJECT: OrganizationDuplicateGroup

## Estructura

| Campo         | Tipo               | Descripción                                                     |
| :------------ | :----------------- | :-------------------------------------------------------------- |
| canonical_id  | `Int!`             | Recommended merge target — oldest id in the group.              |
| member_ids    | `[Int!]!`          | All member organization ids, including canonical_id, ascending. |
| reason        | `String!`          | Which dimension flagged this cluster: external_id_conflict      |
| sample_name   | `String!`          | A representative `name` from the group (for display).           |
| organizations | `[Organization!]!` | The full Organization rows for member_ids.                      |
