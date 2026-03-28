# OBJECT: Attributes

## Estructura

| Campo          | Tipo                   | Descripción |
| :------------- | :--------------------- | :---------- |
| id             | `ID!`                  |             |
| uuid           | `String`               |             |
| name           | `String`               |             |
| translation    | `AttributeTranslation` |             |
| slug           | `String`               |             |
| created_at     | `String`               |             |
| updated_at     | `String`               |             |
| companies      | `[Company]`            |             |
| is_visible     | `Boolean`              |             |
| is_searchable  | `Boolean`              |             |
| is_filtrable   | `Boolean`              |             |
| is_required    | `Boolean`              |             |
| values         | `[AttributesValue!]`   |             |
| attribute_type | `AttributesType`       |             |
