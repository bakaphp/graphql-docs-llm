# OBJECT: Mutation

### createFilesystemMapper

**Retorno:** `FilesystemMapper!`

| Argumento | Tipo                     | Descripción |
| :-------- | :----------------------- | :---------- |
| input     | `FilesystemMapperInput!` |             |

---
### createImportMapper
**Retorno:** `FilesystemMapper!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `FilesystemMapperInput!` |  |
---

### updateFilesystemMapper

**Retorno:** `FilesystemMapper!`

| Argumento | Tipo                           | Descripción |
| :-------- | :----------------------------- | :---------- |
| input     | `UpdateFilesystemImportInput!` |             |

---
### deleteFilesystemMapper
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### filesystemImport

**Retorno:** `FileSystemImport!`

| Argumento | Tipo                     | Descripción |
| :-------- | :----------------------- | :---------- |
| input     | `FilesystemImportInput!` |             |

---
### createActivityLog
**Retorno:** `ActivityLog!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ActivityLogInput!` |  |
---

### createCities

**Retorno:** `Cities`

| Argumento    | Tipo      | Descripción |
| :----------- | :-------- | :---------- |
| name         | `String!` |             |
| latitude     | `Float!`  |             |
| longitude    | `Float!`  |             |
| states_id    | `ID!`     |             |
| countries_id | `ID!`     |             |

---
### updateCities
**Retorno:** `Cities`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| name | `String` |  |
| latitude | `Float` |  |
| longitude | `Float` |  |
| states_id | `ID` |  |
| countries_id | `ID` |  |
---

### deleteCities

**Retorno:** `Cities`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createCompany
**Retorno:** `Company!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `CompanyInput` |  |
---

### updateCompany

**Retorno:** `Company!`

| Argumento | Tipo           | Descripción |
| :-------- | :------------- | :---------- |
| id        | `ID!`          |             |
| input     | `CompanyInput` |             |

---
### updateCompanyPhotoProfile
**Retorno:** `Company!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| file | `Upload!` |  |
| id | `ID!` |  |
---

### uploadFileToCompany

**Retorno:** `Company!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| id        | `ID!`     |             |
| file      | `Upload!` |             |

---
### deleteCompany
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createCompanyBranch

**Retorno:** `CompanyBranch!`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| input     | `CompanyBranchInput` |             |

---
### updateCompanyBranch
**Retorno:** `CompanyBranch!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `CompanyBranchInput` |  |
---

### updatePhotoProfileToCompanyBranch

**Retorno:** `CompanyBranch!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| file      | `Upload!` |             |
| id        | `ID!`     |             |

---
### uploadFileToCompanyBranch
**Retorno:** `CompanyBranch!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| file | `Upload!` |  |
---

### deleteCompanyBranch

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### addUserToBranch
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| user_id | `ID!` |  |
---

### removeUserFromBranch

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |
| user_id   | `ID!` |             |

---
### addUserToCompany
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| user_id | `ID!` |  |
| rol_id | `ID` |  |
---

### removeUserFromCompany

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |
| user_id   | `ID!` |             |

---
### addAddressToCompany
**Retorno:** `CompanyAddress!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `CompanyAddressInput` |  |
---

### updateCompanyAddress

**Retorno:** `CompanyAddress!`

| Argumento  | Tipo                  | Descripción |
| :--------- | :-------------------- | :---------- |
| id         | `ID!`                 |             |
| address_id | `ID!`                 |             |
| input      | `CompanyAddressInput` |             |

---
### removeAddressFromCompany
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| address_id | `ID!` |  |
---

### createCountry

**Retorno:** `Country!`

| Argumento | Tipo                   | Descripción |
| :-------- | :--------------------- | :---------- |
| name      | `String!`              |             |
| code      | `String!`              |             |
| flag      | `String`               |             |
| states    | `[CreateStateInput!]!` |             |

---
### updateCountry
**Retorno:** `Country`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| name | `String!` |  |
| code | `String!` |  |
| flag | `String` |  |
---

### deleteCountry

**Retorno:** `Country!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### setCustomField
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `CustomFieldInput!` |  |
---

### deleteCustomField

**Retorno:** `Boolean!`

| Argumento | Tipo                | Descripción |
| :-------- | :------------------ | :---------- |
| input     | `CustomFieldInput!` |             |

---
### getCustomField
**Retorno:** `Mixed`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `CustomFieldInput!` |  |
---

### getAllCustomField

**Retorno:** `Mixed`

| Argumento | Tipo                | Descripción |
| :-------- | :------------------ | :---------- |
| input     | `CustomFieldInput!` |             |

---
### createMapperImporterTemplate
**Retorno:** `ImporterTemplate!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ImporterTemplateInput!` |  |
---

### inviteUser

**Retorno:** `Invite!`

| Argumento | Tipo           | Descripción |
| :-------- | :------------- | :---------- |
| input     | `InviteInput!` |             |

---
### inviteAdmin
**Retorno:** `AdminInvite!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `AdminInviteInput!` |  |
---

### deleteInvite

**Retorno:** `Boolean!`

| Argumento | Tipo   | Descripción |
| :-------- | :----- | :---------- |
| id        | `Int!` |             |

---
### deleteAdminInvite
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `Int!` |  |
---

### getInvite

**Retorno:** `ExternalInvite!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| hash      | `String!` |             |

---
### processInvite
**Retorno:** `TokenResponse!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `CompleteInviteInput!` |  |
---

### processAdminInvite

**Retorno:** `TokenResponse!`

| Argumento | Tipo                   | Descripción |
| :-------- | :--------------------- | :---------- |
| input     | `CompleteInviteInput!` |             |

---
### readAllNotifications
**Retorno:** `Boolean`
---

### sendNotificationBaseOnTemplate

**Retorno:** `Boolean`

| Argumento     | Tipo         | Descripción |
| :------------ | :----------- | :---------- |
| template_name | `String!`    |             |
| data          | `Mixed!`     |             |
| via           | `[String!]!` |             |
| users         | `[Mixed!]!`  |             |
| subject       | `String!`    |             |
| attachment    | `[String]`   |             |

---
### sendNotificationAnonymousBaseOnTemplate
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| template_name | `String!` |  |
| data | `Mixed!` |  |
| email | `Email!` |  |
| subject | `String!` |  |
| attachment | `[String]` |  |
---

### sendNotificationByMessage

**Retorno:** `NotificationMessageResponse!`

| Argumento | Tipo                                | Descripción |
| :-------- | :---------------------------------- | :---------- |
| metadata  | `NotificationMessageMetaDataInput!` |             |
| message   | `Mixed!`                            |             |

---
### notificationsMuteAll
**Retorno:** `Boolean!`
---

### setNotificationSettings

**Retorno:** `NotificationSettings!`

| Argumento              | Tipo                       | Descripción |
| :--------------------- | :------------------------- | :---------- |
| notifications_types_id | `Int!`                     |             |
| is_enabled             | `Int!`                     |             |
| channels               | `[NotificationChannels!]!` |             |

---
### createRole
**Retorno:** `Role`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `RoleInput!` |  |
---

### updateRole

**Retorno:** `Role`

| Argumento | Tipo        | Descripción |
| :-------- | :---------- | :---------- |
| id        | `ID!`       |             |
| input     | `RoleInput` |             |

---
### deleteRole
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### assignRoleToUser

**Retorno:** `Boolean`

| Argumento | Tipo     | Descripción |
| :-------- | :------- | :---------- |
| userId    | `ID!`    |             |
| roleIds   | `[ID!]!` |             |

---
### removeRole
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| userId | `ID!` |  |
| role | `Mixed!` |  |
---

