# OBJECT: GuildOrganizationDuplicateGroup

One cluster of likely-duplicate Organizations the duplicate-finder grouped
together.

## Estructura

| Campo        | Tipo      | Descripción                                                     |
| :----------- | :-------- | :-------------------------------------------------------------- |
| canonical_id | `Int!`    | Recommended merge target — oldest id in the group.              |
| member_ids   | `[Int!]!` | All member organization ids, including canonical_id, ascending. |
| reason       | `String!` | Which dimension flagged this cluster: exact_name                |
| sample_name  | `String!` | A representative `name` from the group (for display).           |
