---
title: Integration
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Integration" slogan="Every curve, every system, every morning, with proof" />

<section className="section">
	<h1>Send your curves and timeseries to your ETRM, risk engine and data lake on a schedule, in the format and with the codes each system expects, and know every day what arrived.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Integration Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Your curves and timeseries rarely stop at the data platform. The ETRM needs the morning forward curves, the risk engine revalues the books on them, and the data lake keeps everything for analysis. Each system wants:</p>
				<ul>
					<li>Its own format, from marks APIs to CSV files and messages</li>
					<li>Its own codes for every curve and timeseries</li>
					<li>Its own timing, daily, monthly or as quarter hours</li>
					<li>Its own credentials, kept somewhere safe</li>
				</ul>
				<p>Usually that means a script per system, written by whoever was available, and nobody knows a curve did not arrive until a trader asks why the book looks wrong.</p>
				<p>Worse, a bad price goes straight into the revaluation, and a vendor correction published at lunchtime never reaches the ETRM at all.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>The Integration extension sends <b>groups</b> of curves and timeseries to each downstream <b>system</b> on a schedule, with the codes and settings that system needs, and reports every day on what reached it.</p>
				<p>Use a ready-made plug-in such as Molecule, or set up a custom system with your own ODSL. Fusion AI can design one with you from a description.</p>
				<p>Turn on the validation gate and only data that has passed its checks is sent. Turn on corrections and vendor revisions are sent again automatically.</p>
				<h4>Integration: The Right Data, in Every System, With Proof</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Replace one-off export scripts with one place to see, change and prove every delivery to every system.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Ready-Made Plug-ins</h4>
				<h5>Install a system in minutes.</h5>
				<p>Plug-ins for the Molecule ETRM, Azure Blob Storage, Azure Data Lake, Azure Files, Azure Event Grid, message queues, webhooks and Power BI streaming datasets, each with the settings and secrets that system needs.</p>
			</div>
			<div className="orange_item">
				<h4>Any System, Your Code</h4>
				<h5>Custom systems for everything else.</h5>
				<p>Set up a system with no plug-in, such as your own risk engine or lakehouse, with its own codes, settings, secrets and ODSL. Describe it to Fusion AI and it asks what it needs and writes the code for you to check.</p>
			</div>
			<div className="orange_item">
				<h4>A Daily Report With Proof</h4>
				<h5>Sent against expected, every day.</h5>
				<p>One report per system per day, with a matrix such as location by commodity showing the number sent against the number expected. Systems can confirm what they loaded, so you know it arrived, not just that it left.</p>
			</div>
			<div className="orange_item">
				<h4>Only Validated Data Goes Out</h4>
				<h5>The validation gate.</h5>
				<p>A group with the gate on only sends data that has passed its checks in the Validation extension. Anything else is held back, and the report and the alert say why.</p>
			</div>
			<div className="orange_item">
				<h4>Corrections Sent Automatically</h4>
				<h5>Vendor revisions reach every system.</h5>
				<p>When a vendor republishes a settlement price or revises a capture price, the items that value feeds are sent again for every date it is in, marked as a correction.</p>
			</div>
			<div className="orange_item">
				<h4>Told When It Matters</h4>
				<h5>Alerts and a cutoff time.</h5>
				<p>Raise an alert when an item fails, has no data or is held back, and set a cutoff: anything still not done at that time raises an alert, so nobody has to check the report every morning.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How Integration Works</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Set It Up</h3>
				<p><b>Systems:</b> install a plug-in, or create a custom system on the Integrations screen.</p>
				<p><b>Secrets:</b> the user names and API keys a system needs are kept in the platform's secret store, never on the screen or in the code.</p>
				<p><b>Groups:</b> attach a group of curves and timeseries to the system, with that system's settings for it.</p>
				<p><b>Codes and properties:</b> give each item the code the system knows it by, such as the Molecule product <code>M.TTF.F</code>, and the properties the report counts by.</p>
				<p><b>Schedule:</b> each group runs on its own schedule, such as every weekday at 08:00.</p>
			</div>
			<div className="story_text">
				<h3>Every Run</h3>
				<p>Each scheduled run looks after itself:</p>
				<p><b>The right date:</b> the run works out the date to send and reads each item for it.</p>
				<p><b>Checked first:</b> with the gate on, items that have not passed validation are held back.</p>
				<p><b>Sent in the system's format:</b> each item is handed to the system's ODSL, which turns it into the format and codes the system needs and sends it.</p>
				<p><b>Recorded:</b> every group's run is merged into the system's daily report, which can be emailed and is stored for every date.</p>
				<p><b>Confirmed:</b> systems that report back mark each item complete, or failed with a reason.</p>
			</div>
		</div>
		<div className="feature-figure">
			<div className="browser-frame">
				<div className="browser-frame__bar"><span /><span /><span /></div>
				<img src="/img/product/integration-detail.png" alt="The Molecule daily report: items sent, failed and missing, and a matrix of location by commodity" />
			</div>
			<p className="feature-caption">The daily report for Molecule: what was sent, failed or missing, by location and commodity.</p>
		</div>
	</div>
