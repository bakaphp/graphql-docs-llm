# OBJECT: OnboardingArea

## Estructura

| Campo        | Tipo                         | Descripción                                                                             |
| :----------- | :--------------------------- | :-------------------------------------------------------------------------------------- |
| slug         | `String!`                    |                                                                                         |
| label        | `String!`                    |                                                                                         |
| title        | `String!`                    |                                                                                         |
| description  | `String!`                    |                                                                                         |
| icon         | `String`                     |                                                                                         |
| available    | `Boolean!`                   | false renders the card as Soon; it stays selectable and the pick is kept as a waitlist. |
| selected     | `Boolean!`                   |                                                                                         |
| capabilities | `[String!]!`                 |                                                                                         |
| setup_steps  | `[String!]!`                 |                                                                                         |
| items        | `[OnboardingItemTemplate!]!` |                                                                                         |
