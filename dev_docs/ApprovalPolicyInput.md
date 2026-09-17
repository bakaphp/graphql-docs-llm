# INPUT_OBJECT: ApprovalPolicyInput

## Estructura

| Campo                    | Tipo      | Descripción |
| :----------------------- | :-------- | :---------- |
| system_module_id         | `ID!`     |             |
| approval_type            | `String!` |             |
| steps                    | `Mixed!`  |             |
| handler                  | `String`  |             |
| trigger                  | `String`  |             |
| trigger_condition        | `Mixed`   |             |
| trigger_event            | `String`  |             |
| reject_policy            | `String`  |             |
| fallback_resolver        | `String`  |             |
| fallback_config          | `Mixed`   |             |
| notify                   | `String`  |             |
| expires_after_hours      | `Int`     |             |
| allow_authority_override | `Boolean` |             |
