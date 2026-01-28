---
title: Smart Curves
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Smart Curves" slogan="Create with AI, build with precision" jpg="/img/icons/curve.png" />

<section className="section">
	<h1>Transform forward curve construction from a time-consuming, error-prone manual bottleneck into intelligent, consistent, automated infrastructure.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Forward Curve Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Forward curves are fundamental to energy and commodity trading—essential for pricing deals, valuing portfolios, managing risk, and making strategic decisions. Yet building accurate, consistent curves remains surprisingly labor-intensive:</p>
				<ul>
					<li><b>Manual Spreadsheet Workflows:</b> Traders and analysts spend hours daily copying data from multiple sources, applying interpolation rules, handling gaps, and adjusting for market conventions. A single curve might require data from spot markets, futures exchanges, and broker quotes—each with different structures and timing.</li>
					<li><b>Inconsistency Across Teams:</b> Different desks build the same curve differently. One trader uses linear interpolation, another prefers cubic splines. Marketing uses yesterday's curve while trading updated theirs this morning. Portfolio valuation and risk reporting diverge because they're based on different curve versions.</li>
					<li><b>Error-Prone Processes:</b> Manual curve construction introduces mistakes—missed contract months, incorrect date alignments, formula errors in spreadsheets. These errors cascade through valuations, hedging decisions, and regulatory reports.</li>
					<li><b>Time-Sensitive Operations:</b> Markets move fast. When a major price publication hits or breaking news impacts fundamentals, curves need immediate updates. Manual processes can't keep pace.</li>
					<li><b>Complex Market Structures:</b> Energy markets have unique characteristics—seasonality patterns, delivery periods, locational basis differentials, calendar vs. contract month structures. Generic curve tools don't understand these nuances.</li>
				</ul>
			</div>
			<div className="story_text">
				<h3>Smart Curves</h3>
				<p>OpenDataDSL's Smart Curves transforms forward curve construction from manual drudgery into intelligent automation. Smart curves in-built curve intelligence and market understanding help you build better curves:</p> 
				<ul>
					<li><b>Market Convention Awareness:</b> Smart Curves understands how different energy markets work.</li>
					<li><b>Automatic Gap Handling:</b> Markets don't always provide complete forward coverage. Smart Curves intelligently fills gaps using configurable methods.</li>
					<li><b>Seasonality Recognition:</b> Energy markets exhibit strong seasonal patterns. Smart Curves automatically detects and applies.</li>
					<li><b>Multiple Input Sources:</b> A single curve might combine:</li>
					<ul>
						<li>Exchange-traded futures for near-term liquidity</li>
						<li>Broker quotes for illiquid tenors</li>
						<li>Assessed prices from price reporting agencies</li>
						<li>Proprietary models for far-forward periods</li>
					</ul>
				</ul>
				<p>Smart Curves merges these sources intelligently, prioritizing based on liquidity, recency, and reliability.</p>
				<p>The system builds accurate, consistent curves automatically—understanding market conventions, handling gaps intelligently, and ensuring your entire organization works from the same validated curves.</p>
				<h4>Automation Meets Expertise</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>		
		<p>Frree your analysts from mechanical work to focus on strategic market analysis and profitable trading decisions.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>Automated Curve Construction in Minutes, Not Hours</h4>
                <h5>Build accurate forward curves automatically using intelligent methodologies.</h5>
				<p>What previously required 3-4 hours of manual spreadsheet work—collecting data from multiple sources, applying interpolation rules, handling gaps, validating results—now happens in minutes. Smart Curves understands market conventions, applies appropriate techniques, and delivers production-ready curves without manual intervention.</p>
			</div>
			<div className="orange_item">
				<h4>Intelligent Gap Handling and Market Convention Awareness</h4>
                <h5>No more manual workarounds for missing data or market complexities.</h5>
				<p>Smart Curves automatically handles incomplete forward coverage using configurable interpolation methods, recognizes seasonal patterns, understands delivery period structures, and applies commodity-specific conventions. Power curves with hourly granularity, natural gas with calendar month structures, oil with contract vs. delivery distinctions—all handled natively and correctly.</p>
			</div>
			<div className="orange_item">
				<h4>Consistency Across Your Entire Organization</h4>
                <h5>Eliminate valuation disputes caused by different curve-building approaches. </h5>
				<p>Everyone works from the same validated curves built using the same approved methodology. No more discrepancies between trading desk curves and risk management curves, or between morning valuations and afternoon reports. One source of truth for all forward pricing across all teams and systems.</p>
			</div>
			<div className="orange_item">
				<h4>Real-Time Updates with Full Version Control</h4>
                <h5>Curves rebuild automatically when market data changes—with complete audit trails.</h5>
				<p>When exchange settlements publish or broker quotes update, dependent curves refresh immediately without manual intervention. Every curve update creates a versioned snapshot, providing complete transparency into what curve was used for any historical valuation, trade, or risk calculation—critical for compliance and trade reconstruction.</p>
			</div>
			<div className="orange_item">
				<h4>Flexible Methodologies: Code or Conversation</h4>
                <h5>Build curves using ODSL code for precision or Fusion AI for convenience.</h5>
				<p>Sophisticated users encode proprietary curve-building logic in ODSL scripts—custom interpolation methods, multi-source blending, fundamental models. Non-technical users build curves conversationally through Fusion's Curve Assistant: "Build a Brent curve using ICE futures for 24 months, then extend using IEA forecasts through 2030." Both approaches deliver production-quality results.</p>
			</div>
			<div className="orange_item">
				<h4>Platform Integration for Automated Workflows</h4>
                <h5>Curves power your entire operation seamlessly. </h5>
				<p>AI Agents rebuild curves on schedule and monitor for significant moves. Portfolio valuation tools use curves automatically for mark-to-market calculations. Risk systems access curves via API for real-time exposure analysis. Custom analytics reference curves with simple syntax. External systems receive curve updates through automated integrations—all without manual exports or data transfers.</p>
			</div>
		</div>
	</div>
