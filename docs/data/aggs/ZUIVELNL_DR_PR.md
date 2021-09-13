---
slug: /dataset/ZUIVELNL_DR_PR
tags:
  - zuivelnl
  - agriculture
  - dairy
  - netherlands
---
ZUIVELNL_DR_PR
============================================================

ZuivelNL Dairy Prices

## Overview

ZuivelNL was founded on 7 January 2014 by LTO Nederland (LTO) and the Dutch Dairy Organization (NZO), as a chain organization of the dairy sector.

ZuivelNL is active in areas where cooperation between the links in the dairy chain leads to added value. The focus of the activities lies with a number of theme groups, which serve as a consultation and action platform for members and partner organizations in sub-areas. ZuivelNL's mission is to strengthen the Dutch dairy chain with respect for the environment and society.

The chain organization is the neutral point of contact for the dairy sector for the government and third parties. ZuivelNL is the platform where agreements about joint arrangements and financing are reached.

website: [http://www.ZuivelNL.org](http://www.zuivelnl.org/)

## Type

The Zuivelnl Dairy Prices are stored in type: #Agriculture

## Dataset details

**Dataset** ZUIVELNL_DR_PR

**Dataset Name** ZuivelNL Dairy Prices

**Dataset Type** Quotation Price

### Sample object

The object of ZuivelNL Dairy Prices are identified as below:

```
ZUIVELNL.BUTTER.QPR.W  
ZUIVELNL.WP.QPR.W  
ZUIVELNL.WMP.QPR.W  
ZUIVELNL.SSMP_H.QPR.W  
ZUIVELNL.SSMP_A.QPR.W
```

It consists of provider, product, price and frequency of data.

### Data Id naming convention

Data Id naming convention examples:

|**Data Id**|**Name**|
|-|-|
|ZUIVELNL.BUTTER.QPR.W|ZuivelNL Fresh Butter Quotation Price Weekly|
|ZUIVELNL.WP.QPR.W|ZuivelNL Fresh Whey Powder Quotation Price Weekly|
|ZUIVELNL.WMP.QPR.W|ZuivelNL Fresh Milk Powder Quotation Price Weekly|
|ZUIVELNL.SSMP_H.QPR.W|ZuivelNL Skimmed Spray Milk Powder, Human Weekly|
|ZUIVELNL.SSMP_A.QPR.W|ZuivelNL Skimmed Spray Milk Powder, Animal Weekly|

### Profiles naming convention

Below two profiles are created:

|**Profile Id**|**Profile Name**|**Profile Type**|**Frequency**|**Currency**|**Unit**|
|-|-|-|-|-|-|
|PRICE|Quotation Price|Price TS|Weekly|EUR|100KG|
|AVG|Average Price|Price TS|Yearly|EUR|100KG|

### Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The spot and average prices are expressed in EUR by the provider. The quantities, which the prices refer to, are expressed in 100KG.

### Scheduling

It is a weekly file updated every Wednesday in vendor site.

### Attributes

Below profiles and properties belong to Zuivelnl object:

|**Headings**|**Values**|
|-|-|
|Source|ZuivelNL|
|Source Name|ZuivelNL|
|Id|ZUIVELNL.BTR.QPR.W|
|Name|ZuivelNL Fresh Butter Quotation Price Weekly|
|Description|ZuivelNL Fresh Butter Quotation Price Weekly|
|AVG|$data:"#ZUIVELNL.BUTTER.QPR.W:AVG"|
|PRICE|${data:"#ZUIVELNL.BUTTER.QPR.W:PRICE"|
|Dataset|ZUIVELNL_DR_PR|
|Dataset Name|ZuivelNL Dairy Prices|
|Dataset Type|Quotation Price|
|Period|SPOT|
|Period Name|Spot|
|Currency|EUR|
|Currency Name|Euro|
|Unit|100KG|
|Unit Name|100 Kilogram|
|Frequency|Weekly|
|Market|Agriculture|
|Commodity|Dairy|
|Product|Fresh Milk|
|Location|The Netherlands|
