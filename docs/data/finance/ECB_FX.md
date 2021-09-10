---
slug: /dataset/ECB_FX
tags:
  - ECB
  - FX
  - EXCHANGE_RATES
  - EUROPE
  - EUR
---

ECB_FX
============================================================

Euroepan Central Bank Reference Exchange Rates

## Overview

The European Central Bank (ECB) is the central bank for the euro and administers monetary policy of the Eurozone, which consists of 19 EU member states and is one of the largest currency areas in the world. It is one of the world's most important central banks and is one of the seven institutions of the European Union (EU) listed in the Treaty on European Union (TEU).

The FX rates that would be loaded are the ECB Reference rates. 

## File Collection

*   The file is retrieved from the ECB website at [http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml](http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml)
    

### Schedule

*   Schedule at 16:30 CET business days
    

### Sample File

Below is the excerpts of the source file for 13th November 2020:

![](/attachments/216367189/216367209.png)

## Type

The ECX FX Rates are stored under the type  #ForeignExchange

### Data Id and Name

|**Data Id**|**Name**|
|-|-|
|ECB_FX.EURUSD|Euro Foreign Exchange Reference Rates Euro Per US Dollar|
|ECB_FX.EURGBP|Euro Foreign Exchange Reference Rates Euro Per Pound Sterling|

### Attributes

|Name|Value|
|-|-|
|Source*|ECB|
|Source Name*|European Central Bank|
|Id*|#ECB_FX.EURUSD|
|Name*|Euro Foreign Exchange Reference Rates Euro Per US Dollar|
|Description|Euro Foreign Exchange Reference Rates Euro Per US Dollar|
|Dataset*|ECB_FX|
|Dataset Name*|European Central Bank Reference Rates|
|Dataset Type|Spot|
|Period*|SPOT|
|Base|EUR|
|Base Name|Euro|
|Currency|USD|
|Currency Name|US Dollar|
|Frequency|Business|
|Market*|Financial Market|
|Commodity*|Exchange Rates|
|Location*|Europe|
|Quote Calendar|HTR|

### Validation

Data is validated for missing data points using Target holiday calendar for expected absences.

### Licensing

Data is freely available from the ECB website and can be used by clients without permissions

