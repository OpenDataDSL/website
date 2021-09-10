---
slug: /dataset/ENTSOE_TL_FC
tags:
  - ENTSOE
  - POWER
  - FUNDAMENTALS
  - EUROPE
  - FORECAST
---
ENTSOE_TL_FC
============================================================

Day-ahead Forecast of the Total Load  

## Detailed description

Day-ahead forecast of the total load per market time unit.

A day-ahead forecast of the total load per market time unit per bidding zone at the latest two hours before the gate closure time of the day-ahead market in the bidding zone or at D-1, 12:00 in local time zone of the bidding zone at the latest when gate closure time does not apply. The day-ahead forecast has to be updated, if there are major changes.

## Schedule

The vendor update file is collected and processed at 23:45 hours UTC on daily basis.

## Dataset Details

The dataset details for this feed is given below:

|||
|-|-|
|Dataset Code|ENTSOE_TL|
|Dataset Name|ENTSO Power Total Load|
|Dataset Type|Energy Fundamentals|

## Data Id, Name and Profiles

The Data Id, Name Profile convention used by OpenDataDSL for Day-ahead forecast of the total load is outlined below:

|**Data ID**|**Data Id Name**|**Profile**|**Frequency**|**Unit**|
|-|-|-|-|-
|ENTSO\_EL.A65.A01.10YNL\_L.PT15M|ENTSO Electricity System Total Load Day Ahead Netherlands, TenneT NL BZ / CA/ MBA 15Minutely|VOL|15Minutely|MW|
|ENTSO\_EL.A65.A16.10YNL\_L.PT15M|ENTSO Electricity System Total Load Realised Netherlands, TenneT NL BZ / CA/ MBA 15Minutely|VOL|15Minutely|MW|

## Holiday Calendar

The data doesn’t follow any holiday calendar and it is expected to load on daily basis.

## Timezone

The data is extracted in UTC and loaded to the server in UTC. The DayLight Saving treatment is not required in this case.

## Attributes

The attributes hold below values values for this dataset:

|**Name**|**Sample Values**|
|-|-|
|Source|ENTSO-E|
|SourceName|European Network of Transmission System Operators for Electricity|
|Id|ENTSO\_EL.A65.A01.10YNL\_L.PT15M|
|Name|ENTSO Electricity System Total Load Day Ahead Netherlands,TenneT NL BZ / CA/ MBA 15Minutely|
|Description|ENTSO Electricity System Total Load Day Ahead Netherlands,TenneT NL BZ / CA/ MBA 15Minutely|
|Dataset|ENTSOE_TL|
|Dataset Name|ENTSO Power Total Load|
|Dataset Type|Energy Fundamentals|
|class|Day Ahead|
|Unit|MW|
|UnitName|Megawatt|
|Market|European Electricity|
|Product|System Total Load Day Ahead|
|Location|Netherlands TenneT|
|Frequency|15Minutely|
|Timezone|UTC|
