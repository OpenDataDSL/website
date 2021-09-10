---
slug: /kb/naming
tags:
  - naming
---
Naming Conventions
==================

In OpenDataDSL, you can have both public and private data and objects, so it is important to understand how you reference these in your scripts and objects.

If an id is prefixed with a '#' character denotes that an object is public - which is available to everyone. If not, then the object is private - which is visible only to users within your own tenancy.

Below is an example of how this works with types and objects
```js
// private type
pritype = ${type:"Person"}
// public type
pubtype = ${type:"#Location"}
// private object
johndoe = ${object:"JohnDoe"}
// public object
gb = ${object:"#LOC_GBR"}
```
