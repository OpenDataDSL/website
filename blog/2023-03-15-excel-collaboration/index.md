---
slug: excel-collaboration
title: Excel Collaboration
authors: [chartley]
tags: [excel, collaboration, automation, odsl]
image: /img/blog/hourglass-on-calendar.jpg
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
    <img src="/img/blog/excel-collaboration.jpg"/>
  </div>
  <div className="column">
  <h2>Global real-time collaboration using Excel</h2>  
    In this blog, we show you how to use the OpenDataDSL Excel add-in to collaborate not only with your own colleagues, but with <b>SMART curves</b>
  </div>
</div>

<!--truncate-->

### What is real-time collaboration?
Real-time collaboration refers to a process where multiple people can work together on the same document or project at the same time, regardless of their location. 
This is made possible through technology that allows for instant communication and real-time updates.

Real-time collaboration is particularly useful in situations where team members are geographically dispersed or work remotely.

In real-time collaboration, team members can edit information in real-time. 
This means that everyone can see the changes as they are made and can respond immediately, which facilitates teamwork and improves productivity. 
It also reduces the need for back-and-forth communication, as team members can collaborate in real-time.

In addition to the obvious benefits of people collaborating, OpenDataDSL can build SMART curves from that input data and contribute to the collaboration.

### Listening for data changes
Using the OpenDataDSL Excel Add-in, you can *listen* for data changes made by other users, data loaders or SMART curve building.

### Contributing trader curves
If you have traders contributing forward curves which ultimately serve as an input to your **Value At Risk** calculations, the easiest way would be for the traders to save the curves directly from Excel.
Other team members can listen for changes to these curves and collaborate effectively.

SMART curves can be built immediately and will be pushed to any team member listening for them - becoming part of a human->smart curve collaboration.

## Scenario
A typical scenario requires many people and systems to have access to data, and the more 'real-time' the system is, the more responsive you can be to potential issues.

The diagram below shows a typical multi-office collaborative configuration, we have:

* A head office with traders, a risk department, reporting and analytics requirements and an ETRM/CTRM system
* A satellite office with another trader
* Other remote users requiring access to data on their mobile device
* The OpenDataDSL cloud with market data, proprietary data and SMART curves

<img className={styles.product_screenshot} src="/img/blog/collaboration.PNG" />

As traders push their curves from Excel, all other users and systems receive those curves in real-time.
When new market data arrives, that data is also pushed to any users and system listening for it.

Any SMART curves based on the traders curves, the market data or both will automatically be built and pushed to any users or systems listening for them.

:::tip Data-On-Demand!
A real-time collaborative system means there is no need to refresh or run data collection processes 
:::

<Demo />


## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [Excel Add-in](https://doc.opendatadsl.com/docs/user/excel)
* [SMART Curves](https://www.opendatadsl.com/blog/smartcurves)
