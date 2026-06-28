# OBJECT: ScribeApprovalQueueItem

## Estructura

| Campo              | Tipo                         | Descripción |
| :----------------- | :--------------------------- | :---------- |
| id                 | `ID!`                        |             |
| uuid               | `String!`                    |             |
| requested_by_agent | `Agent`                      |             |
| requested_by_user  | `User`                       |             |
| action_type        | `String!`                    |             |
| target_type        | `String!`                    |             |
| target_id          | `Int!`                       |             |
| payload            | `Mixed`                      |             |
| status             | `ScribeApprovalQueueStatus!` |             |
| approved_by_user   | `User`                       |             |
| approved_at        | `DateTime`                   |             |
| reason             | `String`                     |             |
| expires_at         | `DateTime`                   |             |
| plan               | `NervousSystemPlan`          |             |
| task               | `NervousSystemTask`          |             |
| metadata           | `Mixed`                      |             |
| company            | `Company!`                   |             |
| created_at         | `DateTime!`                  |             |
| updated_at         | `DateTime!`                  |             |
