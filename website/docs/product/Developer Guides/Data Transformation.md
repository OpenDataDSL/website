---
id: dt
title: Data Transformation
---

Data Transformation
===================================

Transformers are a simple definition that allows you to map data from a single [object](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) to a [list](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2785465/List) of [objects](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) or [rows](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719928/Row)

\[ [Introduction](#DataTransformation-Introduction) \] \[ [Syntax](#DataTransformation-Syntax) \] \[ [Examples](#DataTransformation-Examples) \] \[ [Related Content](#DataTransformation-RelatedContent) \]

Introduction
============

Usually, the most complex part of an ETL process is the T - the transformation. This involves mapping the source data into the destination data structure. The source data could be any structured or unstructured format and therefore any software used to automate that transformation needs to be extremely flexible.

In the previous section, we introduced [data modelling](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2752902/Data+Modelling) which, in most cases, will be the destination data structure for the transformation.

This guide takes you through the process of understanding and using ODSL [transformers](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/7438559/Transformer) as a way of mapping extracted data into your [declared types](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/7438583/DeclaredType).

Syntax
======

A transformer is defined using the following syntax:
```
name = transform input into (type|object|rows) as varname
  // Transformer Description
  (transformOptions)?
  (assign|method|if)*
end
```
Transformer Definition
----------------------

The first line in the creation of a transformer contains the input, output and flow information.

### Input definition

The input to a transformer must be either an [object](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) or a [list](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2785465/List) and is usually the resultant variable of using an extract service.

### Output definition

The output can be one of the following:

*   A named [declared type](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/7438583/DeclaredType) \- the output will be a list of objects of the declared type
    
*   The word object - in which case it will transform the input into a list of generic [objects](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object)
    
*   The word rows - in which case it will transform the input into a list of generic [rows](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719928/Row)
    

### Flow definition

The declaration of the ‘as varname' will be the variable name used for each element of the input as it traverses the input structure.

Transformer Options
-------------------

Transformer Options can be any of:

create with varname (, varname)*
unique property = value
on error ignore
ignore condition (, condition)*

### Create with option

This is used to define the name of the input structure element that triggers the creation of a new output entity. If no create with option is defined, it uses the unique option to determine element creation.

### Unique option

This is used to define a unique key which helps the transformer determine which output element to add data to. When the value of the evaluated key changes during the transformer flow, a new element is created.

### On error option

If the ‘on error ignore’ option is set, any errors during the transformer body stage are logged and ignored.

### Ignore option

The ignore option allows you to create a condition or set of conditions, which if any are true, will ignore and discard the current output element

Transformer Body
----------------

The body of a transformer can be an assignment, a method or an if/end structure containing other assign, method or if structures.

### Body assignment

This represents a single direct mapping of an input structure element to an output data property.

### Body method

This represents a method call, e.g. if you have created a custom method on your declared type or a standard or user defined function

### Body if structure

The is used to check a condition and follow different routes within the tranformer.

Examples
========

Simple static example
---------------------

This simple example shows all of the features of a transformer and can be easily edited and tested using the [VSCode extension](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/33374/Microsoft+VS+Code+Extension).

Here is the preparation, we create the input data (this example just uses a static object with some data), our output data type and some metadata which we can use to decorate our output data:

```js
// Example input data structure
json = `{
    timestamp: "12Oct2020",
    data: \[
        {
            identity: "A",
            value: 1.2
        },
        {
            identity: "B",
            value: 1.5
        },
        {
            identity: "C",
            value: 999
        }
    \]
}`

input = ${json:json}

// Create our output data type
example = type
    name as String()
    description as String()
    value as Scalar()
end

// Create some metadata
metadata = Object()
metadata.A = "A description"
metadata.B = "B description"
```
Our transformer is then defined and run as follows:
```js
// Create the transformer
tx = transform input into example as x
    create with data
    unique name = x.identity
    on error ignore
    ignore x.identity == "C"
    name = x.identity
    description = metadata.get(x.identity)
    value = x.value
end

// Run the transformer
result = tx.run(input)
```

This will create a list with 2 objects of type ‘example’

![](/attachments/7372855/17629246.png)

If we wanted to convert the input into a list of rows that we can load into a relational database, we can use a transformer like this:

```js
rowtx = transform input into rows as x
    create with data
    unique name = x.identity
    on error ignore
    ignore x.identity == "C"
    name = x.identity
    description = metadata.get(x.identity)
    value = x.value
end
```

You can see, in this case, it is exactly the same apart from we specify we are transforming the input into ‘rows’

This creates the following output:

![](/attachments/7372855/17530959.png)

Related Content
===============

*   Page:
    
    [DeclaredType](/wiki/spaces/DOCUMENTAT/pages/7438583/DeclaredType) —
    
    A DeclaredType variable is a wrapper for a type and is used by the type service and creating objects
    
*   Page:
    
    [Transformer](/wiki/spaces/DOCUMENTAT/pages/7438559/Transformer) —
    
    A wrapper for a data transformer, used with the transformer service
    
*   Page:
    
    [Data Transformation](/wiki/spaces/DOCUMENTAT/pages/7372855/Data+Transformation) —
    
    Transformers are a simple definition that allows you to map data from a single [object](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) to a [list](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2785465/List) of [objects](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719912/Object) or [rows](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2719928/Row)
    
*   Page:
    
    [Data Modelling](/wiki/spaces/DOCUMENTAT/pages/2752902/Data+Modelling) —
    
    This guide explains how to create your own data models, load data into them and utilise them in processes and reports
    

