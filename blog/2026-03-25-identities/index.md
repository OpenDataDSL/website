---
slug: identities
title: SMART Identities
authors: [chartley]
image: /img/blog/identities.png
tags: [platform, odsl]
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
      <img className={styles.product_screenshot} src="/img/blog/identities.png" />
  </div>
  <div className="column">
    <h4>Identities Are the Foundation of Smart Data Management</h4>
    <p>The way your organisation identifies and connects data assets is either your greatest competitive advantage or your biggest hidden liability. <strong>With OpenDataDSL, it's the former.</strong></p>
  </div>
</div>

<!--truncate-->

---

## The Identity Problem Nobody Talks About


Every energy trading and risk management (ETRM) system, every data vendor feed, every internal spreadsheet and legacy database shares one thing in common: they all have their own way of identifying the same underlying thing.

A natural gas hub. A counterparty. A forward curve. A pricing benchmark.

In one system, it's `TTF_DA`. In another, it's `NL-TTF-D`. Your ETRM calls it `GAS_NL_TTF`. Your risk team's spreadsheet uses something else entirely.

<img className={styles.product_screenshot} src="/img/blog/identities1.png" />


This is the identity problem — and it silently costs trading organisations millions in reconciliation time, data errors, delayed decisions, and missed opportunities. Most platforms paper over it. OpenDataDSL solves it.

---

#### Identities in OpenDataDSL: A Single Source of Truth

OpenDataDSL treats identities as first-class citizens of your data architecture. Every object in OpenDataDSL, whether it's a commodity curve, a counterparty, a location, or a contract, carries a persistent, canonical identity that travels with it across every system, every integration, and every workflow.

> **This isn't just a naming convention. It's a foundational design principle.**

With OpenDataDSL, your team can:

* **Define master identities** for every data entity, owned and governed centrally
* **Map external identifiers** from any source — vendor codes, ETRM internal IDs, exchange symbology — directly to your canonical identity
* **Resolve conflicts automatically** when the same entity arrives from multiple sources with different labels
* **Audit every identity relationship** with full lineage, so you always know where a data point came from and what it maps to

> **The result? Your data speaks one language — everywhere.**

---

## Seamless ETRM Integration Starts with Identities

ETRMs are the operational heartbeat of an energy trading business. Brady, Aspect, Openlink, CTRM, Triple Point - each has its own internal data model, its own symbology, its own quirks. Integrating clean, reliable market data into these systems has historically been painful, brittle, and expensive.

OpenDataDSL changes this entirely.

Because identities in OpenDataDSL are explicit and mappable, integrating with your ETRM is not a project - it's a configuration. You define the mapping between OpenDataDSL's canonical identities and your ETRM's internal codes once, and from that point forward, data flows cleanly, consistently, and automatically.

**What this means in practice:**

- Forward curves land in your ETRM already tagged with the correct internal instrument codes - no manual remapping
- Market data updates trigger in real time, with identity-resolved payloads ready for immediate consumption
- Positions and valuations reference the same underlying data objects as your risk models, eliminating reconciliation gaps
- New instruments and curves can be onboarded centrally in OpenDataDSL and propagated to your ETRM without IT intervention

Whether you're pushing end-of-day settlement prices, intraday volatility surfaces, or reference data updates, OpenDataDSL's identity layer ensures your ETRM always receives data it can use, correctly identified, correctly formatted, every time.

---

<img className={styles.product_screenshot} src="/img/blog/identities2.png" />

---

If your organisation is currently relying on a legacy data management platform - whether that's a monolithic vendor solution, a collection of in-house scripts, or an ageing market data system - you already know the risks: vendor lock-in, spiralling maintenance costs, poor integration support, and data quality you can't fully trust.

Migration away from these systems is often the right decision. The fear, however, is always the same: *what happens to all our existing mappings, our historical data, our workflows?*

OpenDataDSL's identity framework is specifically designed to make migration safe, incremental, and low-risk.

### How It Works

**Step 1 — Import your existing identifiers.** OpenDataDSL ingests your current identifier schemes — whatever they are — and registers them as external aliases against OpenDataDSL's canonical identity model. Your legacy codes don't disappear; they're preserved and mapped.

**Step 2 — Run in parallel.** During your migration window, OpenDataDSL can serve data using both your legacy identifiers and the new canonical ones. Your downstream systems — including your ETRM — can be migrated one at a time, at your pace, without a big-bang cutover.

**Step 3 — Cut over cleanly.** Once your consumers are updated, the legacy aliases are retired. You're left with a clean, governed, future-proof identity model — and a complete audit trail of how you got there.

This approach eliminates the two biggest risks of any data platform migration: data loss and operational disruption. Your historical curves, reference data, and time series are all preserved, re-identified, and immediately available.

---

## The Commercial Case Is Clear

The identity layer in OpenDataDSL isn't just a technical feature - it's a direct driver of commercial value.

**Reduced operational cost.** Fewer manual reconciliation tasks. Less time spent chasing data discrepancies between systems. Smaller support burden on your IT and quant teams.

**Faster time to value.** New data sources, new instruments, and new ETRM integrations go live in days, not months.

**Lower vendor risk.** Because OpenDataDSL owns the identity layer, you're no longer dependent on any single vendor's symbology or data model. You can switch data suppliers, add new feeds, or migrate downstream systems without rebuilding your data architecture from scratch.

**Better decisions.** When every system in your organisation is working from the same, correctly identified data, your traders, risk managers, and analysts can trust what they see — and act on it with confidence.

---

## Ready to Take Control of Your Data Identities?

OpenDataDSL gives energy and commodities organisations the identity infrastructure they need to integrate with any ETRM, migrate from any legacy platform, and build a data architecture that scales with their business.

If you're currently managing data across multiple systems and wondering why reconciliation is still a weekly headache - it's time to talk.

**[Get in touch with the OpenDataDSL team today](https://outlook.office.com/bookwithme/user/b65847a3c74e442fa7163f549db68251@opendatadsl.com?anonymous&ismsaljsauthenabled&ep=plink)** and see how our identity framework can transform the way your organisation manages, integrates, and trusts its data.

---

*OpenDataDSL is a modern, cloud-native data management platform built for energy and commodities markets. From market data ingestion to ETRM integration, OpenDataDSL gives trading organisations the control, visibility, and flexibility they need to compete.*

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


