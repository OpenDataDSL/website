---
title: Data Catalogue
---

import { Feature, Integration } from '/src/components/features'
import {Demo} from '/src/components/Forms.js';

<Feature title="Data Catalogue" slogan="The complete energy pricing data hub" jpg="/img/icons/catalogue.jpg" />

## The Data Acquisition Challenge
Energy and commodity trading firms typically maintain relationships with multiple data vendors—exchanges, brokers, price reporting agencies, and specialized providers. Each relationship requires:

* Separate contract negotiations and licensing agreements
* Unique integration work for different APIs and data formats
* Individual billing and subscription management
* Ongoing maintenance as vendors update their systems
* Duplicate efforts when multiple teams need the same data

This fragmented approach creates significant overhead, delays time-to-market for new trading strategies, and diverts IT resources from value-adding projects to repetitive integration work.

## One Catalogue, Global Coverage
The OpenDataDSL Data Catalogue provides comprehensive access to global energy and commodity pricing data through a single, unified interface. Our curated catalogue delivers verified, standardized market data from exchanges and providers worldwide—streamlining your data infrastructure and accelerating your operations.

### What's Included

<div className="container scroll-to-display-1">
	<h3>Energy Markets</h3>
	<div className="row">
		<Card title="Power" jpg="/img/icons/energy/power.svg" text="Day-ahead, intraday, and forward markets across European, US, and Asian power exchanges" />
		<Card title="Natural Gas" jpg="/img/icons/energy/gas.svg" text="Hub prices, pipeline data, LNG markets, storage levels" />
		<Card title="Oil & Products" jpg="/img/icons/energy/oil.svg" text="Crude benchmarks (Brent, WTI, Dubai), gasoline, diesel, jet fuel, heating oil" />
		<Card title="Coal" jpg="/img/icons/energy/coal.svg" text="API2, API4, Newcastle, Richards Bay, and regional thermal coal indices" />
		<Card title="Emissions" jpg="/img/icons/energy/emissions.svg" text="EU ETS, UK ETS, RGGI, carbon credit markets" />
	</div>
</div>

<div className="container scroll-to-display-2">
	<h3>Commodity Markets</h3>
	<div className="row">
		<Card title="Metals" jpg="/img/icons/energy/metals.jpg" text="Base metals, precious metals, steel" />
		<Card title="Agriculture" jpg="/img/icons/energy/agriculture.jpg" text="Grains, softs, livestock" />
		<Card title="Freight" jpg="/img/icons/energy/freight.jpg" text="Baltic indices, container rates" />
		<Card title="Weather" jpg="/img/icons/energy/weather.svg" text="Temperature data, degree days, renewable generation factors" />
	</div>
</div>

<div className="container scroll-to-display-3">
	<h3>Fundamental Data</h3>
	<div className="row">
		<Card title="Generation" jpg="/img/icons/energy/generation.svg" text="Plant-level output, renewable production" />
		<Card title="Consumption" jpg="/img/icons/energy/consumption.svg" text="Demand forecasts, actual consumption" />
		<Card title="Storage" jpg="/img/icons/energy/storage.svg" text="Battery storage, gas storage, oil inventories" />
		<Card title="Infrastructure" jpg="/img/icons/energy/infrastructure.svg" text="Pipeline flows, LNG terminals, interconnector capacity" />
	</div>
</div>

### Bring Your Own License (BYOL)

OpenDataDSL operates on a **Bring Your Own License model**, giving you complete flexibility in how you source market data:

* **Use Your Existing Subscriptions:** Already have licenses with ICE, CME, Refinitiv, or other providers? Connect them to OpenDataDSL and leverage our intelligent data management without changing your vendor relationships.
* **Add New Sources Seamlessly:** When you license data from a new provider, we handle the integration. You maintain the direct vendor relationship while benefiting from our standardized infrastructure.
* **No Vendor Lock-In:** Your data licensing strategy remains under your control. Switch providers, renegotiate contracts, or add new sources without platform constraints.
* **Cost Transparency:** You see exactly what you're paying each data vendor. No markup on data costs—you pay for the platform capabilities, not the data itself.

## Standardization & Quality
Raw vendor data arrives in countless formats—CSV files, XML feeds, proprietary APIs, Excel spreadsheets. The Data Catalogue eliminates this complexity:

