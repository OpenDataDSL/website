---
slug: validation
title: Validation
authors: [chartley]
tags: [product, extension]
image: /img/blog/validation-dashboard.png
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
      <img className={styles.product_screenshot} src="/img/blog/validation-dashboard.png" />
  </div>
  <div className="column">
  <h4>Validation</h4>
  <em>OpenDataDSL launches Validation: automatic checks on every curve and timeseries, a record for every data point, and automations that only send on data you can trust</em>
  <br/><br/>
  <p>Check every curve and timeseries as it arrives, keep a record of what was checked and what happened next, and stop bad data before it reaches your models, reports and customers.</p>
  </div>
</div>

<!-- truncate -->
<hr/>

OpenDataDSL today announces **Validation**, a new extension that checks every curve and timeseries on the platform automatically, records the result for every data point, and lets teams review, fix or override failures in one place.

## The problem Validation solves

Bad market data looks like any other update: a price a hundred times too big, a tenor missing from a forward curve, a curve that did not change because the source did not update. By the time someone notices, it has already been used in a valuation, a risk report or a customer price. The checks that do exist are spread across spreadsheets and scripts, and leave no record of what was checked or why a problem was let through.

## How it works

Each curve or timeseries gets a set of **checks**, written in ODSL, from a library of 19 ready-made checks or from your own scripts:

- **Value checks:** missing, zero or negative values, a range, the change from the previous value, outliers against recent history, and stale values.
- **Curve checks:** gaps between delivery periods, required tenors, the number of contracts, tenors dropped from the previous curve, and quarters that do not match their months.
- **Your own checks:** any ODSL expression or function.

Checks run automatically whenever the data is saved, and whenever a smart, event or composed curve or timeseries is rebuilt. Every curve ondate and every observation gets a **validation record** with the result of each check and a timeline of what happened.

## Built for everyday use

- **Dashboard and issues:** pass rates, open issues, warnings and overrides at a glance, and every failing data point in one list to override with a reason, comment on, or run again.
- **Checks suggested from your data:** select many curves or timeseries, and Validation reads their last 30 days, suggests checks with limits that fit, and tries them on that history before you save them.
- **Adjust checks:** when a limit is a little too tight, Validation finds the smallest change that lets the data pass, and shows how many failures it would have avoided over the last 30 days.
- **Versions and history:** every change to a configuration is kept, with who made it and what changed, and any version can be restored.
- **Only validated data downstream:** automations can send a curve or timeseries on only when it passes validation, or its failure is overridden, and email the team as soon as data fails.
- **Insights:** reports by data item, by check, by day, and of every configuration and automation.

## Availability

Validation is available now as an extension for OpenDataDSL customers. Find out more on the [Validation](/features/validation) page, or read the [Validation documentation](https://doc.opendatadsl.com/docs/extensions/validation/overview).

<Demo />
