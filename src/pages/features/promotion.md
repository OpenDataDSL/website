---
title: Promotion
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Promotion" slogan="From test to production, reviewed, recorded and reversible" />

<section className="section">
	<h1>Move the curves, scripts, reports and processes you build and test into production, see exactly what will change before you push, and undo any deployment.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Release Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Most companies build and test new curves, scripts and reports in a separate data environment before they go live. Moving that work into production by hand is slow and easy to get wrong:</p>
				<ul>
					<li>An item is forgotten</li>
					<li>A script that another one imports is left behind</li>
					<li>A change overwrites a fix a colleague made in production last week</li>
					<li>Nobody records who released what, or why</li>
				</ul>
				<p>And when a release goes wrong, nobody is quite sure what production looked like before it.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>Promotion is installed in the environment you promote from, usually test. Tick the items you want to release, and it compares each one with production: new, different or already the same.</p>
				<p>It shows a side by side comparison of every change, lists anything the release needs that production does not have yet, and lets you decide what happens to items production already has.</p>
				<p>Every push is a recorded <b>deployment</b>, with a name, a reason and every item it changed, and any deployment can be undone.</p>
				<h4>Promotion: Release With Confidence, Undo With One Click</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Make every release to production complete, checked and reversible.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Everything in One Basket</h4>
				<h5>Every kind of item.</h5>
				<p>Types, calendars, scripts, workflows, master data, smart curves, validation checks, reports, processes, dashboards, security policies and automations, ticked into one basket that is kept until you push.</p>
			</div>
			<div className="orange_item">
				<h4>See Every Change First</h4>
				<h5>New, different or identical.</h5>
				<p>The review compares every item with the target environment and shows a side by side comparison, so you know exactly what will change in production before anything does.</p>
			</div>
			<div className="orange_item">
				<h4>Nothing Left Behind</h4>
				<h5>Dependencies found for you.</h5>
				<p>The review lists the items your basket needs that the target does not have yet, such as a script that another script imports, with warnings before you push.</p>
			</div>
			<div className="orange_item">
				<h4>You Decide for Existing Items</h4>
				<h5>Overwrite, merge, copy or leave.</h5>
				<p>For an item production already has, choose whether to overwrite it, merge it, push a copy, or leave it as it is, so a colleague's fix in production is not lost.</p>
			</div>
			<div className="orange_item">
				<h4>A Full Audit Trail</h4>
				<h5>Who pushed what, when and why.</h5>
				<p>Each deployment has an id, a name and a reason, a record of every item and version it changed, its log, and the audit trail in the target environment.</p>
			</div>
			<div className="orange_item">
				<h4>Undo Any Deployment</h4>
				<h5>Production back as it was.</h5>
				<p>New items are removed and changed items go back to the version they had. Anything someone changed in production after the deployment is left alone, so their change is not lost.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How Promotion Works</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Select and Review</h3>
				<p>Open <b>Manage, Promote</b> in the environment you promote from.</p>
				<p><b>Select:</b> every kind of item in your environment, with whether each one already exists in the target. Tick the items to promote.</p>
				<p><b>Review:</b> the basket compared with the target, the items it needs, what you want done with each one, and any warnings.</p>
				<p><b>Compare:</b> open any item side by side with the version in production.</p>
			</div>
			<div className="story_text">
				<h3>Push and Undo</h3>
				<p>When the review is right:</p>
				<p><b>Push:</b> give the deployment a name and a reason, and push it to the target.</p>
				<p><b>Deployments:</b> every deployment from this environment, with its items and versions, its log, downloads and the audit trail.</p>
				<p><b>Undo:</b> undo a whole deployment, or a single item, in the reverse order it was pushed.</p>
				<p><b>Both directions:</b> copy items from production to a test environment, change them safely, and promote them back.</p>
			</div>
		</div>
		<div className="feature-figure">
			<div className="browser-frame">
				<div className="browser-frame__bar"><span /><span /><span /></div>
				<img src="/img/product/promotion-detail.png" alt="A script compared side by side between production and test before it is promoted" />
			</div>
			<p className="feature-caption">A script compared with the version in production, before it is pushed.</p>
		</div>
	</div>
</section>

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>Real-World Applications</h2>
		<p>How market data teams release their work with Promotion.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Releasing New Curves</h4>
				<p>An analyst built German clean spark and clean dark spread curves in test, with a new script, a report for the morning meeting and a build process. One deployment takes them all to production.</p>
			</div>
			<div className="blue_item">
				<h4>Undoing a Release</h4>
				<p>The desk asks for the dark spread to wait for a new coal curve. Undo puts production back as it was, and leaves the build process a colleague moved after the release.</p>
			</div>
			<div className="blue_item">
				<h4>Working on Production Safely</h4>
				<p>Copy items from production to a test environment, change them and check the results there, then promote them back with a review that shows exactly what changed.</p>
			</div>
			<div className="blue_item">
				<h4>A UAT Step Before Production</h4>
				<p>Promote from test to a UAT environment first, have the business check it, then promote from UAT to production, with every step recorded.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>Promotion releases everything you build on the platform</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/smart-curves">
					<span className="product-icon"><i className="bi bi-graph-up" /></span>
				</a>
				<h4>Smart Curves</h4>
				<p>Release new and changed curves with the master data and scripts they build from.</p>
			</div>
			<div className="orange_item">
				<a href="/features/odsl-code">
					<span className="product-icon"><i className="bi bi-code-slash" /></span>
				</a>
				<h4>ODSL Language</h4>
				<p>Promote scripts with the scripts they import, compared line by line.</p>
			</div>
			<div className="orange_item">
				<a href="/features/workflows">
					<span className="product-icon"><i className="bi bi-diagram-3" /></span>
				</a>
				<h4>Workflows</h4>
				<p>Release workflows and the processes that run them, with their schedules.</p>
			</div>
			<div className="orange_item">
				<a href="/features/validation">
					<span className="product-icon"><i className="bi bi-shield-check" /></span>
				</a>
				<h4>Validation</h4>
				<p>Test validation checks on test data, then promote them to production.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-management">
					<span className="product-icon"><i className="bi bi-database" /></span>
				</a>
				<h4>Data Management</h4>
				<p>Types, calendars and master data records move with the items that use them.</p>
			</div>
			<div className="orange_item">
				<a href="/features/extensions">
					<span className="product-icon"><i className="bi bi-grid" /></span>
				</a>
				<h4>Extensions</h4>
				<p>Promotion is itself an extension, installed in the environments you promote from.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Manual Releases to Recorded Deployments</h2>
		<div className="story_content">
			<div className="story_text">
				<p>Promotion turns moving work into production from a careful manual job into a reviewed deployment, where every item, dependency and change is checked before it goes live.</p>
			</div>
			<div className="story_text">
				<p>Your team releases more often and with less risk, auditors can see who changed what and why, and a release that goes wrong is undone in minutes, not reconstructed from memory.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>See a Release From Test to Production</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will promote a set of curves, scripts and reports, review every change, and undo it again.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#1f5fbf", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/alerts" text="Alerts" />
	</div>
</section>

<Demo />
