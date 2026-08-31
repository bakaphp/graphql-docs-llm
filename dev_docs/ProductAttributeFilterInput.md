# INPUT_OBJECT: ProductAttributeFilterInput

Filter products by an attribute value, matching both the bare-scalar and the
translated ({"en": ...}) encodings of products_attributes.value. Provide
attribute_id or slug (or both).

## Estructura

| Campo        | Tipo                             | Descripción |
| :----------- | :------------------------------- | :---------- |
| attribute_id | `ID`                             |             |
| slug         | `String`                         |             |
| value        | `Mixed`                          |             |
| operator     | `ProductAttributeFilterOperator` |             |