### givePermissionToUser

**Retorno:** `Boolean`

| Argumento  | Tipo      | Descripción |
| :--------- | :-------- | :---------- |
| userId     | `ID!`     |             |
| permission | `String!` |             |

---
### removePermissionToUser
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| userId | `ID!` |  |
| permission | `String!` |  |
---

### givePermissionToRole

**Retorno:** `Boolean`

| Argumento    | Tipo      | Descripción |
| :----------- | :-------- | :---------- |
| role         | `String!` |             |
| permission   | `String!` |             |
| systemModule | `String!` |             |

---
### removePermissionToRole
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| role | `String!` |  |
| permission | `String!` |  |
| systemModule | `String!` |  |
---

### giveModulePermissionToRole

**Retorno:** `Boolean`

| Argumento  | Tipo      | Descripción |
| :--------- | :-------- | :---------- |
| role       | `String!` |             |
| moduleId   | `Int!`    |             |
| permission | `String!` |             |

---
### removeModulePermissionFromRole
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| role | `String!` |  |
| moduleId | `Int!` |  |
| permission | `String!` |  |
---

### createState

**Retorno:** `States`

| Argumento    | Tipo      | Descripción |
| :----------- | :-------- | :---------- |
| countries_id | `Int!`    |             |
| name         | `String!` |             |
| code         | `String!` |             |

---
### updateState
**Retorno:** `States`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `Int!` |  |
| countries_id | `Int!` |  |
| name | `String!` |  |
| code | `String` |  |
---

### deleteState

**Retorno:** `States`

| Argumento | Tipo   | Descripción |
| :-------- | :----- | :---------- |
| id        | `Int!` |             |

---
### createTemplate
**Retorno:** `Template!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `TemplateInput!` |  |
---

### updateTemplate

**Retorno:** `Template!`

| Argumento | Tipo             | Descripción |
| :-------- | :--------------- | :---------- |
| id        | `ID!`            |             |
| input     | `TemplateInput!` |             |

---
### deleteTemplate
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### login

**Retorno:** `TokenResponse!`

| Argumento | Tipo          | Descripción |
| :-------- | :------------ | :---------- |
| data      | `LoginInput!` |             |

---
### logout
**Retorno:** `Boolean!`
---

### logoutFromAllDevices

**Retorno:** `Boolean!`

---
### register
**Retorno:** `RegisterResponse!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| data | `RegisterInput!` |  |
---

### refreshToken

**Retorno:** `TokenResponse!`

| Argumento     | Tipo      | Descripción |
| :------------ | :-------- | :---------- |
| refresh_token | `String!` |             |

---
### changePassword
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| current_password | `String!` |  |
| new_password | `String!` |  |
| new_password_confirmation | `String` |  |
---

### forgotPassword

**Retorno:** `Boolean!`

| Argumento | Tipo                   | Descripción |
| :-------- | :--------------------- | :---------- |
| data      | `ForgotPasswordInput!` |             |

---
### resetPassword
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| data | `ResetPasswordInput!` |  |
---

### updateUser

**Retorno:** `User!`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| id        | `ID!`              |             |
| data      | `UpdateUserInput!` |             |

---
### updateEmail
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| email | `String!` |  |
---

### deleteUserAddress

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### updateDisplayname
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| displayname | `String!` |  |
---

### switchCompanyBranch

**Retorno:** `Boolean!`

| Argumento         | Tipo   | Descripción |
| :---------------- | :----- | :---------- |
| company_branch_id | `Int!` |             |

---
### socialLogin
**Retorno:** `TokenResponse!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| data | `SocialLoginInput!` |  |
---

### linkDevice

**Retorno:** `Boolean!`

| Argumento | Tipo           | Descripción |
| :-------- | :------------- | :---------- |
| data      | `DeviceInput!` |             |

---
### unLinkDevice
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| data | `DeviceInput!` |  |
---

### sendVerificationCode

**Retorno:** `Boolean!`

---
### verifyCode
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| code | `String!` |  |
---

### updatePhotoProfile

**Retorno:** `User!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| file      | `Upload!` |             |
| user_id   | `ID!`     |             |

---
### uploadFileToUser
**Retorno:** `User!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| file | `Upload!` |  |
---

### setToggleTwoFactorAuthIn30Days

**Retorno:** `Boolean!`

| Argumento | Tipo       | Descripción |
| :-------- | :--------- | :---------- |
| active    | `Boolean!` |             |

---
### requestDeleteAccount
**Retorno:** `Boolean!`
---

### checkUsersContactsMatch

**Retorno:** `UserContactsMatchesFindings!`

| Argumento | Tipo                   | Descripción |
| :-------- | :--------------------- | :---------- |
| contacts  | `[UserContactInput!]!` |             |

---
### saveUserAppPreferences
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| preferences | `Mixed!` |  |
---

### upload

**Retorno:** `Filesystem!`\
Upload a file that is publicly available.

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| file      | `Upload!` |             |

---
### createFileSystem
**Retorno:** `Filesystem!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `FilesystemInputUrl!` |  |
---

### multiUpload

**Retorno:** `[Filesystem!]!`

| Argumento | Tipo         | Descripción |
| :-------- | :----------- | :---------- |
| files     | `[Upload!]!` |             |

---
### attachFile
**Retorno:** `String!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `FilesystemAttachInput!` |  |
---

### deAttachFile

**Retorno:** `Boolean!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| uuid      | `String!` |             |

---
### deAttachFiles
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| uuids | `[String!]!` |  |
---

### deleteFile

**Retorno:** `Boolean!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| uuid      | `String!` |             |

---
### uploadCsv
**Retorno:** `Mixed!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| file | `Upload!` |  |
---

### mergeFiles

**Retorno:** `Filesystem`

| Argumento | Tipo     | Descripción |
| :-------- | :------- | :---------- |
| files     | `[ID!]!` |             |

---
### renameFile
**Retorno:** `Filesystem!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| name | `String!` |  |
---

### editFile

**Retorno:** `String!`

| Argumento | Tipo                           | Descripción |
| :-------- | :----------------------------- | :---------- |
| uuid      | `String!`                      |             |
| input     | `FilesystemEntityUpdateInput!` |             |

---
### createAttribute
**Retorno:** `Attributes!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `AttributeInput!` |  |
---

### updateAttribute

**Retorno:** `Attributes!`

| Argumento | Tipo                    | Descripción |
| :-------- | :---------------------- | :---------- |
| id        | `ID!`                   |             |
| input     | `AttributeUpdateInput!` |             |

---
### updateAttributeTranslations
**Retorno:** `Attributes!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `AttributeTranslationInput!` |  |
| code | `String!` |  |
| values | `[AttributeValueTranslationInput]` |  |
---

### deleteAttribute

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createBundle
**Retorno:** `Bundle!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `BundleInput!` |  |
---

### updateBundle

**Retorno:** `Bundle!`

| Argumento | Tipo           | Descripción |
| :-------- | :------------- | :---------- |
| id        | `ID!`          |             |
| input     | `BundleInput!` |             |

---
### deleteBundle
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createCategory

**Retorno:** `Category!`

| Argumento | Tipo             | Descripción |
| :-------- | :--------------- | :---------- |
| input     | `CategoryInput!` |             |

---
### updateCategory
**Retorno:** `Category!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `CategoryUpdateInput!` |  |
---

### updateCategoryTranslations

**Retorno:** `Category!`

| Argumento | Tipo                | Descripción |
| :-------- | :------------------ | :---------- |
| id        | `ID!`               |             |
| input     | `TranslationInput!` |             |
| code      | `String!`           |             |

---
### deleteCategory
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### uploadFileToCategory

**Retorno:** `Product!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| id        | `ID!`     |             |
| file      | `Upload!` |             |

