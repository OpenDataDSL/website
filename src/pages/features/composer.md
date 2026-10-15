---
title: Composer
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Composer" slogan="Your market views, built in minutes and kept up to date" jpg="/img/icons/composer.png" />

<section className="section">
	<h1>Line up curves and timeseries side by side, calculate spreads and margins, and chart them. No code, no spreadsheet copies, rebuilt every time the data changes.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Analysis Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Most of the analysis an energy and commodity team does every day comes down to putting prices next to each other and working something out:</p>
				<ul>
					<li>The NBP premium over TTF, tenor by tenor</li>
					<li>The clean spark spread from power, gas and carbon curves</li>
					<li>A curve converted to another currency and unit</li>
					<li>The front month of a forward curve as a daily history</li>
					<li>A customer price set by a formula on a market index</li>
				</ul>
				<p>Today that usually means a spreadsheet: data copied in by hand or by a macro, formulas that break when a tenor rolls, currencies converted with a rate someone typed in, and a chart that only one person knows how to refresh.</p>
				<p>The result is late, hard to check, and lives on one person's laptop instead of on the platform where everyone can use it.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>Composer builds these views directly on your OpenDataDSL data, as <b>compositions</b>: worksheets where every column is a curve, a timeseries, a formula, or a column of another composition, all lined up by tenor or by date.</p>
				<p>Composer converts currencies, units and calendars for you, shows the result as a table and a chart, and stores it as a report for every day you need, rebuilding it automatically when its data updates.</p>
				<p>Start from a template in the OpenDataDSL library, from one of your own, or simply describe what you want to Fusion AI.</p>
				<h4>Composer: Your Market Views, Built Once and Always Current</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Build the views your traders, analysts and risk team rely on, without code and without copying data around.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Built in Minutes</h4>
				<h5>Start from a template, or just describe it.</h5>
				<p>Pick one of 50 library templates, from curve spreads and clean spark spreads to LNG export margins, FX cross rates and soybean crush, fill in your curves and it runs. Or describe what you want and Fusion AI designs the composition for you to check and save.</p>
			</div>
			<div className="orange_item">
				<h4>Everything Lined Up</h4>
				<h5>Tenors, dates, currencies and units.</h5>
				<p>Columns are aligned by tenor on a curve worksheet and by date on a timeseries worksheet. Prices in pence per therm, dollars per barrel or euros per tonne are converted to the currency, units and calendar you choose, column by column.</p>
			</div>
			<div className="orange_item">
				<h4>Formulas Your Team Can Read</h4>
				<h5>Plain expressions, with suggestions as you type.</h5>
				<p>A spread is <code>NBP - TTF</code>; a clean spark spread is <code>POWER - GAS / 0.55 - 0.37 * CO2</code>. Expressions use the column ids, built-in functions and your own scripts, with suggestions and help as you type.</p>
			</div>
			<div className="orange_item">
				<h4>Always Up to Date</h4>
				<h5>Rebuilt when its data changes.</h5>
				<p>A saved composition is built and stored for each day automatically when the curves and timeseries it reads are updated, and compositions that use it are rebuilt after it. Build any range of past days in one go to fill in the history.</p>
			</div>
			<div className="orange_item">
				<h4>Results You Can Build On</h4>
				<h5>Publish any column as a curve or timeseries.</h5>
				<p>Turn a column, such as a spread or a converted price, into a composed curve or timeseries that the rest of the platform can use like any other: in other compositions, scripts, automations, the portal and Excel.</p>
			</div>
			<div className="orange_item">
				<h4>Shared With Everyone</h4>
				<h5>The same view in the portal, Excel and the gallery.</h5>
				<p>Every composition is a report in the portal and the Excel Add-in, where it opens as a clean table of just the columns you choose. The Composer gallery shows each analytics area as a board of live charts you can arrange and size to suit you.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How Composer Works</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Build It</h3>
				<p>Composer opens on your data: a toolbar, the chart and the table. Everything else is edited in a side panel beside it.</p>
				<p><b>Data columns:</b> a forward curve, a timeseries, or one tenor of a curve as a daily history, found by searching the platform.</p>
				<p><b>Expression columns:</b> spreads, ratios, margins and formulas calculated from the other columns.</p>
				<p><b>Linked columns:</b> a column of another composition, so one view can build on another.</p>
				<p><b>Settings:</b> the tenors to show, the calendar and date range, conversions, and how each column is charted.</p>
				<p>Every change can be undone, and Run shows the result for any day.</p>
			</div>
			<div className="story_text">
				<h3>Keep It Running</h3>
				<p>Once saved, a composition looks after itself:</p>
				<p><b>Stored Builds:</b> each day's result is stored, so opening a composition, or reading it in Excel, is instant.</p>
				<p><b>Excel Ready:</b> in the Excel Add-in a composition is a table of tenors or dates, with only the columns you mark for Excel and numbers you can calculate with.</p>
				<p><b>Automatic Rebuilds:</b> when an input curve or timeseries updates, the composition is rebuilt for that day.</p>
				<p><b>Chart Indicators:</b> add trend lines, levels, moving averages and Bollinger bands. Draw a trend line today and tomorrow's build shows it too.</p>
				<p><b>Templates:</b> save any composition as a template so the whole team can reuse the design with their own curves.</p>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>Ready-Made Templates</h2>
		<p>Start from the OpenDataDSL library: 50 templates across curves, power, gas, oil, carbon, coal, FX, metals, agriculture, risk and pricing. Use one as it is, or copy it to make it your own.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Clean Spark Spread</h4>
				<p><b>The Question:</b> What does a gas-fired plant earn, tenor by tenor?</p>
				<h5>The Composition</h5>
				<pre>
				- Power, gas and carbon curves
				- Gas cost at the plant's efficiency
				- Carbon cost per MWh generated
				- The clean spark spread by tenor
				</pre>
				<p><b>Result:</b> The generation margin for every month, quarter and year ahead, on one chart.</p>
			</div>
			<div className="blue_item">
				<h4>Gas Hub Basis</h4>
				<p><b>The Question:</b> How does one gas hub price against the benchmark?</p>
				<h5>The Composition</h5>
				<pre>
				- A hub and a benchmark curve
				- Converted to the same currency
				  and units
				- The basis between them by tenor
				</pre>
				<p><b>Result:</b> NBP against TTF, or any two hubs, compared like for like.</p>
			</div>
			<div className="blue_item">
				<h4>3:2:1 Crack Spread</h4>
				<p><b>The Question:</b> What is the refining margin across the curve?</p>
				<h5>The Composition</h5>
				<pre>
				- Crude, gasoline and distillate
				- Products converted to barrels
				- Three barrels of crude into two of
				  gasoline and one of distillate
				</pre>
				<p><b>Result:</b> The refining margin by tenor, from the curves you already have.</p>
			</div>
			<div className="blue_item">
				<h4>Rolling Front Months</h4>
				<p><b>The Question:</b> How have the prompt months traded day by day?</p>
				<h5>The Composition</h5>
				<pre>
				- The first three months of a
				  forward curve as daily histories
				- The prompt spread between
				  month one and month two
				</pre>
				<p><b>Result:</b> Continuous front month series for charts, analysis and models.</p>
			</div>
			<div className="blue_item">
				<h4>Oil-Indexed Gas</h4>
				<p><b>The Question:</b> How does an oil-indexed contract compare with hub gas?</p>
				<h5>The Composition</h5>
				<pre>
				- A slope on Brent plus a constant
				- A gas hub in the same currency
				  and units
				- The difference by tenor
				</pre>
				<p><b>Result:</b> Contract pricing against the market, updated every day.</p>
			</div>
			<div className="blue_item">
				<h4>Hedge Mark to Market</h4>
				<p><b>The Question:</b> What is a fixed price hedge worth today?</p>
				<h5>The Composition</h5>
				<pre>
				- Today's curve against the
				  hedge price
				- The difference times the volume
				- The value of each tenor
				</pre>
				<p><b>Result:</b> A daily mark to market without a spreadsheet.</p>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>Composer works with the data and tools you already use</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/smart-curves">
					<img src="/img/icons/curve.png" className="integrationSvg" />
				</a>
				<h4>Smart Curves</h4>
				<p>Compose any forward curve, and rebuild when it is rebuilt.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-catalogue">
					<img src="/img/icons/catalogue.png" className="integrationSvg" />
				</a>
				<h4>Data Catalogue</h4>
				<p>Use market data from the catalogue alongside your own.</p>
			</div>
			<div className="orange_item">
				<a href="/features/fusion">
					<img src="/img/icons/fusion.png" className="integrationSvg" />
				</a>
				<h4>Fusion AI</h4>
				<p>Describe a composition and Fusion designs it, or ask it to change one.</p>
			</div>
			<div className="orange_item">
				<a href="/features/odsl-code">
					<img src="/img/icons/odsl.png" className="integrationSvg" />
				</a>
				<h4>ODSL Language</h4>
				<p>Use ODSL functions and your own scripts in expressions.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-management">
					<img src="/img/icons/mdm.png" className="integrationSvg" />
				</a>
				<h4>Data Management</h4>
				<p>Compositions and their curves are stored on your master data, with automations.</p>
			</div>
			<div className="orange_item">
				<a href="/features/ai-playbooks">
					<img src="/img/icons/playbook.png" className="integrationSvg" />
				</a>
				<h4>AI Playbooks</h4>
				<p>Playbook steps read composed curves like any other curve.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Spreadsheets to Shared Views</h2>
		<div className="story_content">
			<div className="story_text">
				<p>Composer moves the analysis your team repeats every day off individual spreadsheets and onto the platform, where it is built the same way every time and checked by anyone who opens it.</p>
			</div>
			<div className="story_text">
				<p>Your analysts spend less time copying data and fixing formulas, and more time on what the numbers mean, with every view up to date by the time the market opens.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>See Your Spreads in Composer</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will build a composition on your own curves, from a spread or a margin your team calculates every day.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#3b82f6", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/odsl-code" text="ODSL Language" />
	</div>
</section>

<Demo />
