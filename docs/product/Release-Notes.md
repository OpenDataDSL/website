---
title: Release Notes
sidebar_position: 7
---

Release Notes
=============

Check here for details of our releases (both historic and upcoming)

## Upcoming Release in July 2022

#### Data Packages
Data packages are pre-defined processes that users can deploy to their own environment to load data from providers into their private database.
These data providers do not provide data that we can freely distribute, therefore the client has to load the data into their own private environment.

#### Events
Events are a thing that has happened at a point in time, similar to an observation in a TimeSeries only with a lot more information.
Example events are:
* An order placed with a broker, exchange etc.
* A trade made with a broker, exchange etc.
* A planned or unplanned outage (REMIT Urgent Market Message)

## Release History

<details>
<summary>June 2022</summary>

#### Curve Change Values
Added a 'change' value to show the absolute change of all tenors in a curve from the previous built curve

#### Region support in ODSL code
Allow users to create regions in ODSL code to break a script up into smaller sections.
These regions can be folded and run/debugged independently


</details>

<details>
<summary>May 2022</summary>

#### Date Rule Grammar
Added support for using dynamic dates such as T-1W (go back 1 week)

#### Support for unit conversion custom factors
You can now add properties on TimeSeries or Curves to provide absolute conversion factors to a specified unit

</details>

<details>
<summary>April 2022</summary>

#### Smart Curve Caching Improvements
Added support for caching options, you can now choose from:
* Never cache
* Cache on demand
* Cache when any dependencies are updated
* Cache based on a cron schedule

</details>

<details>
<summary>March 2022</summary>

#### Curve Calendar Enhancements
Various minor improvements
* Use of holiday calendars for absolute movement of expiry calendars
* Add support for timezone offsets when using hourly period codes

#### Add support for TOP in FIND command
Allows you to return a small sample of items when using the find command in ODSL

</details>

<details>
<summary>February 2022</summary>

#### Smart TimeSeries
The exciting introduction of Smart TimeSeries allowing you to create on-demand TimeSeries using a formula/expression.

#### Portal Smart Curves and TimeSeries
A new `Smart Data` section in the portal to 'play around' with Smart Curves and TimeSeries and save them to the Database.

#### Excel Add-in
Initial release of the Excel Add-in which will allow you to:
* Retrieve and update [Objects](/docs/odsl/variable/object)
* Retrieve and update [TimeSeries](/docs/odsl/variable/timeseries), [Curves](/docs/odsl/variable/curve), [Smart Curves](/docs/odsl/variable/smartcurve) and Smart TimeSeries

#### Gas Days
A new calendar supporting Gas Day hourly data aggregation and reporting.

</details>

<details>
<summary>January 2022</summary>

#### Smart Curves
The exciting introduction of [Smart Curves](/docs/odsl/variable/smartcurve) allowing you to create on-demand curves without using a Curve Builder.

