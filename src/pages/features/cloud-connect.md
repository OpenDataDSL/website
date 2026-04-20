---
title: Cloud Connect
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Cloud Connect" slogan="Your data, in your cloud, in your tools" jpg="/img/icons/cloud-connect.png" />

<section className="section">
	<h1>Access your OpenDataDSL platform data directly in Databricks, Spark, pandas, and any analytics tool you already use — without copying, exporting, or waiting.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Data Access Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>You invest heavily in curated, validated market data — forward curves, timeseries, settlement prices, and structured reference data. But getting that data into the analytics environments where you actually use it remains a persistent friction point.</p>
				<p>Common pain points you face every day:</p>
				<p><b>Manual Exports:</b> You download CSV or Excel files, load them into notebooks, and discover the data is already stale by the time the analysis runs. Every curve correction requires a fresh export and a rerun.</p>
				<p><b>Duplicate Data Pipelines:</b> Your data engineering team builds bespoke ETL pipelines to push OpenDataDSL data into your data lake or warehouse. These pipelines require ongoing maintenance, add latency, and create a second copy of data that can drift out of sync with the source.</p>
				<p><b>Credential and Security Sprawl:</b> Each downstream system needs its own authentication integration. Managing API keys, rotating credentials, and auditing access across multiple teams and tools becomes a governance burden.</p>
				<p><b>Platform Lock-in:</b> When you want to use Databricks, Apache Spark, Power BI, or Python notebooks, you are forced to work around the boundaries of a single platform rather than composing the best tools for each job.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>Cloud Connect exposes your OpenDataDSL platform data through the open <strong>Delta Sharing protocol</strong> — a Linux Foundation standard for secure, live data sharing across organisations and computing platforms.</p>
				<p>You connect once, receive a credential file, and from that moment query your forward curves and timeseries exactly as you would any other table in your data lakehouse — with no copying, no ETL pipelines, and no stale exports.</p>
				<ul>
					<li><b>Delta Sharing Server:</b> A standards-based sharing server exposes your OpenDataDSL data as queryable Parquet tables</li>
					<li><b>Live Data:</b> Your queries always reflect the latest validated curves and timeseries — corrections propagate automatically</li>
					<li><b>Hybrid Landing and Serving Layout:</b> Intraday curve arrivals land individually; end-of-day consolidation creates optimised partitioned serving files for fast analytical queries</li>
					<li><b>Multi-Cloud Storage:</b> Parquet files are written to Azure Blob Storage, Azure Data Lake Storage Gen2, or Amazon S3 — wherever your Databricks workspace is deployed</li>
					<li><b>Your Own Credential:</b> You receive a unique bearer token scoped to your licensed data, enabling secure independent access</li>
					<li><b>Open Protocol:</b> Any client that implements Delta Sharing — Databricks, Apache Spark, pandas, Power BI, Tableau — connects without custom connectors or proprietary SDKs</li>
				</ul>
				<p>Cloud Connect makes OpenDataDSL a first-class data source in your analytics ecosystem, with zero friction for you and your data engineering team.</p>
				<h4>Cloud Connect: Live Platform Data, Anywhere You Work</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Eliminate data export friction and access live, validated energy market data directly in the analytics tools you already rely on.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Live Data Without ETL Pipelines</h4>
				<h5>Query the source, not a copy.</h5>
				<p>Every query you run returns the current state of your OpenDataDSL data — the latest validated curves, the most recent timeseries values, corrections reflected in real time. You have no secondary pipeline to maintain, no lag between a curve correction and your downstream visibility, and no second data store that can drift out of sync with the source of truth.</p>
			</div>
			<div className="orange_item">
				<h4>Native Databricks Integration</h4>
				<h5>Works exactly like any other Unity Catalog table.</h5>
				<p>You import a credential file once through Catalog Explorer and immediately have a Unity Catalog-backed catalog of forward curves and timeseries. From that point you query with standard SQL, apply your own Unity Catalog access controls, and use the data in notebooks, jobs, and dashboards — without any additional setup or infrastructure to manage.</p>
			</div>
			<div className="orange_item">
				<h4>Optimised for Your Query Patterns</h4>
				<h5>Hive-partitioned by ondate for fast partition pruning.</h5>
				<p>Data is structured so that Databricks pushes your date filters down to the storage layer, skipping irrelevant partitions entirely. The queries you run most often — today's full curve snapshot, a single curve across a date range — read only the data they need, giving you fast results without waiting for full table scans.</p>
			</div>
			<div className="orange_item">
				<h4>Access Scoped to Your Licensed Data</h4>
				<h5>Your credential, your data, independently controlled.</h5>
				<p>You receive a unique bearer token embedded in your credential file, scoped to the specific shares you are licensed to access. Your access is independent of other recipients — changes to one organisation's credentials have no impact on yours. Full audit trails are maintained for every query you run.</p>
			</div>
			<div className="orange_item">
				<h4>Works Wherever Your Infrastructure Lives</h4>
				<h5>Any platform that speaks Delta Sharing connects instantly.</h5>
				<p>Delta Sharing is an open Linux Foundation protocol. Whether your Databricks workspace runs on Azure, AWS, or GCP, your data is available from the same credential file. Any client that implements the protocol — Databricks, Apache Spark, the Python delta-sharing library, Power BI, Tableau — connects without custom connectors or changes to your existing toolchain.</p>
			</div>
			<div className="orange_item">
				<h4>Always Current, Automatically</h4>
				<h5>New data is available as soon as it is validated.</h5>
				<p>You never need to trigger a refresh or wait for a scheduled batch job. When a curve build completes or a timeseries is updated on the OpenDataDSL platform, the data becomes available to your queries automatically. Corrections propagate without you needing to take any action.</p>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>What You Can Access</h2>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Forward Curves</h4>
				<p>Query your validated forward curves directly from your analytics environment:</p>
				<ul>
					<li><strong>Full Curve Snapshots:</strong> All tenors for a given ondate available as a single queryable partition</li>
					<li><strong>Curve History:</strong> Date ranges of curve snapshots queryable with standard SQL date predicates</li>
					<li><strong>Multi-Curve Partitions:</strong> All curves for an ondate consolidated into one optimised file — query across curves with a single SQL filter</li>
					<li><strong>Intraday Availability:</strong> Individual curves become available as each build completes throughout the day</li>
					<li><strong>Transparent Corrections:</strong> When a curve is restated, your next query automatically returns the corrected values</li>
				</ul>
			</div>
			<div className="blue_item">
				<h4>Timeseries</h4>
				<p>Access your validated timeseries data from any tool in your analytics stack:</p>
				<ul>
					<li><strong>Daily and Intraday:</strong> Any calendar type — daily, business day, hourly block, and custom frequencies</li>
					<li><strong>Multi-Series Tables:</strong> Multiple timeseries in a single table — filter to the series you need with a standard SQL predicate</li>
					<li><strong>Efficient Range Queries:</strong> Filter by date range and only the relevant partitions are read — no full table scans</li>
					<li><strong>Units and Currency:</strong> Every row carries currency and unit metadata so you can handle conversions in your own pipelines</li>
					<li><strong>Always Up to Date:</strong> New observations become available automatically as soon as they are validated</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>Works With the Tools You Already Use</h2>
		<p>Cloud Connect uses the open Delta Sharing protocol, which means your data is accessible from any platform that can read Parquet files or implement the Delta Sharing REST API. Whether your team works in a data lakehouse, a BI tool, or a Python notebook, you connect with the same credential file.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Databricks</h4>
				<p>The native home of Delta Sharing. Upload your credential file once through Catalog Explorer and your data appears as a Unity Catalog-backed catalog — queryable with standard SQL, usable in notebooks and jobs, and governed with Unity Catalog access controls. Works on Databricks on AWS, Azure, and GCP.</p>
			</div>
			<div className="blue_item">
				<h4>Apache Spark</h4>
				<p>Use the open-source Delta Sharing Spark connector to load shared tables as Spark DataFrames in any Spark environment — including Azure Synapse Analytics Spark pools, Amazon EMR, and Google Dataproc. Query with Spark SQL or the DataFrame API exactly as you would any other table.</p>
			</div>
			<div className="blue_item">
				<h4>Snowflake</h4>
				<p>Snowflake supports reading Delta Sharing tables via the Apache Iceberg REST Catalog API. Use your credential file to generate a SQL command that registers the shared tables in your Snowflake account, then query them like any other external table — with no data movement.</p>
			</div>
			<div className="blue_item">
				<h4>Azure Synapse Analytics</h4>
				<p>Load shared data into Azure Synapse Spark pools using either the Delta Sharing Spark connector or the Python delta-sharing library. Once loaded as a Spark DataFrame, data can be written to Synapse dedicated pools or queried directly through PySpark and Spark SQL notebooks.</p>
			</div>
			<div className="blue_item">
				<h4>Power BI</h4>
				<p>The Delta Sharing Power BI connector lets you import shared tables directly into Power BI Desktop and Power BI Service. Point the connector at your credential file and browse available tables — no gateway, no staging database, and no scheduled refresh pipelines to maintain.</p>
			</div>
			<div className="blue_item">
				<h4>Tableau</h4>
				<p>The Delta Sharing Tableau connector — available from Tableau Exchange — connects Tableau Desktop and Tableau Server 2024.1 and above to your shared data. Upload your credential file, browse available tables, and build visualisations directly from live OpenDataDSL forward curve and timeseries data.</p>
			</div>
			<div className="blue_item">
				<h4>Python (pandas)</h4>
				<p>The open-source <code>delta-sharing</code> Python library lets you load any shared table as a pandas DataFrame with a single line of code. No Spark cluster required — ideal for data scientists working in local notebooks, Jupyter environments, or lightweight Python scripts.</p>
			</div>
			<div className="blue_item">
				<h4>Microsoft Excel</h4>
				<p>The Delta Sharing Excel connector allows you to pull shared data directly into Excel worksheets. Analysts who work primarily in spreadsheets can access the same live, validated forward curves and timeseries that power your Databricks and Spark workflows — without any additional tools.</p>
			</div>
		</div>
		<p style={{marginTop: "1.5rem"}}>Any other tool that can read Apache Parquet files from cloud storage — including AWS Athena, Google BigQuery, Trino, and DuckDB — can also access your shared data. If your tool supports the Delta Sharing REST protocol directly, connection is immediate. For tools that do not, the Python library or Spark connector provides a straightforward bridge.</p>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How It Works</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Behind the Scenes</h3>
				<p>When a curve build completes or a timeseries is updated on the OpenDataDSL platform, an automation immediately serialises the data to Parquet format and writes it to cloud storage — Azure Blob Storage, ADLS Gen2, or Amazon S3. No intermediate files are created and nothing is held in a queue.</p>
				<p>At end of day, a consolidation process merges all the individual curve files for each date into a single Hive-partitioned serving file, structured so that your date and curve ID filters are pushed down to the storage layer. The Delta Sharing server then exposes these files as queryable tables through a standard REST API.</p>
			</div>
			<div className="story_text">
				<h3>What You Do</h3>
				<p>You receive a small credential file containing the server endpoint URL and your unique bearer token. In your Databricks workspace, you upload this file through Catalog Explorer once — a process that takes under a minute. Databricks creates a Unity Catalog-backed catalog from the share, and from that moment your data is queryable exactly like any other table in your workspace.</p>
				<p>If your workspace does not use Unity Catalog, the open-source <code>delta-sharing</code> Python library gives you the same access from any notebook or Python environment. There are no proprietary connectors to install, no custom SDK to learn, and no infrastructure to manage on your side.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>Ready to Access Your Platform Data in Your Analytics Environment?</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Join energy and commodity professionals who are already using OpenDataDSL Cloud Connect to query live, validated market data directly in Databricks and beyond.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#3b82f6", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/data-management" text="Data Management" />
	</div>
</section>

<Demo />
