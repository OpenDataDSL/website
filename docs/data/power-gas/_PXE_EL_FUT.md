---
slug: /dataset/PXE_EL_FUT
tags:
  - pxe
  - power
  - futures
  - czechia
---

PXE_EL_FUT
============================================================
Power Exchange Central Europe Power Financial Futures

## File Collection

The end of day data file is collected from PXE website: https://www.pxe.cz/Download/

### Schedule

The end of day file is retrieved between 08:00 and 09:00 GMT on following Czech business days.

### Sample File

Sample file [sample file](./20210716_PXE_Results.csv)

### Type

PXE Power Futures data is stored under the type: #Electricity

### Data Id and name

Some of the contract identifiers from PXE are given below. These are used in object and data Id creation to make unique.

|**Issuer**|**ECC Code**|**Location**|
|-|-|-|
|PXE HU BL|F9B|Hungary|
|PXE HU PL|F9P|Hungary|
|PXE CZ BL|FXB|Czech Republic|
|PXE CZ PL|FXP|Czech Republic|
|PXE SK BL|FB|Slovakia|
|PXE SK PL|FP|Slovakia|
|PXE PL BL|FPB|Poland|
|PXE PL PL|FPP|Poland|
|PXE BG BL|FKB|Bulgaria|
|PXE RO BL|FHB|Romania|
|PXE RO PL|FRP|Romania|
|PXE SI BL|FZB|Slovenia|
|PXE SI PL|FVP|Slovenia|
|PXE RS BL|FVB|Serbia|
|PXE RS PL|FVP|Serbia|

|**Data Id**|**Name**|
|-|-|
|PXE.EL.HU.BL.F9B.FUT|Power Exchange Central Europe Hungary Baseload Power Futures|
|PXE.EL.HU.PL.F9P.FUT|Power Exchange Central Europe Hungary Peakload Power Futures|
|PXE.EL.CZ.PL.FXP.FUT|Power Exchange Central Europe Czech Peakload Power Futures|
|PXE.EL.CZ.BL.FXB.FUT|Power Exchange Central Europe Czech Baseload Power Futures|

### Expiry Calendar

Below set of expiry calendars are used in calculating rolling forward data. The expiry and rollover calendars remain same.

|**Contract**|**Expiry Calendar**|
|-|-|
|Baseload Month|RPXEELFBLM|
|Baseload Quarter|RPXEELFQ
|Baseload Year|RPXEELFY
|Peakload Month|RPXEELFPLM
|Peakload Quarter|RPXEELFQ
|Peakload Year|RPXEELFY

### Attributes

|**Name**|**Value**|
|-|-|
|Source|PXE|
|Source Name|Power Exchange Central Europe|
|Dataset|PXE_EL_FUT|
|Dataset Name|Power Exchange Central Europe Power Financial Futures|
|Dataset Type|Power Futures|
|Frequency|Business|
|Currency|EUR|
|Unit|MWH|
|Market|Power,Futures|
|Commodity|Power|
|Location|Czechia|
|Region|Europe|
|Quote Calendar|HEEXELF|

### Validation

Data is validated for missing data points using HEEXELF holiday calendar for expected absences.

### Licensing

This data requires agreement with PXE before it can be supplied.