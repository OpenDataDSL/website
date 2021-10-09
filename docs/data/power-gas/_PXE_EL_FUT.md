PXE_EL_FUT
=================================
PXE Power Futures

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

PXE\_EL\_FUT

Power Exchange Central Europe Power Financial Futures

Power Futures

### Type

PXE Power Futures data is stored under the type: #Electricity

### Object

Example of an object belonging to PXE Power Futures. It contains attributes, data Id, profiles and a link to dataset.

![](/attachments/416383015/416252092.png)

### Data Id and name

Examples of data Id and names:

Data Id

Name

PXE.EL.HU.BL.F9B.FUT

Power Exchange Central Europe Hungary Baseload Power Futures

PXE.EL.HU.PL.F9P.FUT

Power Exchange Central Europe Hungary Peakload Power Futures

PXE.EL.CZ.BL.FXB.FUT

Power Exchange Central Europe Czech Baseload Power Futures

PXE.EL.CZ.PL.FXP.FUT

Power Exchange Central Europe Czech Peakload Power Futures

PXE.EL.SK.BL.FYB.FUT

Power Exchange Central Europe Slovakia Baseload Power Futures

PXE.EL.SK.PL.FYP.FUT

Power Exchange Central Europe Slovakia Peakload Power Futures

PXE.EL.PL.BL.FPB.FUT

Power Exchange Central Europe Poland Baseload Power Futures

PXE.EL.PL.PL.FPP.FUT

Power Exchange Central Europe Poland Peakload Power Futures

PXE.EL.BG.BL.FKB.FUT

Power Exchange Central Europe Bulgaria Baseload Power Futures

PXE.EL.RO.BL.FHB.FUT

Power Exchange Central Europe Romania Baseload Power Futures

PXE.EL.RO.PL.FRP.FUT

Power Exchange Central Europe Romania Peakload Power Futures

PXE.EL.SI.BL.FZB.FUT

Power Exchange Central Europe Slovenia Baseload Power Futures

PXE.EL.SI.PL.FVP.FUT

Power Exchange Central Europe Slovenia Peakload Power Futures

PXE.EL.RS.BL.FVB.FUT

Power Exchange Central Europe Serbia Baseload Power Futures

PXE.EL.RS.PL.FVP.FUT

Power Exchange Central Europe Serbia Peakload Power Futures

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

EX_VOL

Exchange Volume MWh

Curve

Business

EUR

MWH

EX_CONTRACT

Exchange Traded Contracts

Curve

Business

EUR

MWH

TRADEREG_VOL

TradeReg Volume MWh

Curve

Business

EUR

MWH

TRADEREG_CONTRACT

TradeReg Traded Contracts

Curve

Business

EUR

MWH

### Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The PXE Power Future prices are expressed in EUR (Euro) by the PXE exchange. The quantities, which the prices refer to, are expressed in MWh (Megawatt-Hour).

### Holiday Calendar

Non Trading dates of PXE Power Futures is associated to HEEXEL ( EEX Power Futures Holiday) calendar.

The power derivatives operated by PXE are run on the EEX trading system hence HEEXELF is created based on non quoting days provided by the EEX exchange.

### Expiry Calendar

Below set of expiry calendars are used in calculating rolling forward data. The expiry and rollover calendars remain same.

**Contract**

**Expiry Calendar**

Baseload Month

RPXEELFBLM

Baseload Quarter

RPXEELFQ

Baseload Year

RPXEELFY

Peakload Month

RPXEELFPLM

Peakload Quarter

RPXEELFQ

Peakload Year

RPXEELFY

### DST Handling

Daylight savings is not applicable as the data updates are business frequency.

### Scheduling

End of Day**:** The file is retrieved between 08:00 and 09:00 UTC.

### Derivations

PXE supply the absolute contract periods and OpenDataDSL creates forward curves using relative calculation from it. The expiry calendar from the PXE website is used to calculate rolling forward data

### Attributes

Attributes with example values:

Name

Example content

Source

PXE

Source Name

Power Exchange Central Europe

Id

PXE.EL.HU.BL.F9B.FUT.CURVE

Name

Power Exchange Central Europe Hungary Baseload Power Futures Curve

Description

Power Exchange Central Europe Hungary Baseload Power Futures Curve

Dataset

PXE\_EL\_FUT

Dataset Name

Power Exchange Central Europe Power Financial Futures

Period

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

Commodity*

Power

Location

Hungary

Product

Baseload Power Futures

Settlement Type

Cash Delivery

### Licensing

This data requires agreement with OpenDataDSL before it can be supplied. Users contract directly with OpenDataDSL.
