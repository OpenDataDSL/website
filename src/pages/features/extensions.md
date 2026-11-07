---
title: Extensions
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Extensions" slogan="Ready-made apps for the portal and Excel, and the tools to build your own" />

<section className="section">
	<h1>Add screens for the work your team does every day: ready-made extensions for curves, validation, integration, alerts and more, built in exactly the same way as the ones you can build yourself.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Application Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Every team works with market data in its own way. A data platform with one fixed set of screens leaves gaps, and the gaps get filled with:</p>
				<ul>
					<li>Spreadsheets that copy data out of the platform</li>
					<li>Small in-house tools with their own logins and security</li>
					<li>Requests to IT that wait months for a developer</li>
					<li>Reports that only one person knows how to run</li>
				</ul>
				<p>Each one is another copy of the data, another thing to maintain, and another place where the numbers can drift from the source.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>An <b>extension</b> adds screens to the OpenDataDSL portal and Excel add-in for a particular job: a menu item with tabs that show your data the way your team works with it, and insight reports alongside.</p>
				<p>Install ready-made extensions for building compositions, checking data quality, sending data to other systems, managing scripts, promoting changes and more. Each one works with your own access rights, on the data already on the platform.</p>
				<p>When you need something of your own, describe it to Fusion AI and it builds the extension for you to review and approve.</p>
				<h4>Extensions: The Screens Your Team Needs, on the Data You Already Have</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Give every team the tools it needs without another application, another login or another copy of the data.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Ready for the Job</h4>
				<h5>A growing catalogue.</h5>
				<p>Extensions for curves, compositions, validation, integration, alerts, workflows, promotion, scripts, notebooks, exports, calendars, reconciliation and more, each with a step by step guide.</p>
			</div>
			<div className="orange_item">
				<h4>Inside the Portal and Excel</h4>
				<h5>Where your team already works.</h5>
				<p>Each extension has its own menu item, tabs and insight reports in the portal, and can show views in the Excel add-in instead, with no separate application to install.</p>
			</div>
			<div className="orange_item">
				<h4>Your Security, Your Data</h4>
				<h5>Feature and data policies.</h5>
				<p>A feature policy decides who sees an extension's screens, and data policies decide what its pages can read and write. Everything works with each user's own access rights.</p>
			</div>
			<div className="orange_item">
				<h4>Build With Fusion AI</h4>
				<h5>Describe the tabs you want.</h5>
				<p>A Fusion AI playbook plans the extension, writes every page, insight and the manifest, shows you each file, and saves it after you approve. It also hands back the script for your source control.</p>
			</div>
			<div className="orange_item">
				<h4>Private or Published</h4>
				<h5>For your company or for everyone.</h5>
				<p>An extension you create is private to your company. Publish it to the public catalogue with a publisher code and any OpenDataDSL customer can install it.</p>
			</div>
			<div className="orange_item">
				<h4>Insights Alongside</h4>
				<h5>Reports on the work.</h5>
				<p>Extensions add an Insights tab of reports on their own data, such as delivery over time, validation pass rates or alert response times.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How Extensions Work</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>What an Extension Is</h3>
				<p><b>Manifest:</b> the extension itself, with its id, name, icon, description, views and the resources it needs, installed together.</p>
				<p><b>Views:</b> the pages users open, each one HTML, CSS and JavaScript that reads and writes platform data.</p>
				<p><b>Insights:</b> report pages listed on the Insights tab.</p>
				<p><b>Policies:</b> a feature policy for who sees the views, and data policies for what the pages can use.</p>
				<p><b>Placement:</b> each view says where it goes in the portal menu, and views with the same name become tabs of one menu item.</p>
			</div>
			<div className="story_text">
				<h3>Three Ways to Build Your Own</h3>
				<p><b>With a Fusion AI playbook:</b> describe the tabs on a task form, and Fusion plans and writes the pages, insights and manifest for you to approve.</p>
				<p><b>With Fusion AI in a chat:</b> change one page of an existing extension, or add a tab.</p>
				<p><b>By hand:</b> write the pages in VS Code with the OpenDataDSL extension and keep them in source control.</p>
				<p>Every extension in the catalogue is built in exactly the same way, so what you build looks and works like the rest of the platform.</p>
			</div>
		</div>
		<div className="feature-figure">
			<div className="browser-frame">
				<div className="browser-frame__bar"><span /><span /><span /></div>
				<img src="/img/product/extensions-detail.png" alt="A Fusion AI playbook building an extension: planning, writing the pages, insights and manifest, each step checked, then waiting for approval" />
			</div>
			<p className="feature-caption">Fusion AI building an extension: every step is checked, and nothing is saved until you approve.</p>
		</div>
	</div>
