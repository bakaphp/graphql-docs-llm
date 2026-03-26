# OBJECT: Message



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| parent_id | `ID` |  |
| parent_unique_id | `Mixed` |  |
| uuid | `String!` |  |
| slug | `String` |  |
| companies_id | `ID!` |  |
| users_id | `ID!` |  |
| message_types_id | `ID!` |  |
| message | `Mixed!` |  |
| reactions_count | `Int` |  |
| comment_count | `Int` |  |
| total_liked | `Int` |  |
| total_disliked | `Int` |  |
| is_public | `Int` |  |
| is_locked | `Int` |  |
| is_premium | `Int` |  |
| total_saved | `Int` |  |
| total_shared | `Int` |  |
| total_view | `Int` |  |
| total_children | `Int` |  |
| total_purchase | `Int` |  |
| parent | `Message` |  |
| user | `User!` |  |
| messageType | `MessageType!` |  |
| appModuleMessage | `AppModuleMessage` |  |
| myInteraction | `myInteraction` |  |
| additional_field | `Mixed` |  |
| created_at | `DateTime!` |  |
| channels | `[SocialChannel!]` |  |
| children | `MessagePaginator!` |  |
| comments | `MessageCommentsPaginator!` |  |
| custom_fields | `CustomFieldPaginator!` |  |
| tags | `TagPaginator!` |  |
| categories | `CategoryPaginator!` |  |
| files | `FilesystemPaginator!` |  |
