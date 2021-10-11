---
slug: /company/ENTSOE
tags:
  - entsoe
  - power
  - fundamentals
  - europe
---
ENTSOE
=========
The European Network of Transmission System Operators for Electricity

![](/img/data/entsoe.svg)


ENTSO-E, the European Network of Transmission System Operators for Electricity ([https://www.entsoe.eu/](https://www.entsoe.eu/)), represents 42 electricity transmission system operators (TSOs) from 35 countries across Europe. ENTSO-E was established and given legal mandates by the EU’s Third Legislative Package for the Internal Energy Market in 2009, which aims at further liberalizing the gas and electricity markets in the EU.

## The ENTSO-E Transparency Platform

In accordance with Regulation 543/2013, the ENTSO-E Transparency Platform was launched on 5 January 2015.

Central collection and publication of electricity generation, transportation and consumption data and information for the pan-European market.

ENTSO-E Transparency Platform is available in following link: [https://transparency.entsoe.eu/](https://transparency.entsoe.eu/)

## Information Published

The information published by ENTSO-E is collected from data providers such as TSOs, power exchanges or other qualified third parties. Information on the generation, load, transmission and balancing data which is specified in the Transparency Regulation is described in further detail in the  [‘Detailed Data Descriptions,’](https://www.entsoe.eu/fileadmin/user_upload/_library/resources/Transparency/02_MoP%20Ref02%20-%20DDD_V2R5.pdf) as referenced in the Manual of Procedures.

Example: Physical cross-border flows in Germany

## Datasets
import TlAct from './_ENTSOE_TL_ACT.md';
import TlFc from './_ENTSOE_TL_FC.md';

import GnGenfc from './_ENTSOE_GN_GENFC.md';
import GnGenunit from './_ENTSOE_GN_GENUNIT.md';

import EntsoeBlImbpr from './_ENTSOE_BL_IMBPR.md';
import EntsoeBlImbvol from './_ENTSOE_BL_IMBVOL.md';
import EntsoeBlCrsbrd from './_ENTSOE_BL_CRSBRD.md';

import EntsoeTrCapfx from './_ENTSOE_TR_CAPFC.md';
import EntsoeTrCrsbrd from './_ENTSOE_TR_CRSBRD_FLOW.md';

import OtCons from './_ENTSOE_OT_CONS.md';
import OtTrans from './_ENTSOE_OT_TRANS.md';
import OtOffShr from './_ENTSOE_OT_OFFSHR.md';
import OtGen from './_ENTSOE_OT_GEN.md';
import OtProd from './_ENTSOE_OT_PROD.md';

## Load
### ENTSOE_TL_FC
<details>
<summary>Total Load Forecast - Day Ahead</summary>
<TlFc />
</details>

### ENTSOE_TL_ACT
<details>
<summary>Total Load - Day Ahead/ Actual</summary>
<TlFc />
</details>


## Generation
### ENTSOE_GN_GENFC
<details>
<summary>Generation Forecast - Day Ahead</summary>
<GnGenfc />
</details>

### ENTSOE_GN_GENUNIT
<details>
<summary>Actual Generation per Generation Unit</summary>
<GnGenunit />
</details>

### ENTSOE_TL_ACT
<details>
<summary>Actual Generation per Production Type</summary>
<TlAct />
</details>

## Transmission
### ENTSOE_TR_CAPFC
<details>
<summary>Transmission - Transfer Capacities Forecast Day Ahead</summary>
<EntsoeTrCapfx />
</details>

### ENTSOE_TR_CRSBRD_FLOW
<details>
<summary>Transmission - Cross-Border Physical Flow Spot</summary>
<EntsoeTrCrsbrd />
</details>

## Balancing
### ENTSOE_BL_IMBPR
<details>
<summary>Balancing - Imbalance Prices Spot</summary>
<EntsoeBlImbpr />
</details>

### ENTSOE_BL_IMVOL
<details>
<summary>Balancing - Total Imbalance Volumes Spot</summary>
<EntsoeBlImbvol />
</details>

### ENTSOE_BL_CRSBRD
<details>
<summary>Balancing - Cross-Border Balancing Spot</summary>
<EntsoeBlCrsbrd />
</details>

## Outages

### ENTSOE_OT_CONS
<details>
<summary>Outages - Aggregated Unavailability of Consumption Units Spot</summary>
<OtCons />
</details>

### ENTSOE_OT_TRANS
<details>
<summary>Outages - Unavailability in Transmission Grid Spot</summary>
<OtTrans />
</details>

### ENTSOE_OT_OFFSHR
<details>
<summary>Outages - Unavailability of Offshore Grid Spot</summary>
<OtOffShr />
</details>

### ENTSOE_OT_GEN
<details>
<summary>Outages - Unavailability of Generation Units Spot</summary>
<OtGen />
</details>

### ENTSOE_OT_PROD
<details>
<summary>Outages - Aggregated Unavailability of Production Units Spot</summary>
<OtProd />
</details>