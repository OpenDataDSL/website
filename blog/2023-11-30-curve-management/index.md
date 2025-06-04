---
slug: curve-management
title: Curve Management
authors: [chartley]
tags: [smartcurve, curve, management]
image: /img/blog/smartcurves/smartcurve.jpg
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="col-md">
    <img src="/img/blog/curve-management/curve-management-graphic.png"/>
  </div>
  <div className="col-md">
  <h3>Go beyond the basics</h3>  
    <p></p>
    <p>From the team that brought you Smart Curves comes a revolutionary new way to manage your <b>Forward Curves</b> from building through to reporting.</p>
    <p>This blog explains the problems that curve management solves and gives a functional overview of all aspects of what curve management contains.</p>
    <br/>Read on to find out more.
    <p></p>
  </div>
</div>

<!--truncate-->

<span className={styles.bold_statement}>Go beyond the basics with Advanced Curve Management</span>

## Introduction
A curve builder allows you to build forward curves, but this is only the starting point for curve management. 


## What problems does it solve?

* **Curve build reliability**
  > *Curves fail to build for any number of reasons*
* **Curve operations and monitoring**
  > *Data sometimes arrives late or incorrect*
* **Bad data automated validation**
  > *When you have hundreds of curves, it is impossible to manually check every one before exporting*
* **Four-eye curve approvals**
  > *For certain critical curves, it is always best to get someone to manually check the data*
* **Managed exports to downstream/internal systems**
  > *Ensuring curves are exported and subsequently imported into the external system*

## Curve Management Stages

### Building

#### Event Driven
* Understands curve ancestry
* Triggered when data is ready

#### Build System Independent
Use your favourite language to build curves

* ODSL
* Java
* .NET (C#,F#,VB)
* Python
* MATLAB
* R
* JavaScript
* Scala
* Perl
* Go
* Excel

Build event driven, scheduled or manual

#### Substitution Rules at Cut-Off Time
When curves fail to built or their input data does not arrive, at a pre-determined cut-off time, it will automatically create a substitute curve.

* Use last built curve
* Define custom substitution rules

<img className={styles.center} src="/img/blog/curve-management/substitute.png" />
<span className={styles.product_screenshot_title}>Substituted curve using last available curve</span>

#### Build monitoring


### Quality Checks
#### Automated Checks
* Use standard/custom checks in ODSL, e.g.
  * Missing values
  * Zero values
  * Gaps
  * Change threshold breach
  * Minimum tenors
  * Incorrect structure
* Checks triggered when curve is built
* Checks can also correct curves

### Manual Approvals
* Create approval groups of people with authority to approve curves
* Lock-in APPROVED version of curve for export to downstream systems

### Export Groups
#### Configure Scheduled Exports
* Define export scripts using ODSL
* Add curves to export configuration
* Schedule scripts to export curves
* Use message queues
* Determine which curve version to export

#### Downstream System Reporting
* Report export status back to curve management
* Full round-trip status reporting

#### Multiple Systems per Curve
* Add many export configurations to a single curve

### Curve Analysis

### Reporting

## Conclusion
 

## Next steps
Do you want to see this in action and see how you can benefit from OpenDataDSL?

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [Smart Curve Tutorial](https://doc.opendatadsl.com/docs/tutorials/smart-curves)
* [Smart Curve Variable](https://doc.opendatadsl.com/docs/odsl/variable/smartcurve)
* [Standard Curve Building Functions](https://doc.opendatadsl.com/docs/public/scripts/curve-building)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)