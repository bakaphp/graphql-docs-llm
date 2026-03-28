# INPUT_OBJECT: ProductInputUpdate

## Estructura

| Campo             | Tipo                                 | Descripción |
| :---------------- | :----------------------------------- | :---------- |
| products_types_id | `Int`                                |             |
| name              | `String`                             |             |
| slug              | `String`                             |             |
| description       | `String`                             |             |
| short_description | `String`                             |             |
| html_description  | `String`                             |             |
| warranty_terms    | `String`                             |             |
| upc               | `String`                             |             |
| is_published      | `Boolean`                            |             |
| weight            | `Float`                              |             |
| status            | `StatusReferenceInput`               |             |
| attributes        | `[ProductAttributesInput!]`          |             |
| files             | `[FilesystemInputUrl!]`              |             |
| categories        | `[ProductCategoriesReferenceInput!]` |             |