---
### createChannel
**Retorno:** `Channel!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `CreateChannelInput!` |  |
---

### updateChannel

**Retorno:** `Channel!`

| Argumento | Tipo                  | Descripción |
| :-------- | :-------------------- | :---------- |
| id        | `ID!`                 |             |
| input     | `UpdateChannelInput!` |             |

---
### deleteChannel
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### unPublishAllVariantsFromChannel

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### importProduct
**Retorno:** `String!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `[ImporterProductInput!]!` |  |
| companyId | `Int!` |  |
| regionId | `Int` |  |
---

### createProduct

**Retorno:** `Product!`

| Argumento | Tipo            | Descripción |
| :-------- | :-------------- | :---------- |
| input     | `ProductInput!` |             |

---
### updateProduct
**Retorno:** `Product!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `ProductInputUpdate` |  |
---

### updateProductTranslations

**Retorno:** `Product!`

| Argumento | Tipo                       | Descripción |
| :-------- | :------------------------- | :---------- |
| id        | `ID!`                      |             |
| input     | `ProductTranslationInput!` |             |
| code      | `String!`                  |             |

---
### uploadFileToProduct
**Retorno:** `Product!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| file | `Upload!` |  |
---

### deleteProduct

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### addAttribute
**Retorno:** `Product`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| attribute_id | `ID!` |  |
| value | `String!` |  |
---

### removeAttribute

**Retorno:** `Product`

| Argumento    | Tipo  | Descripción |
| :----------- | :---- | :---------- |
| id           | `ID!` |             |
| attribute_id | `ID!` |             |

---
### addWarehouse
**Retorno:** `Product`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| warehouse_id | `ID!` |  |
---

### removeWarehouse

**Retorno:** `Product`

| Argumento    | Tipo  | Descripción |
| :----------- | :---- | :---------- |
| id           | `ID!` |             |
| warehouse_id | `ID!` |             |

---
### addCategory
**Retorno:** `Product`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| category_id | `ID!` |  |
---

### duplicateProduct

**Retorno:** `Product!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### publishProduct
**Retorno:** `Product!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| is_published | `Boolean!` |  |
---

### updateProductAttributeTranslations

**Retorno:** `ProductAttributesValue!`

| Argumento    | Tipo      | Descripción |
| :----------- | :-------- | :---------- |
| product_id   | `ID!`     |             |
| attribute_id | `ID!`     |             |
| code         | `String!` |             |
| value        | `Mixed`   |             |

---
### createProductSimple
**Retorno:** `Product!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ProductSimpleInput!` |  |
---

### updateProductSimple

**Retorno:** `Product!`

| Argumento | Tipo                        | Descripción |
| :-------- | :-------------------------- | :---------- |
| id        | `ID!`                       |             |
| input     | `ProductSimpleUpdateInput!` |             |

---
### createProductType
**Retorno:** `ProductType!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ProductTypeInput!` |  |
---

### updateProductType

**Retorno:** `ProductType!`

| Argumento | Tipo                      | Descripción |
| :-------- | :------------------------ | :---------- |
| id        | `ID!`                     |             |
| input     | `ProductTypeUpdateInput!` |             |

---
### updateProductTypeTranslations
**Retorno:** `ProductType!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `TranslationInput!` |  |
| code | `String!` |  |
---

### deleteProductType

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### assignProductTypeAttribute
**Retorno:** `ProductType!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `ProductTypeAttributesAssignInput` |  |
---

### createRegion

**Retorno:** `Region!`

| Argumento | Tipo           | Descripción |
| :-------- | :------------- | :---------- |
| input     | `RegionInput!` |             |

---
### updateRegion
**Retorno:** `Region!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `RegionInputUpdate!` |  |
---

### deleteRegion

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createStatus
**Retorno:** `Status!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `StatusInput!` |  |
---

### updateStatus

**Retorno:** `Status!`

| Argumento | Tipo           | Descripción |
| :-------- | :------------- | :---------- |
| id        | `ID!`          |             |
| input     | `StatusInput!` |             |

---
### updateStatusTranslations
**Retorno:** `Status!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `TranslationInput!` |  |
| code | `String!` |  |
---

### deleteStatus

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createVariant
**Retorno:** `Variant`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `VariantsInput!` |  |
---

### updateVariant

**Retorno:** `Variant`

| Argumento | Tipo                   | Descripción |
| :-------- | :--------------------- | :---------- |
| input     | `VariantsUpdateInput!` |             |
| id        | `ID!`                  |             |

---
### updateVariantTranslations
**Retorno:** `Variant!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `VariantTranslationInput!` |  |
| code | `String` |  |
---

### updateVariantAttributeTranslations

**Retorno:** `VariantAttributesValue!`

| Argumento    | Tipo      | Descripción |
| :----------- | :-------- | :---------- |
| variant_id   | `ID!`     |             |
| attribute_id | `ID!`     |             |
| code         | `String!` |             |
| value        | `Mixed`   |             |

---
### uploadFileToVariant
**Retorno:** `Product!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| file | `Upload!` |  |
---

### deleteVariant

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### addAttributeToVariant
**Retorno:** `Variant`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| attributes_id | `ID!` |  |
| input | `VariantsAttributesInput!` |  |
---

### removeAttributeToVariant

**Retorno:** `Variant`

| Argumento     | Tipo  | Descripción |
| :------------ | :---- | :---------- |
| id            | `ID!` |             |
| attributes_id | `ID!` |             |

---
### addVariantToChannel
**Retorno:** `Variant`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| variants_id | `ID!` |  |
| channels_id | `ID!` |  |
| warehouses_id | `ID!` |  |
| input | `VariantChannelInput!` |  |
---

### updateVariantInChannel

**Retorno:** `Variant`

| Argumento     | Tipo                   | Descripción |
| :------------ | :--------------------- | :---------- |
| variants_id   | `ID!`                  |             |
| channels_id   | `ID!`                  |             |
| warehouses_id | `ID!`                  |             |
| input         | `VariantChannelInput!` |             |

---
### removeVariantChannel
**Retorno:** `Variant`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| variants_id | `ID!` |  |
| channels_id | `ID!` |  |
| warehouses_id | `ID!` |  |
---

### addVariantToWarehouse

**Retorno:** `Variant`

| Argumento | Tipo                       | Descripción |
| :-------- | :------------------------- | :---------- |
| id        | `ID!`                      |             |
| input     | `WarehouseReferenceInput!` |             |

---
### updateVariantInWarehouse
**Retorno:** `Variant`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `WarehouseReferenceInput!` |  |
---

### removeVariantToWarehouse

**Retorno:** `Variant`

| Argumento    | Tipo  | Descripción |
| :----------- | :---- | :---------- |
| id           | `ID!` |             |
| warehouse_id | `ID!` |             |

---
### createWarehouse
**Retorno:** `Warehouse!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `WarehouseInput!` |  |
---

### updateWarehouse

**Retorno:** `Warehouse!`

| Argumento | Tipo                    | Descripción |
| :-------- | :---------------------- | :---------- |
| input     | `WarehouseInputUpdate!` |             |
| id        | `ID!`                   |             |

---
### deleteWarehouse
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### openclawCreateMachine

**Retorno:** `AgentMachineType!`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| input     | `AgentMachineInput!` |             |

---
### openclawUpdateMachine
**Retorno:** `AgentMachineType!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateAgentMachineInput!` |  |
---