</section>

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>The Extension Catalogue</h2>
		<p>Some of the extensions ready to install today.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Composer</h4>
				<p>Analytic worksheets of curves and timeseries: line them up, calculate spreads and margins, and chart them.</p>
			</div>
			<div className="blue_item">
				<h4>Smart Data</h4>
				<p>Create, preview, build and track the smart curves and smart timeseries of your company.</p>
			</div>
			<div className="blue_item">
				<h4>Validation</h4>
				<p>Check curves and timeseries as they arrive, and keep a record of every result.</p>
			</div>
			<div className="blue_item">
				<h4>Integration</h4>
				<p>Send groups of curves and timeseries to ETRMs, risk engines and data lakes on a schedule, with a daily report.</p>
			</div>
			<div className="blue_item">
				<h4>Alerts</h4>
				<p>One place for your team to see and work on the alerts about your data.</p>
			</div>
			<div className="blue_item">
				<h4>Workflow Manager</h4>
				<p>Design workflows as a diagram and run them as scheduled processes.</p>
			</div>
			<div className="blue_item">
				<h4>Promotion</h4>
				<p>Move what you build and test into production, and undo it if you need to.</p>
			</div>
			<div className="blue_item">
				<h4>Script Manager</h4>
				<p>Browse, edit, run, debug, schedule and track the scripts and templates of your company.</p>
			</div>
			<div className="blue_item">
				<h4>Export</h4>
				<p>Export timeseries, curves, events and master data in the format other systems need, on demand or on a schedule.</p>
			</div>
			<div className="blue_item">
				<h4>Automations</h4>
				<p>See, check, change, test and create all the automations of your company.</p>
			</div>
			<div className="blue_item">
				<h4>Calendar Manager</h4>
				<p>Create, edit and test the holiday and expiry calendars of your company.</p>
			</div>
			<div className="blue_item">
				<h4>Data Loaders</h4>
				<p>Build loaders for files and APIs step by step, map their columns to fields, and run them on a schedule.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>Extensions are built on everything the platform already does</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/fusion">
					<span className="product-icon"><i className="bi bi-lightning-charge" /></span>
				</a>
				<h4>Fusion AI</h4>
				<p>Describe an extension and Fusion AI writes it, or change a page in a chat.</p>
			</div>
			<div className="orange_item">
				<a href="/features/ai-playbooks">
					<span className="product-icon"><i className="bi bi-journal-check" /></span>
				</a>
				<h4>AI Playbooks</h4>
				<p>The extension playbook checks every page it writes and asks before anything is saved.</p>
			</div>
			<div className="orange_item">
				<a href="/features/custom-tools">
					<span className="product-icon"><i className="bi bi-tools" /></span>
				</a>
				<h4>Custom Tools</h4>
				<p>Turn your team's own methods and spreadsheets into tools inside the portal.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-management">
					<span className="product-icon"><i className="bi bi-database" /></span>
				</a>
				<h4>Data Management</h4>
				<p>Every extension works on the data already on the platform, with no copies.</p>
			</div>
			<div className="orange_item">
				<a href="/features/odsl-code">
					<span className="product-icon"><i className="bi bi-code-slash" /></span>
				</a>
				<h4>ODSL Language</h4>
				<p>Build by hand and create the extension with an ODSL script kept in source control.</p>
			</div>
			<div className="orange_item">
				<a href="/features/promotion">
					<span className="product-icon"><i className="bi bi-box-arrow-up-right" /></span>
				</a>
				<h4>Promotion</h4>
				<p>Build an extension in test and promote its scripts and reports to production.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Workarounds to Shared Tools</h2>
		<div className="story_content">
			<div className="story_text">
				<p>Extensions replace the spreadsheets and side tools that grow up around a data platform with screens inside it, working on the same data, with the same security, for everyone who needs them.</p>
			</div>
			<div className="story_text">
				<p>Your teams get the tools they need in days instead of months, and every one of them looks, works and is governed like the rest of the platform.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>See the Extensions in Action</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will show the extensions your team would use, and build a new one with Fusion AI while you watch.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#1f5fbf", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/data-management" text="Data Management" />
	</div>
</section>

<Demo />
