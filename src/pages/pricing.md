import { BasicPricingTable, SupportLevels, PricingHeader } from '/src/components/Pricing.js';

<PricingHeader />

## Overview

OpenDataDSL is a SAAS (software as a service) product and has a simple pricing structure based on usage.

### Software Usage

There is no charge for the use of any of our software, you are only charged for using our services.

### Free Usage

Each pricing item optionally has a ‘free usage amount' which is the amount of that item that you can use per month with no charge - the pricing of the item only comes into effect after you have used the free usage amount.

### Pricing Units

Each pricing item has a pricing unit which is the metric that is used to quantify the usage of that item, for example storage is measured in GB/hour.

Basic Pricing Table
===================

The following table represents the pricing structure of the fundamental pricing items at the current date of 1st July 2021, all prices are in GBP and represent the price per unit or part thereof:

<BasicPricingTable />

## Detailed Pricing Information

### Storage

A storage metric is recorded every day at midnight for each data environment. The value in the metric represents the total number of bytes of disk space taken up by your data. The value for the month is calculated as the sum of all the day's storage * 24 hours which is then converted into GB/Hour.

### API Requests

Every API request made to the OpenDataDSL services is recorded. This includes requests made from the OpenDataDSL language, processes, direct REST API requests, the Excel Add-in and the Web Portal.

### Messages

This metric is simply the number of messages sent to one of your queues.

### Processes

Every process that runs has a process execution log that records and stores a metric about the length of time that the process took to run in milliseconds. These metrics are summed up and converted to hours.

### Subscriptions

This metric represents every fulfilled subscription.

## Pricing Examples
#### Company A
Company A uses OpenDataDSL to retrieve free pricing data and feed it into their own database and they have 5 users that regularly use the Excel Add-in and Web Portal.
They have created 30 subscriptions which produce 1200 messages and make around 50,000 API requests a month.

Their cost calculation:

|Type|Consumed|Free|Billable|Rate|Cost|
|-|-|-|-|-|-|
|Subscription|30|25|5|0.05|0.25|
|Message|1200|1000|200|0.01|2.00|
|API|50,000|20,000|30,000|1.00|0.03|

**Total cost for the month £ 2.26**

#### Company B
Company B has processes to load data into their private storage.
The processes run for 1 hour per day every business day, the storage used is averaged at 100Mb over the month.
They have 50 subscriptions producing 2500 message per month and their users make 1 million API calls per month.

Their cost calculation:

|Type|Consumed|Free|Billable|Rate|Cost|
|-|-|-|-|-|-|
|Subscription|50|25|25|0.05|1.25|
|Message|2500|1000|1500|0.01|15.00|
|API|1,000,000|20,000|980,000|1.00|0.98|
|Storage|0.1 Gb|0.005|0.095 x 24 hours x 31 days = 70.68|0.1|7.07|
|Process|20 Hours|0.25|19.75|2.00|39.5|

**Total cost for the month: £ 63.80**

## Support Levels and Pricing

We offer 4 support levels which you are free to choose based on your specific needs.

<SupportLevels />

## Additional Service Pricing

### Curve Building

Use of the curve building software and services has no additional charge, you will only be charged for the services that curve building uses:

*   Storage    
    *   Curve configuration and data storage        
*   API Requests
    *   Curve configuration maintenance        
    *   Curve viewing and extraction
    *   Curve building input data
*   Subscriptions and Messages
    *   A subscription is created for each curve configuration in order to trigger a curve build message
*   Processes
    *   A process is triggered each time a curve is built
