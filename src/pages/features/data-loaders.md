---
title: Data Loaders
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Data Loaders" slogan="Get any source into the platform today, and on a schedule" />

<section className="section">
	<h1>The tactical way to bring in a file, an API, a web page table or a spreadsheet quickly: build the loader on screen with the data in front of you, deploy it on a schedule or upload by hand, and have it running the same day.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Gap Between Needing Data and Having It</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>The data your business runs on every day belongs in a managed feed or the Data Catalogue. But there is always a source that is needed now:</p>
				<ul>
					<li>A new broker's end of day settlements file</li>
					<li>A client's monthly price workbook</li>
					<li>Government statistics such as EIA stocks or e-Stat prices</li>
					<li>Prices published in a table on a supplier's web page</li>
				</ul>
				<p>Each one is too small to be a project, so it waits for a developer to write a script, or ends up in someone's spreadsheet, copied in by hand.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>Data Loaders gets that source into the platform quickly, without a project. Point it at the source, see a real sample, map its columns to your fields with a line from one to the other, and deploy.</p>
				<p>The loader runs on a schedule straight away, with a report of every run, alerts when a source goes missing, and a stage that shows where it is from sandbox to production.</p>
				<p>Fusion AI proposes the mapping from the sample, so most loaders take minutes, not days.</p>
				<h4>Data Loaders: In Today, Scheduled Tonight</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>A quick, reliable way in for every source that cannot wait for a managed feed.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Fast</h4>
				<h5>Minutes, not a project.</h5>
				<p>Build, check and deploy a loader in one sitting, with the sample in front of you at every step and Fusion AI to propose the mapping.</p>
			</div>
			<div className="orange_item">
				<h4>Scheduled From Day One</h4>
				<h5>Not a one-off import.</h5>
				<p>Weekdays at 18:30, hourly, monthly or any schedule, with a holiday calendar. Load years of history in a single run, then keep it up to date.</p>
			</div>
			<div className="orange_item">
				<h4>Any File or API</h4>
				<h5>Six kinds of source, or a workbook.</h5>
				<p>CSV and text files, JSON APIs, XML documents, Excel workbooks and tables on web pages, or your own ODSL for anything else, with secrets kept in the secret store. No URL? Drop the workbook on the page.</p>
			</div>
			<div className="orange_item">
				<h4>Handles Messy Sources</h4>
				<h5>No clean-up script.</h5>
				<p>A product in every column, only the columns you need, totals under a blank row, decimal commas, Japanese dates and names: all handled on screen.</p>
			</div>
			<div className="orange_item">
				<h4>Safe to Run Again</h4>
				<h5>No duplicates.</h5>
				<p>Each event's id is built from its time and the fields that make a row unique, so loading a file again replaces its events instead of adding copies.</p>
			</div>
			<div className="orange_item">
				<h4>Monitored</h4>
				<h5>Every run recorded.</h5>
				<p>Each run's report shows the rows read, the events saved and the rows left out. A failed run raises an alert, and the Data Loader Runs insight shows them all.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How Data Loaders Work</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Get It In</h3>
				<p><b>Extract:</b> choose the kind of source and its URL, which can contain the date being loaded, variables and secrets. Take a sample, or extract all of it.</p>
				<p><b>Examine:</b> the rows of the sample and what each column holds, with the columns to use and the shape of the data.</p>
				<p><b>Event type:</b> choose one, or define a new one from the columns.</p>
				<p><b>Map:</b> join each column to a field, or let Fusion AI propose it, and preview the events before anything is saved.</p>
			</div>
			<div className="story_text">
				<h3>Keep It Coming</h3>
				<p><b>Deploy:</b> saves a workflow of the standard extract, transform, load and report actions, and a process that runs it.</p>
				<p><b>Schedule:</b> any schedule, in the time zone you choose, with a holiday calendar.</p>
				<p><b>Run now:</b> load today, an earlier date, or the whole history in one go.</p>
				<p><b>Series:</b> make event timeseries, curves and your team's standard sets of series on every record the loader fills.</p>
			</div>
		</div>
		<div className="feature-figure">
			<div className="browser-frame">
				<div className="browser-frame__bar"><span /><span /><span /></div>
				<img src="/img/product/data-loaders-detail.png" alt="Choosing a table on a web page of end of day settlements to load" />
			</div>
			<p className="feature-caption">Loading a table from a web page: click the table, and the platform reads it the same way every run.</p>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>Spreadsheets Uploaded by Hand</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Describe It Once</h3>
				<p>Some data never comes from a URL: a client's workbook, or a report someone downloads each month. A spreadsheet upload loader describes the workbook once, in either of two layouts:</p>
				<ul>
					<li><b>Three sheets:</b> dataset information, a row for each master data record, and the values by date</li>
					<li><b>One sheet, a row for each value:</b> the properties, the date and the value in each row, from a heading row you choose</li>
				</ul>
				<p>Choose the master data type, event type and set of series, build the master data and event _id from templates, add more properties to every record, and calculated fields such as a real price from a conversion factor.</p>
			</div>
			<div className="story_text">
				<h3>Drop It Each Time</h3>
				<p>From then on, anyone drops the latest workbook on the page. The preview shows every master data record, new or already there, with its properties and events, before anything is saved.</p>
				<p>Then one click loads the records, the events and the series. Nothing is scheduled: the workbook drives it all, and the loader keeps a list of its uploads.</p>
				<h4>No URL, No Script, No Problem</h4>
			</div>
		</div>
		<div className="feature-figure">
			<div className="browser-frame">
				<div className="browser-frame__bar"><span /><span /><span /></div>
				<img src="/img/blog/data-loaders-upload-preview.png" alt="The preview of a spreadsheet upload: 212 master data records and 4654 events from a monthly rig count report" />
			</div>
			<p className="feature-caption">A monthly rig count report dropped on the page: a master data record for each country, fuel and location, and an event for each month.</p>
		</div>
	</div>
