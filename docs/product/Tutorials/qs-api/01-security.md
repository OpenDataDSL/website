---
title: ODSL Security
sidebar_position: 2
slug: /tutorials/qs/api/security
tags:
  - quickstart
  - api
  - developer
  - coding
---
import {QuickStartModule} from '/src/components/Discovery.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<QuickStartModule text="This quickstart module ..." />

## Authentication
In order to use the API in any programming language, you need to be able to generate an ID Token to identify yourself to the services.
This token is issued by Microsoft using your Azure Active Directory and is scoped to the OpenDataDSL API:

```yaml
scope=api://opendatadsl/.default
```

The method you use to generate the token is determined by how the application or script will be run.

|Application Type|Generation Method|
|-|-|
|User application, attended login|User log in via Web Browser|
|System application, unattended login|Use secret key specific for the application|


### Unattended Login
For an unattended login, you will need to create an application in Azure AD and generate a secret.
The 3 pieces of information required are:
* You company tenant id - {{tenantId}}
* The id of the application in Azure AD - {{appId}}
* The generated secret - {{secret}}

<Tabs groupId="language">
<TabItem value="rest" label="REST" default>

```yaml
GET /{{tenantId}}/oauth2/v2.0/token
Host: login.microsoftonline.com
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id={{appId}}&
client_secret={{secret}}&
scope=api://opendatadsl/.default
```

</TabItem>
</Tabs>

