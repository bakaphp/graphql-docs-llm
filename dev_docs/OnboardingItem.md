# OBJECT: OnboardingItem

## Estructura

| Campo        | Tipo                        | Descripción                                   |
| :----------- | :-------------------------- | :-------------------------------------------- |
| template     | `OnboardingItemTemplate!`   |                                               |
| area         | `String!`                   |                                               |
| agent        | `AgentAi`                   |                                               |
| status       | `ProvisionStatus!`          |                                               |
| ready        | `Boolean!`                  | Provisioned and every required slot answered. |
| requirements | `[OnboardingRequirement!]!` |                                               |
| error        | `String`                    |                                               |
