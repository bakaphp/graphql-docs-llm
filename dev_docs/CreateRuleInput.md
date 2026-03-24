# INPUT_OBJECT: CreateRuleInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| name | `String!` |  |
| description | `String` |  |
| rules_types_id | `ID!` |  |
| systems_modules_id | `ID!` |  |
| companies_id | `ID` |  |
| pattern | `String` |  |
| params | `Mixed` |  |
| is_async | `Boolean` |  |
| conditions | `[RuleConditionInput!]` |  |
| actions | `[RuleActionInput!]` |  |
