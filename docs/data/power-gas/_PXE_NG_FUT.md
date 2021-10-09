PXE_NG_FUT
=======================================
PXE Natural Gas Futures

### Overview

POWER EXCHANGE CENTRAL EUROPE (PXE) is the Prague-based centre of competence for the Central and Eastern European power markets. As part of EEX Group, PXE is committed to further developing products and services for the Czech, Slovak, Polish, Hungarian and Romanian market.

PXE was established on 8 January 2007 as Energetická burza Praha and, since then, offered services on the electricity markets, namely providing anonymous trading in and settlement of standardised power products.

In 2016, PXE became part of [EEX Grou](http://www.eex-group.com/)p, The power derivatives operated by PXE are run on the EEX trading system. Thus, the EEX trading participants are able to trade Czech, Hungarian, Slovakian, Romanian and Polish power futures alongside with contracts for 11 power markets in Central Western Europe.

### Supplier and Dataset

**Code**

**Name**

**Type**

Supplier

PXE

Power Exchange Central Europe

Exchange

Dataset

PXE\_NG\_FUT

Power Exchange Central Europe Natural Gas Futures

Natural Gas Futures

### Type

PXE Natural Futures data is stored under the type: #NaturalGas

### Object

Example of an object belonging to PXE Natural Gas Futures. It contains attributes, data Id, profiles and a link to dataset.

![](/attachments/417071106/417136649.png)

### Data Id and name

Examples of data Id and name:

Data Id

Name

PXE.NG.CZ.BL.G1B.FUT

Power Exchange Central Europe Czech Baseload Natural Gas Futures

### Profiles

The table below outlines all possible profiles that may be provided by the vendor and the unit, currency associated with it.

Profile

Profile Name

Type

Frequency

Currency

Unit

CONTRACT_VOL

Contract Volume

Curve

Business

EUR

MWH

OPEN

Open Price

Curve

Business

EUR

MWH

HIGH

High Price

Curve

Business

EUR

MWH

LOW

Low Price

Curve

Business

EUR

MWH

LAST

Last Price

Curve

Business

EUR

MWH

SETTLE

Settlement Price

Curve

Business

EUR

MWH

CHG

Change

Curve

Business

EUR

MWH

### Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The PXE Gas Future prices are expressed in EUR (Euro) by the PXE exchange. The quantities, which the prices refer to, are expressed in MWh (Megawatt-Hour).

### Holiday Calendar

Non Trading dates of PXE Gas Futures is associated to HEEXNGF ( EEX Natural Gas Futures Holiday) calendar.

The gas derivatives operated by PXE are run on the EEX trading system hence HEEXELF is created based on non quoting days provided by the EEX exchange.

### Expiry Calendar

Below set of expiry calendars are used in calculating rolling forward data. The expiry and rollover calendars remain same.

**Contract**

**Expiry Calendar**

Month

#RPXENGFM

Quarter

#RPXENGFQ

Season

#RPXENGFS

Year

#RPXENGFY

### DST Handling

Daylight savings is not applicable as the data updates are business frequency.

### Scheduling

End of Day**:** The file is retrieved between 08:00 and 09:00 UTC on business days.

### Derivations

PXE supply the absolute contract periods and OpenDataDSL creates forward curves using relative calculation from it. The expiry calendar from the PXE website is used to calculate rolling forward data.

### Attributes

Attributes with example values:

Name

Example content

Source

PXE

Source Name

Power Exchange Central Europe

Id

PXE.NG.CZ.BL.G1B.FUT.CURVE

Name

Power Exchange Central Europe Czech Natural Gas Futures Curve

Description

Power Exchange Central Europe Czech Natural Gas Futures Curve

Dataset

PXE\_NG\_FUT

Dataset Name

Power Exchange Central Europe Natural Gas Futures

Period*

M01

Period Description

Relative Month 01

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

Commodity

Natural Gas

Location

Czech Republic

Product

Baseload Natural Gas Futures

Settlement Type

Physical Delivery

### Licensing

This data requires agreement with OpenDataDSL before it can be supplied. Users contract directly with OpenDataDSL.
