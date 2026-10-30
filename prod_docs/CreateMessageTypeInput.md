# INPUT_OBJECT: CreateMessageTypeInput

## Estructura

| Campo           | Tipo      | Descripción                                                                                                 |
| :-------------- | :-------- | :---------------------------------------------------------------------------------------------------------- |
| languages_id    | `Int!`    |                                                                                                             |
| name            | `String!` |                                                                                                             |
| verb            | `String!` |                                                                                                             |
| template        | `Mixed`   |                                                                                                             |
| templates_plura | `Mixed`   |                                                                                                             |
| is_public       | `Boolean` | Default visibility for messages of this type when the writer does not set one. Omit to let the verb decide. |
