---
slug: cloud-connect
title: Cloud Connect
authors: [chartley]
tags: [product, extension]
image: /img/blog/cloud-connect.png
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
      <img className={styles.product_screenshot} src="/img/blog/cloud-connect.png" />
  </div>
  <div className="column">
  <h4>Fusion AI</h4>
  <em>OpenDataDSL Launches Fusion AI: Specialized Intelligence Platform for Energy and Commodity Trading</em>
  <br/><br/>
  <p>Fusion AI brings expert intelligence to every aspect of energy and commodity trading companies.</p>
  </div>
</div>

<!-- truncate -->
<hr/>

OpenDataDSL today announces **Cloud Connect**, a new capability that delivers live, validated forward curves and timeseries data directly into the analytics platforms energy and commodity professionals already use - including Databricks, Snowflake, Apache Spark, Power BI, and Tableau - without manual exports, custom ETL pipelines, or stale data.

## The problem Cloud Connect solves

For energy and commodity trading firms, the gap between managed market data and the analytics environments where that data is actually used has long been a source of friction. Analysts download CSV exports that are outdated before the analysis completes. Data engineering teams maintain bespoke pipelines that duplicate data, add latency, and require ongoing maintenance. When a curve is corrected, that correction has to travel through multiple systems before it reaches the person who needs it.

Cloud Connect eliminates that gap entirely.

## How it works

Cloud Connect exposes OpenDataDSL platform data through the **Delta Sharing protocol** - an open standard developed under the Linux Foundation that enables secure, live data sharing across organisations and computing platforms, regardless of the tools each side uses.

When a curve build completes or a timeseries observation is validated, an OpenDataDSL automation immediately serialises the data to Apache Parquet format in memory and writes it directly to cloud storage - Azure Blob Storage, Azure Data Lake Storage Gen2, or Amazon S3 - with no intermediate files and no delay. A Delta Sharing server then exposes those files as queryable tables through a standard REST API.

Each recipient receives a small credential file containing a server endpoint URL and a unique bearer token. That file is the only thing needed to connect. In Databricks, uploading it through Catalog Explorer takes under a minute and immediately creates a Unity Catalog-backed catalog of all the curves and timeseries the recipient is licensed to access. From that point, they query with standard SQL - no proprietary connectors, no custom SDK, no infrastructure to manage.

## Optimised for energy market query patterns

Cloud Connect uses a hybrid landing and serving file layout designed specifically for how energy data arrives and how analysts query it.

Throughout the day, as individual curve builds complete, Parquet files are written to a landing zone - one file per curve, immediately available. At end of day, an automated consolidation process merges all landing files for a given curve date into a single Hive-partitioned serving file. Databricks and other query engines push date filters down to the storage layer, skipping irrelevant partitions entirely, so queries like "give me all curves for today" or "show me NBP settle history for Q1" read only the data they need.

Curve corrections are handled transparently. When a curve is restated, the relevant serving partition is overwritten and the next query automatically returns the corrected values - with no action required from the data consumer.

## Works with the tools you already use

Because Delta Sharing is an open protocol built on Apache Parquet, Cloud Connect works with a broad ecosystem of analytics tools:

- **Databricks** - native integration via Unity Catalog; queryable with standard SQL on AWS, Azure, and GCP
- **Snowflake** - access shared tables via the Apache Iceberg REST Catalog API
- **Azure Synapse Analytics** - load data into Spark pools using the Delta Sharing Spark connector
- **Apache Spark** - works with any Spark environment including Amazon EMR and Google Dataproc
- **Power BI** - import shared tables directly into Power BI Desktop and Power BI Service
- **Tableau** - via the Delta Sharing Tableau connector, available from Tableau Exchange (Tableau Desktop and Server 2024.1+)
- **Python / pandas** - the open-source `delta-sharing` library loads any shared table as a DataFrame in a single line of code
- **Microsoft Excel** - pull live curves and timeseries directly into worksheets via the Delta Sharing Excel connector

## Per-recipient access control

Each customer or team receives a unique bearer token scoped to their licensed data. Access to individual shares can be configured independently - one customer sees only their curves, another sees only theirs. Revoking access requires rotating a single token with no impact on other recipients. Every query is logged for a full audit trail.

## What this means for energy firms

The practical impact is straightforward: analysts get live, corrected data in the tools they already use, without waiting for exports or pipeline runs. Data engineering teams stop maintaining bespoke pipelines. When a curve build completes in OpenDataDSL, it is in Databricks within seconds.

For firms that provide data services to clients - whether that is curve delivery, risk analytics, or market data subscriptions - Cloud Connect provides a secure, governed channel to deliver that data directly into each client's analytics environment, with per-client access control and a complete audit trail.

## Availability

Cloud Connect is available now. To find out more or to discuss your specific requirements, [get in touch with the OpenDataDSL team](/contact) or [start a free trial](/POC).

---

*For a full overview of Cloud Connect capabilities and supported tools, visit the [Cloud Connect product page](/features/cloud-connect).*

<Demo />
