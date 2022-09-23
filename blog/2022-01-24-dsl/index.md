---
slug: dsl
title: Domain Specific Language
authors: [chartley]
tags: [dsl, odsl]
image: /img/blog/dsl.png
---

<div className="row">
  <div className="column">
    <img src="/img/blog/dsl.png"/>
  </div>
  <div className="column">
  <h2>What is a DSL?</h2>  
    What is a DSL and why would I want to use one?
    <br /><br />Read on to find out.
  </div>
</div>

<!--truncate-->

## What is a DSL?
DSL stands for Domain Specific Language which is a programming language targeting a specific business or application domain.

DSL's are generally one of the following:

* Markup language
* Modelling or specification language
* Programming language

As a programming language, DSL's are generally high-level scripting languages with all the standard looping and conditional commands, but without the lower-level complexities that coders don't need to worry about.

This makes them ideal for 'business coders', people who want to go beyond Excel add-ins and Graphical User Interfaces but without having to write a fully fledged application.
Business coders can use DSL's for automating repetitive tasks, making bulk updates or queries and working beyond the restrictive capabilities of a GUI.

### Some examples
Here are some examples of DSL's:

|Name|Domain|
|-|-|
|HTML|Web pages|
|SQL|Database Management|
|BNF|Syntax specification|
|MATLAB|Mathematical language|
|ODSL|Data Management language|

## Benefits of a DSL
So, what are the benefits of using a DSL?

### Focussed on the problem
Because DSLs are created for a specific application domain, they have syntax which simplifies solving the problems associated with that domain.
Usually this results in code that is easier to comprehend and modify, thereby improving productivity.

### Easier for business users
The programming language used in DSL's generally make it easy for business users to perform tasks by writing a few lines of code.

Even if the business user does not want to start coding, DSL's are generally understandable by business users allowing them to directly comprehend the code that implements their business rules.

### Fills a functionality gap
DSL's offer more flexibility than a GUI (Graphical User Interface) and are easier to use than a GPL (General Programming Language).

## Practical usage example
Below is an example using ODSL which shows the how to read a TimeSeries from the Database, display part of the data and then use simple regression to predict the next value - all in **just 4 lines of code**.

```js
// Grab a TimeSeries - Brent Oil Spot prices from EIA
input = ${data:"#EIA.PET.RBRTE.D:SPOT"}

// Print out the last 10 values
print input.getLastNValues(10)

// Run a simple regression function on the TimeSeries
reg = simpleRegression(input)

// Predict the next value
print reg.predict(Date("2022-01-19"))
```

This produces the output:

```
[
2022-01-05	80.600000
2022-01-06	81.990000
2022-01-07	82.280000
2022-01-10	81.560000
2022-01-11	84.980000
2022-01-12	85.830000
2022-01-13	85.800000
2022-01-14	87.170000
2022-01-17	87.820000
2022-01-18	88.830000
]
86.387031
```

Performing this same task using a general purpose language would require a lot more code and would be ultimately more complex and costly.

## Conclusion
A DSL is an important tool in a business users' armoury, giving them more flexibility and increased productivity.

As you can see from the practical example, a DSL simplifies working in a domain by focussing on the business objectives and providing commands and syntax to aid this.



## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)