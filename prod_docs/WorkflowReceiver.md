# OBJECT: WorkflowReceiver

## Estructura

| Campo         | Tipo                          | Descripción |
| :------------ | :---------------------------- | :---------- |
| id            | `ID!`                         |             |
| uuid          | `String!`                     |             |
| name          | `String!`                     |             |
| description   | `String`                      |             |
| url           | `String`                      |             |
| is_active     | `Boolean!`                    |             |
| run_async     | `Boolean!`                    |             |
| configuration | `Mixed`                       |             |
| company       | `Company`                     |             |
| action        | `WorkflowAction!`             |             |
| webhookCalls  | `[WorkflowReceiversHistory!]` |             |
| created_at    | `DateTime`                    |             |
| updated_at    | `DateTime`                    |             |
