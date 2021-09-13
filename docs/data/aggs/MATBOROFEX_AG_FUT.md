---
slug: /dataset/MATBAROFEX_AG_FUT
tags:
  - matba
  - agriculture
  - futures
  - argentina
  - south_america
  - wheat
  - soybean
  - corn
---
MATBAROFEX_AG_FUT
============================================================

MATba ROFEX Agricultural Data

## Overview

Founded in 2019, Matba Rofex (https://www.matbarofex.com.ar/en/) was born from the merger of two markets with a centuries-old tradition in the trading of futures and options in Argentina, Mercado a Term de Buenos Aires SA and ROFEX SA. Matba Rofex offers negotiation tools to meet the needs of users in an area that ensures the free concurrence of supply and demand, and the formation of prices with absolute transparency.

MATba was founded in 1907. It was the first market to be established in Latin America. In its early history, it traded Futures contracts on agricultural commodities and rapidly became one of the main grain markets in the world. MATba is the largest agricultural futures & options exchange in South America. It trades futures (contract size 100 metric tons) and options (American style). Traded products include soybean, wheat, corn, sunflower, sorghum, barley, soybean oil and ICA MATba (Argentine Commodities Index).In January 2017 MATba signed an agreement with ROFEX to interconnect their trading platforms so members of both exchanges could trade all the products listed at both Exchanges. Later that year, cattle and "mini" contracts on wheat, soybeans and corn were launched. In October 2018 MATba and Rofex started a merger process.

Website: https://www.matbarofex.com.ar/

## Type

The MATba agricultural forward and spot updates are stored under the type  #ForwardCurve and #Agriculture respectively.

## Dataset Details

|||
|-|-|
|Dataset|MATBAROFEX_AG_FUT|
|DatasetName|MATba Agricultural Spot and Futures Prices|
|DatasetType|Agricultural Price Futures|

## Matba Agricultural Forward Curve

The MATba agricultural forward curves consist of a set of closing price values with the future contracts relative to curve dates or trade dates. The contract contains a period code which represents an absolute and relative delivery period. The curve date also uses an expiry calendar to calculate the relative future date/time of the curve contracts.

## Data Id and Name

The data Id is used to represent spot and forward contracts of agricultural products. They are made up of supplier code, destination port, agricultural product and the data name has full name of these. Below is the naming convention examples of data Id and name:

|Data Id|Data Name|
|-|-|
|MATBAROFEX.BA.TRIGO.FUT:CURVE|MATba ROFEX MATba ROFEX Wheat Buenos Aires Futures Curve|
|MATBAROFEX.BA.TRIGO.SPOT|MATba ROFEX MATba ROFEX Wheat Buenos Aires Spot price|
|MATBAROFEX.ROS.SOJA.FUT:CURVE|MATba ROFEX MATba ROFEX SoyBean Rosario Futures Curve|
|MATBAROFEX.ROS.SOJA.SPOT|MATba ROFEX MATba ROFEX SoyBean Rosario Spot price|

Currently the price updates for following products are available:

||**Products in Spanish**|**Products in English**|
|-|-|-|
|1|TRIGO|Wheat|
|2|MAÍZ|Corn|
|3|GIRASOL|Sunflower|
|4|SOJA|Soybean|
|5|SOJA FAB ENTREG|Factory Soybean Base|
|6|SOJA MINI|Mini Soy|
|7|TRIGO MINI|Mini Wheat|
|8|MAIZ MINI|Corn Mini|
|9|SOJA CHICAGO RX|Chicago RX Soy|
|10|MAIZ CHICAGO RX|Chicago Corn Soy|

## Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The spot forward prices are expressed in USD (US Dollar) by the MATba exchange. The quantities, which the prices refer to, are expressed in MT (Metric Tonne).

## Holiday and Expiry Calendar

HAR and RMATBA are the calendars used for holiday and expiry dates.

## Validation

Data is validated for missing data points using MATba exchange holiday calendar for expected absences.

## Attributes

|Name|Value|
|-|-|
|Source|MATbaROFEX|
|Source Name|Mercado a Term de Buenos Aires SA Rosario Board of Trade|
|Data Id|MATBAROFEX.W.ROS.FUT:Curve|
|Data Name|MATbaROFEX Rosario Wheat Futures Curve|
|Description|MATbaROFEX Rosario Wheat Futures Curve|
|Dataset|MATBAROFEX_AG_FUT|
|Dataset Name|MATba Agricultural Futures|
|Dataset Type|Futures|
|Currency|USD|
|Currency Name|US Dollar|
|Unit|MT|
|Unit Name|Metric Tonne|
|Period|M01|
|Period Name|Month 1|
|Frequency|Business|
|Market|Futures Market|
|Commodity|Agriculture|
|Product|Wheat|
|Location|Rosario|
|Operations Type|Futures|

### Licensing

Data licensing is directly with OpenDataDSL.

