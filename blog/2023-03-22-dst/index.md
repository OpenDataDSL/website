---
slug: DST
title: Daylight saving time - DST
authors: [avinzelberg]
tags: [business case, smartdata, DST, odsl]
image: /img/blog/DST/dst_spring.jpg
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
    <img src="/img/blog/DST/dst_spring.jpg"/>
  </div>
  <div className="column">
  <h2>Smart daylight saving time handling in ODSL?</h2>  
    In this blog we show you how to handle daylight saving time in OpenDataDSL.
  </div>
</div>


<!--truncate-->
## Daylight saving time
 
### i.

<div className="row">
  <div className="column">
   Various research papers have a focus on daylight saving time, whereas the topic itself is tackled from different angles. While some studies particularly focus on health impact like sleep or heart attacks others focus on the consequences to economic values. Likely, there are research papers for every country checking the impact of daylight saving time to electricity demand or consumption. Not to forget the variety of papers on pros and cons abolishing daylight saving time.  

  </div>
  <div className="column">
    <img src="/img/blog/DST/timezone.jpg"/>
  </div>
</div>

### ii.

A time zone that considers DST has - contrary to the usual 24 hours within a day - 23 hours at the last Sunday in March and 25 hours at the last Sunday in October. The time between last Sunday in October and last Sunday in March is called daylight saving time. In practice also the notation summer time and winter time is used. 

<img src="/img/blog/DST/232425.PNG"/>  


## Useful ODSL functions

**daylightSavings**: Checks a day to see if it is a daylight savings changeover day.

Returns:
* 0 if false
* -1 if it is the start day of DST
* 1 if it is the end day of DST

Syntax:

```js
result = daylightSavings(date, timezone)
```

**Example** using year 2022: Last Sunday in March is 27th and last Sunday in October is 30th.
Let's use the information and run the function above for time zone Europe/London, where daylight saving time is taken into account: 

```js
print daylightSavings(Date("2022-03-27"), "Europe/London")
-1
```
```js
print daylightSavings(Date("2022-10-30"), "Europe/London")
1
```
whereas in India, where no daylight saving time is considered, the result is:

```js
print daylightSavings(Date("2022-03-27"), "Asia/Calcutta")
0
```
```js
print daylightSavings(Date("2022-10-30"), "Asia/Calcutta")
0
```




**Fill**: Provides options how to treat missing data.

Syntax:
```js
result = fill(input, method)
```
Input can be a **list of time series** or a **single time series** and method can be one of **forward**, **backward**, **remove** or **linear**.


Example:

```js
data = fill(data, "forward")
```

## ODSL data samples

:::tip Data Catalogue
Our OpenDataDSL Data Team is constantly adding new data sources to our [Data Catalogue](https://doc.opendatadsl.com/docs/data/catalog) by defining smart OpenDataDSL data loaders. 
:::

### Input data: raw file

:::info Example: Daylight saving time in 2022
In this example we use data from the data provider [OMIE](https://www.omie.es/en/spot-hoy), who is publishing electricity prices and volumes for Spain, Portugal and Iberia. 

In particular we check the input raw file for the changeover days in 2022: **27th March** and **30th October**.
The time zone for the data set is Europe/Madrid, which is **UTC+1**.
:::



#### March

For the changeover day in March, the file only contains 23 entries, representing the prices for the 23 hours that day only has.

<img src="/img/blog/DST/march_2022.PNG"/>  

#### October

For the changeover day in October, the data raw file contains 25 entries for the 25 hours that day has.

<img src="/img/blog/DST/oct_2022.PNG"/>  

### Daylight saving time usage in ODSL 
In the following we are looking at the created hourly forward curves for the changeover days.

#### March

The values are loaded from the input raw file. In ODSL - according to the following screenshot - we notice the expected missing hour 2:00 - 2:59, (absolute tenor), whereas the relative tenors show up nicely without a gap.



<img src="/img/blog/DST/odsl_ts_mar_2022.PNG"/> 

#### October

Again, the values are loaded from the input raw file in ODSL - according to the following screenshot - we notice the expected doubled hour 2:00 - 2:59, (absolute tenor).


<img src="/img/blog/DST/odsl_ts_oct_2022.PNG"/> 



## Next steps
Ready to see ODSL in action? 

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />

## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)