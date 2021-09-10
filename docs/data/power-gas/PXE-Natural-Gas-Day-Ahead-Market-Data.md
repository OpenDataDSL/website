PXE Natural Gas Day Ahead Market Data
=====================================================


### Overview

Power Exchange Central Europe (PXE) is the Prague-based centre of competence for the Central and Eastern European power markets. As part of EEX Group, PXE is committed to further developing products and services for the Czech, Slovak, Polish, Hungarian and Romanian market.

Trading in Czech gas started in December, 2013. In 2016, PXE became part of [EEX Group](http://www.eex-group.com/)

As of December 8, 2017 the gas spot reference price previously calculated by PXE replaced by the PEGAS European Gas Spot Index (EGSI). EGSI is determined by the Powernext. The natural gas with the place of delivery at CZ VTP is traded on the PEGAS platform under Powernext licence as of  December  8, 2017. EGSI is calculated for day-ahead and weekend contracts. It reflects the real market situation and may be used as a reference for pricing of the retail contracts. It is not a settlement price. 

### Supplier and Dataset

  

**Code**

**Name**

**Type**

Supplier

PXE

Power Exchange Central Europe

Exchange

Dataset

PXE\_EL\_DAM

Power Exchange Central Europe Natural Gas Day Ahead Market

Natural Gas Day Ahead

### Type

PXE Natural Day Ahead data is stored under the type: #NaturalGas

### Object

Example of an object belonging to PXE Natural Gas Futures. It contains attributes, data Id, profiles and a link to dataset.

![](/attachments/417136684/417202239.png)

### Data Id and name

Examples of data Id and name:

Data Id

Name

PXE.NG.CZ_VTP.EGSI.DA

Power Exchange Central Europe Czech Republic Virtual Trading Point European Gas Spot Index Relative Day 01

Profile

Profile Name

Profile Type

Frequency

Currency

Unit

OPEN

Open Price

Curve

Daily

EUR

MWH

HIGH

High Price

Curve

Daily

EUR

MWH

LOW

Low Price

Curve

Daily

EUR

MWH

CLOSE

Close Price

Curve

Daily

EUR

MWH

VOL

Volume Acc

Curve

Daily

Na

MWH

TRADE

Number of Trades

Curve

Daily

Na

Na

EDI

End of Day Index

Curve

Daily

Na

Na

VWAP

VWAP EGSI

Curve

Daily

EUR

MWH

### Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The PXE Gas Future prices are expressed in EUR (Euro) by the PXE exchange. The quantities, which the prices refer to, are expressed in MWh (Megawatt-Hour).

### Holiday Calendar

HEEXNGF (EEX Natural Gas Futures Holiday Calendar ) is used in building forward curve.

### Expiry Calendar

Below set of expiry calendars are used in calculating rolling forward data. The expiry and rollover calendars remain same.

**Contract**

**Expiry Calendar**

Day

REOD

Weekend

RWKD

### DST Handling

Daylight savings is not applicable as the data updates are daily frequency.

### Scheduling

End of Day**:** The file is retrieved between 23:00 and 23:55 UTC on daily.

### Derivations

PXE supply the absolute contract periods and OpenDataDSL creates forward curves using relative calculation from it. The expiry calendar from the PXE website is used to calculate rolling forward data.

### Attributes

Attributes with example values:

Name

 Description

Source*

PXE

Source Name*

Power Exchange Central Europe

Id*

PXE.NG.CZ\_VTP.PEGAS\_CEGH.EGSI.DA

Name*

Power Exchange Central Europe Czech European Gas Spot Index Relative Day 01

Description

Power Exchange Central Europe Czech European Gas Spot Index Relative Day 01

Dataset*

PXE\_NG\_DAM

Dataset Name*

Power Exchange Central Europe Natural Gas Day Ahead Market

Period*

D01

Period Description

Relative Day 01

Base

EUR

Base Name

Euro

Unit

MWH

Unit Name

Megawatt-Hour

Frequency

Business

Commodity*

Natural Gas

Location*

CZ VTP - Czech Republic Virtual Trading Point

Product

Natural Gas Day Ahead

### Licensing

This data requires agreement with OpenDataDSL before it can be supplied. Users contract directly with OpenDataDSL.
