---
slug: building-an-etl-process
title: Building an ETL process
authors: [chartley]
tags: [etl, extractor, transformer, odsl]
---

<div class="row">
  <div class="column">
    <img src="./2021-05-06-building-an-etl-process/header.jpg"/>
  </div>
  <div class="column">
  <h2>Extract, Transform and Load</h2>
  This post shows you how easy it is to create an end-to-end ETL process in OpenDataDSL
  </div>
</div>

<!--truncate-->

## Preparation
For this example, we are going to extract some publically available currency exchange data in XML and load it into our database as our own defined structure.


### Defining the data model
We are going to create a simple type to store our FX data as follows:

```js
ForeignExchange = type
    // All foreign exchange (FX) data
    category as String()
    product as String()
    provider as String()
    model as String()
    base as String()
    currency as String()
    description as String() notfilter
end
save ${type:ForeignExchange}
```

### Extracting the XML data
We are going to extract the data from the following URL: 
[https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml](https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml) 


The following line of code grabs the data and saves it into a variable called xml:

```js
xml=${xml:"https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"}
```

## Transforming the data into our data model
We now need to transform this 'xml' variable into a list of 'ForeignExchange' data types, do do this we need to create a transformer:

```js
ECB_FX = transform xml into ForeignExchange as fx
 create with Cube
 unique id = "ECB_FX_EUR" + fx.currency
 SPOT = TimeSeries(xml.Cube.Cube.time, "BUSINESS", fx.rate)
 category = "Foreign Exchange"
 product = "ECB_FX"
 provider = "European Central Bank"
 model = "EUR" + fx.currency
 description = "ECB Euro FX reference rates EUR/" + fx.currency
 base = "EUR"
 currency = fx.currency
end
save ${transformer:ECB_FX}
```

### Testing the transformation
To check to see that the data is transformed correctly, we can run the following to see what the transformed data looks like:

```js
models = ECB_FX.run(xml)
print json(models)
```

This prints out a JSON array of 'ForeignExchange' models, a short extract is shown below:

```json
[
  {
    "_id": "ECB_FX_EURAUD",
    "_type": "ForeignExchange",
    "_links": {},
    "SPOT": {
      "_type": "VarTimeSeries",
      "_id": "SPOT",
      "description": "",
      "start": "2020-10-05T00:00:00",
      "calendar": "BUSINESS",
      "data": [
        {
          "time": "2020-10-05T00:00:00",
          "value": 1.637900,
          "_type": "TimeValue"
        }
      ],
      "properties": {}
    },
    "base": "EUR",
    "category": "Foreign Exchange",
    "currency": "AUD",
    "description": "ECB Euro FX reference rates EUR/AUD",
    "model": "EURAUD",
    "product": "ECB_FX",
    "provider": "European Central Bank"
  } ...
 ]
```

## Loading the data into the database
The final part to this is to load the data into the database, this can be done simply by iterating through the models and saving them, a more robust way is to batch them up and send them to the loader service. Here are both methods:


### Simple Loading

```js
for model in models
 save ${object:public/model}
next
```

### Batch Loading

```js
batch=PROCESS.createBatch()
batch.addAll(models)
send batch
```

## Final Thoughts
This post shows a one-off simple example of extracting XML data from a web URL, transforming it into our own data model and loading it into the OpenDataDSL database. The custom part of this process is the transformer that understands both the input and output data structures, utilising the OpenDataDSL transformer it simplifies this process into a purely mapping exercise.


In order to make this into a production-ready process, we would create a workflow that joins together all the components and create a process that we can use to schedule the workflow.

