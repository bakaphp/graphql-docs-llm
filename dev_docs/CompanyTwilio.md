# OBJECT: CompanyTwilio

The acting company's Twilio connection: which account, and whether it can place
calls and send texts.

## Estructura

| Campo              | Tipo                       | Descripción                                                                                             |
| :----------------- | :------------------------- | :------------------------------------------------------------------------------------------------------ |
| connected          | `Boolean!`                 |                                                                                                         |
| company_name       | `String!`                  | The company whose settings hold the credentials; a wrong company is the usual reason for wrong numbers. |
| account_name       | `String`                   |                                                                                                         |
| account_sid_suffix | `String`                   | Last 4 characters of the Twilio account SID.                                                            |
| status             | `String`                   | active                                                                                                  |
| type               | `String`                   | Trial                                                                                                   |
| balance            | `Float`                    | Null when Twilio didn't report it.                                                                      |
| currency           | `String`                   |                                                                                                         |
| number_count       | `Int!`                     |                                                                                                         |
| from_number        | `String`                   | The company's default From number (twilio_from_phone_number).                                           |
| problems           | `[CompanyTwilioProblem!]!` |                                                                                                         |
| error              | `String`                   | Why the account could not be read (not connected, credentials rejected), when it failed.                |
