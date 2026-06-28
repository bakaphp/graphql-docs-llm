# INPUT_OBJECT: ScribeTaxCodeInput

## Estructura

| Campo        | Tipo                    | Descripción |
| :----------- | :---------------------- | :---------- |
| code         | `String!`               |             |
| name         | `String!`               |             |
| jurisdiction | `String`                |             |
| is_active    | `Boolean`               |             |
| source       | `String`                |             |
| external_id  | `String`                |             |
| metadata     | `Mixed`                 |             |
| rates        | `[ScribeTaxRateInput!]` |             |
