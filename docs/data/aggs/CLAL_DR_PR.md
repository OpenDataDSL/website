---
slug: /dataset/CLAL_DR_PR
tags:
  - CLALIT
  - AGGS
  - DAIRY
  - AMF
  - ANHYDROUS_KILK_FAT
  - ITALY
---
CLAL_DR_PR
============================================================

CLAL.it Global Daily Trade Average Auction Price  

## Overview

CLAL is an Italian Dairy Economic Consulting firm that analyses the Dairy Market, describes trends and provides data, news and synthesis thanks to information and training activities.

They offer a wide database regarding import and export flows in the main dairy countries and international trade flow analysis on the various dairy such as Cheese, Butter, SMP (Skimmed Milk Powder), WMP (Whole Milk Powder), Whey Powder, WPC, AMF, Condensed Milk, Bulk and Packed Milk, Lactose, Caseins and Caseinates.

## Type

The [CLAL](http://CLAL.it) data are stored in type: #Agriculture

## Dataset details

|||
|-|-|
|Dataset|CLAL_DR_PR|
|Dataset Name|[CLAL](http://clal.it/) Dairy Prices|
|Dataset Type|Spot Auction|

# Sample object

Object is built using provider, price type and product of CLALIT. It has data as well attributes belonging to each dairy report. Few examples are given below for product AMF (Anhydrous Milk Fat),

[CLAL](http://CLAL.it) Average Winning Price Report - CLALIT.AVGAUC.AWP

[CLAL](http://CLAL.it) Auction Winning Price Report - CLALIT.AMF.AVGAUC.WP

[CLAL](http://CLAL.it) Auction Winning Average Price Report - CLALIT.AMF.AVGAUC.AWP

[CLAL](http://CLAL.it) Quantities Offred at Auction Report - CLALIT.AMF.QNTAUC.VOL

## Data Id naming convention

Data Id naming convention examples:

[CLAL](http://CLAL.it) Average Winning Price Report:

|**Data Id**|**Name**|
|-|-|
|CLALIT.AVGAUC.AWP|[CLAL](http://clal.it/) Average Auction Winning Price|

[CLAL.it](http://CLAL.it) Auction Winning Price Report:

|**Data Id**|**Name**|
|-|-|
|CLALIT.AMF.AVGAUC.WP|[CLAL](http://clal.it/) Anhydrous Milk Fat Auction Winning Price Curve|

[CLAL](http://CLAL.it) Quantities Offred at Auction Report:

|**Data Id**|**Name**|
|-|-|
|CLALIT.AMF.QNTAUC.VOL|[CLAL](http://clal.it/) Anhydrous Milk Fat Quantity Offered Auction Volume|

## Profiles naming convention

Below two profiles are created:

|**Report**|**Profile Id**|**Profile Name**|**Profile Type**|**Frequency**|**Currency**|**Unit**|
|-|-|-|-|-|-|-|
|[CLAL](http://CLAL.it) Average Winning Price Report|AVG*|Average Winning Price|Price TS|fortnightly|USD|MT|
|[CLAL](http://CLAL.it) Average Winning Price Report|DIFF|Change in price index|Price TS|fortnightly|Na|PCT|
|[CLAL](http://CLAL.it) Auction Winning Price Report|PRICE*|Winning Price|Curve|monthly|USD|MT|
|[CLAL](http://CLAL.it) Auction Winning Price Report|AVG|Average Price|Price TS|fortnightly|USD|MT|
|[CLAL](http://CLAL.it) Quantity Offered Auction Volume Report|VOL|Offered Auction Volume|Curve|monthly|Na|MT|

## List of dairy products covered by vendor

*   Anhydrous Milk Fat ( AMF )    
*   Buttermilk Powder ( BMP - Butter Milk Powder)    
*   Skimmed Milk Powder ( SMP - Skimmed Milk Powder)    
*   Whole Milk Powder ( WMP - Whole Milk Powder)    
*   Milk Protein Concentrate ( MPC 70 - Milk Protein Concentrate)    
*   Rennet Casein ( Rennet Casein )    
*   Cheese ( Cheddar ) *    
*   Lactose ( LAC- Lactose)    
*   Butter 82% ( Butter, 82% )    
*   Whey Powder ( SWP - Sweet Whey Powder)    

## Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The spot and average prices are expressed in USD by the them. The quantities, which the prices refer to, are expressed in MT.

## Scheduling

Vendor site is updated twice, every first and third Tuesdays of the month.

## Attributes

Sample values for the attributes of Zuivelnl object,

|Name|Value|
|-|-|
|Source|[CLAL.it](http://clal.it/)|
|Source Name|CLAL|
|Data Id|CLALIT.AMF.AVGAUC.WP:CURVE|
|Name|[CLAL](http://CLAL.it) Anhydrous Milk Fat Average Auction Winning Price/Volume Curve|
|Description|[CLAL](http://clal.it/) Anhydrous Milk Fat Average Auction Winning Price/Volume Curve by the New Zealand Fonterra Coop|
|Dataset|CLAL_DR_PR|
|Dataset Name|[CLAL.it](http://clal.it/) Dairy Prices|
|Dataset Type|Spot Auction|
|Period|SPOT|
|Period Name|Spot|
|Currency|USD|
|Currency Name|US Dollars|
|Unit|MT|
|Unit Name|Metric Tons|
|Frequency|Semimonthly|
|Market|Agriculture|
|Commodity|Dairy|
|Product|Anhydrous Milk Fat AMF|
|Location|Italy|


