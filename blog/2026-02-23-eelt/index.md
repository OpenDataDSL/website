---
slug: eelt
title: How to load Energy Data
authors: [chartley]
image: /img/blog/eelt.png
tags: [platform, odsl]
---
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
      <img src="/img/blog/eelt.png" />
  </div>
  <div className="column">
    <h4>The data integration pattern</h4>
    <p>The ETL vs ELT debate has its merits, but for those of us in energy and commodity markets, it misses something fundamental. Both patterns treat transformation as a monolithic step, when in reality there are two very different kinds of work: enrichment and transformation. They are not the same thing, and conflating them creates real problems.</p>
    <p>That's why we think the energy industry needs its own pattern: <strong>EELT — Extract, Enrich, Load, Transform.</strong></p>
  </div>
</div>

<!--truncate-->

### Why ETL and ELT Fall Short for Energy Data

Raw energy market data is notoriously context-dependent. A price of 45.20 means almost nothing without knowing whether it's in £/MWh or €/MWh, whether it covers a peak or baseload delivery, whether the delivery period is Q1-26 under a UK or European calendar convention, and which commodity it relates to. Without this context, the data isn't just incomplete — it's dangerous. Wrong unit assumptions, misaligned delivery periods, or incorrect calendar conventions can propagate silently through analytics and lead to costly errors in trading, settlements, or regulatory reporting.

Traditional ETL tries to solve this inside the transformation step, but that mixes domain-specific enrichment logic with analytical transformation logic, making pipelines brittle and hard to maintain. ELT loads raw data first and transforms later, which is great for flexibility, but means your analytical layer is constantly having to reconstruct contextual meaning that should have been resolved earlier.

Neither pattern explicitly acknowledges that in energy markets, there is a **critical intermediate step** between extracting data and making it analytically useful — and that step is enrichment.

---

### What is EELT?

**Extract → Enrich → Load → Transform**

<img src="/img/blog/eelt.png" />


**Each step has a distinct responsibility:**

**Extract** pulls raw data from source systems - market data providers, broker platforms, ETRM systems, exchange feeds, weather services, or internal trading systems. At this stage the data is in whatever format the source provides.

**Enrich** augments the raw data with energy industry metadata before it enters your platform. This is the domain knowledge layer. Enrichment resolves and attaches:

- **Delivery periods** — mapping date ranges to standardised period codes (Q1-26, Sum-26, Cal-27, WD, Weekend, etc.) according to market conventions
- **Trading calendars** — attaching the correct holiday and working day calendars for each market and commodity
- **Units of measure** — normalising across MWh, GWh, MMBtu, therms, barrels, and other commodity-specific units
- **Currencies** — standardising currency codes and linking to FX reference data
- **Commodity hierarchies** — classifying data within your product taxonomy (power, gas, LNG, emissions, renewables)
- **Market and location codes** — resolving hub, zone, or delivery point identifiers to canonical references

Critically, enrichment does **not** change the source values. It decorates them with the context needed to make them interpretable. Think of it as attaching a universally understood label to every data point before it enters your platform.

**Load** brings the now-enriched, contextually complete data into your core platform or data store. Because the enrichment step has already resolved domain ambiguities, what gets loaded is clean, consistent, and semantically meaningful.

**Transform** operates on enriched data to produce analytical outputs - bootstrapping forward curves, calculating spreads and basis, generating REMIT reports, running settlements, producing risk metrics, or feeding trading dashboards. Because the enrichment layer guarantees consistent metadata, transformations can be written cleanly against well-defined concepts rather than having to defensively handle unit variations, calendar edge cases, or period ambiguities.

---

### Enrichment vs Transformation: Why the Distinction Matters

It's worth being precise about why enrichment and transformation are genuinely different operations, not just sub-steps of the same thing.

**Enrichment adds meaning without changing values.** A gas price of 85.40 p/th remains 85.40 p/th — enrichment attaches the delivery period, calendar, unit classification, and commodity context. The source value is preserved; the contextual wrapper around it is constructed.

**Transformation derives new values or new shapes.** A forward curve is bootstrapped from enriched market quotes. A spread is calculated between two enriched price series. A REMIT report is generated from enriched trade records. These operations produce outputs that didn't exist in the source data.

Keeping these responsibilities separate makes your pipelines easier to maintain, test, and audit. When a new market convention needs to be supported, you update the enrichment layer. When a new analytical product is needed, you update the transformation layer. They evolve independently.

---

### The Enrichment Layer as Competitive Moat

Here's the most important implication of the EELT pattern: **the enrichment layer is where domain expertise creates durable competitive advantage**.

A generic data engineering team can build ETL or ELT pipelines. They can connect to APIs, move data between systems, and write SQL transformations. What they cannot easily replicate is the deep energy market knowledge required to correctly resolve delivery period conventions across different markets, apply the right holiday calendars for each commodity, normalise units consistently across a global commodity portfolio, or flag incoming data that violates expected domain rules.

Getting enrichment wrong doesn't just produce bad data, it produces data that *looks* right but isn't, which is arguably worse. A forward curve bootstrapped from data with an incorrect delivery period assignment will price incorrectly. A REMIT report generated from trades with wrong calendar assumptions may be non-compliant. The enrichment layer is where energy domain knowledge is operationalised, and it's the step that generic tools and platforms consistently underestimate or skip entirely.

---

### EELT in Practice with OpenDataDSL and Fusion

At OpenDataDSL, the EELT pattern is embedded in how our platform handles commodity data. Our enrichment layer draws on comprehensive reference data, delivery period definitions, market calendars, unit conversion libraries, and commodity taxonomies, that has been built and refined through years of working with energy trading organisations.

Fusion, our AI platform for energy and commodity markets, extends this further. Fusion's domain-specific assistants understand energy market concepts natively, which means they can participate intelligently in the enrichment process, validating incoming data against expected conventions, flagging anomalies, suggesting corrections, and helping teams maintain the quality of their enrichment rules as markets evolve.

The result is that by the time data reaches your analysts, traders, or risk managers, it is already contextually complete. Transformations and analytics can focus on generating insight rather than defensive data cleaning.

---

### Conclusion

ETL and ELT are useful patterns, but they were designed for a generic world. Energy and commodity markets are not generic. The domain-specific context that makes data meaningful:

**delivery periods, calendars, units, currencies, commodity hierarchies**

needs to be resolved as a deliberate, first-class step in your data pipeline, not buried inside a monolithic transformation layer.

EELT gives that step the recognition it deserves. Extract your data, Enrich it with energy domain knowledge, Load it into your platform in a semantically complete form, and Transform it into the analytical outputs your business needs.

##### It's not just a better pattern for energy data. It's the correct one.

---

*OpenDataDSL provides a commodity data platform and Fusion AI assistant suite purpose-built for energy and commodity trading organisations. To learn more about how we handle data enrichment and integration*

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


