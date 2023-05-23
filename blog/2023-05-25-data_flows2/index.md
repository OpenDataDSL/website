---
slug: data_flows_part2
title: Modelling Data Flows - Part 2
authors: [chartley]
tags: [data, workflow, odsl]
image: /img/blog/data_flow/trader.jpg
hide_table_of_contents: false
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="col-md">
    <img src="/img/blog/data_flow/trader.jpg"/>
  </div>
  <div className="col-md">
  <h2>Event-driven use case</h2>  
    <p>In this blog, we show you how you can model a real-world business use case using event-driven data flows in OpenDataDSL.</p>
    <p><b>Part 2</b> - Validating and publishing trader curves to an ETRM system</p>
  </div>
</div>

<!--truncate-->

## What are event-driven data flows?

Event-driven data flows refer to a design pattern or architecture where data processing and communication happen in response to events or changes in the system. In this pattern, events trigger the flow of data through a system, where each event is processed independently, and a corresponding action is taken based on the event.

### What actions can be taken?

In OpenDataDSL, as of today, you can perform one of the following event-driven actions:

* **Build a forward curve**
  > Usually when the input data for a curve is updated you would want to build a smart curve
* **Send an email**
  > Use the updated data and a template to send a HTML email to a user or users
* **Run a process/workflow**
  > Trigger a process to run possibly to load some other data
* **Publish the data to another tenant**
  > Another independent tenant can be updated with this data
* **Send the data to a message queue**
  > Send the updated data as a message to be consumed by a downstream system
* **Run a report**
  > Run a report, maybe aggregating data from other sources
* **Run an ODSL script**
  > The possibilities are endless, maybe you want to perform some derivations based on the updated data

## Our business use case

### Objective
The objective of this business case is to **automate** some data flows triggered by a manual action.
To further enhance this, we want to perform a second set of actions based on a condition shown in the following flow-chart.

<img className={styles.product_screenshot} src="/img/blog/data_flow/trader-flow.png" />

### Trader Curves
Trader curves are forward curves created by traders based on their assessment of how the market is pricing various maturities.
Closely watching market movements gives traders a unique insight into where prices are at any given moment.

In OpenDataDSL, traders can upload their curves using Excel using either relative or absolute tenors:

<img className={styles.product_screenshot} src="/img/blog/data_flow/trader-curve.png" />

And here is our trader curve in the OpenDataDSL portal:

<img className={styles.product_screenshot} src="/img/blog/data_flow/trader-curve-chart.png" />

### Automation
For our use case, we want to run some automations after the trader has updated a new version of a curve. We want to:
* **Validate the curve**
  > We want to ensure that the prices are within a reasonable percentage of the OMIP exchange previous days settlement prices, this will update the curve status information
* **Send an email to the trader**
  > We want to inform the trader that their curve has been loaded and provide validation feedback

If the validation is successful, we will then want to:

* **Send an email to others**
  > We want to inform colleagues that a new version of the trader curve is available
* **Send the curve to a message queue**
  > This will be read by an internal application that will feed into our ETRM system
  
#### Validation and feedback
To validate our curve, we will add a trigger on the **update** of our curve which will do the following:
* Run an ODSL script which will: 
  * Compare the curve with the previous days exchange settled curve
  * Set the status of each maturity to either valid or failed
  * If the curve is valid, we want to tag it (this will trigger our other actions)
* Send an email to the trader which has:
  * The curve details
  * The validation status of the curve

#### Inform and publish
The second part of the automation is triggered on the **tagging** of our curve and will do the following:
* Send an email to interested colleagues
* Send the curve to a message queue to be consumed by the ETRM system

### Daily work
Once the automations have been configured, the trader simply needs to update his curve(s) in Excel and upload them to OpenDataDSL using the Excel add-in.

He will receive a confirmation email letting him know the validation status of the curve he has just uploaded.

If the curve passed the validation, he will know that his colleagues will be informed of the new version of the curve and it will be pushed automatically to the companies ETRM system.

If the curve failed validation, he then has the option to either:
* Change the failed values on the curve, if appropriate
* Manually tag the curve version to trigger the email and message publish automation.

#### Example email to trader

:::info
All email and reporting layouts are completely customisable in OpenDataDSL
:::


<img className={styles.center_image} src="/img/blog/data_flow/trader-email.png" />


## Conclusion
You can see from this example that with a small amount of initial configuration using event-driven data flows, we can automate critical tasks which reduce the workload of employees.

Event-driven data-flows make this possible by performing your custom actions automatically after an event happens thereby reducing time and manual errors. 

## Next steps
Do you want to see this in action and see how you can benefit from OpenDataDSL?

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)
* [Matrix in ODSL](https://doc.opendatadsl.com/docs/odsl/variable/matrix)