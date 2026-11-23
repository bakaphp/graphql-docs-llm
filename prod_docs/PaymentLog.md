# OBJECT: PaymentLog

## Estructura

| Campo                   | Tipo       | Descripción |
| :---------------------- | :--------- | :---------- |
| id                      | `ID!`      |             |
| payment                 | `Payment`  |             |
| company                 | `Company!` |             |
| user                    | `User!`    |             |
| status                  | `String`   |             |
| event_type              | `String`   |             |
| error_code              | `String`   |             |
| error_message           | `String`   |             |
| processor_response_code | `String`   |             |
| response_insight        | `String`   |             |
| metadata                | `Mixed`    |             |
| created_at              | `String!`  |             |
| updated_at              | `String`   |             |
| is_deleted              | `Boolean!` |             |
