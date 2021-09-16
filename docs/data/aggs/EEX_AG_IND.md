---
slug: /dataset/EEX_AG_IND
tags:
  - eex
  - agriculture
  - index
  - europe
  - dairy
  - butter
  - smp
  - whey
---
EEX_AG_IND
============================================================

EEX European Energy Exchange Agricultural Indices  

## Overview

![](/img/data/eex.png)

European Energy Exchange (EEX) is the leading energy exchange in Europe founded in 2002.

The European Energy Exchange (EEX) is the leading energy exchange in Europe which develops, operates and connects secure, liquid and transparent markets for energy and related products. As part of EEX Group, a group of companies serving international commodity markets, EEX offers contracts on Power and Emission Allowances as well as Freight and Agricultural Products. EEX is part of Deutsche Börse Group.

EEX is the leading derivatives market for potatoes and dairy products in Europe. All products are settled financially upon maturity (cash settlement). In this process, reference prices adequately reflecting the value of the traded products are used. These price indices increase market transparency – also in the futures contracts.

EEX European Butter, European Skimmed Milk Powder and European Whey Powder Indices.

website = [http://www.eex.com](http://www.eex.com)

## File Collection

### Schedule

Weekly update file comes every Wednesday.

### Daylight Savings Treatment

As the data is daily frequency, no Daylight Savings logic is applicable.

### History

History is available from the vendor from year 2021.

### Derivations

No derivations are provided by OpenDataDSL since the updates are weekly data.



## Type

The EEX Agricultural data is stored in type: #Agriculture

### Dataset

The dataset details of ZuivelNL Dairy Quotation Weekly Prices is given below:

|**Code**|**Name**|**Type**|
|-|-|-|
|EEX_AG_IND|European Energy Exchange Agricultural Indices|Dairy Spot Indices|

### Data Id and name

Below product Id that is given by EEX is used in building Data Id

|**Product Name**|**Product Id**|
|-|-|
|EEX European Butter Future|FABT|
|EEX European Skimmed Milk Powder Future|FASM|
|EEX European Whey Powder Futures|FAWH|
|EEX European Liquid Milk Futures|FALM|
|European Processing Potato Index|FAPP|

Examples of data Id and names:

|Data Id|Name|
|-|-|
|EEX.AG.FABT.DE.PR.IND.W|European Energy Exchange Germany Butter Index Price weekly|
|EEX.AG.FAPP.DE.PR.IND.W|European Energy Exchange Germany European Processing Potato Index Price weekly|
|EEX.AG.FASM.DE.PR.IND.W|European Energy Exchange Germany Skimmed Milk Powder Index Price weekly|
|EEX.AG.FAWH.DE.PR.IND.W|European Energy Exchange Germany Whey Powder Index Price weekly|
|EEX.AG.FASM.DE.PR.IND.M|European Energy Exchange Germany Skimmed Milk Powder Index Price Monthly|
|EEX.AG.FAWH.DE.PR.IND.M|European Energy Exchange Germany Whey Powder Index Price Monthly|
|EEX.AG.FALM.DE.PR.IND.M|European Energy Exchange Germany Liquid Milk Index Price Monthly|
|EEX.AG.FABT.DE.PR.IND.M|European Energy Exchange Germany Butter Index Price Monthly|

### Profiles

The table below outlines all possible profiles that may be provided by the vendor and the unit, currency, quotecal and expiry codes associated with it.

|Profile|Profile Name|Type|Frequency|Currency|Unit|Quote Cal|Expiry Cal|
|-|-|-|-|-|-|-|-|
|PRICE|Quotation Price|Price TS|Weekly|EUR|MT|Daily|Na|
|WEEK|Reference Week|Numeric TS|Weekly|Na|Na|Daily|Na|

### Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The agricultural prices Indices are expressed in EUR (Euro) by the EEX . The quantities, which the prices refer to, are expressed in MT (Metric Tonne).

### Attributes

|Name|Value|
|-|-|
|Source|EEX|
|Source Name|European Energy Exchange|
|Dataset|EEX_AG_IND|
|Dataset Name|European Energy Exchange Agricultural Indices|
|Dataset Type|Spot Indices|
|Commodity|Agriculture|
|Product|Various|
|Location|Europe|
|ProductCode|FABT|

### Validation

Missing:

### Licensing

