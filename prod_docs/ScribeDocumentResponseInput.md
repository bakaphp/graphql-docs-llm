# INPUT_OBJECT: ScribeDocumentResponseInput

## Estructura

| Campo       | Tipo                            | Descripción                                                  |
| :---------- | :------------------------------ | :----------------------------------------------------------- |
| status      | `ScribeDocumentResponseStatus!` |                                                              |
| signer_name | `String`                        | Required to accept a quote that carries a Statement of Work. |
| signature   | `String`                        | The drawn signature as a PNG or JPEG data URI.               |
| reason      | `String`                        | Required to decline.                                         |
