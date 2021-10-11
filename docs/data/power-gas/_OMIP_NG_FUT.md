The Iberian Energy Derivatives Exchange Natural Gas Physical Futures 

## File Collection

The end of day data file is collected from OMIP website: https://www.omip.pt/en/dados-mercado?date=2021-08-04&product=NG&zone=ES&instrument=FGE

### Schedule

The schedule for collecting the file is 20:00 GMT Spain business days.

### Sample File

Sample file

## Type

OMIP Gas Futures data is stored under the type: #NaturalGas

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

### Expiry Calendar

Below set of expiry calendars are used in calculating rolling forward data. The expiry and rollover calendars remain same.

|**Contract**|**Expiry Calendar**|
|-|-|
|Days|ROMIPD|
|Weekend|ROMIPWKD|
|Week|ROMIPWK|
|BOM|ROMIPNGFBOM|
|Month|ROMIPM|


### Attributes

Attributes with example values:

|Name|Example content|
|-|-|
|Source|OMIP|
|Source Name|The Iberian Energy Derivatives Exchange|
|Dataset|OMIP_NG_FUT|
|Dataset Name|The Iberian Energy Derivatives Exchange Natural Gas Physical Futures|
|Base|EUR|
|Unit|MWH|
|Frequency|Business|
|Market|Natural Gas,Futures|
|Commodity|Natural Gas|
|Location|Spain|
|Quote Calendar|HOMIP|

### Validation

Data is validated for missing data points using OMIP holiday calendar for expected absences.

### Licensing

This data requires agreement with OMIP before it can be supplied.

https://www.omip.pt/en/ftp-omip
