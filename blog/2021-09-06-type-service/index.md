---
slug: type-service
title: Types and Type Service
authors: [chartley]
tags: [model, type, object, odsl]
---

<div class="row">
  <div class="column">
    <img src="./2021-09-06-type-service/header.png"/>
  </div>
  <div class="column">
  <h2>Data Modelling: Types and Type Service</h2>
  Definition In OpenDataDSL, a type is a definition of how a particular type of data is structured
  </div>
</div>

<!--truncate-->

## Definition
In OpenDataDSL, a type is a definition of how a particular type of data is structured.

Once a type is created, you can then create Objects or that type that you can store in the database.


## Syntax
```
typename = type [extends typename]
[// description]
	propname as (type [matches "pattern"] [default "value"]
				|| expression 
				|| function)
	...
end
```

* typename is a variable name, but can be prefixed with '#' to signify being a public type (note you cannot create a public type)
* // description is a comment line immediately after the type definition which becomes a description of the type
* propname is a variable name which is the name of the property
* type can be any base type or defined type
    * adding matches validates the value of this property against a supplied pattern
    * a default value can be used to initialise this property value
* expression is a single line OpenDataDSL expression
* function is an OpenDataDSL function which can also contain parameters


## Example

### Type creation

```js
Person = type extends #Mammal
 // A person
    first as Scalar()
    last as Scalar()
    dob as Date()
    email as Scalar(String) matches "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"

    name as first + " " + last
    named as function(salutation)
        named = salutation + " " + first + " " + last
    end
    age as (Date() - dob).years
end
```

### Saving the type

```js
save ${type:Person}
```

### Object creation

```js
colin = object as Person
    first = "Colin"
    last = "Hartley"
    dob = "1965-03-10"
    email = "colin.hartley@walkfares.com"
end
```

### Saving the object

```js
save ${object:colin}
```