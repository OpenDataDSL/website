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
* You company tenant id - {{tid}}
* The id of the application in Azure AD - {{aid}}
* The generated secret - {{sid}}

<Tabs groupId="language">
<TabItem value="rest" label="REST" default>

```yaml
GET /{{tid}}/oauth2/v2.0/token
Host: login.microsoftonline.com
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id={{aid}}&
client_secret={{sid}}&
scope=api://opendatadsl/.default
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

tid = "enter your tenant id"
aid = "enter your app id"
sid = "enter your secret"

url = "https://login.microsoftonline.com/{}/oauth2/v2.0/token".format(tid)
payload = {
    'grant_type':'client_credentials',
    'client_id':'{}'.format(aid),
    'client_secret':'{}'.format(sid),
    'scope':'api://opendatadsl/.default'
}
headers = {'Content-Type':'application/x-www-form-urlencoded'}
response = requests.get(url, data=payload, headers=headers)
token = response.json()['access_token']
```

</TabItem>
</Tabs>

### Using the token
Once you have the token, you need to add it into an Authorization header with the prefix Bearer:

```js
Authorization: Bearer {{token}}
```

#### Example request using the token
This example request gets information about the Object service.

<Tabs groupId="language">
<TabItem value="rest" label="REST" default>

```yaml
GET https://api.opendatadsl.com/service/object
Authorization: Bearer {{token}}
```

</TabItem>
<TabItem value="python" label="Python">

```python
headers = {'Authorization': 'Bearer {}'.format(token)}
response = requests.get('https://api.opendatadsl.com/service/object', headers=headers)
print(response.json())
```

</TabItem>
</Tabs>

### Token expiry
The token has a lifetime of around an hour, which means if you are running an application and making service requests which go beyond the token expiry time, you will need to request a new token.

