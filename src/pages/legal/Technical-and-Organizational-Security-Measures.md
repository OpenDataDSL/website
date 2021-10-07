Technical and Organizational Security Measures
==============================================================

The technical and organizational security measures to ensure a level of security appropriate to the risks that are presented by the processing of Customer Personal Data

_Last updated 9th July 2021_

These Technical and Organizational Security Measures (“**Security Measures**”) are incorporated into and form part of your applicable agreement with OpenDataDSL with respect to your use of the Cloud Services (the “**Agreement**”). The Security Measures set out the security features, processes, and controls applicable to the Cloud Services, including configurable options available to Customer, which employ industry standard information security best practices.

## 1\. Definitions

The following terms have the following meanings when used in the Security Measures. Any capitalized terms that are not defined in the Security Measures have the meaning provided in your Agreement.

**1.1. "Cloud Provider"** means Microsoft Azure (Azure).

**1.2. "Customer Data"** means any data you or your end users upload into the Cloud Services.

**1.3. "Data Breach"** means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Customer Data.

**1.4. "Information Security Program"** means OpenDataDSL’s written security program, policies, and procedures that set forth the administrative, technical, and physical safeguards designed to protect Customer Data.

**1.5. "MongoDB Atlas Cluster"** means each replica set or sharded cluster of data-bearing nodes running the MongoDB database software that is managed by MongoDB Atlas, subject to your selected configurations.

**1.6. "OpenDataDSL Systems"** means OpenDataDSL’s internal infrastructure, including development, testing, and production environments, for OpenDataDSL Cloud Services.

**1.7. "Privileged User"** means a select OpenDataDSL employee or third-party contractor who has been granted unique authority to access Customer Data or OpenDataDSL Systems as required to perform his or her job function.

**1.8. "Security Incident Response Plan"** means OpenDataDSL’s documented protocols for evaluating suspected security threats and responding to confirmed Data Breaches and other security incidents.

## 2\. Information Security Program Overview

**2.1. General.** OpenDataDSL maintains a comprehensive written Information Security Program to establish effective administrative, technical, and physical safeguards for Customer Data, and to identify, detect, protect against, respond to, and recover from security incidents. OpenDataDSL’s Information Security Program complies with applicable Data Protection Laws.

**2.2. Maintenance and Compliance.** OpenDataDSL’s Information Security Program is maintained by a dedicated security team, led by our Chief Information Security Officer. OpenDataDSL monitors compliance with its Information Security Program, and conducts ongoing education and training of personnel to ensure compliance. The Information Security Program is reviewed and updated annually to reflect changes to our organization, business practices, technology, services, and applicable laws and regulations. We will not alter or modify the Information Security Program in a way that materially weakens or compromises the effectiveness of its security controls.

**2.3. OpenDataDSL Personnel Controls.**

**2.3.1. Background Checks.** OpenDataDSL performs industry standard background checks on all OpenDataDSL employees as well as any third-party contractor with access to Customer Data or OpenDataDSL Systems.

**2.3.2. Personnel Obligations.** Any Privileged User authorized to access Customer Data is required to commit in writing to information security and confidentiality obligations that survive termination and change of employment. OpenDataDSL maintains a formal disciplinary procedure for violations by OpenDataDSL personnel of its security policies and procedures.

**2.3.3. Training.** Upon hire and subsequently at least once per year, Privileged Users authorized to access Customer Data undergo required training on specific security topics, including phishing, protection of digital identities, social engineering, wifi security, and the handling of Customer Data. Further, OpenDataDSL implements mandatory, role-specific training for Privileged Users who are authorized to access Customer Data. OpenDataDSL maintains records of training occurrence and content. In addition to these mandatory trainings, OpenDataDSL offers employees additional training resources, such as internal security reading groups and hackathons.

