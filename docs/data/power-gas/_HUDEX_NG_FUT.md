---
slug: /dataset/HUDEX_NG_FUT
tags:
  - hudex
  - gas
  - futures
  - hungary
---

HUDEX_NG_FUT
============================================================

Hungarian Derivative Energy Exchange Power Natural Gas Futures

## File Collection

The end of day data is collected from HUDEX website:https://hudex.hu/en/market-data/natural-gas/daily-data?  

### Schedule

The schedule for collecting the file is 20:00GMT on Hungarian business days.

### Sample File

Sample file [sample file](./gas_daily_data_export_22_07_2021.xlsx)

[Sample file for HUDEX Gas Futures](pathname://../../daily_market_data_export.xlsx)

## Type

The dataset is stores as #NaturalGas

### Data ID and Name

Example data id and name

|**Data Id**|**Name**|
|-|-|
|HUDEX.NG.HU.FUT.CURVE|Hungarian Derivative Energy Exchange Natural Gas Futures Curve|

### Expiry Calendar

Below set of expiry calendars are used in calculating rolling forward data. The expiry and rollover calendars remain same.

|**contract**|**Expiry Calendar**|
|-|-|
|Month|RHUDEXNGFM|
|Quarter|RHUDEXENGFQSY|
|Season|RHUDEXENGFQSY|
|Year|RHUDEXENGFQSY|

### Attributes

|Name|Value|
|-|-|
|Source|HUDEX|
|Source Name|Hungarian Derivative Energy Exchange|
|Dataset|HUDEX_NG_FUT|
|Dataset Name|Hungarian Derivative Energy Exchange Power Natural Gas Futures|
|Dataset Type|Natural Gas Futures|
|Frequency|Business|
|Currency|EUR|
|Unit|MWH|
|Market|Natural Gas,Futures|
|Commodity|Natural Gas|
|Location|Hungary|
|Region|Europe|
|Quote Calendar|HEEXNGF|

### Validation

Data is validated for missing data points using HEEXNGF calendar for expected absences.

### Licensing

This data requires agreement with HUDEX before it can be supplied.

https://hudex.hu/en/data-services/market-data-subscription/data-vendor