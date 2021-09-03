Pricing Information
===================

Everything you need to know about how OpenDataDSL is priced

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

| **Item** | **Units** | **Free Usage** | **Price** |
|-|-|-|-|
| Storage | GB/Hour | 0.25 | 0.01 |
| API requests | Million Requests | 0.02 (20,000) | 0.01 |
| Messages | Message | 1000 | 0.01 |
| Process | Hours | 0.25 (15 Minutes) | 2.00 |
| Subscription | Fulfilled Subscription | 25 | 0.05 |

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

## Support Levels and Pricing

We offer 4 support levels which you are free to choose based on your specific needs.

| **Cover** | **Basic** | **Bronze** | **Silver** | **Gold** | 
|-|-|-|-|-|
| **Price** | Free | £25/month | £100/month | £1000/month | 
| **Issue Logging** | Web Only | Web Only | Web Only | Web and dedicated account manager |
| **Response Times** |
| **1 - Blocker**  | 24 hours | 8 hours | 2 hours | 30 minutes |
| **2 - Critical** | 24 hours | 10 hours | 4 hours | 1 hour |
| **3 - Major** | 48 hours | 12 hours | 8 hours | 4 hours |
| **4 - Minor** | 72 hours | 24 hours | 24 hours | 24 hours |
| **Support Hours** | M-F 8am to 6pm UK time | M-F 8am to 6pm UK time | M-F 8am to 6pm UK time | 24 x 5 UK time |

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
