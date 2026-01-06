---
title: ODSL
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="ODSL Programming Language" slogan="Purpose-built for energy professionals" jpg="/img/icons/odsl.png" />

<section className="section">
	<div className="container">
		<h2>The Programming Language Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Energy and commodity trading operations demand sophisticated data manipulation, complex calculations, and intricate workflow automation. Traditionally, this requires either:</p>
                <p><b>General-Purpose Programming Languages:</b> (Python, Java, C#) Powerful but verbose when dealing with energy-specific concepts. Simple operations like "shift this forward curve by one business day" or "calculate the spread between two timeseries" require dozens of lines of boilerplate code handling date conventions, data structures, and edge cases.</p>
                <p><b>Spreadsheets:</b> Accessible but limited, error-prone, and impossible to version control or scale. Complex formulas become unmaintainable. Sharing logic across teams means copying spreadsheets, creating versioning nightmares.</p>
                <p><b>The result:</b> Traders and analysts spend excessive time writing repetitive code rather than implementing sophisticated logic. Developers unfamiliar with energy markets struggle to understand domain-specific requirements. Code becomes brittle, difficult to maintain, and hard to understand months after being written.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>OpenDataDSL Language (ODSL) is a programming language designed specifically for energy and commodity markets. ODSL expresses complex market operations in clear, concise syntax that mirrors how energy professionals think about data, curves, and workflows.</p>
				<p>ODSL isn't a general-purpose language trying to accommodate energy markets—it's built from the ground up for commodities trading, with native understanding of:</p>
				<ul>
                    <li><b>Timeseries:</b> Market data, prices, volumes with full calendar and business day awareness</li>
                    <li><b>Forward Curves:</b> Construction, manipulation, and transformation of forward price curves</li>
                    <li><b>Market Conventions:</b> Contract months, delivery periods, tenors, and commodity-specific structures</li>
                    <li><b>Data Workflows:</b> Extract, transform, load operations common in energy data management</li>
				</ul>
                <p>What requires 50-100 lines in Python or Java often takes 5-10 lines in ODSL. What's obscure and technical in general languages is clear and intuitive in ODSL.</p>
			</div>
		</div>
	</div>
</section>


<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>		
		<p>A programming language that accelerates development, democratizes access to automation, and makes your code as clear and maintainable as your trading strategies deserve to be.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Express Complex Operations Concisely</h4>
                <h5>What requires 50-100 lines in Python or Java takes 5-10 lines in ODSL.</h5>
				<p>Domain-specific syntax means operations like "build a forward curve from futures contracts" or "calculate rolling volatility with business day alignment" are single expressions, not dozens of lines of boilerplate code. Developers write less code, analysts understand what code does, and everyone maintains it easily.</p>
			</div>
			<div className="orange_item">
				<h4>Native Energy Market Understanding</h4>
                <h5>Timeseries, forward curves, and market conventions are built-in language constructs.</h5>
				<p>No importing libraries to handle contract months, delivery periods, business day calendars, or curve interpolation. ODSL understands delivery periods like ```2025Q02``` and ```M01``` natively. Date arithmetic, tenor calculations, and calendar alignments just work—exactly how energy professionals think about markets.</p>
			</div>
			<div className="orange_item">
				<h4>Readable by non-programmers</h4>
                <h5>Traders and analysts can understand and even write ODSL code.</h5>
				<p>Clear, intuitive syntax mirrors how energy market professionals naturally describe workflows. ```sparkSpread = powerCurve - (gasCurve * heatRate * 1.05)``` reads like the trading desk conversation, not like software engineering. This accessibility eliminates translation errors between business requirements and technical implementation.</p>
			</div>
			<div className="orange_item">
				<h4>Rapid Development and Prototyping</h4>
                <h5>Move from concept to working implementation in hours, not weeks.</h5>
				<p>Concise syntax and built-in domain intelligence eliminate the scaffolding and boilerplate that consume development time in general-purpose languages. Quantitative researchers test new strategies immediately. Analysts automate workflows without waiting for IT. Trading desks iterate on proprietary methods at market speed.</p>
			</div>
			<div className="orange_item">
				<h4>Seamless Platform Integration</h4>
                <h5>Direct access to your entire data infrastructure with simple syntax.</h5>
				<p>Reference market data with the data service e.g. ```${data:"ICE.IFEU.B"}```, save results with the ```save``` command. ODSL scripts power Smart Curves, drive AI Agents, define Custom Tools, and integrate with external systems—all using the same clear, consistent language throughout the platform.</p>
			</div>
			<div className="orange_item">
				<h4>Maintainable and Future-Proof Code</h4>
                <h5>Code written years ago remains clear and understandable.</h5>
				<p>ODSL's self-documenting nature means scripts don't require extensive comments—the intent is obvious from the syntax. When team members change, when strategies evolve, or when regulations shift, ODSL code can be confidently modified without archeological investigation into what the original developer intended. Your institutional knowledge stays accessible, not buried in obscure technical implementation.</p>
			</div>
		</div>
	</div>
</section>

<section className="section section_lfo">
	<div className="container">
		<h2>ODSL in Action: Real Example</h2>		
		<h3>Spark Spread Calculation - comparison between Python and ODSL</h3>
        <p>**The Task:** Calculate spark spread (power price minus gas cost adjusted for heat rate) across a forward curve.</p>
		<div className="story_content">
			<div className="story_text">
				<h3>Python</h3>
```py
import pandas as pd
import numpy as np
from datetime import datetime

# Load data
power_curve = load_data('power_prices')
gas_curve = load_data('gas_prices')

# Align dates
dates = pd.date_range(start='2025-01-01', end='2027-12-31', freq='MS')
power_aligned = power_curve.reindex(dates, method='ffill')
gas_aligned = gas_curve.reindex(dates, method='ffill')

# Calculate spark spread
spark_spread = power_aligned - (gas_aligned * 7.5 * 1.05)

# Monthly aggregation
result = spark_spread.resample('M').mean()
```
			</div>
			<div className="story_text">
				<h3>ODSL</h3>
```js
// Load forward curves
powerCurve = ${data:"EEX.EL.DE.BASE:SETTLE_MONTHS:2026-01-02"}
gasCurve = ${data:"EEX.NG.NL.TTF:SETTLE_MONTHS:2026-01-02"}

// Calculate spark spread
sparkSpread = powerCurve - (gasCurve * 7.5 * 1.05)
```
			</div>
		</div>
	</div>
</section>


<section className="section">
	<div className="container">
		<h2>From Verbose to Concise, From Generic to Specialized</h2>
		<div className="story_content">
			<div className="story_text">
				<p>ODSL transforms energy and commodity programming from verbose, error-prone general-purpose coding into concise, clear, domain-specific expressions. Your code reads like energy market logic because it is energy market logic—not generic programming constructs forced to accommodate domain concepts.</p>
			</div>
			<div className="story_text">
				<p>Whether you're building sophisticated Smart Curves, automating operational workflows, implementing proprietary trading strategies, or creating custom analytical tools, ODSL provides the language to express your expertise clearly, maintainably, and efficiently.</p>				
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>Ready to Transform Your Operations?</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Join energy and commodity professionals who are already leveraging OpenDataDSL and Fusion to work smarter, faster, and more profitably.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#3b82f6", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/fusion" text="Fusion AI" />
	</div>
</section>

<Demo />
