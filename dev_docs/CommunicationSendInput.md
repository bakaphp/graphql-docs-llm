# INPUT_OBJECT: CommunicationSendInput

## Estructura

| Campo           | Tipo                         | Descripción                                                                                          |
| :-------------- | :--------------------------- | :--------------------------------------------------------------------------------------------------- |
| people_id       | `ID!`                        |                                                                                                      |
| content         | `CommunicationContentInput!` |                                                                                                      |
| channels        | `[String!]!`                 | Channel names (sms, email, whatsapp), or ["all"] for every channel the person can be reached on now. |
| idempotency_key | `String`                     | Repeating a send with the same key returns the first operation instead of sending again.             |
| tag             | `String`                     |                                                                                                      |
