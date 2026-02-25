---
slug: timezone
title: SMART Time Zones
authors: [avinzelberg]
tags: [business case, smartdata, time zone, odsl]
image: /img/blog/mongodb.svg
hide_table_of_contents: true
---
import styles from './index.module.css';

<div className="row">
  <div className="column">
    <img src="/img/blog/timezone/clock_action.jpg"/>
  </div>
  <div className="column">
  <h2>Smart time zone handling in ODSL?</h2>  
    In this blog we show you how to handle different data sources from different times zones in OpenDataDSL.
  </div>
</div>

<!--truncate-->
## Time zones

> *There is no official time zone for the North or South Poles. Since all the lines of longitude converge in the poles, technically the poles are in all the time zones simultaneously.*
> 
> -- <cite>[Fermat's Library on LinkedIn](https://www.linkedin.com/company/fermatslibrary/)</cite> 

I think while this is quite interesting, it is probably not the main challenge with time zones.
The business is most likely dealing with having different offices around the world. 

Time zones have to be considered not only when setting up calls with colleagues, but also when dealing with data. 
While some countries have only a single time zone, Germany or UK for instance, there are countries like Australia or the United States that have to deal with multiple time zones.

<img src="/img/blog/timezone/worldtime.jpg"/>


## Data sources and time zones

Our OpenDataDSL Data Team is constantly adding new data sources to our [Data Catalogue](https://doc.opendatadsl.com/docs/data/catalog) by defining smart OpenDataDSL data loaders.
The data from locations all over the world not only cover prices or volumes of various asset classes but also different update frequencies or data granularities. 
When the data from different regions are published using intra-daily granularity a smart handling of time zones is a must-have. 

In our example we are going to use electricity pricing data, specifically three time series from different locations with different granularities.


## Inputs - Electricity Data
In our sample we use data, as of 21 December 2022, from Iberia, published by [OMIE](https://www.omie.es/en/) from the power spot market as well as power data from the Indian energy exchange, [IEX](https://www.iexindia.com/), and power data from down under - from the Autralian Energy Market Operator, [AEMO](https://aemo.com.au/).

### Power data with hourly granularity from timezone=Europe/Amsterdam [UTC+1]

The [OMIE](https://www.omie.es/en/) day-ahead electricity data for Spain in EUR/MWH is published using an hourly granularity.

<img className={styles.product_screenshot} src="/img/blog/timezone/data_spain.PNG" />
<img className={styles.product_screenshot} src="/img/blog/timezone/data_table_spain.PNG" />

Using the ODSL Excel-Addin to retrieve the data for 21 December 2022:

<img className={styles.product_screenshot} src="/img/blog/timezone/tz_spain.PNG" />


### Power data with 15 minutely granularity from timezone=Asia/Calcutta [UTC+5:30]

The specific MORNING power block, showing up electricity prices in INR/MWH for the hours 6:00 - 10:00 [UTC+5:30] on a 15 minutely granularity from the data source [IEX](https://www.iexindia.com/).

Let's check how the MORNING power block #IEX_BLOCKCALENDAR_MORNING with time zone Asia/Calcutta is defined:

```js
[
{
  "_id": "#IEX_BLOCKCALENDAR_MORNING",
  "calendar": {
    "holidayCalendarCode": "DAILY",
    "timezoneCode": "Asia/Calcutta",
    "withoutHours": [0, 1, 2, 3, 4, 5, 
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  }
}
]
```


<img className={styles.product_screenshot} src="/img/blog/timezone/data_india.PNG" />

Considering the calendar definition from above, you can nicely see in the following screenshot that only for the hours 6:00-10:00 (exclusive) numbers are shown up.



<img className={styles.product_screenshot} src="/img/blog/timezone/data_table_india.PNG" />

Using the ODSL Excel-Addin to retrieve the data for 21 December 2022:

<img className={styles.product_screenshot} src="/img/blog/timezone/tz_india.PNG" />

### Power data with 5 minutely granularity from timezone=Australia/Sydney [UTC+11]

From [AEMO](https://aemo.com.au/) we use 5 minutely electricity prices in AUD/MWH for the New South Wales region of Australia, for the range 13:40 - 14:05 [UTC+11].

<img className={styles.product_screenshot} src="/img/blog/timezone/data_australia.PNG" />
<img className={styles.product_screenshot} src="/img/blog/timezone/data_table_australia.PNG" />

Using the ODSL Excel-Addin to retrieve the data for 21 December 2022:

<img className={styles.product_screenshot} src="/img/blog/timezone/tz_australia.PNG" />


## Output: Conversion to timezone=Europe/London [UTC+0]
The electricity data from three different locations on three different granularities are converted to timezone=Europe/London [UTC+0] and downloaded into an ExcelSheet using our ODSL Excel-Addin.

<img className={styles.product_screenshot} src="/img/blog/timezone/tz_joined.PNG" />


## Daylight savings time (DST)
To further complicate the use of time zones, some countries observe daylight savings time.

We'll show you how to easily handle DST in another blog - coming soon!



## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)
* [Matrix in ODSL](https://doc.opendatadsl.com/docs/odsl/variable/matrix)