#### Custom Period Codes
Support for custom, one-off and special period codes for use on contracts on Curves.
See [documentation](/docs/kb/pc#custom)

</details>

<details>
<summary>December 2021</summary>

#### Command Line Interface
Initial release of the CLI which will allow you to run scripts locally and initiate interactive sessions

</details>
<details>
<summary>November 2021</summary>

#### New account management option in the Portal
This is the place to go to manage your OpenDataDSL account:
* Edit your personal details and upload an image
* Edit your company details and configuration settings
* Accounting information such as cost analysis, invoices and payments
* Support - raise a support ticket, data or enhancement request

#### TimeSeries Scaling
Added support for rescaling TimeSeries for both aggregation to a lower frequency and distribution to a higher frequency.
See the documentation [here](/docs/odsl/calendar/scaling)

</details>
<details>
<summary>October 2021</summary>

#### Improvement to calendar holiday rules
Added support for options on the following rule types:
* [Every](/docs/odsl/calendar/holiday#every-rule)
* All [Named](/docs/odsl/calendar/holiday#named-rule) rules

#### New pause command
Add added a new command `pause` allowing you to pause execution of a script.

Syntax:
```js
pause number ('second'|'seconds'|'minute'|'minutes'|'hour'|'hours')
```

</details>
<details>
<summary>September 2021</summary>

#### Added support for using XSLTs in the [XML](/docs/odsl/service/xml#using-an-xslt) Service
You can now use an XSLT transformer when reading XML data, e.g.

```js
xdata = ${xml:xml,"xslt="+xslt}
```

#### Added new email target for queues
You can now emails using a subscription - see [here](/docs/odsl/dm/subscriptions#emailtarget) for more information

A few minor enhancements
* Added [daylightSavings](/docs/odsl/function/date#daylightsavings) function to test if the passed in date is a DST changeover day

</details>
<details>
<summary>August 2021</summary>

#### Getting ready for the soft launch!

We are putting the finishing touches on the Web Portal that will allow us to start welcoming prospective clients to start using it.
Designing the screens that will get you started

</details>
<details>
<summary>July 2021</summary>

#### Added support for real-time events

We completed the first stage of the [real-time API](/docs/api/realtime) allowing for a more responsive experience in the GUI and the more collaboration opportunities in other applications
</details>

<details>
<summary>June 2021</summary>

#### Curve configurations in the web portal

We have added the capability of creating and editing curve configurations in the web portal:

![](/attachments/131316/365232608.png)

#### Added unit REST API

Added support for getting a list of units of measure symbols and details

#### ODSL grammar updates

Added support for manually triggering configured subscriptions

trigger subscriptionname for date

Added logout command to log your user account out and clear the user cache

logout

Added support for referencing tenors in a curve

tenor = curve\["M01"\]

#### Improvements to CRON configuration for processes

We have added support for the following special characters in cron expressions for processes:

*   '-' for a range of values in all fields
    
    *   `22 13-15 ? * MON-FRI *`
        
*   '/' for increments in the MINUTE, HOUR, DOM and MONTH fields
    
    *   `0/15 13 ? * FRI-SUN *`
        
    *   `0 0/4 ? * FRI-SUN *`
        
    *   `0 0 1/5 * FRI-SUN *`
        
    *   `0 0 5 1/3 FRI-SUN *`
        
*   'W' for nearest weekday - this will fire on a Friday if the DOM falls on a Saturday or a Monday if the DOM falls on a Sunday
    
    *   `0 0 15W 1 ? *`
        
*   '#' for week of month as DOW#week number
    
    *   `0 0 ? 1 6#3 *`
        
    *   `0 0 ? 1 6#1,6#3 *`
        
*   'L' for last DOM or DOW
    
    *   `0 0 L 1 ? *`
        
    *   `0 0 * 1 L *`
        
</details>

<details>
<summary>May 2021</summary>

#### REST API improvements

We added a \_search query parameter to allow for text searching of objects. Simply pass in a search expression to get results based on values in the fields: \_id, name, description and classification.

#### Base Object Type

We defined a base object type that all types derive from which contain the following fields:

*   name
*   description
*   classification
*   geolocation
    

#### Objects and Data in the web portal

![](/attachments/131316/305856952.png)

#### Charts in the web portal

![](/attachments/131316/305889704.png)

#### Links in the web portal

Links allow you to view related data and information

![](/attachments/131316/305889696.png)

</details>

<details>
<summary>April 2021</summary>

#### Curve Building Support

We added support for creating your own forward curves using logic created in OpenDataDSL scripts. You can create an object of type #CurveConfig with 1 or more inputs and 1 or more outputs and save to the new CURVE service, example configuration:

```js
MY_CURVE = object as #CurveConfig
    name = "My Curve"
    expiryCalendar = "REOMHENG"
    buildScript = "simplecurve"
    inputs\[0\] = object as #CurveConfigInput
        key = "PRIMARY"
        id = "#MATBAROFEX.ROS.SOJA.FUT:CLOSE"
        required = true
    end
    outputs\[0\] = object as #CurveConfigOutput
        name = "CURVE"
        code = "multiplyByFactor(PRIMARY, factor)"
        factor = 1.5
        currency = "EUR"
        units = "MWH"
        expiryCalendar = "REOMHENG"
    end
end
save ${curve:MY_CURVE}
```
</details>

<details>
<summary>March 2021</summary>

#### Data aggregation support

Added the ability to filter, group and aggregate any data using ODSL and the REST services, e.g.

```js
summary = aggregate ${exec}
    match service="ETL"
    group _id="$status", qty=count()
    sort qty desc
end
```

#### Add range support for time-series

Add _range query option to specify a date range for time-series retrieval. Add 3 methods:

*   last(n) - last n observations
*   from(d) - from date d to the latest
*   between(d1, d2) - between 2 dates, d1 and d2
    
</details>
<details>
<summary>February 2021</summary>

#### Object and data storage

Improvements to the way objects and data is stored to allow greater query flexibility. Users can now query across all types of objects.

#### Custom save and delete reasons

Added the ability to define a ‘reason’ on all save and delete methods. This reason is placed in the audit log and the saved object (if versioned)

#### Search object properties and return data

Added the ability to query object properties, but return data entities using the profile command, e.g.

// Fetch all data for all ECB_FX currencies
data = find profile SPOT from ${currency:public} where source == "ECB_FX"

#### Process Executions in the web portal

Added the ability to view process executions in the web portal:

![](/attachments/131316/187269165.png)

</details>
<details>
<summary>January 2021</summary>

#### Indexes

Add ability for users to create custom database indexes to improve query performance.

#### Queues

Add ability for users to create and manage their own queues. Each queue can either be consumed by the loader process or can be left open to be consumed on-premises - see more [here](/docs/odsl/dm/queues)

</details>
<details>
<summary>2020</summary>

#### Geospatial queries

Add ability to add geometric shapes as a data property on objects and support geospatial queries on data, such as finding all objects within a radius of a point or within a polygon - see more [here](/docs/odsl/dm/geospatial)

#### Versioning

Add consistent versioning of data in the following services:

*   Types
    
*   Objects - definable by object type
    
*   Transformers
    
*   Extractors
    
*   Calendars
    
*   Actions
    
*   Workflows
    
*   Scripts
    
*   Processes
    

#### Auditing

Add audit records for all create, update and delete actions on all services

#### Queue Management

Allow users to add new queues and configure automatic data loading into proprietary ODSL database

#### Maths Functions

*   Simple regression
*   Basic descriptive statistics (min, max, mean etc)
    
</details>