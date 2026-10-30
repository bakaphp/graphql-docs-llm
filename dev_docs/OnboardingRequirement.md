# OBJECT: OnboardingRequirement

## Estructura

| Campo            | Tipo                              | Descripción                            |
| :--------------- | :-------------------------------- | :------------------------------------- |
| slug             | `String!`                         |                                        |
| label            | `String!`                         |                                        |
| description      | `String`                          |                                        |
| required         | `Boolean!`                        |                                        |
| shared           | `Boolean!`                        |                                        |
| satisfied_by     | `String`                          | Item slug that answered a shared slot. |
| status           | `RequirementStatus!`              |                                        |
| mode             | `RequirementMode`                 |                                        |
| inbound_address  | `String`                          |                                        |
| options          | `[OnboardingRequirementOption!]!` |                                        |
| allow_not_used   | `Boolean!`                        |                                        |
| allow_not_listed | `Boolean!`                        |                                        |
