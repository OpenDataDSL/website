---
title: Release Notes
sidebar_position: 7
---

Release Notes
=============

Check here for details of our releases (both historic and upcoming)

#### Upcoming Release in November 2021

#### New account management option in the Portal
This is the place to go to manage your OpenDataDSL account:
* Edit your personal details and upload an image
* Edit your company details and configuration settings
* Accounting information such as cost analysis, invoices and payments
* Support - raise a support ticket, data or enhancement request

<details>
<summary>October 2021</summary>

#### Improvement to calendar holiday rules
Added support for options on the following rule types:
* [Every](/docs/odsl/calendar/holiday#every-rule)
* All [Named](/docs/odsl/calendar/holiday#named-rule) rules

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