### openclawDeleteMachine

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### openclawLaunchAgent
**Retorno:** `AgentDeploymentType!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `LaunchAgentInput!` |  |
---

### openclawTerminateAgent

**Retorno:** `Boolean!`

| Argumento     | Tipo  | Descripción |
| :------------ | :---- | :---------- |
| deployment_id | `ID!` |             |

---
### openclawRestartContainer
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| deployment_id | `ID!` |  |
---

### openclawContainerLogs

**Retorno:** `String!`

| Argumento     | Tipo  | Descripción |
| :------------ | :---- | :---------- |
| deployment_id | `ID!` |             |
| lines         | `Int` |             |

---
### openclawContainerStatus
**Retorno:** `AgentDeploymentType!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| deployment_id | `ID!` |  |
---

### openclawCollectUsage

**Retorno:** `AgentUsageSnapshot!`

| Argumento     | Tipo  | Descripción |
| :------------ | :---- | :---------- |
| deployment_id | `ID!` |             |

---
### openclawSetSlackTokens
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| agent_id | `ID!` |  |
| slack_bot_token | `String!` |  |
| slack_app_token | `String!` |  |
---

### openclawExecCommand

**Retorno:** `Boolean!`

| Argumento     | Tipo      | Descripción |
| :------------ | :-------- | :---------- |
| deployment_id | `ID!`     |             |
| command       | `String!` |             |
| session_id    | `String!` |             |

---
### openclawGetConfig
**Retorno:** `String!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| deployment_id | `ID!` |  |
---

### openclawUpdateConfig

**Retorno:** `Boolean!`

| Argumento     | Tipo      | Descripción |
| :------------ | :-------- | :---------- |
| deployment_id | `ID!`     |             |
| config        | `String!` |             |

---
### shopifySetup
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ShopifySetupInput!` |  |
---

### createLead

**Retorno:** `Lead!`

| Argumento | Tipo         | Descripción |
| :-------- | :----------- | :---------- |
| input     | `LeadInput!` |             |

---
### updateLead
**Retorno:** `Lead!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `LeadUpdateInput!` |  |
---

### deleteLead

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### restoreLead
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### addLeadParticipant

**Retorno:** `Boolean!`

| Argumento | Tipo                      | Descripción |
| :-------- | :------------------------ | :---------- |
| input     | `LeadsParticipantsInput!` |             |

---
### removeLeadParticipant
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `LeadsParticipantsInput!` |  |
---

### followLead

**Retorno:** `Boolean`

| Argumento | Tipo           | Descripción |
| :-------- | :------------- | :---------- |
| input     | `FollowInput!` |             |

---
### unFollowLead
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `FollowInput!` |  |
---

### attachFileToLead

**Retorno:** `Lead!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| file      | `Upload!` |             |
| id        | `ID!`     |             |
| params    | `Mixed`   |             |

---
### attachFilesToLead
**Retorno:** `Lead!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| file | `[Upload!]!` |  |
| id | `ID!` |  |
| params | `Mixed` |  |
---

### leadWonOrLost

**Retorno:** `Lead!`

| Argumento   | Tipo              | Descripción |
| :---------- | :---------------- | :---------- |
| id          | `ID!`             |             |
| status      | `LeadStatusEnum!` |             |
| reason_lost | `String`          |             |

---
### createLeadReceiver
**Retorno:** `LeadReceiver!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `LeadReceiverInput!` |  |
---

### updateLeadReceiver

**Retorno:** `LeadReceiver!`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| id        | `ID!`                |             |
| input     | `LeadReceiverInput!` |             |

---
### deleteLeadReceiver
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createLeadRotation

**Retorno:** `LeadRotation!`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| input     | `LeadRotationInput!` |             |

---
### updateLeadRotation
**Retorno:** `LeadRotation!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `LeadRotationInput!` |  |
---

### deleteLeadRotation

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createLeadSource
**Retorno:** `LeadSource`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `LeadSourceInput` |  |
---

### updateLeadSource

**Retorno:** `LeadSource`

| Argumento | Tipo              | Descripción |
| :-------- | :---------------- | :---------- |
| id        | `ID!`             |             |
| input     | `LeadSourceInput` |             |

---
### deleteLeadSource
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createLeadStatus

**Retorno:** `LeadStatus`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| input     | `LeadStatusInput!` |             |

---
### updateLeadStatus
**Retorno:** `LeadStatus`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `LeadStatusInput!` |  |
---

### deleteLeadStatus

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createLeadType
**Retorno:** `LeadType`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `LeadTypeInput!` |  |
---

### updateLeadType

**Retorno:** `LeadType`

| Argumento | Tipo             | Descripción |
| :-------- | :--------------- | :---------- |
| id        | `ID!`            |             |
| input     | `LeadTypeInput!` |             |

---
### deleteLeadType
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createOrganization

**Retorno:** `Organization`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| input     | `OrganizationInput!` |             |

---
### updateOrganization
**Retorno:** `Organization`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `OrganizationInput!` |  |
---

### deleteOrganization

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### restoreOrganization
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### addPeopleToOrganization

**Retorno:** `Boolean!`

| Argumento | Tipo                       | Descripción |
| :-------- | :------------------------- | :---------- |
| input     | `OrganizationPeopleInput!` |             |

---
### removePeopleFromOrganization
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `OrganizationPeopleInput!` |  |
---

### createPeople

**Retorno:** `People`

| Argumento | Tipo           | Descripción |
| :-------- | :------------- | :---------- |
| input     | `PeopleInput!` |             |

---
### updatePeople
**Retorno:** `People`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `PeopleInput!` |  |
---

### deletePeople

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### restorePeople
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### importPeoples

**Retorno:** `String!`

| Argumento | Tipo              | Descripción |
| :-------- | :---------------- | :---------- |
| input     | `[PeopleInput!]!` |             |
| companyId | `Int`             |             |

---
### attachFileToPeople
**Retorno:** `People!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| file | `Upload!` |  |
| id | `ID!` |  |
| params | `Mixed` |  |
---

### attachFilesToPeople

**Retorno:** `People!`

| Argumento | Tipo         | Descripción |
| :-------- | :----------- | :---------- |
| files     | `[Upload!]!` |             |
| id        | `ID!`        |             |
| params    | `Mixed`      |             |

---
### deletePeopleAddress
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### updateContact

**Retorno:** `Contact!`

| Argumento | Tipo                  | Descripción |
| :-------- | :-------------------- | :---------- |
| id        | `ID!`                 |             |
| input     | `UpdateContactInput!` |             |

---
### deleteContact
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createPeopleRelationship

**Retorno:** `PeopleRelationship!`

| Argumento | Tipo                       | Descripción |
| :-------- | :------------------------- | :---------- |
| input     | `PeopleRelationshipInput!` |             |

---
### updatePeopleRelationship
**Retorno:** `PeopleRelationship!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdatePeopleRelationshipInput!` |  |
---

### deletePeopleRelationship

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createPipeline
**Retorno:** `LeadPipeline`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `PipelineInput!` |  |
---

### updatePipeline

**Retorno:** `LeadPipeline`

| Argumento | Tipo             | Descripción |
| :-------- | :--------------- | :---------- |
| id        | `ID!`            |             |
| input     | `PipelineInput!` |             |

---
### deletePipeline
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### restorePipeline

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createPipelineStage
**Retorno:** `LeadPipelineStage`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `PipelineStageInput!` |  |
---

### updatePipelineStage

**Retorno:** `LeadPipelineStage`

| Argumento | Tipo                  | Descripción |
| :-------- | :-------------------- | :---------- |
| id        | `ID!`                 |             |
| input     | `PipelineStageInput!` |             |

---
### deletePipelineStage
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### restorePipelineStage

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createSocialChannel
**Retorno:** `SocialChannel`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `SocialChannelInput!` |  |
---

