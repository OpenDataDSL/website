---
slug: /dataset/OMIP_NG_FUT
tags:
  - OMIP
  - GAS
  - FUTURES
  - SPAIN
---
OMIP_NG_FUT
============================================================
OMIP Spain Natural Gas Futures  

## Overview

The Iberian Electricity Market (MIBEL) is a joint initiative of the Portuguese and Spanish government with a view to the construction of a regional electricity market. With MIBEL coming into force, every consumer in the Iberian Peninsula was able to obtain electricity, under free competition, from any producer or seller operating in both Portugal and Spain.

Thus, the MIBEL wholesale market currently comprises:

*   A derivatives market (OMIP), where future electricity production and buying commitments are established. This market allows for a physical settlement (energy if delivered) or a financial settlement (compensation of monetary values underlying the trade). OMIP was established on 16 June 2003 and its creation was part of a common bilateral agreement  between the governments of Portugal and Spain. OMIP (Operador do Mercado Ibérico de Energia – Pólo Português, S.G.M.R., S.A.) is the MIBEL derivatives exchange
    
*   A spot market (OMEL), with a daily trading componenet (day-ahead market) and an intraday adjustment component (intraday market), in which electricity selling (production) and buying schedules are established for the day following the trade
    

### Supplier and Dataset

The supplier and dataset details of OMIP Gas Futures are given below:

||**Code**|**Name**|**Type**|
|-|-|-|-|
|Supplier|OMIP|The Iberian Energy Derivatives Exchange|Exchange|
|Dataset|OMIP\_NG\_FUT|The Iberian Energy Derivatives Exchange Natural Gas Futures|Natural Gas Futures|

## Type

OMIP Gas Futures data is stored under the type: #NaturalGas

### Object

Example of an object belonging to OMIP Natural Gas Futures. It contains attributes, data Id, profiles and a link to dataset.

![](/attachments/414810146/416252011.png)

### Data Id and name

The contract identifiers from OMIP are given below. These are used in object and data Id creation to make unique.

|Contract identifier|Description|
|-|-|
|FTBSpain Base Load Futures(Physical and Financial)|
|FTK|Spain Peak Load Futures(Physical and Financial)|
|FWB|Spain Base Load Forwards (Physical)|
|SWB|Spain Base Load Swaps (Financial)|
|FPB|Portugal Base Load Futures (Financial)|

Examples of data Id and names:

|Data Id|Name|
|-|-|
|OMIP.NG.SP.FGE.FUT|The Iberian Energy Derivatives Exchange Spain Natural Gas Futures Curve|

### Profiles

The table below outlines all possible profiles that may be provided by the vendor and the unit, currency associated with it.

|Profile|Profile Name|Type|Frequency|Currency|Unit|
|-|-|-|-|-|-|
|BID|Best Bid|Curve|Business|EUR|MWH|
|ASK|Best Ask|Curve|Business|EUR|MWH|
|AUC_VOL|Auction Volume|Curve|Business|Na|MWH|
|LAST|Last Price|Curve|Business|EUR|MWH|
|TIME|Time|Curve|Business|Na|HOUR|
|LAST_VOL|Last Volume|Curve|Business|Na|MWH|
|OI|Open Interest|Curve|Business|Na|Na|
|CONTRACTS|No of Contracts|Curve|Business|Na|Na|
|OTC_VOL|OTC Volume|Curve|Business|Na|MWH|
|SETTLE|Settle Price|Curve|Business|EUR|MWH|
|PREV_SETTLE|Previous Settlement|Curve|Business|EUR|MWH|

### Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The gas future updates are expressed in EUR (Euro) by the OMIP. The quantities, which the prices refer to, are expressed in MWh (Megawatt-Hour).

### Holiday Calendar

Non Trading dates of OMIP Natural Gas Futures is associated to HOMIP ( OMIP Holiday) calendar.

The HOMIP is created based on non quoting days provided by the exchange.

### Expiry Calendar

Below set of expiry calendars are used in calculating rolling forward data. The expiry and rollover calendars remain same.

|**Contract**|**Expiry Calendar**|
|-|-|
|Days|ROMIPD|
|Weekend|ROMIPWKD|
|Week|ROMIPWK|
|BOM|ROMIPNGFBOM|
|Month|ROMIPM|

### Daylight Savings Treatment

Daylight savings is not applicable as the data updates are business frequency.

### Scheduling

**End of Day:** The file is retrieved between19:30 UTC and 20:30 UTC with sufficient retries.

### Derivations

OMIP supply the absolute contract periods and OpenDataDSL creates forward curves using relative derivations from absolutes using the expiry calendar from the OMIP website.

### Attributes

Attributes with example values:

|Name|Example content|
|-|-|
|Source|OMIP|
|Source Name|The Iberian Energy Derivatives Exchange|
|Id*|OMIP.NG.SP.FGE.FUT|
|Name|The Iberian Energy Derivatives Exchange Spain Natural Gas Futures Curve|
|Description|The Iberian Energy Derivatives Exchange Spain Natural Gas Futures Curve|
|Dataset*|OMIP_NG_FUT|
|Dataset Name|The Iberian Energy Derivatives Exchange Natural Gas Physical Futures|
|Period|M01|
|Period Description|Relative Month 01|
|Base|EUR|
|Base Name|Euro|
|Unit|MWH|
|Unit Name|Megawatt-Hour|
|Frequency|Business|
|Commodity*|Natural Gas|
|Location*|Spain|
|Product|Natural Gas Futures|
|Settlement Type|Physical Delivery|

### Licensing

This data requires agreement with OpenDataDSL before it can be supplied. Users contract directly with OpenDataDSL.
