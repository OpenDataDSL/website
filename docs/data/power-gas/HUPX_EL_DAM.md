---
slug: /dataset/HUPX_EL_DAM
tags:
  - hupx
  - power
  - day_ahead
  - hungary
---
HUPX_EL_DAM
============================================================
HUPX Power Day Ahead Baseload and Peakload  

## Overview

As an important part of the energy market liberalization in Hungary, the national TSO [MAVIR](http://mavir.hu/web/mavir-en) has established the Hungarian Power Exchange, Company Limited by Shares, as it subsidiary in 2010. HUPX Ltd. is the operator of the organized Hungarian spot power market with leading position in Central and Eastern Europe. HUPX is licenced as a NEMO (Nominated Electricity Market Operator) by the National Regulatory Authority of Hungary (MEKH).

On HUPX DAM (day-ahead market) standard hourly and block day-ahead electricity products can be traded. The day-ahead market of HUPX is taking part in the market coupling (4M MC) between  Czech, Slovak, Hungarian and Romanian markets.

4M MC is a day-ahead implicit allocation method based on ATC (Available Transfer Capacity) that seeks to maximize compatibility with the EU target model, while the 4M solution can be considered as an intermediate step in the Central-Eastern European and later "Core" regional solution.

## Supplier and Dataset

The supplier and dataset details of HUPX Power Day Ahead are given below:
 
||**Code**|**Name**|**Type**|
|-|-|-|-|
|Supplier|HUPX|Hungarian Power Exchange|Power Exchange|
|Dataset|HUPX_EL_DAM|Hungarian Power Exchange Power Day Ahead Market|Power Day Ahead|

## Type

HUPX Power Day Ahead data is stored under the type: #Electricity

## Object

Example of baseload object belonging to HUPX Power Day Ahead. It contains attributes, data Id, profiles and a link to dataset.

![](/attachments/417169546/417169564.png)

## Data Id and name

Examples of data Id and names:

|Data Id|Name|
|-|-|
|HUPX.EL.HU.BL.DA|Hungarian Power Exchange Baseload Day Ahead Curve|
|HUPX.EL.HU.PL.DA|Hungarian Power Exchange Peakload Day Ahead Curve|

## Profiles

The table below outlines all possible profiles that may be provided by the vendor and the unit, currency associated with it.

|Profile Name|Profile Type|Frequency|Timezone|Currency|Unit|
|-|-|-|-|-|-|
|PRICE|Price|Curve|Hourly|CET|EUR|MWH|
|VOL|Volume|Curve|Hourly|CET|Na|MWH|

## Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The HUPX Power Day Ahead prices are expressed in EUR (Euro) by the HUPX exchange. The quantities, which the prices refer to, are expressed in MWH (Megawatt-Hour)

## Holiday Calendar

No holiday calendar is required as the data is traded 24X7 throughout the year.

## Expiry Calendar

REOD calendar is used to calculate relative contract of day ahead on hourly contract.

Day ahead hourly contract is valid only on trading day and the delivery happens the next day.

## Derivations

HUPX supply the absolute contract periods and OpenDataDSL creates forward curves using relative calculation from it.

## Daylight Savings Treatment

Not applicable for daily data.

## Scheduling

End of Day:  The file is retrieved around 14:00CET with sufficient retries.

## Attributes

Attributes with example values:

|Name|Value|
|-|-|
|Source*|HUPX|
|Source Name*|Hungarian Power Exchange|
|Id*|HUPX.EL.HU.BL.DA|
|Name*|Hungarian Power Exchange Baseload Day Ahead Curve|
|Description|Hungarian Power Exchange Baseload Day Ahead Curve|
|Dataset*|HUPX_EL_DAM|
|Dataset Name*|Hungarian Power Exchange Power Day Ahead Market|
|Period*|D01|
|Period Description|Relative Day 01|
|Base|EUR|
|Base Name|Euro|
|Unit|MWH|
|Unit Name|Megawatt-Hour|
|Frequency|Daily|
|Commodity*|Power|
|Location*|Hungary|
|Product|Day Ahead Baseload|

### Licensing

This data requires agreement with HUPX before it can be supplied.