</section>

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>Real-World Applications</h2>
		<p>Sources that energy and commodity teams get in quickly with Data Loaders.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>A New Broker's Settlements</h4>
				<p>A second broker starts sending a semicolon separated file of gas settlements. A loader has it on the platform the same evening, every weekday at 18:30, with the decimal commas and contract names handled.</p>
			</div>
			<div className="blue_item">
				<h4>Government Statistics</h4>
				<p>Load decades of EIA stock levels, a series for each column, as a history load, then keep them up to date every month. Upload the monthly rig count report by hand, a record for each country, fuel and location.</p>
			</div>
			<div className="blue_item">
				<h4>A Client's Monthly Workbook</h4>
				<p>Drop the client's workbook on the page each month: a record for each product with its properties, the values by month, a real price calculated from a conversion factor, and the client's standard set of price, unit and currency series on every product.</p>
			</div>
			<div className="blue_item">
				<h4>Prices From a Web Page</h4>
				<p>Pick the table of metal prices on a public web page, turn the date and AM or PM marker into the event time and name, and load it every morning.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>Tactical data, with everything the rest of the platform offers</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/data-catalogue">
					<span className="product-icon"><i className="bi bi-collection" /></span>
				</a>
				<h4>Data Catalogue</h4>
				<p>The strategic route for managed data. Data Loaders covers the sources in between, and the work is already done if one moves to a managed feed.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-management">
					<span className="product-icon"><i className="bi bi-database" /></span>
				</a>
				<h4>Data Management</h4>
				<p>Events are kept on your master data records, with event types like any other type.</p>
			</div>
			<div className="orange_item">
				<a href="/features/workflows">
					<span className="product-icon"><i className="bi bi-diagram-3" /></span>
				</a>
				<h4>Workflows</h4>
				<p>Each loader runs as a workflow of standard actions, scheduled by a process like any other.</p>
			</div>
			<div className="orange_item">
				<a href="/features/smart-curves">
					<span className="product-icon"><i className="bi bi-graph-up" /></span>
				</a>
				<h4>Smart Curves</h4>
				<p>Event timeseries, curves and converted series are built from the loaded events whenever they are read.</p>
			</div>
			<div className="orange_item">
				<a href="/features/validation">
					<span className="product-icon"><i className="bi bi-shield-check" /></span>
				</a>
				<h4>Validation</h4>
				<p>Check the curves and timeseries built from loaded data before anyone uses them.</p>
			</div>
			<div className="orange_item">
				<a href="/features/alerts">
					<span className="product-icon"><i className="bi bi-bell" /></span>
				</a>
				<h4>Alerts</h4>
				<p>A run that cannot read its source or save its events raises an alert for your team.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>Get It In Now, Decide Later</h2>
		<div className="story_content">
			<div className="story_text">
				<p>Data Loaders turns a new source from a request in a queue into a scheduled loader the same day, built by the people who know the data.</p>
			</div>
			<div className="story_text">
				<p>Start it in the sandbox, move it to production when the business relies on it, and if it grows into a strategic feed, the mapping, the types and the series are already on the platform.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>Load a Source This Week</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will build and schedule a loader for one of your own files or APIs while you watch.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#1f5fbf", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/validation" text="Validation" />
	</div>
</section>

<Demo />
