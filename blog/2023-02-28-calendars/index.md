---
slug: calendars
title: SMART Calendars
authors: [chartley]
tags: [calendar, peak, offpeak, timezone, odsl]
image: /img/blog/hourglass-on-calendar.jpg
hide_table_of_contents: false
---
import styles from './index.module.css';

<div className="row">
  <div className="column">
    <img src="/img/blog/hourglass-on-calendar.jpg"/>
  </div>
  <div className="column">
  <h2>Making calendars work for you</h2>  
    In this blog, we show you how to create OpenDataDSL calendars using <b>Artificial Intelligence</b>, why it is important to use calendar rules and how to use calendars in price calculations.
  </div>
</div>

<!--truncate-->

## Creating calendars in ODSL
We can create many types of calendars in OpenDataDSL:

* Regular calendars
* Irregular/sparse calendars
* Holiday calendars
* Trading and expiry calendars
* Forward contract delivery calendars

In many of them, you can use **Artifical Intelligence** rules to describe how the calendar works, for example consider a business calendar where you expect an observation every working day.

### Holiday calendars
We would use the following rules to tell the calendar which days are holidays and not to include them in our calendar:

```js
H = HolidayCalendar()
// Exclude Saturday and Sunday - only use weekdays
H.addRule("Every Saturday")
H.addRule("Every Sunday")
```

If we want to add Christmas day to the calendar, we can add the following rule:

```js
H.addRule("25th of December on Saturday shift -1 day and on Sunday shift 1 day")
```

This tells the calendar that the 25th of December is a holiday, if it lands on a Saturday, then use the Friday instead.
If it lands on a Sunday, then use the Monday instead.

:::tip Why use rules?
Using intelligent calendar rules removes the need to update calendars every year with new holiday dates thereby **reducing manual tasks that can cause errors!**   
:::

### Expiry calendars
Expiry calendars perform date calculations to determine when a particular futures contract expires (stops trading).
The determination of this date is provided by the futures exchange generally in the form of a rule.

Here is an example of a rule provided by CME for the last trade date of PJM Off-Peak calendar-month futures:

> On the second to last business day of the month prior to the contract month

The rule below moves to the last working day of the previous month, then goes back 1 working day using the holiday calendar (#NERC)

```js
RPJM = ExpiryCalendar(#NERC)
RPJM.addRule("go to the end of the previous month
              align backwards then go back 1 day using calendar")
```


### Peak and Off-peak calendars
Peak and off-peak calendars define blocks of the day which you usually want to price differently.

They consist of:

* A periodicity, e.g. 1h = hourly
* A holiday calendar defining which days are to be treated as off-peak days
* A list of hours to be **excluded** from the calendar
* A timezone to refer to local times
* An optional boolean parameter indicating that holiday days are to be used as full days

```js
// PEAK - skip hours 0-5 and 22-23
SKIP_PH = [0,1,2,3,4,5,22,23]
PP = IntradayCalendar(1h, #NERC, SKIP_PH, "US/Central")

// OFF-PEAK - skip hours 6-21
SKIP_OH = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
PO = IntradayCalendar(1h, #NERC, SKIP_OH, "US/Central", true)
```
## Using calendars
In this section we show how to use calendars to create derived prices.

### Around-the-clock (ATC) price
We can use the previously created peak and off-peak calendars to create an *around-the-clock* price.

The calculation for the ATC price is as follows:

```
        (peak hours * peak price) + (off-peak hours * off-peak price) 
        _____________________________________________________________

                       (peak hours + off-peak hours)
```

For example, if we are calculating the ATC price for January 2023, the peak and off-peak calendars tell use that we have 336 and 408 hours respectively.

```js
start = parse("2023-01-01", "yyyy-MM-dd", "US/Central")
end = parse("2023-01-31T23:00:00", "yyyy-MM-dd'T'HH:mm:ss", "US/Central")

peakhours = PJMPEAK.getDates(start, end).size
offpeakhours = PJMOFFPEAK.getDates(start, end).size
```

We then need the peak and off-peak prices for January 2023 and use them in our formula:

```js
peak = 109.15
opeak = 93.50

atc = ((peak * peakhours) + (opeak * offpeakhours)) / (peakhours+offpeakhours)
```

We can put this into a User Defined Function (UDF) where our input is a peak price curve and an off-peak price curve.
The output is an ATC curve using the formula above.

```js
function PJM_ATC(peak, offpeak)
    set precision 2
    
    // Read the peak and off-peak block calendars
    PEAK = ${calendar:"PJMPEAK"}
    OFFPEAK = ${calendar:"PJMOFFPEAK"}
 
    // Create our output ATC curve
    PJM_ATC = Curve(peak.ondate)
    for pc in peak.contracts
        // pc is the peak tenor price for the contract
        // opc is the off-peak tenor price for the same maturity
        opc = offpeak[pc.tenor]

        // Get the start and end hours using the correct timezone        
        start = parse(pc.start, "yyyy-MM-dd", "US/Central")
        end = parse(pc.end + "T23:00:00", "yyyy-MM-dd'T'HH:mm:ss", "US/Central")
        
        // Calculate the peak and off-peak hours using the calendars
        peakhours = PEAK.getDates(start, end).size
        offpeakhours = OFFPEAK.getDates(start, end).size
        
        // Perform the ATC calculation
        atc = ((pc.value * peakhours) + (opc.value * offpeakhours)) / (peakhours + offpeakhours)
        
        // Set the ATC value to the peak tenor and add to out ATC curve
        pc.value = atc
        PJM_ATC.add(pc)
    next
end
```

### Creating a Smart Curve

This function can now be used to create our ATC [Smart Curve](smartcurves) in the Web Portal.

<img className={styles.product_screenshot} src="/img/blog/atc.png" />

## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)
* [Smart Curves in ODSL](smartcurves)
* [Calendars in ODSL](https://doc.opendatadsl.com/docs/odsl/calendar/calendars)
