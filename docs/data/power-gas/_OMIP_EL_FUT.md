---
slug: /dataset/OMIP_EL_FUT
tags:
  - omip
  - power
  - futures
  - spain
  - portugal
  - cash_delivery
---
OMIP_EL_FUT
============================================================
The Iberian Energy Derivatives Exchange Power Futures  

## Overview

The Iberian Electricity Market (MIBEL) is a joint initiative of the Portuguese and Spanish government with a view to the construction of a regional electricity market. With MIBEL coming into force, every consumer in the Iberian Peninsula was able to obtain electricity, under free competition, from any producer or seller operating in both Portugal and Spain.

Thus, the MIBEL wholesale market currently comprises:

*   A derivatives market (OMIP), where future electricity production and buying commitments are established. This market allows for a physical settlement (energy if delivered) or a financial settlement (compensation of monetary values underlying the trade). OMIP was established on 16 June 2003 and its creation was part of a common bilateral agreement  between the governments of Portugal and Spain. OMIP (Operador do Mercado Ibérico de Energia – Pólo Português, S.G.M.R., S.A.) is the MIBEL derivatives exchange
    
*   A spot market (OMEL), with a daily trading componenet (day-ahead market) and an intraday adjustment component (intraday market), in which electricity selling (production) and buying schedules are established for the day following the trade

This dataset consists of Baseload and Peakload Power futures of Spain and Portugal.
   
## File Collection

The end of day updates are collected from OMIP website: https://www.omip.pt/en/dados-mercado?date=2021-07-26&product=EL&zone=ES&instrument=FTB 

### Schedule

The schedule for collecting the file is around 20:00 GMT on Spain business days.

### Sample File

Sample file

### Type

OMIP Power Futures data is stored under the type: #Electricity

### Data Id and name

Some of the contract identifiers from OMIP are given below. These are used in object and data Id creation to make unique.

|Contract identifier|Description|
|-|-|
|FTB|Spain Base Load Futures(Physical and Financial)|
|FTK|Spain Peak Load Futures(Physical and Financial)|
|FWB|Spain Base Load Forwards (Physical)|
|SWB|Spain Base Load Swaps (Financial)|
|FPB|Portugal Base Load Futures (Financial)|

Examples of data Id and names:

|Data Id|Name|
|-|-|
|OMIP.EL.SP.FTB.BL.FUT|The Iberian Energy Derivatives Exchange Spain Baseload Power Futures Curve|
|OMIP.EL.SP.FTK.PL.FUT|The Iberian Energy Derivatives Exchange Spain Peakload Power Futures Curve|
|OMIP.EL.PT.FPB.BL.FUT|The Iberian Energy Derivatives Exchange Portugal Baseload Power Futures Curve|


### Expiry Calendar

Below set of expiry calendars are used in calculating rolling forward data. The expiry and rollover calendars remain same.

|**contract**|**Expiry Calendar**|
|-|-|
|Days|ROMIPD|
|Weekend|ROMIPWKD|
|Week|ROMIPWK|
|Month|ROMIPM|
|Quarter|ROMIPELFQY|
|Year|ROMIPELFQY|

### Attributes

Attributes with example values:

|Name|Value|
|-|-|
|Source*|OMIP|
|Source Name|The Iberian Energy Derivatives Exchange|
|Dataset|OMIP_EL_FUT|
|Dataset Name|The Iberian Energy Derivatives Exchange Power Futures|
|Dataset Type|Power futures|
|Base|EUR|
|Unit|MWH|
|Frequency|Business|
|Market|Power,Futures|
|Commodity|Power|
|Location|Spain|
|Quote Calendar|HOMIP|

### Validation

Data is validated for missing data points using OMIP holiday calendar for expected absences.

### Licensing

This data requires agreement with OMIP before it can be supplied.

https://www.omip.pt/en/ftp-omip
