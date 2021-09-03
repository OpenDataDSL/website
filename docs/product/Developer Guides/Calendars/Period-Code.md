---
sidebar_position: 8
---
Period Code
===========

A period code represents an absolute or relative delivery period for some commodity or financial future

## Valid Period Codes

Here is a list of the standard naming portions of period codes:

|**Name**|**Definition**|**Example**|
|-|-|-|
|ABS_YEAR|yyyy|2020|
|ABS_DAY|ABS_YEAR D MONTH DAY|2020D1022|
|PERIOD|[0-9]([0-9])*|01|
|MONTHNAME|3 char English month name|JAN|

Here is a list of the syntax for valid period codes

### Intraday periods

|**Name**|**Definition**|**Example**|
|-|-|-|
|Quarter hour|ABS_DAY “-QH” PERIOD|2020D1022-QH01|
|Relative quarter hour|“QH” PERIOD|QH01|
|Half hour|ABS_DAY “-HH” PERIOD|2020D1022-HH01|
|Relative half hour|“HH” PERIOD|HH01|
|Hour|ABS_DAY “-H” PERIOD|2020D1022-H01|
|Relative hour|“H” PERIOD|H01|
|Day|ABS_DAY|2020D1022|
|Relative day|“D” PERIOD|D01|

### Standard periods

|**Name**|**Definition**|**Example**|
|-|-|-|
|Weekend|ABS_YEAR “WKD” PERIOD|2020WKD01|
|Relative weekend|“WKD” PERIOD|WKD01|
|Working week|ABS_YEAR “WW” PERIOD|2020WW01|
|Relative working week|“WW” PERIOD|WW01|
|Week|ABS_YEAR “W” PERIOD|2020W01|
|Relative week|“W” PERIOD|W01|
|Half month|ABS_YEAR “HM”((DAY))? PERIOD|2020HM01 or 2020HM(14)01|
|Relative half month|“HM”((DAY))? PERIOD|HM01 or HM(14)01|
|Month|ABS_YEAR “M” PERIOD|2020M01|
|Relative month|“M” PERIOD|M01|
|Quarter|ABS_YEAR “Q” PERIOD|2020Q01|
|Relative quarter|“Q” PERIOD|Q01|
|Season|ABS_YEAR “S” PERIOD|2020S01|
|Relative season|“S” PERIOD|S01|
|Half year|ABS_YEAR “HY” PERIOD|2020HY01|
|Relative half year|“HY” PERIOD|HY01|
|Year starting on month|ABS_YEAR “Y” MONTHNAME|2020YJAN|
|Relative year starting on month|“Y” MONTHNAME PERIOD|YJAN01|
|Year|ABS_YEAR “Y”|2020Y|
|Relative year|“Y” PERIOD|Y01|
|Gas year|ABS_YEAR “GY”|2020GY|
|Relative gas year|“GY” PERIOD|GY01|

### End of period periods

|**Name**|**Definition**|**Example**|
|-|-|-|
|End of month|ABS_YEAR “EOM” PERIOD|2020EOM01|
|Relative end of month|“EOM” PERIOD|EOM01|
|End of quarter|ABS_YEAR “EOQ” PERIOD|2020EOQ01|
|Relative end of quarter|“EOQ” PERIOD|EOQ01|
|End of year|ABS_YEAR “EOY” PERIOD|2020EOY01|
|Relative end of year|“EOY” PERIOD|EOY01|

### Relative only periods

|**Name**|**Definition**|**Example**|
|-|-|-|
|Balance of week|“BOW”|BOW|
|Balance of month|“BOM”|BOM|
|Balance of quarter|“BOQ”|BOQ|
|Balance of year|“BOY”|BOY|
|Within day|“WD”|WD|
|Spot|“SPOT”|SPOT|
|Prompt|“PROMPT”|PROMPT|
|Dated|“DTD”|DTD|
|Saturday|“SAT”|SAT|
|Sunday|“SUN”|SUN|

### Financial periods

|**Name**|**Definition**|**Example**|
|-|-|-|
|Spot|“SP”|SP|
|Overnight|“ON”|ON|
|Tomorrow next|“TN”|TN|
|Spot next|“SN”|SN|
|Spot week|“SW”|SW|
|Financial week|PERIOD “W”|1W|
|Financial month|PERIOD “M”|1M|
|Financial year|PERIOD “Y”|1Y|

