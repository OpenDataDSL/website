Tenant
==============================================

The tenant resource is a service to view and record your company information and tenancy configuration

## Tenant REST API

The Tenant REST API is a private API allowing you to read your tenant information and update your company information and is accessed through the following URL:
```json
https://api.opendatadsl.com/service/tenant
```
The API consists of the following calls:

|**Method**|**Path**|**Example**|**Description**|
|-|-|-|-|
|GET|||Get the build information for this service|
|GET|{release}|v1|View your tenant information|
|POST|{release}|v1|Update your company information|

## Updating your company information

To update your company information you need to make a post request to the tenant service, you can use the template below to do this:
```json
POST https://api.opendatadsl.com/service/tenant/v1
Authorization: Bearer {{token}}

{
  "name": "",
  "address1": "",
  "address2": "",
  "city": "",
  "postcode": "",
  "email": "",
  "phone": "",
  "accountContact": ""
}
```
