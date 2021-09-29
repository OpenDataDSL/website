---
title: Uploading Data
sidebar_position: 2
tags:
  - discovery
  - odsl
  - upload
  - data
---
import StartBuilding from '/src/components/StartBuilding.js';
import {Discovery, InDepth} from '/src/components/Discovery.js';

<Discovery text="This discovery guide gives an overview on how to prepare, send, and update your data, along with guidance on how to automate data loading and data environments." />

## Data Environments
A data environment in OpenDataDSL is an independent environment where everything you create and save into the cloud is stored.

When you first sign up to OpenDataDSL, you are given a single `production` environment, but you can easily create other environments for testing, development or even short-term experimentation. 

<InDepth href="/docs/tutorials/workingenvironments" />

## Create Your Data Model

All the data that is stored in OpenDataDSL is dynamic but we impose a pseudo-structure using Types. 
Types allow you to define the properties that you expect to be available on a specific object that is defined as that type.

One important aspect of creating types in OpenDataDSL is that you don't need to add every property you may want to store on your objects.
OpenDataDSL is dynamic, so you can add any properties onto an object without it being a property on the object type,
but by defining a type you create a structure with specific named properties of a certain type.  

<InDepth href="/docs/odsl/dm/modelling#types-and-objects" />

### Prepare Your Data
OpenDataDSL gives you a number of options for pushing your data into the cloud database:

|Method|Data Locations|Data Preparation|
|-|-|-|
|Excel Upload|Excel Spreadsheet|Use data upload template|


## Automating Data Loads



---

<StartBuilding />