### updateSocialChannel

**Retorno:** `SocialChannel`

| Argumento | Tipo                  | Descripción |
| :-------- | :-------------------- | :---------- |
| id        | `ID!`                 |             |
| input     | `SocialChannelInput!` |             |

---
### deleteSocialChannel
**Retorno:** `SocialChannel`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### attachUserToSocialChannel

**Retorno:** `SocialChannel`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| input     | `AttachUserInput!` |             |

---
### detachUserToSocialChannel
**Retorno:** `SocialChannel`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| channel_id | `ID!` |  |
| user_id | `ID!` |  |
---

### userFollow

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| user_id   | `ID!` |             |

---
### userUnFollow
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| user_id | `ID!` |  |
---

### likeEntity

**Retorno:** `Boolean!`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| input     | `LikeEntityInput!` |             |

---
### unLikeEntity
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `LikeEntityInput!` |  |
---

### disLikeEntity

**Retorno:** `Boolean!`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| input     | `LikeEntityInput!` |             |

---
### getInteractionByEntity
**Retorno:** `Interactions!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `LikeEntityInput!` |  |
---

### createMessage

**Retorno:** `Message`

| Argumento | Tipo            | Descripción |
| :-------- | :-------------- | :---------- |
| input     | `MessageInput!` |             |

---
### updateMessage
**Retorno:** `Message`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `MessageUpdateInput!` |  |
---

### deleteMessage

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### restoreMessage
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### deleteMultipleMessages

**Retorno:** `Boolean!`

| Argumento | Tipo     | Descripción |
| :-------- | :------- | :---------- |
| ids       | `[ID!]!` |             |

---
### deleteAllMessages
**Retorno:** `Boolean!`
---

### interactionMessage

**Retorno:** `Message`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| id        | `ID!`              |             |
| type      | `InteractionType!` |             |

---
### likeMessage
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### disLikeMessage

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### shareMessage
**Retorno:** `String!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### viewMessage

**Retorno:** `Int!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### attachTopicToMessage
**Retorno:** `Message`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| message_id | `ID!` |  |
| topic_id | `ID!` |  |
---

### detachTopicToMessage

**Retorno:** `Message`

| Argumento  | Tipo  | Descripción |
| :--------- | :---- | :---------- |
| message_id | `ID!` |             |
| topic_id   | `ID!` |             |

---
### attachFileToMessage
**Retorno:** `Message!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| message_id | `ID!` |  |
| file | `Upload!` |  |
---

### uploadFileToMessage

**Retorno:** `Message!`

| Argumento  | Tipo      | Descripción |
| :--------- | :-------- | :---------- |
| message_id | `ID!`     |             |
| file       | `Upload!` |             |

---
### addComment
**Retorno:** `MessageComments!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `CommentInput!` |  |
---

### updateComment

**Retorno:** `MessageComments!`

| Argumento | Tipo                  | Descripción |
| :-------- | :-------------------- | :---------- |
| id        | `ID!`                 |             |
| input     | `CommentUpdateInput!` |             |

---
### deleteComment
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createMessageType

**Retorno:** `MessageType!`

| Argumento | Tipo                      | Descripción |
| :-------- | :------------------------ | :---------- |
| input     | `CreateMessageTypeInput!` |             |

---
### updateMessageType
**Retorno:** `MessageType!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `Int!` |  |
| input | `CreateMessageTypeInput` |  |
---

### deleteMessageType

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createReaction
**Retorno:** `Reaction`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ReactionInput!` |  |
---

### updateReaction

**Retorno:** `Reaction`

| Argumento | Tipo             | Descripción |
| :-------- | :--------------- | :---------- |
| id        | `ID!`            |             |
| input     | `ReactionInput!` |             |

---
### deleteReaction
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### reactToEntity

**Retorno:** `Boolean`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| input     | `UserReactionInput!` |             |

---
### createTag
**Retorno:** `Tag`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `TagInput!` |  |
---

### updateTag

**Retorno:** `Tag`

| Argumento | Tipo        | Descripción |
| :-------- | :---------- | :---------- |
| id        | `ID!`       |             |
| input     | `TagInput!` |             |

---
### deleteTag
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### followTag

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### attachTagToEntity
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `AttachTagEntityInput!` |  |
---

### createTopic

**Retorno:** `Topic`

| Argumento | Tipo          | Descripción |
| :-------- | :------------ | :---------- |
| input     | `TopicInput!` |             |

---
### updateTopic
**Retorno:** `Topic`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `TopicInput!` |  |
---

### followTopic

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### unFollowTopic
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### blockUser

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### unBlockUser
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createUserList

**Retorno:** `UserList`

| Argumento | Tipo             | Descripción |
| :-------- | :--------------- | :---------- |
| input     | `UserListInput!` |             |

---
### updateUserList
**Retorno:** `UserList`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UserListInput!` |  |
---

### deleteUserList

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### addToUserList
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| users_lists_id | `ID!` |  |
| messages_id | `ID!` |  |
---

### removeFromUserList

**Retorno:** `Boolean`

| Argumento      | Tipo  | Descripción |
| :------------- | :---- | :---------- |
| users_lists_id | `ID!` |             |
| messages_id    | `ID!` |             |

---
### addEntityToUserList
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| entity | `EntityInput!` |  |
---

### removeEntityFromUserList

**Retorno:** `Boolean`

| Argumento | Tipo           | Descripción |
| :-------- | :------------- | :---------- |
| entity    | `EntityInput!` |             |

---
### createUserRating
**Retorno:** `UserRating`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `UserRatingInput!` |  |
---

### userLikeEntity

**Retorno:** `Boolean!`

| Argumento | Tipo                    | Descripción |
| :-------- | :---------------------- | :---------- |
| input     | `UserInteractionInput!` |             |

---
### userViewEntity
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `UserInteractionInput!` |  |
---

### userUnLikeEntity

**Retorno:** `Boolean!`

| Argumento | Tipo                    | Descripción |
| :-------- | :---------------------- | :---------- |
| input     | `UserInteractionInput!` |             |

---
### userDisLikeEntity
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `UserInteractionInput!` |  |
---

### shareUser

**Retorno:** `String!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createAffiliateProgram
**Retorno:** `AffiliateProgram!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `AffiliateProgramInput!` |  |
---

### updateAffiliateProgram

**Retorno:** `AffiliateProgram!`

| Argumento | Tipo                           | Descripción |
| :-------- | :----------------------------- | :---------- |
| id        | `ID!`                          |             |
| input     | `UpdateAffiliateProgramInput!` |             |

---
### deleteAffiliateProgram
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createAffiliateTier

**Retorno:** `AffiliateTier!`

| Argumento | Tipo                  | Descripción |
| :-------- | :-------------------- | :---------- |
| input     | `AffiliateTierInput!` |             |

---
### updateAffiliateTier
**Retorno:** `AffiliateTier!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateAffiliateTierInput!` |  |
---

### deleteAffiliateTier

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createAffiliate
**Retorno:** `Affiliate!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `AffiliateInput!` |  |
---

### updateAffiliate

**Retorno:** `Affiliate!`

| Argumento | Tipo                    | Descripción |
| :-------- | :---------------------- | :---------- |
| id        | `ID!`                   |             |
| input     | `UpdateAffiliateInput!` |             |

---
### deleteAffiliate
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createAffiliateLink

**Retorno:** `AffiliateLink!`

| Argumento | Tipo                  | Descripción |
| :-------- | :-------------------- | :---------- |
| input     | `AffiliateLinkInput!` |             |

---
### updateAffiliateLink
**Retorno:** `AffiliateLink!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateAffiliateLinkInput!` |  |
---

### deleteAffiliateLink

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createAffiliateConversion
**Retorno:** `AffiliateConversion!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `AffiliateConversionInput!` |  |
---

