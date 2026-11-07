---
title: Alerts
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Alerts" slogan="Every problem with your data, in one place until it is solved" />

<section className="section">
	<h1>When a delivery is late, a check fails or a curve does not build, an alert is raised and tracked like a support ticket: who has it, what was done, and how long it took.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Data Operations Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Every morning someone has to find out what went wrong with the data overnight:</p>
				<ul>
					<li>A vendor delivery that arrived late or incomplete</li>
					<li>A quality check that failed</li>
					<li>A curve that did not build</li>
					<li>An export to the ETRM that did not run</li>
				</ul>
				<p>The answers are spread across emails, logs and chat messages. One failed load causes a dozen separate warnings, and nobody is sure whether the problem is with your team, with OpenDataDSL or with the data vendor.</p>
				<p>When the problem is solved, there is no record of what happened, how long it took, or what was done about it.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>The platform raises an <b>alert</b> when something goes wrong with your data, and your team can raise alerts too, to ask OpenDataDSL for help or to keep track of a problem yourselves.</p>
				<p>An alert works like a small support ticket. It stays open until the problem is solved, it is always <b>with</b> someone, and everything that happens to it is kept on its timeline.</p>
				<p>The Alerts screen puts them in one place, with the dataset delivery behind each one, and updates as things happen.</p>
				<h4>Alerts: Know What Is Wrong, Who Has It, and When It Was Fixed</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Replace scattered warnings and email threads with one shared view of every problem with your data.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Raised for You</h4>
				<h5>Deliveries, quality, builds and exports.</h5>
				<p>The platform raises alerts when a dataset delivery is late or incomplete, a quality check fails, a curve does not build or an export does not run, each with a priority and a type.</p>
			</div>
			<div className="orange_item">
				<h4>Always With Someone</h4>
				<h5>Your team, OpenDataDSL or the vendor.</h5>
				<p>Every alert says who has to act next, and hand-overs are recorded. The time an alert spends with each party is measured, so you can see where problems wait.</p>
			</div>
			<div className="orange_item">
				<h4>One Alert per Problem</h4>
				<h5>Root causes.</h5>
				<p>When a data load fails, the late datasets, failed curves and failed exports it explains are recorded on its alert instead of raising alerts of their own, and recover by themselves when the data arrives.</p>
			</div>
			<div className="orange_item">
				<h4>Shared Alerts for Common Data</h4>
				<h5>One problem, everyone informed.</h5>
				<p>Alerts about common and public data are raised and managed by OpenDataDSL for everyone who uses it. Read them, and add comments only your team and OpenDataDSL see.</p>
			</div>
			<div className="orange_item">
				<h4>Told Wherever You Are</h4>
				<h5>Email and Microsoft Teams.</h5>
				<p>Automations send an email or a Teams message when an alert is raised, closed, handed over, changes priority or gets a comment, for every alert or only the data you care about.</p>
			</div>
			<div className="orange_item">
				<h4>A Record of Every Problem</h4>
				<h5>Timelines and insight reports.</h5>
				<p>Every comment, hand-over, priority change and resolution is kept. Insight reports show who did what and when, the whole history of any alert, and response times.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How Alerts Work</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>In the Portal</h3>
				<p>Open <b>Operations, Alerts</b> to see your alerts and the shared alerts about the datasets you follow.</p>
				<p><b>Find:</b> filter by status, who has it, priority, type and dataset, or search the text.</p>
				<p><b>Open:</b> an alert's details, its timeline, and the dataset delivery behind it: what arrived, what is missing, and what the quality checks said.</p>
				<p><b>Work on it:</b> comment, hand it over, change the priority, close it with a resolution, or reopen it within 7 days.</p>
			</div>
			<div className="story_text">
				<h3>From Your Code and Systems</h3>
				<p>Alerts work everywhere you do:</p>
				<p><b>ODSL and Python:</b> find, read, raise, comment on and close alerts from your scripts and notebooks.</p>
				<p><b>REST API:</b> the same from any language or system.</p>
				<p><b>No duplicates:</b> raising an alert with the key of an open alert counts another occurrence instead of creating a second one.</p>
				<p><b>Traced:</b> every piece of work a process run starts carries its trace id, so a failed build an hour later is matched to the load that caused it.</p>
			</div>
		</div>
		<div className="feature-figure">
			<div className="browser-frame">
				<div className="browser-frame__bar"><span /><span /><span /></div>
				<img src="/img/product/alerts-detail.png" alt="A root cause alert for a missing ICE Endex settlement file, with the datasets, curves and exports it affected folded in" />
			</div>
			<p className="feature-caption">One root cause alert for a missing settlement file, with the datasets, curves and exports it affected.</p>
		</div>
	</div>
