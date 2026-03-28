# OBJECT: WorkflowRule

## Estructura

| Campo           | Tipo                        | Descripción |
| :-------------- | :-------------------------- | :---------- |
| id              | `ID!`                       |             |
| name            | `String!`                   |             |
| description     | `String`                    |             |
| pattern         | `String`                    |             |
| params          | `Mixed`                     |             |
| is_async        | `Boolean!`                  |             |
| type            | `WorkflowRuleType!`         |             |
| systemModule    | `SystemModule!`             |             |
| conditions      | `[WorkflowRuleCondition!]!` |             |
| workflowActions | `[WorkflowRuleAction!]!`    |             |
| company         | `Company`                   |             |
| apps_id         | `ID!`                       |             |
| created_at      | `DateTime`                  |             |
| updated_at      | `DateTime`                  |             |