### updateAffiliateConversion

**Retorno:** `AffiliateConversion!`

| Argumento | Tipo                              | Descripción |
| :-------- | :-------------------------------- | :---------- |
| id        | `ID!`                             |             |
| input     | `UpdateAffiliateConversionInput!` |             |

---
### deleteAffiliateConversion
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createAffiliateCommissionPayout

**Retorno:** `AffiliateCommissionPayout!`

| Argumento | Tipo                              | Descripción |
| :-------- | :-------------------------------- | :---------- |
| input     | `AffiliateCommissionPayoutInput!` |             |

---
### updateAffiliateCommissionPayout
**Retorno:** `AffiliateCommissionPayout!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateAffiliateCommissionPayoutInput!` |  |
---

### deleteAffiliateCommissionPayout

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### addToCart
**Retorno:** `[CartItem!]!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| items | `[CartItemInput!]!` |  |
---

### updateCart

**Retorno:** `[CartItem!]!`

| Argumento  | Tipo    | Descripción |
| :--------- | :------ | :---------- |
| variant_id | `ID!`   |             |
| quantity   | `Int!`  |             |
| attributes | `Mixed` |             |

---
### removeFromCart
**Retorno:** `[CartItem!]!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| variant_id | `ID!` |  |
---

### cartDiscountCodesUpdate

**Retorno:** `Cart!`

| Argumento     | Tipo         | Descripción |
| :------------ | :----------- | :---------- |
| discountCodes | `[String!]!` |             |

---
### applyWalletCreditToCart
**Retorno:** `Cart!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| amount | `Float` |  |
| tag | `String` |  |
---

### removeWalletCreditFromCart

**Retorno:** `Cart!`

---
### clearCart
**Retorno:** `Boolean!`
---

### createOrder

**Retorno:** `Mixed!`

| Argumento | Tipo          | Descripción |
| :-------- | :------------ | :---------- |
| input     | `OrderInput!` |             |

---
### createOrderFromCart
**Retorno:** `OrderResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `OrderCartInput!` |  |
---

### createOrderFromWalletCart

**Retorno:** `OrderResult!`

| Argumento | Tipo              | Descripción |
| :-------- | :---------------- | :---------- |
| input     | `OrderCartInput!` |             |

---
### createDraftOrder
**Retorno:** `Order!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `DraftOrderInput!` |  |
---

### updateDraftOrderStatus

**Retorno:** `Order!`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| order_id  | `ID!`              |             |
| status    | `OrderStatusEnum!` |             |

---
### updateOrder
**Retorno:** `OrderResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateOrderInput!` |  |
---

### extendOrder

**Retorno:** `OrderResult!`

| Argumento | Tipo                | Descripción |
| :-------- | :------------------ | :---------- |
| id        | `ID!`               |             |
| input     | `ExtendOrderInput!` |             |

---
### deleteOrder
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createOrderFromAppleInAppPurchase

**Retorno:** `Order!`

| Argumento | Tipo                         | Descripción |
| :-------- | :--------------------------- | :---------- |
| input     | `AppleInAppPurchaseReceipt!` |             |

---
### createOrderFromGooglePlayInAppPurchase
**Retorno:** `Order!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `GooglePlayInAppPurchaseReceipt!` |  |
---

### processOrderPayment

**Retorno:** `PaymentResult!`

| Argumento | Tipo                   | Descripción |
| :-------- | :--------------------- | :---------- |
| input     | `ProcessPaymentInput!` |             |

---
### importOrderCsv
**Retorno:** `ImportOrderCsvResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ImportOrderCsvInput!` |  |
---

### generateOrderPaymentIntent

**Retorno:** `GeneratePaymentIntentResult!`

| Argumento | Tipo     | Descripción |
| :-------- | :------- | :---------- |
| amount    | `Money!` |             |

---
### generatePaymentIntentFromOrder
**Retorno:** `GeneratePaymentIntentResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderId | `ID!` |  |
---

### transitionOrderStatus

**Retorno:** `OrderStatusTransitionResult!`

| Argumento | Tipo                          | Descripción |
| :-------- | :---------------------------- | :---------- |
| input     | `TransitionOrderStatusInput!` |             |

---
### createOrderStatus
**Retorno:** `OrderStatus!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `CreateOrderStatusInput!` |  |
---

### updateOrderStatus

**Retorno:** `OrderStatus!`

| Argumento | Tipo                      | Descripción |
| :-------- | :------------------------ | :---------- |
| id        | `ID!`                     |             |
| input     | `UpdateOrderStatusInput!` |             |

---
### deleteOrderStatus
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createOrderType

**Retorno:** `OrderType!`

| Argumento | Tipo                    | Descripción |
| :-------- | :---------------------- | :---------- |
| input     | `CreateOrderTypeInput!` |             |

---
### updateOrderType
**Retorno:** `OrderType!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateOrderTypeInput!` |  |
---

### deleteOrderType

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### generateCheckoutSession
**Retorno:** `PaymentLinkResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| order_id | `ID!` |  |
| options | `PaymentLinkOptionsInput` |  |
---

### sendOrderEmail

**Retorno:** `Boolean!`

| Argumento | Tipo     | Descripción |
| :-------- | :------- | :---------- |
| order_id  | `ID!`    |             |
| template  | `String` |             |

---
### orderChangeCustomer
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| order_id | `ID!` |  |
| customer_id | `ID!` |  |
---

### updateReferralCode

**Retorno:** `ReferralCode!`

| Argumento | Tipo                       | Descripción |
| :-------- | :------------------------- | :---------- |
| id        | `ID!`                      |             |
| input     | `UpdateReferralCodeInput!` |             |

---
### createPaymentMethod
**Retorno:** `PaymentMethod!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `PaymentMethodInput!` |  |
---

### updatePaymentMethod

**Retorno:** `PaymentMethod!`

| Argumento | Tipo                        | Descripción |
| :-------- | :-------------------------- | :---------- |
| id        | `ID!`                       |             |
| input     | `PaymentMethodUpdateInput!` |             |

---
### deletePaymentMethod
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### makePaymentIntent

**Retorno:** `PaymentIntentResult!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| paymentID | `ID!` |             |

---
### makePaymentIntentFromOrder
**Retorno:** `PaymentIntentResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderID | `ID!` |  |
---

### addPaymentToOrder

**Retorno:** `PaymentResult!`

| Argumento | Tipo            | Descripción |
| :-------- | :-------------- | :---------- |
| orderID   | `ID!`           |             |
| input     | `PaymentInput!` |             |

---
### initiatePayerAuthentication
**Retorno:** `PayerAuthResponse!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderId | `ID!` |  |
---

### completeDeviceData

**Retorno:** `PayerAuthStatus!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| orderId   | `ID!` |             |

---
### validatePayerAuthResult
**Retorno:** `PayerAuthStatus!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderId | `ID!` |  |
---

### validatePayment

**Retorno:** `PaymentValidationResult!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| paymentId | `ID!` |             |

---
### validatePaymentByOrder
**Retorno:** `PaymentValidationResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderId | `ID!` |  |
---

### capturePayment

**Retorno:** `PaymentActionResult!`

| Argumento | Tipo    | Descripción |
| :-------- | :------ | :---------- |
| paymentId | `ID!`   |             |
| amount    | `Float` |             |

---
### reversePayment
**Retorno:** `PaymentActionResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| paymentId | `ID!` |  |
| reason | `String` |  |
---