</section>

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>Real-World Applications</h2>
		<p>How energy and commodity teams use Alerts every day.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>An Incomplete Vendor Delivery</h4>
				<p>Last night's ICE Endex delivery was missing contracts. The alert shows what arrived and what is missing, and that it is with OpenDataDSL, who are chasing the vendor.</p>
			</div>
			<div className="blue_item">
				<h4>A Failed Load and Its Consequences</h4>
				<p>The evening settlement file did not arrive. One alert holds the incomplete dataset, the curve that did not build and the export that did not run, and each recovers when the file arrives.</p>
			</div>
			<div className="blue_item">
				<h4>A Morning Check for the Team</h4>
				<p>The figures at the top of the screen show what is open, what is waiting on your team, and what is critical, so the day starts with the problems that matter.</p>
			</div>
			<div className="blue_item">
				<h4>Asking for Help</h4>
				<p>Raise an alert for OpenDataDSL when something looks wrong. The conversation, the hand-overs and the resolution are kept on the alert for anyone who needs them later.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>Alerts collect the problems the rest of the platform finds</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/data-catalogue">
					<span className="product-icon"><i className="bi bi-collection" /></span>
				</a>
				<h4>Data Catalogue</h4>
				<p>Late and incomplete vendor deliveries raise alerts, shared with everyone who uses that data.</p>
			</div>
			<div className="orange_item">
				<a href="/features/validation">
					<span className="product-icon"><i className="bi bi-shield-check" /></span>
				</a>
				<h4>Validation</h4>
				<p>Failed quality checks become alerts your team can work on and resolve.</p>
			</div>
			<div className="orange_item">
				<a href="/features/smart-curves">
					<span className="product-icon"><i className="bi bi-graph-up" /></span>
				</a>
				<h4>Smart Curves</h4>
				<p>Curves that do not build are linked to the load that caused them.</p>
			</div>
			<div className="orange_item">
				<a href="/features/integration">
					<span className="product-icon"><i className="bi bi-plug" /></span>
				</a>
				<h4>Integration</h4>
				<p>Items that fail, have no data or are held back, and anything not done by the cutoff, raise alerts.</p>
			</div>
			<div className="orange_item">
				<a href="/features/workflows">
					<span className="product-icon"><i className="bi bi-diagram-3" /></span>
				</a>
				<h4>Workflows</h4>
				<p>Scripts run by your processes raise the root cause of everything that follows.</p>
			</div>
			<div className="orange_item">
				<a href="/features/odsl-code">
					<span className="product-icon"><i className="bi bi-code-slash" /></span>
				</a>
				<h4>ODSL Language</h4>
				<p>Raise, comment on and close alerts from your own scripts.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Scattered Warnings to One Shared View</h2>
		<div className="story_content">
			<div className="story_text">
				<p>Alerts give your operations team one place to see what is wrong with the data, who is working on it and what has been done, instead of piecing it together from emails and logs.</p>
			</div>
			<div className="story_text">
				<p>Problems are solved faster because everyone knows who has them, and every resolution is recorded, so the next time the same problem comes up the answer is already there.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>See Your Data Problems in One Place</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will show how alerts on your datasets, curves and exports are raised, worked on and resolved.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#1f5fbf", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/extensions" text="Extensions" />
	</div>
</section>

<Demo />
