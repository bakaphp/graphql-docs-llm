# OBJECT: ApprovalRequest

## Estructura

| Campo         | Tipo                          | Descripción |
| :------------ | :---------------------------- | :---------- |
| id            | `ID!`                         |             |
| uuid          | `String!`                     |             |
| approval_type | `String!`                     |             |
| status        | `String!`                     |             |
| current_step  | `Int!`                        |             |
| origin        | `String`                      |             |
| entity_id     | `Int!`                        |             |
| entity        | `Mixed`                       |             |
| system_module | `SystemModule!`               |             |
| payload       | `Mixed`                       |             |
| metadata      | `Mixed`                       |             |
| requested_by  | `User`                        |             |
| resolved_by   | `User`                        |             |
| resolved_at   | `DateTime`                    |             |
| reason        | `String`                      |             |
| expires_at    | `DateTime`                    |             |
| approvers     | `[ApprovalRequestApprover!]!` |             |
| created_at    | `DateTime!`                   |             |
| updated_at    | `DateTime`                    |             |
