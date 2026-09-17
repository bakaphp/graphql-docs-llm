# OBJECT: ApprovalPolicy

## Estructura

| Campo                    | Tipo            | Descripción                                                                   |
| :----------------------- | :-------------- | :---------------------------------------------------------------------------- |
| id                       | `ID!`           |                                                                               |
| approval_type            | `String!`       |                                                                               |
| system_module            | `SystemModule!` |                                                                               |
| steps                    | `Mixed!`        | Ordered chain. Each step: {step, resolver, config, required_approvals, when}. |
| handler                  | `String`        |                                                                               |
| trigger                  | `String!`       |                                                                               |
| trigger_condition        | `Mixed`         |                                                                               |
| trigger_event            | `String`        |                                                                               |
| reject_policy            | `String!`       |                                                                               |
| fallback_resolver        | `String`        |                                                                               |
| fallback_config          | `Mixed`         |                                                                               |
| notify                   | `String!`       |                                                                               |
| expires_after_hours      | `Int`           |                                                                               |
| allow_authority_override | `Boolean!`      |                                                                               |
| created_at               | `DateTime!`     |                                                                               |
| updated_at               | `DateTime`      |                                                                               |
