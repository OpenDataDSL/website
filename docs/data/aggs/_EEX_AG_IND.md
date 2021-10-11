EEX European Energy Exchange Agricultural Indices  

## Overview

![](/img/data/eex.png)

European Energy Exchange (EEX) is the leading energy exchange in Europe founded in 2002.

The European Energy Exchange (EEX) is the leading energy exchange in Europe which develops, operates and connects secure, liquid and transparent markets for energy and related products. As part of EEX Group, a group of companies serving international commodity markets, EEX offers contracts on Power and Emission Allowances as well as Freight and Agricultural Products. EEX is part of Deutsche Börse Group.

EEX is the leading derivatives market for potatoes and dairy products in Europe. All products are settled financially upon maturity (cash settlement). In this process, reference prices adequately reflecting the value of the traded products are used. These price indices increase market transparency – also in the futures contracts.

EEX European Butter, European Skimmed Milk Powder and European Whey Powder Indices.

website = [http://www.eex.com](http://www.eex.com)

## File Collection
Weekly updates are collected from EEX website: https://www.eex.com/en/market-data/agricultural-markets/agricultural-indices

### Schedule

Weekly update file is processed around 19:00 GMT every Wednesday.

### Sample File

[Sample file for FABT](pathname:///file-samples/FABT_Index_DE.xls)

[Sample file for FALM](pathname:///file-samples/FALM_Index_DE.xls)

[Sample file for FAPP](pathname:///file-samples/FAPP_Index_DE.xls)

[Sample file for FASM](pathname:///file-samples/FASM_Index_DE.xls)

[Sample file for FAWH](pathname:///file-samples/FAWH_Index_DE.xls)

## Type

The EEX Agricultural data is stored in type: #Agriculture

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

### Attributes

|Name|Value|
|-|-|
|Source|EEX|
|Source Name|European Energy Exchange|
|Dataset|EEX_AG_IND|
|Dataset Name|European Energy Exchange Agricultural Indices|
|Dataset Type|Spot Indices|
|Frequency|Weekly,Monthly|
|Currency|USD|
|Unit|MT|
|Market|Agriculture|
|Commodity|Agriculture,Dairy|
|Product|Butter,Potato,SMP,Whey,Milk|
|Location|Germany,The Netherlands,France,Denmark|
|Region|Europe|
|Quote Calendar|Sparse|


### Validation

Data is validated for missing data points using EEX holiday calendar for expected absences.

### Licensing

Data is freely available from the vendor website and can be used by clients without permissions.
