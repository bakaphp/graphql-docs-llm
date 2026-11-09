# OBJECT: AgentAvailablePhoneNumber

## Estructura

| Campo         | Tipo      | Descripción                                                  |
| :------------ | :-------- | :----------------------------------------------------------- |
| phone_number  | `String!` |                                                              |
| friendly_name | `String`  |                                                              |
| provider      | `String!` | The phone provider that owns this number. Only twilio today. |
| provider_id   | `String!` | The number's id at the provider.                             |
