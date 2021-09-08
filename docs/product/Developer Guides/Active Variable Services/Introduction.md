---
sidebar_position: 1
---
Introduction
============

Detailed information on Active Variables and the services used by them

Active variables are the defining feature of OpenDataDSL which allows the user to interact directly with the Data Management System through the use of a well-defined, simple to use variable construct.

In OpenDataDSL, active variables provide a way to interact with the database and services to help you collect, validate, manage and report on your data.

The syntax of an active variable is as follows:
```js
${service (:source)? }
${service: (source/)? id (:version)? (,option)* } (for range)?
```
Examples:
```js
actvar = ${action:"#name"}
save ${action:actvar}
tag ${action:actvar} as PROD
actvarprod = ${action:"#name":PROD}

objects = find ${object:public} where dataset == "BOE_FX"
```

## External Data Collection Services

A list of services that help you collect data from various locations and various file formats

### [Azure File Service (azfile)](Azure-File-Servicel)
A service to read files from an Azure Storage Account
    
### [CSV](CSV)
A service to read CSV files as a [list](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2785465/List) of [row](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719928/Row) variables or as a [table](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/7405746/Table) variable
    
### [DHTML](DHTML)
A service to read Dynamic HTML pages as an [object](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) variable
    
### [File](File)
A service to read files from the local file system
    
### [FTP](FTP)
A service to read files from an FTP site
    
### [GZIP](GZIP)
A service to handle the extraction of data from a compressed zip file
    
### [HTML](HTML)
A service to read a HTML page as an [object](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) variable
    
### [JSON](JSON)
A service to read a JSON format file as an [object](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) variable
    
### [ODS](ODS)
A service to read an ODS (OpenDocument) format file as a [spreadsheet](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/7372918/Spreadsheet) variable
    
### [PDF](PDF)
A service to read a PDF format file as an [object](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) variable
    
### [S3](S3)
A service to read files from an AWS S3 bucket
    
### [XLS](XLS)
A service to read XLS spreadsheet files as a [spreadsheet](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/7372918/Spreadsheet) variable
    
### [XML](XML)
A service to read XML format files as an [object](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) or [list](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2785465/List) variable
    

## OpenDataDSL Remote Services

This is a list of active variable services that interact with the OpenDataDSL remote services

### [Action Service](Action-Service)
Workflow actions allow you to personalise your processes with snippets of code to perform a specialised action within a workflow
    
### [Calendar Service](Calendar-Service)
The calendar service allows you to create and use all the [calendars](/docs/product/Developer%20Guides/Calendars/Calendars) in the system
    
### [Currency Service](Currency-Service)
A service to use the publically available FX rates
    
### [Curve Service](Curve-Service)
The curve service is used for interacting with Forward Curve configurations
    
### [Environment Service](Environment-Service)
This service allows you to manage your data environments
    
### [Expiry Calendar Service](Expiry-Calendar-Service)
The expiry calendar service allows you to manage and use [expiry calendars](/docs/product/Developer%20Guides/Calendars/Expiry-Calendar) in your scripts
    
### [Extractor Service](Extractor-Service)
The extractor service allows you to manage and use data extractors
    
### [Object Service](Object-Service)
The object service allows you to manage, browse, search for and use stored objects
    
### [Process Service](Process-Service)
The process service allows you to manage your scheduled and event driven remote processes
    
### [Script Service](Script-Service)
The script service allows you to store and retrieve ODSL scripts
    
### [Tenant Service](Tenant-Service)
A service to view and record your company information and tenancy configuration
    
### [Transformer Service](Transformer-Service)
The transformer service allows you to store and manage data transformers
    
### [Type Service](Type-Service)
The type service allows you to store and maintain data types used in [data modelling](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2752902/Data+Modelling)
    
### [User Service](User-Service)
A service to view and record your user information

### [Workflow Service](Workflow-Service)
The workflow services allows you to store and manage [workflows](/docs/product/Developer%20Guides/Workflows-and-Processes)
    
    

## Variable Services

These services help you work with OpenDataDSL variables

### [Date Service](Date-Service)
Create and utilise dates
    
### [Memory Service](Memory-Service)
Recreate the current session by saving all variables in memory, then re-loading them later
