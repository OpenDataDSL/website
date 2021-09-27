---
slug: defining-your-data-model
title: Defining Your Data Model
authors: [chartley]
tags: [model, type, object, odsl]
---

<div class="row">
  <div class="column">
    <img src="/img/blog/data-model.jpg"/>
  </div>
  <div class="column">
  <h2>Defining Your Data Model</h2>  
  Whether you are defining a data model from scratch or extending one of ours, this essential blog post helps guide 
  </div>
</div>

<!--truncate-->

## Defining your data model
Back in the early days of computing, we only had rigid table based databases, so defining the data model was a very important aspect in the design stage of a computer software project. Getting it wrong could have impacts on performance and usability which usually added to the cost and time to market of your software.

With the proliferation of NoSQL databases, we now have easier ways of modelling complex data types therefore reducing time and cost and adding greater flexibility. 

In OpenDataDSL, we go one step further by adding some complex data structures, such as time-series and matrices as first-order data types to make building a data management system straight forward. 

---

## Defining a simple data model

To define a data model in OpenDataDSL we start by creating a type. A type is constructed as a list of properties which can be any base or custom data type. Here is a simple example of a Person type:

```js
Person = type
	first as String()
	last as String()
	dob as Date()
end
```
Once the type is defined, you can create an object from it as follows:

```js
john = object as Person
	first = "John"
	last = "Doe"
	dob = "1985-03-10"
end
```

### Adding data validation

To ensure the data entered conforms to the type of input that you expect, you can add a data validation pattern to validate the input against. We use standard REGEX notation to compare the input to a pattern, for example:

```js
email as String() matches ".+\@.+\..+"
```
Any input that doesn't conform to the supplied pattern will be rejected.


### Adding expressions

You can create simple one-line expressions that get executed on request as a property on your type, for example:

```js
name as first + " " + last
```

So, using the object example above, you can do the following:

```js
print john.name
```

Which outputs:

```
John Doe
```

:::note
Expressions cannot be used in searches or filters
:::

### Adding functions

If you need to create a property on your type that requires some logic that cannot be expressed in a single-line expression, you can add a function to your type. A function can optionally include parameters too, e.g.

```js
named as function(salutation)
        named = salutation + " " + first + " " + last
end
```

:::note
Functions cannot be used in searches or filters
:::

## Adding more complex data types

So far, we have used some basic data types in our type, in OpenDataDSL we have a set of built-in data types which can be used as properties on your type, the list below is a current set of built-in data types:

* Scalar - String, number or boolean
* String
* Number
* Boolean
* List - a list can contain any other type or can be restricted to a specific type
* Object - an object provdes another layer of properties that can be added to your type
* Date
* Duration
* Calendar
* Expiry
* Secret
* TimeSeries
* TimeValue
* Curve
* Contract
* Matrix
* Cell
