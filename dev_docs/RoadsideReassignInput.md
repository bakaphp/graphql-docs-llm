# INPUT_OBJECT: RoadsideReassignInput

## Estructura

| Campo                   | Tipo      | Descripción                                                        |
| :---------------------- | :-------- | :----------------------------------------------------------------- |
| order_id                | `ID!`     |                                                                    |
| reason                  | `String!` |                                                                    |
| technician_id           | `ID`      | Hand the case to this technician; omit to send it back to the pool |
| eligible_technician_ids | `[ID!]`   | Limit who may take the case; an empty list clears the limit        |
