---
title: Data Loaders
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Data Loaders" slogan="Load any file or API into the platform, without writing a script" />

<section className="section">
	<h1>Build a loader for a broker file, an exchange workbook, a JSON API or a table on a web page step by step on screen, map its columns to your fields, and run it on a schedule.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Data Loading Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>A lot of the data a trading business relies on does not come from a market data vendor. It arrives as:</p>
				<ul>
					<li>A broker's end of day settlements as a CSV file</li>
					<li>An exchange's settlement workbook</li>
					<li>Readings from a wind farm's JSON API</li>
					<li>Prices published in a table on a web page</li>
				</ul>
				<p>Getting each one into the platform used to mean writing a script by hand: reading the file, working out the date formats and decimal commas, deciding which rows to leave out, and making sure a rerun does not load everything twice.</p>
				<p>Every new source waits for someone who can write that script.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>Data Loaders lets you build that loader step by step, on screen. Point it at the source and the platform reads a sample exactly as a run will, shows you every column, and lets you map each column to the fields of an event type with a line from one to the other.</p>
				<p>Choose where the events go and how often to load them. Deploying creates a workflow of standard actions and a process that runs it, with a report of every run.</p>
				<p>Fusion AI can propose the event type and the whole mapping from the sample, asking you about anything only you can decide.</p>
				<h4>Data Loaders: From a File or API to Events, With No Code</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Bring every file and API your business relies on into the platform, built and run by the people who know the data.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Any File or API</h4>
				<h5>Six kinds of source.</h5>
				<p>CSV and text files, JSON APIs, XML documents, Excel workbooks and tables on web pages, read from a URL, or your own ODSL for anything else. Pick a table on a web page by clicking it.</p>
			</div>
			<div className="orange_item">
				<h4>See the Data First</h4>
				<h5>A real sample, examined for you.</h5>
				<p>The platform reads the first rows exactly as a run will, and shows every column with what it holds: numbers, dates, text, how full it is, and examples of its values.</p>
			</div>
			<div className="orange_item">
				<h4>Map Columns Visually</h4>
				<h5>Drag a column onto a field.</h5>
				<p>Columns on the left, the event's fields on the right, joined by a line. Set the data type, the date format, a decimal comma, a scale, empty values and a value map for each field.</p>
			</div>
			<div className="orange_item">
				<h4>Help From Fusion AI</h4>
				<h5>A proposal from your sample.</h5>
				<p>Fusion AI reads the sample and proposes the event type, the mapping and the event id, and asks with buttons when a choice is yours. Describe a change to a field's text in your own words and it writes it.</p>
			</div>
			<div className="orange_item">
				<h4>Safe to Run Again</h4>
				<h5>No duplicates.</h5>
				<p>Each event's id is built from its time and the columns that make a row unique, so loading a file again replaces its events instead of adding copies.</p>
			</div>
			<div className="orange_item">
				<h4>Scheduled and Reported</h4>
				<h5>Every run recorded.</h5>
				<p>Run on weekdays, every day, every hour or a custom schedule, with a holiday calendar. Each run's report shows the rows read, the events saved and the rows left out, and a failed run raises an alert.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How Data Loaders Work</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Build It, Step by Step</h3>
				<p><b>Extract:</b> choose the kind of source and its URL, which can contain the date being loaded, variables and secrets such as an API key.</p>
				<p><b>Examine:</b> the rows of the sample and what each column holds.</p>
				<p><b>Event type:</b> choose one, define a new one from the columns, or use none.</p>
				<p><b>Map:</b> join each column to a field, and preview the events the sample makes.</p>
				<p><b>Destination:</b> the master data record and event list the events go to, the event id, and the dataset id for monitoring.</p>
			</div>
			<div className="story_text">
				<h3>Deploy and Run It</h3>
				<p>When every check passes:</p>
				<p><b>Deploy:</b> saves a workflow of the standard extract, transform, load and report actions, and a process that runs it.</p>
				<p><b>Schedule:</b> weekdays at 18:30 UK time, every hour, or any cron schedule, in the time zone you choose.</p>
				<p><b>Run now:</b> load today, or any earlier date, and see the run report straight away.</p>
				<p><b>Curves and series:</b> make event timeseries, forward curves and option chains from the events, once, on the same record.</p>
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

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>Real-World Applications</h2>
		<p>Data that energy and commodity teams load with Data Loaders.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Broker End of Day Settlements</h4>
				<p>Two brokers send a semicolon separated file of TTF, THE, NBP and PEG settlements every evening. A loader saves them as events every weekday at 18:30, with the decimal commas and contract names handled.</p>
			</div>
			<div className="blue_item">
				<h4>Exchange Settlement Workbooks</h4>
				<p>Read the power settlements from a sheet of an Excel workbook, leave out the total rows, and build a forward curve for each day from the events.</p>
			</div>
			<div className="blue_item">
				<h4>Weather at Every Wind Farm</h4>
				<p>Call a weather API once for each wind farm's latitude and longitude, with the API key kept in the secret store, and load the readings every hour.</p>
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
		<h3>Data Loaders bring in the data the rest of the platform uses</h3>
		<div className="orange_grid">
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
				<p>Each loader runs as a workflow you can open as a diagram, and the standard actions work in your own workflows.</p>
			</div>
			<div className="orange_item">
				<a href="/features/smart-curves">
					<span className="product-icon"><i className="bi bi-graph-up" /></span>
				</a>
				<h4>Smart Curves</h4>
				<p>Event timeseries, curves and option chains are built from the loaded events whenever they are read.</p>
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
			<div className="orange_item">
				<a href="/features/integration">
					<span className="product-icon"><i className="bi bi-plug" /></span>
				</a>
				<h4>Integration</h4>
				<p>The other direction: send the data you load and build on to your downstream systems.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Hand-Written Scripts to Loaders Anyone Can Build</h2>
		<div className="story_content">
			<div className="story_text">
				<p>Data Loaders turns loading a new file or API from a development task into a few minutes on screen, with the sample in front of you at every step and Fusion AI to help with the mapping.</p>
			</div>
			<div className="story_text">
				<p>The people who know the data build the loaders, every run is scheduled, reported and safe to repeat, and a new source no longer waits for someone who can write the script.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>See Your Files Loaded in Minutes</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will build a loader for one of your own files or APIs while you watch.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#1f5fbf", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/validation" text="Validation" />
	</div>
</section>

<Demo />