</section>


<section className="section section_lfo">
	<div className="container">
		<h2>Curve Creation</h2>		
		<h3>Using ODSL code</h3>
		<p>Example timespread function</p>

		```js
				function timespread(input)
					// Bootstrap the input curve to create 
					//an arbitrage-free monthly curve
					bootstrapped = bootstrapCurve(input)
					&nbsp;							
					// Create a new curve to store the spread values
					spread = Curve(input.ondate)
					&nbsp;							
					// Get all contracts from the bootstrapped curve
					contracts = bootstrapped.contracts
					&nbsp;							
					// Get the total number of contracts
					contractSize = contracts.size()
					&nbsp;
					// Iterate through contracts
					for i = 2 to contractSize
						// Get the current contract
						current = contracts[i - 1]
						&nbsp;
						// Get the previous contract
						previous = contracts[i - 2]
						&nbsp;
						// Calculate the spread value as the difference 
						// between consecutive contracts
						spreadValue = current.value - previous.value
						&nbsp;
						// Create the spread tenor label (e.g., "M01-M02")
						spreadTenor = previous.tenor + "-" + current.tenor
						&nbsp;
						// Add the spread contract to the curve
						spread.add(spreadTenor, spreadValue)
					next
					&nbsp;
					// Return the spread curve
					timespread = spread
				end
```

		<h3>Using Fusion AI</h3>
				<div className="chat-messages" id="chatMessages">
					<div className="message user">
						<div className="message-content">Can you create an odsl function that performs a timespread, e.g. M01-M02</div>
					</div>    
					<div className="message assistant">
						<div className="message-content">
							<div className="border-bottom mb-2"><span>Answer from assistant: <i className="bi-code text-success fs-4 ms-1 me-1"></i><strong>Code</strong></span></div>
							<p>Perfect! ✅ The script has been validated successfully. Here's the <strong>timeSpread</strong> function:</p>
							<h2 id="timespread-function">timeSpread Function</h2>
							<pre><code className="odsl language-odsl">function timeSpread(input)
								bootstrapped = bootstrapCurve(input)
								spread = Curve(input.ondate)
								&nbsp;
								contracts = bootstrapped.contracts
								contractSize = contracts.size()
								&nbsp;
								for i = 2 to contractSize
									current = contracts[i - 1]
									future = contracts[i - 2]
									&nbsp;
									spreadValue = future.value - current.value
									spreadTenor = current.tenor + "-" + future.tenor
									&nbsp;
									spread.add(spreadTenor, spreadValue)
								next
								&nbsp;
								timeSpread = spread
							end</code></pre>
							<br/>
							<h3 id="what-it-does">What it does:</h3>
							<p>Calculates <strong>month spreads</strong> (month-over-month spreads) from a forward curve. It compares prices that are 1 month apart (e.g., M01 vs M02, M02 vs M03, etc.).</p>
							<br/>
							<h3 id="function-signature">Function Signature:</h3>
							<pre><code className="odsl language-odsl">timeSpread(input)</code></pre>
							<br/>
							<h3 id="parameters">Parameters:</h3>
							<ul>
								<li><strong>input</strong> (Curve) - A forward curve to calculate spreads from</li>
							</ul>
							<br/>
							<h3 id="example-usage">Example Usage:</h3>
							<pre><code className="odsl language-odsl">// Load a crude oil curve
							crude = $\{data:"ICE.IFEU.B:SETTLE:2024-01-15"\}
							&nbsp;
							// Calculate spreads
							spreads = timeSpread(crude)
							&nbsp;
							// Print results
							print spreads
							// Output: Curve with M01-M102: 2.50, M02-M03: 1.75, M03-M04: 0.50, etc.</code></pre>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>Smart Curves don't exist in isolation—they're integral to OpenDataDSL's complete platform</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/data-catalogue">
					<img src="/img/icons/catalogue.png" className="integrationSvg" />
				</a>
				<h4>Data Catalogue</h4>
				<p>Curves automatically pull from catalogued market data. When you build a curve, you reference standardized datasets, not raw vendor feeds.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-management#smart-loaders">
					<img src="/img/icons/mdm.png" className="integrationSvg" />
				</a>
				<h4>Smart Loaders</h4>
				<p>Curves rebuild automatically when underlying data updates. A new futures settlement triggers immediate curve recalculation.</p>
			</div>
			<div className="orange_item">
				<a href="/features/ai-agents">
					<img src="/img/icons/agent.png" className="integrationSvg" />
				</a>
				<h4>AI Agents</h4>
				<p>Automate curve construction workflows—daily updates, exception monitoring, publication to downstream systems.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Manual to Intelligent</h2>
		<div className="story_content">
			<div className="story_text">
				<p>Smart Curves transforms forward curve construction from a repetitive, error-prone manual task into an intelligent, automated process. Whether you prefer the precision of ODSL code or the convenience of Fusion's conversational AI, OpenDataDSL provides the tools to build accurate curves efficiently.</p>
			</div>
			<div className="story_text">
				<p>Your team spends less time on mechanical curve construction and more time on what matters—understanding market dynamics, identifying opportunities, and executing profitable trades.</p>				
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>Ready to Transform Your Curve Operations?</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Join energy and commodity professionals who are already leveraging OpenDataDSL and Fusion to work smarter, faster, and more profitably.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#3b82f6", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/odsl-code" text="ODSL Language" />
	</div>
</section>

<Demo />
