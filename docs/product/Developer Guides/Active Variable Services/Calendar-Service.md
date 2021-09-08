Calendar Service
=================

The calendar service allows you to create and use all the [calendars](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/2818153/Calendars) in the system

## Introduction

The calendar service is the interface for the calendar repository.

Calendars are either:

*   Public - they are available to everybody and maintained by OpenDataDSL    
*   Private - they are proprietary and only available to you and your colleagues
    

All public calendar codes start with the # character in order to distinguish them from private calendar codes.

## Getting a calendar

If you know the code for a calendar, you can get it from the service using the following active variable syntax:
```js
calendar = ${calendar:code}
```
Example:
```js
// Get the public England and Wales holiday calendar
enghols = ${calendar:"#eng"}
```
This returns a new [Calendar](/docs/product/Developer%20Guides/Calendars/Calendars) variable with the England and Wales holiday rules configured.

## Saving a calendar

If you create a new calendar or edit an existing one, you can save the calendar back to the service using the **save** command.

Example:
```js
/** 
 Create an hourly calendar using a holiday calendar and 
 exclude hours 0-6 and 20-23
**/
ukpeak = IntradayCalendar(1h, holiday, \[0,1,2,3,4,5,6,20,21,22,23\])

// Save the calendar to the service
save ${calendar:ukpeak}
```
## Listing Calendars

To get a list of available calendars, you can use the **find** command with the calendar service.

Example:
```js
calendars = find ${calendar:public/""}
print calendars
```
This gets a list of all the public calendars and prints them to the console