### processPayment

**Retorno:** `PaymentActionResult!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| paymentId | `ID!` |             |

---
### refundPayment
**Retorno:** `PaymentActionResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| paymentId | `ID!` |  |
| amount | `Float` |  |
---

### voidPayment

**Retorno:** `PaymentActionResult!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| paymentId | `ID!` |             |

---
### verifyPayment
**Retorno:** `PaymentVerifyResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderId | `ID` |  |
| paymentId | `ID` |  |
---

### startPaymentChallenge

**Retorno:** `ThreeDSChallengeResult!`

| Argumento   | Tipo               | Descripción |
| :---------- | :----------------- | :---------- |
| paymentId   | `ID!`              |             |
| browserInfo | `BrowserInfoInput` |             |

---
### startPaymentChallengeWithCard
**Retorno:** `ThreeDSChallengeResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderId | `ID!` |  |
| paymentData | `StartChallengeCardInput!` |  |
---

### finalizePaymentChallenge

**Retorno:** `ThreeDSChallengeResult!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| paymentId | `ID!` |             |

---
### flushUserWallet
**Retorno:** `WalletResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| user_id | `ID!` |  |
| tag | `String` |  |
---

### flushCompanyWallet

**Retorno:** `WalletResult!`

| Argumento  | Tipo     | Descripción |
| :--------- | :------- | :---------- |
| company_id | `ID!`    |             |
| tag        | `String` |             |

---
### refundOrderToWallet
**Retorno:** `WalletResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `WalletRefundInput!` |  |
---

### createDiscount

**Retorno:** `Discount!`

| Argumento | Tipo             | Descripción |
| :-------- | :--------------- | :---------- |
| input     | `DiscountInput!` |             |

---
### updateDiscount
**Retorno:** `Discount!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `DiscountInput!` |  |
---

### deleteDiscount

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createAction
**Retorno:** `Action!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ActionInput!` |  |
---

### updateAction

**Retorno:** `Action!`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| id        | `ID!`                |             |
| input     | `UpdateActionInput!` |             |

---
### deleteAction
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createCompanyAction

**Retorno:** `CompanyAction!`

| Argumento | Tipo                        | Descripción |
| :-------- | :-------------------------- | :---------- |
| input     | `CreateCompanyActionInput!` |             |

---
### updateCompanyAction
**Retorno:** `CompanyAction!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateCompanyActionInput!` |  |
---

### deleteCompanyAction

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### startLeadEngagement
**Retorno:** `Engagement!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `CreateEngagementInput!` |  |
---

### continueLeadEngagement

**Retorno:** `Engagement!`

| Argumento | Tipo                     | Descripción |
| :-------- | :----------------------- | :---------- |
| input     | `CreateEngagementInput!` |             |

---
### updateEngagement
**Retorno:** `Engagement!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| uuid | `ID!` |  |
| input | `UpdateEngagementInput!` |  |
---

### createActionPipeline

**Retorno:** `ActionPipeline!`

| Argumento | Tipo                   | Descripción |
| :-------- | :--------------------- | :---------- |
| input     | `CreatePipelineInput!` |             |

---
### updateActionPipeline
**Retorno:** `ActionPipeline!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdatePipelineInput!` |  |
---

### deleteActionPipeline

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createActionPipelineStage
**Retorno:** `ActionPipelineStage!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `CreatePipelineStageInput!` |  |
---

### updateActionPipelineStage

**Retorno:** `ActionPipelineStage!`

| Argumento | Tipo                        | Descripción |
| :-------- | :-------------------------- | :---------- |
| id        | `ID!`                       |             |
| input     | `UpdatePipelineStageInput!` |             |

---
### deleteActionPipelineStage
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createTaskList

**Retorno:** `TaskList!`

| Argumento | Tipo             | Descripción |
| :-------- | :--------------- | :---------- |
| input     | `TaskListInput!` |             |

---
### updateTaskList
**Retorno:** `TaskList!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateTaskListInput!` |  |
---

### deleteTaskList

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createTaskListItem
**Retorno:** `TaskListItem!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `TaskListItemInput!` |  |
---

### updateTaskListItem

**Retorno:** `TaskListItem!`

| Argumento | Tipo                       | Descripción |
| :-------- | :------------------------- | :---------- |
| id        | `ID!`                      |             |
| input     | `UpdateTaskListItemInput!` |             |

---
### deleteTaskListItem
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### changeTaskEngagementItemStatus

**Retorno:** `Boolean!`

| Argumento  | Tipo      | Descripción |
| :--------- | :-------- | :---------- |
| id         | `ID!`     |             |
| lead_id    | `ID!`     |             |
| status     | `String!` |             |
| message_id | `ID`      |             |
| config     | `Mixed`   |             |

---
### createApp
**Retorno:** `App!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `AppInput!` |  |
---

### updateApp

**Retorno:** `App!`

| Argumento | Tipo        | Descripción |
| :-------- | :---------- | :---------- |
| id        | `String!`   |             |
| input     | `AppInput!` |             |

---
### deleteApp
**Retorno:** `App!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `String!` |  |
---

### restoreApp

**Retorno:** `App!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| id        | `String!` |             |

---
### assignCompanyToApp
**Retorno:** `Company!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `String!` |  |
| companyId | `String!` |  |
---

### removeCompanyToApp

**Retorno:** `Company!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| id        | `String!` |             |
| companyId | `String!` |             |

---
### activateApp
**Retorno:** `App!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `String!` |  |
---

### deactivateApp

**Retorno:** `App!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| id        | `String!` |             |

---
### saveAppSettings
**Retorno:** `Mixed!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `String!` |  |
| input | `appSettingInput` |  |
---

### addTemplateToApp

**Retorno:** `AppTemplate`

| Argumento | Tipo                | Descripción |
| :-------- | :------------------ | :---------- |
| id        | `String!`           |             |
| input     | `appTemplateInput!` |             |

---
### appUserUpdatePassword
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| uuid | `String!` |  |
| password | `String!` |  |
---

### appUserUpdateEmail

**Retorno:** `Boolean!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| uuid      | `String!` |             |
| email     | `Email!`  |             |

---
### saveS3Settings
**Retorno:** `Mixed!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `String!` |  |
| input | `s3FilesystemConfigInput` |  |
---

### saveGcsSettings

**Retorno:** `Mixed!`

| Argumento | Tipo                       | Descripción |
| :-------- | :------------------------- | :---------- |
| id        | `String!`                  |             |
| input     | `gcsFilesystemConfigInput` |             |

---
### updateAppLogo
**Retorno:** `App!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| file | `Upload!` |  |
---

### setAppSetting

**Retorno:** `Boolean!`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| input     | `ModuleConfigInput!` |             |

---
### deleteAppSetting
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| key | `String!` |  |
---

### setCompanySetting

**Retorno:** `Boolean!`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| input     | `ModuleConfigInput!` |             |

---
### deleteCompanySetting
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ModuleConfigInput!` |  |
---

### appCreateUser

**Retorno:** `User!`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| data      | `CreateUserInput!` |             |

---
### appDeleteUser
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| user_id | `ID` |  |
---

### appDeActiveUser

**Retorno:** `Boolean`

| Argumento | Tipo | Descripción |
| :-------- | :--- | :---------- |
| user_id   | `ID` |             |

---
### appActivateUser
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| user_id | `ID` |  |
---

### appRestoreDeletedUser

**Retorno:** `Boolean`

| Argumento | Tipo | Descripción |
| :-------- | :--- | :---------- |
| user_id   | `ID` |             |

---
### appResetUserPassword
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| user_id | `ID` |  |
| password | `String` |  |
---

### appUpdateUserDisplayname

**Retorno:** `Boolean`

| Argumento   | Tipo     | Descripción |
| :---------- | :------- | :---------- |
| user_id     | `ID`     |             |
| displayname | `String` |             |

---
### setUserSetting
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ModuleConfigInput!` |  |
---

