---
slug: mongodb
title: Build applications using MongoDB
authors: [chartley]
tags: [mongodb, data, odsl]
image: /img/blog/mongodb.svg
---

<div className="row">
  <div className="column">
    <img src="/img/blog/mongodb.svg"/>
  </div>
  <div className="column">
  <h2>Building applications using MongoDB?</h2>  
    Explore how OpenDataDSL makes it easy to build and manage applications using MongoDB Atlas.
  </div>
</div>

<!--truncate-->

## Introduction
MongoDB is by far the most popular document database and with their cloud Atlas offering, they provide the best Document DAAS (Database As A Service) offering around.

OpenDataDSL uses MongoDB Atlas for storage of all the resources and is an easy programming language for managing data.

:::info Turbocharge your development
If you are building applications using MongoDB,
take a look at how OpenDataDSL can accelerate your time-to-market by providing many of the features you need out-of-the-box.
:::

## What you get out-of-the-box

### User Interfaces
* A user-friendly web portal which you can whitelabel to make it your own.
* An Excel Add-In to read and write MongoDB data using Excel (Desktop and Web).
* Development environment in Microsoft VSCode for easy coding using our DSL (4GL language) 

### An Excel Add-in
Read and write MongoDB Atlas data from Excel!

* Search and filter your MongoDB collections
* Pull data into Excel
* Change and write it back to MongoDB (If you have the rights)
    * Write a partial document to merge with an existing document 
    * Add data validation to ensure data quality
    * Add default values for missing data - even lookup from other documents!

![](/img/home/excel-addin.png)

### Data management programming language
A simple basic-like language with data management specific syntax.

An example of finding some data in the object collection filtering on a property called source.

```js
objects = find top 15 ${object} where source="EURONEXT"

for o in objects
    print o.id + " " + o.dataset
next
```

### Inter-document relationships
Create 'links' to other documents which improve your users' navigation ability.
![relationships](relationships.png)

### Geo-spatial data
Include geo-spatial information (points, polygons and lines) in your documents to build a filterable map using Google Maps.
![geo-spatial](geo-spatial.png)

### Document versioning
Never lose any data with built-in, automatic versioning of documents, data and entities.
Older versions of documents are stored in archive collections with full tagging and rollback capabilities.

### Automatic filtering
Define which fields in your documents are 'dimensions' that you want to filter on in the Web Portal
![filtering](filtering.png)

### Comprehensive ETL
Use our world-class ETL components to extract data from anywhere, transform it into your data model and load it into MongoDB.

An example using the ODSL language, creating a transformer to convert an input XML file into documents to be loaded into MongoDB.
```js
print "> Creating tx"
tx = transform xml into #ForeignExchange as fx
    // Transform ECB daily FX rates to type #ForeignCurrency
    create with Cube
    unique id = "ECB_FX_EUR" + fx.currency
    SPOT = TimeSeries(xml.Cube.Cube.time, "BUSINESS", fx.rate)
    category = "Foreign Exchange"
    product = "ECB_FX"
    provider = "European Central Bank"
    model = "EUR" + fx.currency
    description = "European Central Bank reference rates EUR/" + fx.currency
    base = "EUR"
    currency = fx.currency
end

XML=${xml:"https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"}

result = tx.run(XML)
print result
```

### Built-in Timeseries, Curves and Events
Robust management of Timeseries, Curve and Event data.
Convert discrete events into Timeseries and curves.

#### Smart Data
Create formulas and expressions that dynamically enhance your 'raw' Timeseries, Curves and Events

#### Conversions
Easily convert values to different currencies and units on-the-fly with the built-in conversion intelligence. 

![data](data.png)

### Workflows, actions and processes
Build comprehensive workflows with your own custom actions to load or process data.
Run scheduled or event-driven processes 

Monitor your processes from your mobile device or the web. 
![workflow](workflow.png)

### Multiple environments
Get access to multiple data environments for feature development, data previewing etc.
Improve data releases by pre-staging data and 'merging' to production when ready. 

Each environment is a separate MongoDB database, so you can be certain of complete data partitioning.
![environment](environment.png)

### Use your own MongoDB Atlas connection
You can supply a connection string to your own MongoDB Atlas so you can remain in control of your data and your costs.
![database](database.png)

### Message queues
Integrate your MongoDB data with your internal systems using message queues.
Subscribe to data changes and push data to queues to be consumed by your internal systems.
![queues](/attachments/8978718/9011498.png)

### Auditing
Comprehensive audit logs to identify changes and user activity 
![auditing](auditing.png)

## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)