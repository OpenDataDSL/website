---
title: Data
sidebar_position: 7
slug: /tutorials/qs/developer/data
tags:
  - quickstart
  - odsl
  - developer
  - data
---
import {QuickStartModule} from '/src/components/Discovery.js';
import {MoreInfo, InDepth, Tutorial} from '/src/components/Discovery.js';

<QuickStartModule text="This quickstart module gives an overview of working with TimeSeries and Curve data." />

## TimeSeries
A TimeSeries is an array of values where each one is aligned to a point in time.
Generally TimeSeries are used to record an event or observation at a particular timestamp.
Examples of TimeSeries:
* The price of a particular commodity
* The amount or volume of a product sold
* A computer hardware metric such as memory or CPU usage
* Some fundamental information such as the GDP or employment percentage of a country

### Creating a TimeSeries
The minimum requirements for creating a TimeSeries is that it requires a [Calendar](/docs/tutorials/qs/developer/variables#calendars).
The calendar determines the intervals at which the observations will be recorded.

:::note
If the intervals are not pre-determined, you can use a [Sparse](/docs/odsl/calendar/sparse) calendar
:::

#### Calendar
When constructing a TimeSeries using a calendar, you can either use the exact name of the calendar or a Calendar variable, 
e.g. in the following example ts1 and ts2 both use a Daily calendar

```js
ts1 = TimeSeries("DAILY")
ts2 = TimeSeries(DailyCalendar())
```

#### Calendar, date and value
You can construct a TimeSeries with a calendar, a start date and a value or values e.g.

```js
ts2 = TimeSeries("2021-10-01", "DAILY", 12.5)
ts3 = TimeSeries("2021-10-01", "BUSINESS", [12.5,12.6,12.7,12.8,12.9])
```

You can see that ts2 has been created with a single value of 12.5 for 1st October 2021.

We have created ts3 with 5 values starting at 1st October 2021 and because it is aligned to a BUSINESS calendar, the values skip the weekend, e.g.

```
[
2021-10-01	12.500000
2021-10-04	12.600000
2021-10-05	12.700000
2021-10-06	12.800000
2021-10-07	12.900000
]
```

The 2nd and 3rd of October are Saturday and Sunday, which are deemed as not-in-calendar days, so they are skipped.

### Adding values
You add values to a TimeSeries using the built-in methods **add** or **addValue**.

Use **add** to tell the TimeSeries the date index of where to place the value and use **addValue** to place the value at the end of the TimeSeries at the next date index.

:::warning
When using **add**, the date index must align with the TimeSeries calendar, otherwise you will get an error.
:::

```js
ts3.add("2021-10-12", 14)
ts3.addValue(14.5)
print ts3.values
```

The output from that script shows:

```
[
2021-10-01	12.500000
2021-10-04	12.600000
2021-10-05	12.700000
2021-10-06	12.800000
2021-10-07	12.900000
2021-10-08	NaN
2021-10-11	NaN
2021-10-12	14
2021-10-13	14.500000
]
```

:::note
Note that we haven't added values for 2 date indexes, so these show as NaN or Not a Number
:::

### Saving TimeSeries
In order to save a TimeSeries, it needs to be added to an Object.
You would usually create or use a specific type of object to store our TimeSeries on, but for simplicity we are just going to create a generic object.

```js
QS01 = Object()
QS01.DATA = ts3

save ${object:QS01}
```

This will create an object called QS01 in our private repository and our TimeSeries will be called QS01:DATA.
You can view both of these in the Web Portal as shown below:

#### Object explorer in the Web Portal
![Object explorer in the Web Portal](/img/tutorial/qs-dev/06-data-01.png)

#### Data chart in the Web Portal
![Data chart in the Web Portal](/img/tutorial/qs-dev/06-data-02.png)

### Updating TimeSeries
During the normal data collection process, we would be collecting values every day just updating that value to the TimeSeries.
In OpenDataDSL, this is all handled for you, you simply create a mini-TimeSeries for the current value, update it and OpenDataDSL performs all the work required to blend the 2 TimeSeries.

Take the following example of creating a single value for the 14th October 2021 and save it to QS01.

```js
ts3 = TimeSeries("2021-10-14", "BUSINESS", 14.8)
QS01 = Object()
QS01.DATA = ts3
save ${object:QS01}
```

Reloading the data chart in the Web Portal shows the new value added

#### Data chart in the Web Portal
![Data chart in the Web Portal](/img/tutorial/qs-dev/06-data-03.png)

### Changing TimeSeries Values
