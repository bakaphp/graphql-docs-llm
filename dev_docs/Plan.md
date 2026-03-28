# OBJECT: Plan

## Estructura

| Campo            | Tipo       | Descripción |
| :--------------- | :--------- | :---------- |
| id               | `ID!`      |             |
| name             | `String!`  |             |
| description      | `String`   |             |
| free_trial_dates | `Int`      |             |
| prices           | `[Price!]` |             |
| is_active        | `Boolean`  |             |
| is_default       | `Boolean`  |             |
| created_at       | `String`   |             |
| updated_at       | `String`   |             |
| stripe_id        | `String`   |             |
