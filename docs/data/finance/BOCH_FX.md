---
slug: /dataset/BOCH_FX
tags:
  - BOCH
  - FX
  - EXCHANGE_RATES
  - CHINA
  - CNY
---

BOCH_FX
============================================================

Bank of China Exchange Rates

## File Collection

Bank of China (BOCH) file is downloaded from [https://www.bankofchina.com/sourcedb/whpj/enindex_1619.html](https://www.bankofchina.com/sourcedb/whpj/enindex_1619.html)

### Process Schedule

Data is updated in the website around 17:30 CST ( 09:30AM UTC) on Business days.

Process will be schedule to collect file B file at 10:00 AM UTC

### Sample File

In this table, extract 6th column ‘Middle Rate’ and load.

![](/attachments/216367291/216367308.png)

## Type

The BOCH FX Rates are stored under the type  #ForeignExchange

### Data Id and Name

|Data Id|Name|
|-|-|
|#BOCH_FX.USDCNY|Bank of China Exchange Rates US Dollar per Chinese Yuan Renminbi|

### Attributes

|Name|Value|
|-|-|
|Source*|BOCH|
|Source Name*|Bank of China|
|Id*|#BOCH_FX.USDCNY|
|Name*|Bank of China Exchange Rates US Dollar per Chinese Yuan Renminbi|
|Description|Bank of China Exchange Rates US Dollar per Chinese Yuan Renminbi|
|Dataset*|BOCH_FX|
|Dataset Name*|Bank of China Foreign Exchange Rates|
|Dataset Type|Spot|
|Period*|SPOT|
|Base|USD|
|Base Name|US Dollar|
|Currency|CNY|
|Currency Name|Chinese Yuan Renminbi|
|Frequency|Business|
|Market*|Financial Market|
|Commodity*|Exchange Rates|
|Location*|China|
|Quote Calendar|HCN|