* **Unified Data Model:** All data conforms to OpenDataDSL's standardized schema. A forward curve from ICE looks identical to one from CME in your applications—same structure, same query methods, same API calls.
* **Consistent Terminology:** Different vendors use different names for the same concept. Our catalogue maps vendor-specific terminology to consistent, industry-standard naming conventions.
* **Automated Quality Checks:** Every data point passes through validation:
  * Completeness checks (are all expected contracts present?)
  * Range validation (does this price fall within reasonable bounds?)
  * Consistency verification (do related instruments align logically?)
  * Structural integrity (does curve shape make market sense?)
* **Version History:** Complete audit trail of all data changes. Track when values were updated, what changed, and maintain historical snapshots for compliance and back-testing.

### Intelligent Metadata
Every dataset in the catalogue includes rich metadata that makes data discovery and usage effortless:

* **Market Context:** Exchange, commodity type, contract specifications, trading hours
* **Update Frequency:** How often data refreshes, typical publication times
* **Coverage Periods:** Historical depth, forward curve tenors
* **Units & Conventions:** Currency, volume units, price quotation methods
* **Data Provenance:** Source attribution, licensing terms, usage restrictions
* **Relationships:** Links to related datasets (spot vs. forward, cross-commodity spreads)

### Rapid Time-to-Market
* **For New Trading Strategies:** When your desk wants to trade a new commodity or geographic market, data availability no longer creates delays. If it's in the catalogue, you're analyzing it within minutes—not waiting weeks for procurement and integration.
* **For Analytical Projects:** Quantitative analysts explore new datasets without requesting IT support. Self-service access to hundreds of commodities means faster hypothesis testing and model development.
* **For System Integration:** Your risk systems, trading platforms, and analytical tools connect once to OpenDataDSL's API and immediately access the entire catalogue. Add new data sources without modifying downstream applications.

### Enterprise-Grade Reliability
* **High Availability:** Redundant infrastructure ensures continuous data access with 99.9% uptime SLA.
* **Performance:** Sub-second query response times even for complex timeseries aggregations across decades of historical data.
* **Scalability:** From single-user analysis to enterprise-wide deployment supporting hundreds of concurrent users.
* **Security:** Enterprise authentication, role-based access control, and compliance with data vendor licensing terms.

## Real-World Impact
* **Trading Desk Agility:** "We can now respond to new market opportunities within days instead of months. When management approved expansion into Asian LNG markets, we had pricing data integrated and models running before our competitors finished their data vendor RFPs." — Head of Gas Trading, European Energy Major
* **Reduced IT Burden:** "Eliminating custom integrations for every data vendor freed our development team to focus on proprietary analytics that differentiate our trading strategies." — CTO, Commodity Trading Firm
* **Improved Data Quality:** "Standardized validation caught data errors we'd been unknowingly trading on. The cost savings from avoiding bad trades paid for the platform in the first quarter." — Risk Manager, Power Trading Company

## Beyond Data Access
The Data Catalogue integrates seamlessly with OpenDataDSL's complete platform:

<div className="container">
	<div className="row">
		<Integration title="Smart Curves" jpg="/img/icons/curve.jpg" text="Builds forward curves automatically from catalogue data." link="/features/smart-curves" />
		<Integration title="AI Assistants" jpg="/img/icons/assistant.jpg" text="Answer questions about data availability and market coverage." link="/features/ai-assistants" />
		<Integration title="AI Agents" jpg="/img/icons/assistant.jpg" text="Automate workflows using catalogue data as inputs." link="/features/ai-agents" />
		<Integration title="ODSL Language" jpg="/img/icons/odsl.jpg" text="Query and transform catalogue data with domain-specific syntax." link="/features/odsl-code" />
		<Integration title="Custom Tools" jpg="/img/icons/tools.jpg" text="Leverage catalogue data in your proprietary applications." link="/features/custom-tools" />
	</div>
</div>


#### From Fragmentation to Foundation
The OpenDataDSL Data Catalogue transforms data acquisition from a repetitive operational burden into a strategic asset. Your team spends less time managing vendor relationships and integration complexity, and more time understanding markets and executing profitable trades.

With comprehensive coverage, intelligent standardization, and flexible BYOL licensing, the Data Catalogue provides the data foundation modern energy trading demands.

* Explore the catalogue - [Browse available datasets](https://doc.opendatadsl.com/docs/data/catalog)
* Questions about specific data? - [Contact our data specialists](mailto:sales@opendatadsl.com)
* Ready to connect your licenses? - [Schedule integration consultation](mailto:info@opendatadsl.com)

<Demo />