---
title: Workflows
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Workflows" slogan="Draw your data processes, run them on a schedule" />

<section className="section">
	<h1>Design the steps that download, load, check and build your data as a diagram, and run them as scheduled processes with every run recorded.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Workflow Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Most of the work a market data team automates is a chain of steps:</p>
				<ul>
					<li>Download the settlement file every evening</li>
					<li>Load the prices and check they are complete</li>
					<li>Wait for a dataset, then build the curves from it</li>
					<li>Tell the team when something is missing</li>
				</ul>
				<p>Written as code, these chains are hard to read for anyone but their author. What happens when the download fails, whether it retries and who is told, is buried in the script.</p>
				<p>When a run fails overnight, someone has to work out which step went wrong before they can fix it.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>The Workflow Manager lets you draw workflows instead: drag actions onto a canvas, connect each way a step can end to the step that comes next, and fill in the inputs in a side panel.</p>
				<p>The ODSL is written for you, and kept in step if you prefer to change the code. A <b>process</b> runs the workflow on a schedule or when you start it, and every run records the status of each phase.</p>
				<p>Start from a blank diagram, a sample workflow or the library of ready-made actions.</p>
				<h4>Workflows: Every Step Visible, Every Run Recorded</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Turn the steps your team runs every day into workflows anyone can read, check and change.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Draw, Don't Code</h4>
				<h5>A diagram anyone can follow.</h5>
				<p>Drag actions, decisions and sub-workflows onto the canvas and connect them. The diagram is the documentation: what runs, in what order, and what happens next.</p>
			</div>
			<div className="orange_item">
				<h4>Every Outcome Has a Path</h4>
				<h5>Exits and gateways.</h5>
				<p>Each step ends with an exit such as ok or failed, and each exit is connected to the step that runs next. Gateways decide between paths with an action or a few lines of code.</p>
			</div>
			<div className="orange_item">
				<h4>Start From a Sample</h4>
				<h5>Common jobs, ready to use.</h5>
				<p>Sample workflows check a price has arrived, check a price is within limits, download a file, wait for a dataset, run processes in order and check a curve before building from it.</p>
			</div>
			<div className="orange_item">
				<h4>A Library of Actions</h4>
				<h5>The steps most workflows need.</h5>
				<p>Installed with the extension: working out dates, checking data has arrived, making decisions, reading files from the web, starting other processes and telling people what happened.</p>
			</div>
			<div className="orange_item">
				<h4>Phases and Retries</h4>
				<h5>See which part of a run failed.</h5>
				<p>Group steps into phases such as download, load and notify. Each phase is tracked separately in every run, with its own retries and its own log.</p>
			</div>
			<div className="orange_item">
				<h4>Checked and Versioned</h4>
				<h5>Safe to change.</h5>
				<p>The diagram and its ODSL are checked before every save, each save is a new version, and any earlier version can be opened and made current again.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How Workflows Work</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Design It</h3>
				<p>Open <b>Manage, Workflows</b> in the portal. A workflow opens in three tabs:</p>
				<p><b>Design:</b> the diagram, with the palette of actions on the left and the settings of the selected step on the right.</p>
				<p><b>Code:</b> the ODSL the diagram is written as, kept in step with the diagram.</p>
				<p><b>Processes:</b> the processes that run the workflow, their schedules and their runs.</p>
				<p>Write, run and debug your own actions in the same screen, and copy any public OpenDataDSL workflow to start your own.</p>
			</div>
			<div className="story_text">
				<h3>Run It</h3>
				<p>A process runs the workflow with its inputs:</p>
				<p><b>On a schedule:</b> a cron schedule such as every weekday at 19:00, or run it now.</p>
				<p><b>With inputs:</b> sample workflows take what they need, such as a timeseries id and a team email, so one workflow serves many processes.</p>
				<p><b>Every run recorded:</b> the status of each phase, and what it logged.</p>
				<p><b>Clear endings:</b> a run that reaches a failed end is marked failed, so the team is alerted.</p>
			</div>
		</div>
		<div className="feature-figure">
			<div className="browser-frame">
				<div className="browser-frame__bar"><span /><span /><span /></div>
				<img src="/img/product/workflows-detail.png" alt="The Processes tab of a workflow, with its process, schedule and recent runs by phase" />
			</div>
			<p className="feature-caption">The processes that run a workflow, with each run and the status of every phase.</p>
		</div>
	</div>
</section>

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>Real-World Applications</h2>
		<p>Workflows energy and commodity teams run every day, each one a sample you can start from.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Load the Evening Settlements</h4>
				<p>Download the EEX settlement file every evening, load the prices, check them, and end as failed so the team is alerted when the file is missing.</p>
			</div>
			<div className="blue_item">
				<h4>Check a Price Has Arrived</h4>
				<p>On each business day, check a timeseries has its value for the previous business day, and email the team when it has not.</p>
			</div>
			<div className="blue_item">
				<h4>Wait for a Dataset, Then Run</h4>
				<p>Check a dataset is complete for the day, wait and check again if it is not, then start the process that uses it, with an email when the dataset is late.</p>
			</div>
			<div className="blue_item">
				<h4>Check a Curve, Then Build</h4>
				<p>Check a settlement curve was loaded with enough contracts, then start the build process for that date, or tell the team the curve is not ready.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>Workflows connect the work the rest of the platform does</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/data-management">
					<span className="product-icon"><i className="bi bi-database" /></span>
				</a>
				<h4>Data Management</h4>
				<p>Load and check the datasets, timeseries and master data your team relies on.</p>
			</div>
			<div className="orange_item">
				<a href="/features/smart-curves">
					<span className="product-icon"><i className="bi bi-graph-up" /></span>
				</a>
				<h4>Smart Curves</h4>
				<p>Build curves only once the data they need has arrived and passed its checks.</p>
			</div>
			<div className="orange_item">
				<a href="/features/alerts">
					<span className="product-icon"><i className="bi bi-bell" /></span>
				</a>
				<h4>Alerts</h4>
				<p>Scripts run by your processes raise alerts that hold everything a failed load affects.</p>
			</div>
			<div className="orange_item">
				<a href="/features/odsl-code">
					<span className="product-icon"><i className="bi bi-code-slash" /></span>
				</a>
				<h4>ODSL Language</h4>
				<p>Every workflow is ODSL underneath, and actions are ODSL you can write and debug.</p>
			</div>
			<div className="orange_item">
				<a href="/features/promotion">
					<span className="product-icon"><i className="bi bi-box-arrow-up-right" /></span>
				</a>
				<h4>Promotion</h4>
				<p>Build and test a workflow in test, then promote it and its processes to production.</p>
			</div>
			<div className="orange_item">
				<a href="/features/integration">
					<span className="product-icon"><i className="bi bi-plug" /></span>
				</a>
				<h4>Integration</h4>
				<p>Send the data a workflow loads and builds on to your downstream systems.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Scripts to Workflows Anyone Can Read</h2>
		<div className="story_content">
			<div className="story_text">
				<p>The Workflow Manager turns the chains of steps your team relies on into diagrams that show exactly what runs, what happens when a step fails, and who is told.</p>
			</div>
			<div className="story_text">
				<p>New team members understand a workflow at a glance, changes are checked and versioned, and when a run fails overnight the phase that failed and its log are one click away.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>See Your Processes as Workflows</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will draw one of your daily data processes as a workflow and run it on a schedule.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#1f5fbf", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/promotion" text="Promotion" />
	</div>
</section>

<Demo />
