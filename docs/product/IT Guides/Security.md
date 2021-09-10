Security
========

Detailed technical information on user authorization and access control

## Authorization

Users are authenticated using Azure AD for SSO. Simply log into Microsofts Azure Active Directory using your companies email address, if you are the first person from your company to log in, you will be asked to enter some information about your company first.

## Authentication

User authentication is the process of limiting what users can access according to the work they need to perform. Authentication is split into 2 functional parts, application and data roles.

### Application roles

Application roles determine the degree of access your users have when using various aspects of the application and services. Application roles are global and fixed. The following table shows all the application roles and what they allow/restrict:

#### Global Access Roles

| **Role** | **Description** | 
|-|-|
| com-admin | Administrator role which allows full access to everything
|api-user|Basic service access allowing read-only access to all services|


#### Job Based Roles

| **Role** | **Description** | 
|-|-|
|it-admin|Allows full access to the Environment, Queue, Subscription, Tenant and User Services|
|analyst|Allows full access to the Scalar, Series and Object Services|
|developer|Allows full access to the Action, Workflow and Process Services|
|modeller|Allows full access to the Type, Transformer, Extractor and Object Services|

#### Fine Grained Roles

| **Role** | **Description** | 
|-|-|
|action|Allows full CRUD access to the Action Service|
|calendar|Allows full CRUD access to the Calendar Service|
|data-role|Allows full CRUD access to the DataRole Service|
|environment|Allows full CRUD access to the Environment Service|
|extractor|Allows full CRUD access to the Extractor Service|
|object|Allows full CRUD access to the Object Service|
|process|Allows full CRUD access to the Process Service|
|queue|Allows full CRUD access to the Queue Service|
|script|Allows full CRUD access to the Script Service|
|setting|Allows full CRUD access to the Setting Service|
|subscription|Allows full CRUD access to the Subscription Service|
|tenant|Allows full CRUD access to the Tenant Service|
|transformer|Allows full CRUD access to the Transformer Service|
|type|Allows full CRUD access to the Type Service|
|user|Allows full CRUD access to the User Service|
|workflow|Allows full CRUD access to the Workflow Service|

### Data roles

Data roles determine what data (from the Object Service) a user can access. Data roles are both public (allowing access to public data) and private (allowing access to your private data).

#### Public data roles

Public data roles are assigned to your company as per your companies data agreements, you can then assign them to individual users in your organisation.

Note: Some agreements may restrict the number of users you can assign a data role to

#### Private data roles

Private data roles can be created by a company administrator or a user with the ‘data-role’ application role. Roles can be added to your private objects using the **access** property on your object which should match the private role that has been defined.

With private roles only, you can assign an ‘ALL’ data role which allows access to all private data.

