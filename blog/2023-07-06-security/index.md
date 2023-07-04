---
slug: security
title: Data Security
authors: [chartley]
tags: [data, workflow, odsl]
image: /img/blog/security/security.jpg
hide_table_of_contents: false
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="col-md">
    <img src="/img/blog/security/security.jpg"/>
  </div>
  <div className="col-md">
  <h2>Keeping data secure</h2>  
    <p>In this blog, we talk about the importance of security within a data management platform.</p>
    <p>We also showcase all the security features in OpenDataDSL.</p>
  </div>
</div>

<!--truncate-->

## Data Management Security
Security is of paramount importance for a data management system, but what does security consist of?

Below are 3 features that are a must-have for any data management application.

* **Authentication**
  > Authentication ensures that only authorised users can access the system.
  > It involves mechanisms such as:

  * **Passwords**
    > Passwords should use defined policies such as password length, use of certain characters and rotation policies.
  * **Biometric authentication**
    > Biometric authentication is a security method that uses physical or behavioural characteristics, such as fingerprints or facial recognition.
  * **Multi-factor authentication**
    > Multi-factor authentication is an authentication method that requires users to provide 2 or more different types of authentication in order to verify their identity.
  * **Single sign-on** 
    > Single sign-on means that the application federates the process of authenticating users to the organisations' identity provider.
    > This ensures that the application is utilising the all the policies implemented by your own security team.
* **Access Control**
  > Access control
  > The access control mechanisms must have the capability of configuring detailed, low-level authentication policies to define the exact data that a user can see or manage.
* **Encryption**
  > Encryption is the process of converting data into an unreadable form using cryptographic algorithms.
  > Encryption should be done both when data is in-transit and at-rest.

:::note
There are other features which we are not going into detail about, such as:
* Data Backup and Recovery
* Auditing and Loggin
* Data Masking and Anonymisation
* Firewall and Intrusion Detection/Prevention
:::

## How OpenDataDSL handles security
The OpenDataDSL data management platform is compliant with all the security features above, in this section we go into more detail about how they are implemented.

### Authentication
Users in OpenDataDSL are authenticated using Azure Active Directory against your own tenant.
This means that you log-in using your organisations identity provider, and it provides us with a token containing certain information or claims about you and what rights you have for our application.

This will follow all your IT teams policies, e.g. multi-factor authentication, if it has been configured by them. 

:::info
The authentication is extremely secure, we never see any passwords, we only get a token containing the information your IT team has allowed us to see.
:::

The authentication process looks like this:

<img src="/img/blog/security/login.png" />

* The user logs into Active Directory
* The user is given a token on successful login
* Pass the token in a header with each request made to OpenDataDSL

### Access Control
Access control to all data is handled using security policies.

A security policy consists of the following information:

|Property|Type|Description|
|-|-|-|
|id|String|The unique identifier for this policy|
|description|String|A description of what this policy does|
|source|String|The source of data that this policy covers|
|service|String|The name of the service providing the data for this policy (can be * for all services)|
|condition|String|An optional condition defining the subset of data that this policy covers|
|actions|Array|A list of actions this policy covers (create, read, update, delete, run)|
|members|Array|A list of user emails or security group id's that this policy is attributed to (Can be * for all members)|
|deny|Boolean|True if this is a denial policy, false for an allow policy|
|enabled|Boolean|A flag indicating if this policy is to be used or not|

Policies are used for every service and multiple policies can be used for a single service with different members, actions and conditions.

An example policy restricting access to a specific source of master data:

```json
{
  "_id": "ReadAllNCDEXData",
  "description": "Read all data from source NCDEX",
  "source": "private",
  "service": "object",
  "condition": "source = 'NCDEX'",
  "deny": false,
  "actions": [
    "read"
  ],
  "members": [
    "user@example.com",
    "39c6cccd-d6ea-4ac1-b564-8e4d1e28d75d"
  ],
  "enabled": true
}
```

#### Allow or deny access
By default, there is an implied access denial to all data in a service, so by adding ```allow``` policies to users, you are granting them access.
You can also explicitly add ```deny``` policies to restrict access to certain documents that you have explicitly allowed.

### Encryption
All communications with the OpenDataDSL server are performed over HTTPS using Transport Layer Security (TLS) which covers the ```encryption in-transit``` requirements for encryption.

All data by default, is ```encrypted at-rest```, which covers both cluster storage and snapshot volumes.
You can also request to add an extra layer of security and use your own security key for encryption. 

## Conclusion

Overall, a secure data management system protects sensitive information, ensures data integrity and availability, complies with legal requirements, mitigates cyber threats, and maintains trust and reputation. 
By prioritizing security, organizations can minimize risks, protect their assets, and establish a foundation for successful data management and business operations.

OpenDataDSL is a modern data management system secured using a solid, yet flexible authentication and access control system.  

## Next steps
Do you want to see this in action and see how you can benefit from OpenDataDSL?

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs)
* [Using reports in data flows](data_flows_part1)
* [Reporting Basics](https://doc.opendatadsl.com/docs/topics/reporting/basics)
