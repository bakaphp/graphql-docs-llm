# OBJECT: LeadRotation

## Estructura

| Campo                 | Tipo                   | Descripción |
| :-------------------- | :--------------------- | :---------- |
| id                    | `ID!`                  |             |
| company               | `Company!`             |             |
| name                  | `String!`              |             |
| leads_rotations_email | `String`               |             |
| hits                  | `Int`                  |             |
| agents                | `[LeadRotationAgent!]` |             |
| created_at            | `DateTime!`            |             |
| updated_at            | `DateTime`             |             |
