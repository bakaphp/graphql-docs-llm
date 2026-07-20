# INPUT_OBJECT: AddressInput

## Estructura

| Campo      | Tipo              | Descripción                                                                                                                          |
| :--------- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| address    | `String`          | Nullable so an update can PATCH one field — demanding the street back to fix a zip is how data gets blanked.                         |
| address_2  | `String`          |                                                                                                                                      |
| city       | `String`          |                                                                                                                                      |
| county     | `String`          |                                                                                                                                      |
| city_id    | `ID`              |                                                                                                                                      |
| state      | `String`          |                                                                                                                                      |
| state_id   | `ID`              |                                                                                                                                      |
| zip        | `String`          |                                                                                                                                      |
| country    | `String`          |                                                                                                                                      |
| country_id | `ID`              |                                                                                                                                      |
| latitude   | `Float`           |                                                                                                                                      |
| longitude  | `Float`           |                                                                                                                                      |
| is_default | `Boolean`         |                                                                                                                                      |
| type       | `AddressTypeEnum` | Billing / Shipping / Home / Other. One address per type — re-sending Billing UPDATES the existing one rather than stacking a second. |
| id         | `ID`              |                                                                                                                                      |
