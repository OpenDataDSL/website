OMIE Day Ahead Market Data
==========================================

### Overview

The Iberian Electricity Market (MIBEL) is a joint initiative of the Portuguese and Spanish government with a view to the construction of a regional electricity market. With MIBEL coming into force, every consumer in the Iberian Peninsula was able to obtain electricity, under free competition, from any producer or seller operating in both Portugal and Spain.

Thus, the MIBEL wholesale market currently comprises:

*   A spot market (OMEL), with a daily trading component (day-ahead market) and an intraday adjustment component (intraday market), in which electricity selling (production) and buying schedules are established for the day following the trade. OMI-Polo Español S.A. (OMIE) is regulated by an international agreement between Spain and Portugal and runs the spot power market in the Iberian Peninsula under the Spanish jurisdiction. OMI-Polo Español S.A. (OMIE) is the company responsible for managing the day-ahead and intraday spot electricity markets in Spain and Portugal. The firm also manages the billing and settlement for the energy purchased and sold in these markets.
    
*   A derivatives market (OMIP), where future electricity production and buying commitments are established.
    

### Supplier and Dataset

The supplier and dataset details of OMIP Power Futures are given below:

**Code**

**Name**

**Type**

Supplier

OMIE

OMI-Polo Spanish SA

Power Exchange

Dataset

OMIP\_EL\_DAM

OMI-Polo Spanish SA Power Day Ahead Market

Power Day Ahead

### Type

OMIP Power Futures data is stored under the type: #Electricity

### Object

Example of an object belonging to OMIP Power Day Ahead. It contains attributes, data Id, profiles and a link to dataset.

![](/attachments/416252056/414777489.png)

### Data Id and name

Examples of data Id and names:

Data Id

Name

OMIE.EL.ES.DA

OMI-Polo Spanish SA Spain Power Day Ahead Curve

OMIE.EL.PT.DA

OMI-Polo Spanish SA Portugal Power Day Ahead Curve

OMIE.EL.IBER.DA

OMI-Polo Spanish SA Iberian Market Power Day Ahead Curve

### Profiles

The table below outlines all possible profiles that may be provided by the vendor and the unit, currency associated with it.

Profile Id

Profile Name

Profile Type

Frequency

Timezone

Currency

Unit

PRICE

Marginal Price

Price Timeseries

Hourly

UTC

EUR

MWH

PURCHASE

Total Power Purchase

Numeric Timeseries

Hourly

UTC

Na

MWH

SALES

Total Power Sales

Numeric Timeseries

Hourly

UTC

Na

MWH

### Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The OMIE Power Day Ahead prices are expressed in EUR (Euro) by the OMIE exchange. The quantities, which the prices refer to, are expressed in MWH (Megawatt-Hour)

### Holiday Calendar

No holiday calendar is required as the data is hourly frequency.

### Expiry Calendar

REOD calendar is used to calculate relative contract of day ahead.

Day ahead hourly contract is valid only on trading day and the delivery happens the next day.

### Daylight Savings Treatment

The hourly power updates are provided by OMIE in CET. These are loaded to database in UTC.

During the change to summertime OMIE delivers 23hourly pricing and volume updates. These are adjusted to the correct UTC hours during the Summer time changeover.

During the change to Winter time OMIE delivers 25 hourly updates. These are adjusted to the correct UTC hours during the Winter time changeover.

### Scheduling

**End of Day:** The file is retrieved around 14:00CET with sufficient retries.

### Derivations

No derivation process is applicable

### Attributes

Attributes with example values:

Source*

OMIE

Source Name*

OMI-Polo Spanish SA

Id*

OMIE.EL.ES.DA

Name*

OMI-Polo Spanish SA Spain Power Day Ahead Curve

Description

OMI-Polo Spanish SA Spain Power Day Ahead Curve

Dataset*

OMIE\_EL\_DAM

Dataset Name*

OMI-Polo Spanish SA Power Day Ahead Market

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

Power

Location*

Spain

Product

Day Ahead

### Licensing

This data requires agreement with OpenDataDSL before it can be supplied. Users contract directly with OpenDataDSL.
