# OBJECT: AgentPhoneNumberSource

Where the agent number picker's list comes from: the acting company's Twilio
account.

## Estructura

| Campo              | Tipo      | Descripción                                                                             |
| :----------------- | :-------- | :-------------------------------------------------------------------------------------- |
| provider           | `String!` |                                                                                         |
| company_name       | `String`  |                                                                                         |
| account_name       | `String`  |                                                                                         |
| account_sid_suffix | `String`  | Last 4 characters of the Twilio account SID.                                            |
| number_count       | `Int!`    | Numbers on the account, including ones other agents hold.                               |
| error              | `String`  | Why the list could not be loaded (missing credentials, Twilio refused), when it failed. |
