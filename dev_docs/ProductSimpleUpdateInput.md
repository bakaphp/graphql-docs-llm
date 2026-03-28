# INPUT_OBJECT: ProductSimpleUpdateInput

## Estructura

| Campo             | Tipo                                 | Descripción |
| :---------------- | :----------------------------------- | :---------- |
| products_types_id | `ID`                                 |             |
| products_types    | `String`                             |             |
| name              | `String`                             |             |
| description       | `String`                             |             |
| slug              | `String`                             |             |
| short_description | `String`                             |             |
| is_published      | `Boolean`                            |             |
| attributes        | `[ProductAttributesInput!]`          |             |
| variants          | `[VariantSimpleUpdateInput!]`        |             |
| files             | `[FilesystemInputUrl!]`              |             |
| categories        | `[ProductCategoriesReferenceInput!]` |             |
| status            | `StatusReferenceInput`               |             |
