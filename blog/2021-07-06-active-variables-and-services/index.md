---
slug: active-variables-and-services
title: Active Variables And Services
authors: [chartley]
tags: [data, services, odsl]
---

<div class="row">
  <div class="column">
    <img src="/img/blog/services.png" />
  </div>
  <div class="column">
  <h2>Active Variables</h2>  
  ActiveVariables are a powerful part of the OpenDataDSL language - see how to use them
  </div>
</div>

<!--truncate-->

## Active Variables and Services
Active variables are the defining feature of OpenDataDSL which allows the user to interact directly with the Data Management System through the use of a well-defined, simple to use variable construct.

## Using Active Variables
Below are simple examples of how to use active variables within your ODSL scripts.

### Assignment
If you assign an active variable to an ODSL variable, it will get a single instance of your request, for example using the date service:

```js
d2 = ${date:"2020-06-09"}
```

This will get you a date variable initialised with the 9th June 2020.


### Saving
Most services allow you to save a variable to a service, so for example with the memory service you can save out the current session variable context to a local JSON file:

```js
save ${memory:file/"c:/example/memory.json"}
```

This will create a JSON file with all the current variables saved


### Listing
Some services allow you to get a list of variables using the find command, here is an example using the object service:

```js
fx = find ${object:public/"#ForeignExchange"} where currency="USD"
```

This gets a list of public objects of type #ForeignExchange that have a currency of USD


### Deleting
Some services allow deleting variables from their service using the delete command:

```js
delete ${calendar:"test"}
```

This deletes the calendar called test


## Types of Active Variables
Active Variables can be broken into 3 specific flavours which allow you to:

* Interact with variables
* Interact with OpenDataDSL services
* Interact with the outside world

### Interact with variables

* Date
* Memory

### Interact with OpenDataDSL services

* Action
* Batch
* Calendar
* Environment
* Expiry
* Extractor
* Object
* Process
* Scalar
* Script
* Secret
* Series
* Transformer
* Type
* Workflow

### Interact with the outside world

* CSV
* DHTML
* File
* FTP
* HTML
* JSON
* ODS
* PDF
* S3
* XLS
* XML

