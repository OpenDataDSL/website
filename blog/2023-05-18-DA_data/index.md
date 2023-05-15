---
slug: da_data
title: Day-ahead price sources
authors: [avinzelberg]
tags: [business case, smartdata,  odsl]
image: /img/blog/correl/da_data.jpg
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="col-md">
    <img src="/img/blog/DA/da_data.jpg"/>
  </div>
  <div className="col-md">
  <h2>Data sources</h2>  
    In this blog, we present some of our data sources for power day-ahead prices and volumes.
  </div>
</div>

<!--truncate-->

## Day-ahead prices and volumes

Day-ahead prices, also known as spot prices are the prices at which electricity is traded for delivery the following day. They represent the current market value of electricity and are determined through the interaction of supply and demand. Day-ahead volumes are the appropriate volumes that got traded with delivery the following day.

## Data vendors

Our data team is constantly writing data loaders to add new data sources to our database. Data for any kind of granularity or frequency.
For electricity's day-ahead hourly time series we collect price and volume data from all over the world. Here is a list of some of the data vendors we load the data for:


*	OTE - Czech Electricity and Gas Market Operator
*	IBEX - Bulgarian Energy Exchange Power
*	HENEX - Hellenic Energy Exchange Greece Power
*	OMIP - OMI-Polo Spanish SA Power Day Ahead
*	BSP - BSP SouthPool Energy Exchange Slovenia Power
*	HUPX - Hungarian Power Exchange Power Day Ahead Market Price
*	IPEX - Italian Power Exchange (GME)
*	IEX - India Energy Exchange
*	PJM - Pennsylvania-New Jersey-Maryland Interconnection

Let's pick three from the list (OTE for Czech, BSP for Slovenia, HUPX for Hungary) to dive into some details.

### Visualisation as timeseries
Visualizing the timeseries of the day-head hourly prices for the time period **06-13 May 2023** using the ODSL Excel-Addin

<img className={styles.product_screenshot} src="/img/blog/DA/DAPrices.png" />

The day-ahead prices are quite close for the chosen time horizon. Calculating the exact correlations using the appropriate ODSL function gives back values of unsurprisingly 97-99%.

The day-ahead hourly volumes do not show such a common pattern:

<img className={styles.product_screenshot} src="/img/blog/DA/Volumes.png" />


### Visualisation as forward curves

Visualizing the day-ahead prices as a red line for OTE (Czech) and as a blue line for BSP (Slovenia) as hourly forward curve tenors for the **15 May 2023** using the ODSL Web-Portal

<img className={styles.product_screenshot} src="/img/blog/DA/Curve.png" />

Whereas the prices match perfectly for the first hours of the day, they differ in the second half of the day.

The day-ahead hourly volumes the forward curve looks like:

<img className={styles.product_screenshot} src="/img/blog/DA/Volume.png" />





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