**2.4. Third Parties.** OpenDataDSL maintains and adheres to a documented process for the evaluation and approval of third-party service providers prior to onboarding, which includes appropriate due diligence regarding each third party’s security processes and controls. We require third parties to contractually commit to confidentiality, security responsibilities, security controls, and data reporting obligations, and we perform ongoing targeted due diligence on an annual basis.

**2.5. Security Contact.** If you have security concerns or questions, you may contact us via your normal Support channels.

## 3\. Security Controls

**3.1. Data Centers and Physical Storage.** OpenDataDSL runs Azure and it’s data centers are compliant with a number of physical security and information security standards, which are detailed here [https://www.microsoft.com/en-us/trustcenter/security/azure-security](https://www.microsoft.com/en-us/trustcenter/security/azure-security)

**3.2. Encryption.**

**3.2.1. Encryption in Transit.** All OpenDataDSL network traffic is protected by Transport Layer Security (TLS), which is enabled by default and cannot be disabled. Customer Data that you transmit to OpenDataDSL, as well as Customer Data transmitted between nodes of your Database Cluster, is encrypted in transit using TLS.

**3.2.2. Encryption at Rest.** Upon creation of a MongoDB Atlas Cluster, by default, Customer Data is encrypted at rest using AES-256 to secure all volume (disk) data. That process is automated by the transparent disk encryption of Microsoft Azure, and they fully manage the encryption keys.

**3.3. Configuration Management.** The clouse service environment, including our production environment and your own data environments, leverages configuration management systems to fully automate configuration based on one-time decisions that are securely applied to new and existing environments to ensure consistency every time. Our production environment and your data environments use in-house built machine images with secure configuration management applied via industry standard automation software, which includes hardening steps.

## 4\. Access Controls

**4.1. Application Access Controls.** OpenDataDSL provides a number of application access controls which you are free to apply to your users of the cloud services. It is the customers responsibility to apply the appropriate application access controls to their users of the cloud services.

**4.2. Data Access Controls.** All public data is subject to OpenDataDSL data access controls to ensure that the customers users do not gain access to data that they have not been permissioned for. Customers can create and apply their own data access controls on their personal data. It is the customers responsibility to apply the appropriate data access controls to their users of the cloud services.

**4.3. Customer Database Auditing.** OpenDataDSL offers granular auditing that monitors actions in your OpenDataDSL environment and is designed to prevent and detect any unauthorized access to Customer Data, including create, read, update, and delete (CRUD) operations.

**4.4. OpenDataDSL Personnel Access to Customer Personal Data.**

**4.4.1. Privileged User Access.** As a general matter, OpenDataDSL personnel do not have authorization to access your environments. Only a small group of Privileged Users are authorized to access your environments in rare cases where required to investigate and restore critical services. OpenDataDSL adheres to the principle of “least privilege” with respect to those Privileged Users, and any access is limited to the minimum time and extent necessary to repair the critical issue. Privileged Users may only access your environments after getting approval by OpenDataDSL senior management.

**4.4.2. Access Review and Auditing.** OpenDataDSL reviews Privileged User access authorization on a quarterly basis. Additionally, we revoke a Privileged User’s access when it is no longer needed, including within 24 hours of that Privileged User changing roles or leaving the company. We also log any access by OpenDataDSL personnel to your environments. Audit logs are retained for at least six years, and include a timestamp, actor, action, and output. OpenDataDSL utilizes a combination of automated and human review to scan those audit logs.

**4.4.3. Restricting OpenDataDSL Personnel Access.** OpenDataDSL provides you with the option to entirely restrict access by all OpenDataDSL personnel, including Privileged Users, to your environments. If you choose to restrict such access and OpenDataDSL determines that access is necessary to resolve a particular support issue, OpenDataDSL must first request your permission and you may then decide whether to temporarily restore access for 24 hours. Enabling this restriction may result in increased time for the response and resolution of support issues and, as a result, may negatively impact the availability of your OpenDataDSL environments.

## 5\. OpenDataDSL Systems Security

**5.1. Separation of Production and Non-Production Environments.** OpenDataDSL has strict separation between production and non-production environments. Our OpenDataDSL production environment, your data environments, and your Customer Data are never utilized for non-production purposes. Our non-production environments are utilized for development, testing, and staging.

**5.2. Software Development Lifecycle.** OpenDataDSL has a dedicated security team, reporting to the Chief Information Security Officer, that leads security initiatives in the software development lifecycle (SDLC). We develop new products and features in a multistage process using industry standard methodologies that include defined security acceptance criteria. The SDLC includes regular code reviews, documented policies and procedures for tracking and managing all changes to our code, continuous integration of source code commits, code versioning, fuzz testing, static and dynamic code analysis, vulnerability management, and bug hunts, as well as automated and manual source code analysis.

**5.3. Monitoring and Alerting.** OpenDataDSL monitors the health and performance of OpenDataDSL Cloud Services without needing to access your environments. OpenDataDSL maintains a centralized log management system for the collection, storage, and analysis of log data for our production environment and your data environments. We use this information for health monitoring, troubleshooting, and security purposes, including intrusion detection. We maintain our log data for at least six years, and we utilize a combination of automated scanning, automated alerting, and human review to monitor the data.

## 6\. Contingency Planning.

**6.1. High Availability and Failover.** The OpenDataDSL production data is deployed as a self-healing replica set that provides automatic failover in the event of a failure. Replica set members are automatically provisioned by OpenDataDSL across multiple availability zones within a region, providing resilience to localized site failures. All replica set members are full data-bearing nodes, ensuring majority writes in the event of single node failure and higher resilience during recovery. Concurrent writes across replica sets occur in real time.

**6.2. Backups.** OpenDataDSL offers fully-managed backups in the form of continuous backups, which take incremental backups of Customer Data in a MongoDB Atlas Cluster. All backups are encrypted at rest.

## 7\. Incident Response and Communications.

**7.1. Security Incident Response Plan.** As part of the Information Security Program, OpenDataDSL maintains an established Security Incident Response Plan. In the event that OpenDataDSL becomes aware of a Data Breach or other security incident, OpenDataDSL will follow the Security Incident Response Plan, which includes: (i) clearly defined roles and responsibilities, including designation of a security incident task force; (ii) reporting mechanisms; (iii) procedures for assessing, classifying, containing, eradicating, and recovering from security incidents; (iv) procedures and timeframes for required notifications to relevant authorities and customers; (v) procedures for forensic investigation and preservation of event and system log data; and (vi) a process for post-incident and resolution analysis designed to prevent future similar incidents. The Security Incident Response Plan is reviewed, updated, and tested annually, including a security tabletop exercise at least once per year.

**7.2. Security Incident Tracking.** OpenDataDSL maintains a comprehensive security incident tracking system and documents: (i) incident type and suspected cause; (ii) whether there has been unauthorized or unlawful access, disclosure, loss, alteration, or destruction of data; (iii) if so, the categories of data affected by the incident, including categories of personal information; (iv) the time when the incident occurred or is suspected to have occurred; and (v) the remediation actions taken.

**7.3. Customer Communications.** OpenDataDSL will notify you without undue delay if we become aware of any Data Breach. Taking into account the information available to us, such notice will include a description of the nature and cause of the Data Breach and the expected resolution time. To the extent possible, we will subsequently update you with information regarding evaluation of the root cause, potential impact, remediation actions taken, and actions planned to prevent a future similar event.

## 8\. Audit Reporting.

**8.1. Third-Party Certifications and Audit Reports.** Upon request, and subject to the confidentiality obligations set forth in the Agreement, we will make available to you (or your independent, third-party auditor) information regarding OpenDataDSL’s compliance with the security obligations set forth in these Security Measures in the form of third-party certifications and audit reports.

**8.2. Security Questionnaires.** No more than once per year, we will complete a written security questionnaire provided by you regarding the controls outlined in these Security Measures.

