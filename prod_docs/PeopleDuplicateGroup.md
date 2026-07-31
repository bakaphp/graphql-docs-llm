# OBJECT: PeopleDuplicateGroup

One cluster of likely-duplicate People the duplicate-finder grouped together.

## Estructura

| Campo        | Tipo         | Descripción                                                |
| :----------- | :----------- | :--------------------------------------------------------- |
| canonical_id | `Int!`       | Recommended merge target — oldest id in the group.         |
| member_ids   | `[Int!]!`    | All member people ids, including canonical_id, ascending.  |
| reason       | `String!`    | Which dimension flagged this cluster: external_id_conflict |
| sample_name  | `String!`    | A representative full name from the group (for display).   |
| peoples      | `[People!]!` | The full People rows for member_ids.                       |
