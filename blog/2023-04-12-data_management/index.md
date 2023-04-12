---
slug: data_modelling_quality
title: Data Modelling and Quality
authors: [chartley]
tags: [mongodb, modelling, data, quality, odsl]
image: /img/blog/data-modelling.jpg
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
    <img src="/img/blog/data-modelling.jpg"/>
  </div>
  <div className="column">
  <h2>Data modelling to improve data quality</h2>  
    In this blog, we discuss 2 crucial aspects of what a data management system should do - effective data modelling and quality management.  
  </div>
</div>

<!--truncate-->

## What is Data Management?

Data can be ANYTHING– calendars, events, market data, forecasts, curves, time series, unstructured metadata etc.

Data management is the process of collecting, storing, organizing, maintaining, and utilizing data effectively and efficiently. It involves various activities related to data, such as data entry, data validation, data cleansing, data transformation, data integration, data governance, data security, data privacy, data analysis, and data visualization. The goal of data management is to ensure that data is accurate, reliable, accessible, and secure, and can be used to support organizational decision-making, planning, and operations. Good data management practices are essential for businesses, organizations, and individuals who deal with large amounts of data and want to make the most out of it.

<img src="/img/blog/data_management.png" />

## What is Data Modelling?
Data modelling is the process of creating a conceptual or logical representation of data structures and relationships between them. It is a technique used to define and organize data requirements needed to support business processes or applications. Data modelling involves analyzing and understanding the data requirements of an organization, identifying the entities, attributes, relationships, and constraints involved, and creating a visual representation of this information using a data model.

:::info Flexible Data Model
Data modelling is an important aspect of data management and, like any business process, needs to be able to easily adapt to the changing needs and requirements of the business.
:::

## Improving data quality through modelling 

#### How can a data model improve data quality?

In OpenDataDSL data models, you can specify various constraints, expressions and automatic lookups that validate data entry and provide default values for missing properties.

#### Constraints
Constraints are used to ensure the values provided for a property conform to a standard that you define.

In OpenDataDSL, these can be:
* ```not null``` - The property value cannot be null
* ```matches``` - The property value must match a supplied regular expression
* ```in [list]``` - The property value must match a value from a list (either fixed or looked up) 

#### Default values
Default values allow you to fill in any missing data with a static value, or a value looked up from some other metadata you have stored.

##### Examples of default values

Example showing a static default value and a constraint that ensures that if a value is entered, it matches a value from the list.
```js
checker = type
    hl as String() not null default "high"
    constraint hl_valid check (hl in ["high","low"])
end
```

Example showing how to look up a value from some metadata and a custom error message if the value isn't found.
```js
checker = type
    type as Dimension() not null
    typeName as String() default ${object:"abc_metadata"}[type].name on error "Unknown type: " + type
end
```

## Minimal modelling
One important aspect of ensuring the model is flexible is the use of **Dynamic Properties**.

In OpenDataDSL, the model you create only needs to define the properties that are absolutely required - you can add any other properties to the data that are not on the model and these are called dynamic properties.

:::info Evolving data model
**As the data evolves, so should your data model**

Inevitably processes change, and your data model should be adaptable to handle additional use cases, stakeholder views and up/downstream system changes without having to be re-created from scratch.
:::

## Conclusion
Data modelling in OpenDataDSL has been designed to:
* Improve data quality by ensuring values conform to constraints you define
* Be flexible and adapt to real-world challenges

**How does that compare to your current Data Management system?** 

## Next steps
Do you want to see this in action and see how you can benefit from OpenDataDSL?

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [Data Modelling Topic](https://doc.opendatadsl.com/docs/odsl/dm/modelling)
