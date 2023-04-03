---
slug: Wealth
title: Adding logic to data
authors: [avinzelberg]
tags: [business case, smartdata, logic, odsl]
image: /img/blog/DST/dst_spring.jpg
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
    <img src="/img/blog/wealth/data.jpg"/>
  </div>
  <div className="column">
  <h2>Adding logic to time series data in ODSL?</h2>  
    In this blog we show you how to easily add logic to your time series data in OpenDataDSL.
  </div>
</div>


<!--truncate-->
## Introduction

By following certain steps, you can add logic to data to generate insights that support your organization's goals and objectives. It's important to remember that the process of adding logic to data is an ongoing one, and requires continuous monitoring and refinement to ensure that the data remains relevant and effective.

To add logic to data, you can follow these steps:

<img className={styles.product_screenshot} src="/img/blog/wealth/dataLogic.PNG" />


## Sample: Cumulative gain from an investment

### Business Requirement

We demonstrate the cumulative gain from a particular investment over a given period. Assuming 1 EUR was invested at the beginning of a period, we
compound the investment value, month by month, by 1 plus the return of the industry portfolio. We compare the investment of 1 EUR for different holding periods of 5 years or 50 years or even forever starting in 1927, 1972 and 2018.


### Data input source

We consider United States related input data of market value weighted equity portfolios representing 5 industry sectors listed below and whose monthly return data can be found in the online database of Kenneth R. French's [website](http://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html). For further analysis we store the monthly returns available for the time horizon July 1926 until December 2022 as time series in ODSL using the Excel-Addin or a loader.

The list of the 5 Industries:

* **CNSUMR:**  Consumer Durables, Nondurables, Wholesale, Retail, and Some Services (Laundries, Repair Shops)
* **MANUF:**  Manufacturing, Energy, and Utilities
* **HITEC:**  Business Equipment, Telephone and Television Transmission
* **HLTH:**   Healthcare, Medical Equipment, and Drugs
* **OTHER:**  Other: Mines, Construction, Construction Materials, Transportation, Hotels, Business Services, Entertainment, Finance

On the [website](http://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html) of Kenneth R. French you get further information on the industry portfolio composition, but basically each NYSE, AMEX, and NASDAQ stock got assigned to an industry portfolio and the returns got computed.


### Data model logic

ODSL 4GL scripting language helps to add the data model logic in a smart way considering **calendars**, **frequencies**, **handling missing values**, any kind of **conversion** or other business challenges.

The logic for the cumulative gain of putting 1 EUR into an investment is placed into a script to be available in the ODSL Web Portal:

```js
/**
 * Cumulative product function
 */
function cfunc(series, start, sval)
    pindex = series.calendar.previous(start)
    cfunc = TimeSeries(pindex, series.calendar, sval)
    s2 = series.from(start)
    for v in s2.values
        sval = sval * (1 + v.value/100)
        cfunc.addValue(sval)
    next
end
```

The function **cfunc** uses **3 input parameters**:

* **series** is used for the return input series. 
* **start** is the starting date for the calculation (we use 01-01-1927 or 01-01-1972 or 01-01-2018).
* **sval** is the starting value for the investment (we use 1 EUR in our sample). 

The output series utilises the calendar information of the input. In our case, the input series is a monthly series.
Moreover we have the assumption, in the previous period of the overall investment period we have 1 EUR.


:::tip Smart Time Series
The script is an optional saved custom script with user defined functions. These functions can then be used in the expression of the configuration in ODSL Web-Portal.
:::



### Configuration in ODSL - smart time series

In the ODSL Web-Portal, the smart time series can be configured calling the script and configure the input and output data.
The calculation can easily be tested by clicking on the Test Run button before saving the setup.

Here in this sample we setup the smart time series for the industry portfolio OTHER and the cumulative gain is calculated starting 01-01-1927 investing 1 EUR.



<img className={styles.product_screenshot} src="/img/blog/wealth/odsl_smartSeries.PNG" />


:::tip Smart Time Series vs. Base Time Series
Smart time series are an easy but powerful way of defining time series derivations.


The base TimeSeries is mandatory and can be either a real TimeSeries or another Smart TimeSeries. The base TimeSeries is usually used in the expression using the variable name BASE.
:::


### Data analysis and visualization

The outcome of our analysis can be visualized in the ODSL Web-Portal or in Excel downloading the information easily with the ODSL Excel-Addin and by utilizing the Excel functionalities.

#### Cumulative gain since 1927
Checking the progress of the cumulative gain of the investment of 1 EUR for each of the 5 industry portfolios over the investment period starting 01-01-1927.


<img className={styles.product_screenshot} src="/img/blog/wealth/odsl_5P_wTS.PNG" />


#### Cumulative gain since 2018

If we just check the output for a last 5 years investment, the graphs look like:


<img className={styles.product_screenshot} src="/img/blog/wealth/odsl_5P5Y_wTS.PNG" />


#### Gain if investing for 5 years starting 1927, 1972 or 2018

<img className={styles.product_screenshot} src="/img/blog/wealth/5Y.png" />



#### Gain if investing for 50 years starting in 1927 or 1972

<img className={styles.product_screenshot} src="/img/blog/wealth/50Y.png" />


#### Gain if investing forever


*Our favorite holding period is forever.*
-- <cite>[Warran Buffett] </cite> 

<img className={styles.product_screenshot} src="/img/blog/wealth/Forever.png" />





## Next steps
Ready to see ODSL in action and give feedback? 

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />

## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)