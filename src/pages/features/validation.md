---
title: Validation
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Validation" slogan="Trust every curve and timeseries before anyone uses it" jpg="/img/icons/validation.png" />

<section className="section">
	<h1>Check every curve and timeseries as it arrives, keep a record of every data point, and only send on the data you can trust.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Data Quality Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Bad market data rarely announces itself. It arrives looking like any other update:</p>
				<ul>
					<li>A settlement price that is a hundred times too big</li>
					<li>A tenor missing from this morning's forward curve</li>
					<li>A curve that is the same as yesterday's because the source did not update</li>
					<li>A timeseries with a gap over a holiday nobody expected</li>
					<li>A spike that is real, but needs someone to confirm it</li>
				</ul>
				<p>By the time anyone notices, the data has already gone into a valuation, a risk report or a customer price. Checks that do exist live in spreadsheets and scripts, run at different times, and leave no trace of what was checked or who let a problem through.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>Validation gives every curve and timeseries on OpenDataDSL a set of <b>checks</b>, written in ODSL, that run automatically whenever the data is saved or rebuilt.</p>
				<p>Every data point gets a <b>validation record</b>: the result of each check and a timeline of what happened, from the first run to an override with its reason.</p>
				<p>Failures show up as issues to review, fix, or override, and automations can send on <b>only the data that passed</b>, while the team is told straight away about the data that did not.</p>
				<h4>Validation: Data You Can Trust, With the Proof</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Catch bad data before it reaches your models, reports and customers, and know exactly what was checked and why it was let through.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Checks on Every Update</h4>
				<h5>Automatic, the moment data arrives.</h5>
				<p>Checks run when a curve or timeseries is saved, and when a smart, event or composed curve or timeseries is rebuilt. Public and common data is checked in your own environment, with your own checks.</p>
			</div>
			<div className="orange_item">
				<h4>Suggested From Your Data</h4>
				<h5>Limits that fit, tried before you use them.</h5>
				<p>Point Validation at a set of curves and it reads the last 30 days of each one, suggests checks with limits that fit the data, and tries them on that history first, so you start with checks that would not have raised false alarms.</p>
			</div>
			<div className="orange_item">
				<h4>A Record for Every Data Point</h4>
				<h5>What was checked, and what happened next.</h5>
				<p>Each curve ondate and each observation has a validation record with the result of every check, every tenor, and a timeline of runs, comments, overrides and sends.</p>
			</div>
			<div className="orange_item">
				<h4>Overrides With a Reason</h4>
				<h5>Real moves pass, and the decision is kept.</h5>
				<p>When a spike is genuine, override the failure with a reason. The override belongs to that data: if the data changes, it is checked again from scratch.</p>
			</div>
			<div className="orange_item">
				<h4>Only Validated Data Downstream</h4>
				<h5>Automations on passing or failing data.</h5>
				<p>Send a curve or timeseries on only when it passes validation or a failure is overridden, and email the team, with every failing check, the moment data fails.</p>
			</div>
			<div className="orange_item">
				<h4>Checks in Your Own Language</h4>
				<h5>A library of checks, and your own in ODSL.</h5>
				<p>Use the validation library of 19 ready-made checks for ranges, moves, outliers, stale values, gaps and curve structure, or write your own checks as ODSL functions.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How Validation Works</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Set It Up</h3>
				<p>Validation is set up once for each curve or timeseries, on its own Validation tab or for hundreds at a time with bulk changes.</p>
				<p><b>Value checks:</b> missing, zero or negative values, a range, the change from the previous value, outliers against recent history, and stale values.</p>
				<p><b>Curve checks:</b> gaps between delivery periods, the tenors that must be on the curve, the number of contracts, and quarters that do not match their months.</p>
				<p><b>Your own checks:</b> any ODSL expression, or a function in one of your scripts.</p>
				<p><b>Severity:</b> each check fails, warns, or is severe, so a small move can be a warning while a missing curve is a failure.</p>
			</div>
			<div className="story_text">
				<h3>Keep It Running</h3>
				<p>Once set up, Validation looks after itself:</p>
				<p><b>Dashboard:</b> pass rates, open issues, warnings and overrides, day by day.</p>
				<p><b>Issues:</b> every failing data point in one place, to override, comment on, run again, or adjust the checks of in place.</p>
				<p><b>Adjust Checks:</b> when a limit is a little too tight, Validation works out the smallest change that lets the data pass and shows how many failures it would have avoided over the last 30 days.</p>
				<p><b>History:</b> every change to the checks is kept as a version, so you can see who changed what, and restore it.</p>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>Checks for Every Kind of Data</h2>
		<p>Start with the checks that matter for each kind of market data, and add your own as you go.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Forward Curves</h4>
				<p><b>The Question:</b> Is this morning's curve complete and sensible?</p>
				<h5>The Checks</h5>
				<pre>
				- Every tenor has a value
				- No gaps between delivery periods
				- The tenors you rely on are there
				- No tenor moved more than 5%
				  from yesterday
				</pre>
				<p><b>Result:</b> A curve is only used once every tenor has passed.</p>
			</div>
			<div className="blue_item">
				<h4>Settlement Prices</h4>
				<p><b>The Question:</b> Is today's settlement a real price?</p>
				<h5>The Checks</h5>
				<pre>
				- Within a sensible range
				- Not zero or negative
				- Not more than 4 standard
				  deviations from recent history
				</pre>
				<p><b>Result:</b> Fat-finger prices and unit mistakes are caught on arrival.</p>
			</div>
			<div className="blue_item">
				<h4>Stale Data</h4>
				<p><b>The Question:</b> Did the source actually update?</p>
				<h5>The Checks</h5>
				<pre>
				- A curve the same as the one
				  before it
				- A timeseries value unchanged
				  for several days
				- Tenors dropped from yesterday
				</pre>
				<p><b>Result:</b> A feed that silently stopped is spotted the same day.</p>
			</div>
			<div className="blue_item">
				<h4>Timeseries Gaps</h4>
				<p><b>The Question:</b> Is the history complete?</p>
				<h5>The Checks</h5>
				<pre>
				- No missing observations
				- No gap longer than expected,
				  weekends and holidays allowed
				</pre>
				<p><b>Result:</b> Holes in a daily series are found before they reach a model.</p>
			</div>
			<div className="blue_item">
				<h4>Curve Structure</h4>
				<p><b>The Question:</b> Does the curve hang together?</p>
				<h5>The Checks</h5>
				<pre>
				- At least 12 months, 4 quarters
				  and 2 years
				- Quarters match the average
				  of their months
				</pre>
				<p><b>Result:</b> Built curves are internally consistent before they are used.</p>
			</div>
			<div className="blue_item">
				<h4>Derived Data</h4>
				<p><b>The Question:</b> Are the curves we build ourselves right?</p>
				<h5>The Checks</h5>
				<pre>
				- Smart, event and composed
				  curves and timeseries checked
				  every time they are rebuilt
				</pre>
				<p><b>Result:</b> Your own spreads and built curves get the same checks as market data.</p>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>Validation works with the data and tools you already use</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/data-management">
					<img src="/img/icons/mdm.png" className="integrationSvg" />
				</a>
				<h4>Data Management</h4>
				<p>Checks run on your curves and timeseries as they are saved, and set their quality status.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-catalogue">
					<img src="/img/icons/catalogue.png" className="integrationSvg" />
				</a>
				<h4>Data Catalogue</h4>
				<p>Check public market data in your own environment, with your own checks.</p>
			</div>
			<div className="orange_item">
				<a href="/features/smart-curves">
					<img src="/img/icons/curve.png" className="integrationSvg" />
				</a>
				<h4>Smart Curves</h4>
				<p>Smart and event curves are checked every time they are rebuilt.</p>
			</div>
			<div className="orange_item">
				<a href="/features/composer">
					<img src="/img/icons/composer.png" className="integrationSvg" />
				</a>
				<h4>Composer</h4>
				<p>Composed curves and timeseries are checked when their composition is built.</p>
			</div>
			<div className="orange_item">
				<a href="/features/odsl-code">
					<img src="/img/icons/odsl.png" className="integrationSvg" />
				</a>
				<h4>ODSL Language</h4>
				<p>Write your own checks as ODSL functions, alongside the validation library.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-reconciliation">
					<img src="/img/icons/reconcile.png" className="integrationSvg" />
				</a>
				<h4>Data Reconciliation</h4>
				<p>Reconcile sources against each other, and validate the result.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Hoping the Data Is Right to Knowing It</h2>
		<div className="story_content">
			<div className="story_text">
				<p>Validation moves data quality from scattered scripts and spreadsheet checks onto the platform, where every curve and timeseries is checked the same way, every time, the moment it arrives.</p>
			</div>
			<div className="story_text">
				<p>Your team spends less time chasing bad data after the fact, and when an auditor or a trader asks why a number was used, the answer is in the record: what was checked, what failed, and who let it through and why.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>See Validation on Your Data</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will suggest checks for your own curves and timeseries from their last 30 days of data, and show you what they would have caught.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#3b82f6", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/smart-curves" text="Smart Curves" />
	</div>
</section>

<Demo />
