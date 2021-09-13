---
slug: /dataset/BOCH_FX
tags:
  - boch
  - fx
  - exchange_rates
  - china
  - cny
---

BOCH_FX
============================================================

Bank of China Exchange Rates

## Overview

![](/img/data/boch.png)

All the rates are based on the Chinese Yuan Renminbi (CNY) - click [here](/docs/data/fx) for more information on the Foreign Exchange markets.

## File Collection

Bank of China (BOCH) file is downloaded from [https://www.bankofchina.com/sourcedb/whpj/enindex_1619.html](https://www.bankofchina.com/sourcedb/whpj/enindex_1619.html)

### Schedule

Data is updated in the website around 17:30 CST ( 09:30AM UTC) on Business days.

Process is scheduled to collect the file at 10:00 AM UTC

### Sample File

In this table, we extract the 6th column ‘Middle Rate’ and load.

![](/attachments/216367291/216367308.png)

## Type

The BOCH FX Rates are stored under the type #ForeignExchange

### Data ID and Name

Example data id and name

|Data Id|Name|
|-|-|
|#BOCH_FX.USDCNY|Bank of China Exchange Rates US Dollar per Chinese Yuan Renminbi|

### Attributes

|Name|Value|
|-|-|
|Source|BOCH|
|Source Name|Bank of China|
|Name|Bank of China Exchange Rates US Dollar per Chinese Yuan Renminbi|
|Description|Bank of China Exchange Rates US Dollar per Chinese Yuan Renminbi|
|Dataset|BOCH_FX|
|Dataset Name|Bank of China Foreign Exchange Rates|
|Dataset Type|Spot|
|Market|Financial Market|
|Commodity|Exchange Rates|
|Location|China|
|Quote Calendar|HCN|

### Validation

Data is validated for missing data points.

### Licensing

Data is freely available from the BOCH website and can be used by clients without permissions

