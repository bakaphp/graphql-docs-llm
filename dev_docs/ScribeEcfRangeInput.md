# INPUT_OBJECT: ScribeEcfRangeInput

## Estructura

| Campo         | Tipo      | Descripción                                        |
| :------------ | :-------- | :------------------------------------------------- |
| document_type | `String!` | e-CF type code, with or without the E: 31 or E31.  |
| first_number  | `String!` | Full e-NCF (E310000000004) or the bare number (4). |
| last_number   | `String!` |                                                    |
| expires_at    | `Date`    | DGII leaves it out for types 32 and 34.            |
