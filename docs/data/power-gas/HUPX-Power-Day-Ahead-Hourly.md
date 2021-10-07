HUPX Power Day Ahead Hourly
===========================================

### Supplier and Dataset

**Code**

**Name**

**Type**

Supplier

HUPX

Hungarian Power Exchange

Power Exchange

Dataset

HUPX\_EL\_DAM

Hungarian Power Exchange Power Day Ahead Market

Power Day Ahead

### Type

HUPX Power Day Ahead hourly data is stored under the type: #Electricity

### Object

Example of baseload object belonging to HUPX Power Day Ahead Hourly. It contains attributes, data Id, profiles and a link to dataset.

![](/attachments/419397633/418742446.png)

### Data Id and name

Examples of data Id and names:

Data Id

Name

HUPX.EL.HU.HOURLY.DA

Hungarian Power Exchange Hourly Day Ahead Curve

HUPX.EL.HU.HOURLY.TS

Hungarian Power Exchange Hourly Day Ahead Timeseries

### Profiles

The table below outlines all possible profiles that may be provided by the vendor and the unit, currency associated with it.

Profile Name

Profile Type

Frequency

Timezone

Currency

Unit

PRICE

Price

Curve & Price Timeseries

Hourly

UTC

EUR

MWH

VOL

Volume

Curve & Price Timeseries

Hourly

UTC

Na

MWH

### Unit of measure

The content of the units and currency is based on the information provided by the vendor.

The HUPX Power Day Ahead prices are expressed in EUR (Euro) by the HUPX exchange. The quantities, which the prices refer to, are expressed in MWH (Megawatt-Hour)

### Holiday Calendar

No holiday calendar is required as the data is hourly frequency.

### Expiry Calendar

REOD calendar is used to calculate relative contract of day ahead on hourly contract.

### Daylight Savings Treatment

The hourly power updates are provided by HUPX in CET. These are loaded to database in UTC.

During the change to summertime HUPX delivers 23hourly pricing and volume updates. These are adjusted to the correct UTC hours during the Summer time changeover.

During the change to Winter time HUPX delivers 25 hourly updates. These are adjusted to the correct UTC hours during the Winter time changeover.

### Scheduling

End of Day:  The file is retrieved around 14:00CET with sufficient retries.

### Derivations

HUPX supply the absolute contract periods and OpenDataDSL creates forward curves using relative calculation from it.

### Attributes

Attributes with example values:

Name

 Description

Source

HUPX

Source Name

Hungarian Power Exchange

Id

HUPX.EL.HU.HOURLY.DA

Name

Hungarian Power Exchange Hourly Day Ahead Curve

Description

Hungarian Power Exchange Hourly Day Ahead Curve

Dataset

HUPX\_EL\_DAM

Dataset Name

Hungarian Power Exchange Power Day Ahead Market

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

Commodity

Power

Location*

Hungary

Product

Day Ahead Hourly

### Licensing

This data requires agreement with HUPX before it can be supplied.