</section>

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>Real-World Applications</h2>
		<p>The way energy and commodity teams use Integration every day.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Morning Curves to the ETRM</h4>
				<p>Every weekday at 08:00, the previous business day's TTF, NBP and German, Dutch and UK power curves go to Molecule as marks, with the product codes Molecule uses.</p>
			</div>
			<div className="blue_item">
				<h4>Capture Prices as Quarter Hours</h4>
				<p>On the 25th of each month, next month's solar and wind capture prices go to the ETRM as quarter hours, including the clock changes.</p>
			</div>
			<div className="blue_item">
				<h4>Your Own Risk Engine</h4>
				<p>A custom system sends the day's curves to an in-house risk engine through its REST API, and the engine confirms which curves it loaded.</p>
			</div>
			<div className="blue_item">
				<h4>Lakehouse and Reporting Feeds</h4>
				<p>Curves and timeseries land in a data lake as CSV or JSON files, on a queue for other systems, or in a Power BI dataset for the morning dashboards.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>Integration delivers the data the rest of the platform builds</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/validation">
					<span className="product-icon"><i className="bi bi-shield-check" /></span>
				</a>
				<h4>Validation</h4>
				<p>The validation gate sends only the curves and timeseries that passed their checks.</p>
			</div>
			<div className="orange_item">
				<a href="/features/smart-curves">
					<span className="product-icon"><i className="bi bi-graph-up" /></span>
				</a>
				<h4>Smart Curves</h4>
				<p>Send the curves you build on the platform, as soon as they are built.</p>
			</div>
			<div className="orange_item">
				<a href="/features/alerts">
					<span className="product-icon"><i className="bi bi-bell" /></span>
				</a>
				<h4>Alerts</h4>
				<p>Failed, missing and held back items raise alerts your team works on in one place.</p>
			</div>
			<div className="orange_item">
				<a href="/features/fusion">
					<span className="product-icon"><i className="bi bi-lightning-charge" /></span>
				</a>
				<h4>Fusion AI</h4>
				<p>Describe a system and Fusion AI proposes its codes, settings, secrets and ODSL.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-management">
					<span className="product-icon"><i className="bi bi-database" /></span>
				</a>
				<h4>Data Management</h4>
				<p>Codes and properties are kept on each curve and timeseries, with your master data.</p>
			</div>
			<div className="orange_item">
				<a href="/features/odsl-code">
					<span className="product-icon"><i className="bi bi-code-slash" /></span>
				</a>
				<h4>ODSL Language</h4>
				<p>Write the code for any system that has no plug-in, with the integration engine doing the rest.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Export Scripts to Proven Deliveries</h2>
		<div className="story_content">
			<div className="story_text">
				<p>Integration replaces a scattered set of export scripts with one screen where every system, group, code and schedule is visible, and every delivery is checked and reported.</p>
			</div>
			<div className="story_text">
				<p>Your operations team knows by the start of the trading day that every system has the data it needs, and your traders and risk managers can trust the numbers they see.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>See Your Data Reach Your Systems</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will show your curves going to your ETRM or data lake, with the daily report that proves it.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#1f5fbf", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/workflows" text="Workflows" />
	</div>
</section>

<Demo />