### deleteUserSetting

**Retorno:** `Boolean!`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| input     | `ModuleConfigInput!` |             |

---
### integrationCompany
**Retorno:** `IntegrationsCompanies!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `IntegrationsCompaniesInput!` |  |
---

### removeIntegrationCompany

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### integrationCompanyIsActive
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `IntegrationCompanyActive!` |  |
---

### integrationWorkflowRetry

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createReceiverWebhook
**Retorno:** `WorkflowReceiver!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ReceiverWebhookInput!` |  |
---

### updateReceiverWebhook

**Retorno:** `WorkflowReceiver!`

| Argumento | Tipo                          | Descripción |
| :-------- | :---------------------------- | :---------- |
| id        | `ID!`                         |             |
| input     | `UpdateReceiverWebhookInput!` |             |

---
### deleteReceiverWebhook
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### retryWebhookCall

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### runWorkflowFromEntity
**Retorno:** `Mixed`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `runWorkflowEntityInput!` |  |
---

### createRule

**Retorno:** `WorkflowRule!`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| input     | `CreateRuleInput!` |             |

---
### updateRule
**Retorno:** `WorkflowRule!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateRuleInput!` |  |
---

### deleteRule

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createSubscription
**Retorno:** `CompanySubscription!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `SubscriptionInput!` |  |
---

### updateSubscription

**Retorno:** `CompanySubscription!`

| Argumento | Tipo                       | Descripción |
| :-------- | :------------------------- | :---------- |
| input     | `SubscriptionUpdateInput!` |             |

---
### cancelSubscription
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### reactiveSubscription

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createPlan
**Retorno:** `Plan!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `PlanInput!` |  |
---

### updatePlan

**Retorno:** `Plan!`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| id        | `ID!`              |             |
| input     | `PlanUpdateInput!` |             |

---
### deletePlan
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createPrice

**Retorno:** `Price!`

| Argumento | Tipo          | Descripción |
| :-------- | :------------ | :---------- |
| input     | `PriceInput!` |             |

---
### updatePrice
**Retorno:** `Price!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `PriceUpdateInput!` |  |
---

### createEvent

**Retorno:** `Event!`

| Argumento | Tipo          | Descripción |
| :-------- | :------------ | :---------- |
| input     | `EventInput!` |             |

---
### updateEvent
**Retorno:** `Event!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `EventUpdateInput!` |  |
---

### deleteEvent

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### bookTimeSlot
**Retorno:** `EventVersion!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `TimeSlotBookingInput!` |  |
---

### updateTimeSlotBooking

**Retorno:** `EventVersion!`

| Argumento | Tipo                          | Descripción |
| :-------- | :---------------------------- | :---------- |
| input     | `TimeSlotBookingUpdateInput!` |             |

---
### bookResource
**Retorno:** `EventVersion!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ResourceBookingInput!` |  |
---

### updateResourceBooking

**Retorno:** `EventVersion!`

| Argumento | Tipo                          | Descripción |
| :-------- | :---------------------------- | :---------- |
| input     | `ResourceBookingUpdateInput!` |             |

---
### deleteResourceBooking
**Retorno:** `ResourceBookingDeleteResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| event_version_id | `ID!` |  |
---

### confirmBooking

**Retorno:** `ConfirmBookingResult!`

| Argumento | Tipo                   | Descripción |
| :-------- | :--------------------- | :---------- |
| input     | `ConfirmBookingInput!` |             |

---
### addPeopleToEventVersion
**Retorno:** `Participant!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `PeopleEventVersionInput!` |  |
---

### removePeopleInEventVersion

**Retorno:** `Boolean!`

| Argumento | Tipo                       | Descripción |
| :-------- | :------------------------- | :---------- |
| input     | `PeopleEventVersionInput!` |             |

---
### issueEventCode
**Retorno:** `IssueCodeResponse!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `IssueEventCodeInput!` |  |
---

### issueParticipantCode

**Retorno:** `IssueParticipantCodeResponse!`

| Argumento | Tipo                         | Descripción |
| :-------- | :--------------------------- | :---------- |
| input     | `IssueParticipantCodeInput!` |             |

---
### issueAllParticipantCodes
**Retorno:** `IssueAllCodesResponse!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `IssueAllParticipantCodesInput!` |  |
---

### checkInWithPin

**Retorno:** `CheckInResponse!`

| Argumento | Tipo                   | Descripción |
| :-------- | :--------------------- | :---------- |
| input     | `CheckInWithPinInput!` |             |

---
### setResourceSchedule
**Retorno:** `ResourceSchedule!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ResourceScheduleInput!` |  |
---

### createScheduleException

**Retorno:** `ScheduleException!`

| Argumento | Tipo                      | Descripción |
| :-------- | :------------------------ | :---------- |
| input     | `ScheduleExceptionInput!` |             |

---
### deleteScheduleException
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### createScheduleRules

**Retorno:** `ScheduleRules!`

| Argumento | Tipo                  | Descripción |
| :-------- | :-------------------- | :---------- |
| input     | `ScheduleRulesInput!` |             |

---
### updateScheduleRules
**Retorno:** `ScheduleRules!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `ScheduleRulesUpdateInput!` |  |
---

### deleteScheduleRules

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### createAiAgent
**Retorno:** `AgentAi!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `AgentAiInput!` |  |
---

### updateAiAgent

**Retorno:** `AgentAi!`

| Argumento | Tipo            | Descripción |
| :-------- | :-------------- | :---------- |
| id        | `ID!`           |             |
| input     | `AgentAiInput!` |             |

---
### deleteAiAgent
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### aiAgentCreateSession

**Retorno:** `String!`

| Argumento | Tipo                 | Descripción |
| :-------- | :------------------- | :---------- |
| input     | `AgentSessionInput!` |             |

---
### aiAgentChat
**Retorno:** `String!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ChatSimpleInput!` |  |
---

### createAgentSwarm

**Retorno:** `AgentSwarm!`

| Argumento | Tipo               | Descripción |
| :-------- | :----------------- | :---------- |
| input     | `AgentSwarmInput!` |             |

---
### updateAgentSwarm
**Retorno:** `AgentSwarm!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `UpdateAgentSwarmInput!` |  |
---

### deleteAgentSwarm

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### addAgentToSwarm
**Retorno:** `AgentSwarm!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| swarm_id | `ID!` |  |
| agent_id | `ID!` |  |
| role | `String` |  |
| reports_to_agent_id | `ID` |  |
---

### updateSwarmMember

**Retorno:** `AgentSwarmMember!`

| Argumento           | Tipo     | Descripción |
| :------------------ | :------- | :---------- |
| swarm_id            | `ID!`    |             |
| agent_id            | `ID!`    |             |
| role                | `String` |             |
| reports_to_agent_id | `ID`     |             |

---
### removeAgentFromSwarm
**Retorno:** `AgentSwarm!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| swarm_id | `ID!` |  |
| agent_id | `ID!` |  |
---

### createAgentType

**Retorno:** `agentType!`

| Argumento | Tipo              | Descripción |
| :-------- | :---------------- | :---------- |
| input     | `AgentTypeInput!` |             |

---
### updateAgentType
**Retorno:** `agentType!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| input | `AgentTypeInput!` |  |
---

### deleteAgentType

**Retorno:** `Boolean!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
