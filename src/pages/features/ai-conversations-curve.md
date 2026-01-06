---
title: AI Converations
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Curve AI Conversations" slogan="Real interations with the curve assistant for creating and working with Smart Curves" jpg="/img/icons/assistants/curve.png" />

<section className="section">
	<div className="container">
		<h2>Curve Assistant</h2>
		<p>The Curve Assistant combines deep knowledge of energy market structures with ODSL programming expertise, enabling both conversational curve building and sophisticated code generation.</p>
		<h5>Expertise Areas</h5>
		<ul>
			<li>Forward curve construction techniques</li>
			<li>Interpolation and extrapolation methods</li>
			<li>Gap handling and curve smoothing</li>
			<li>Multi-source curve blending</li>
			<li>Curve validation and quality checks</li>
		</ul>
	</div>
</section>

<section className="section">
	<div className="container">
		### Create a smart curve
		The curve assistant can create Smart Curves.
	</div>
</section>

<div class="chat-messages" id="chatMessages">
	<div class="message user">
		<div class="message-content">Can you create a smart curve using the yearSpread function using ICE Brent</div>
	</div>    
	<div class="message assistant">
		<div class="message-content">
		<div class="border-bottom mb-2"><span>Answer from assistant: <i class="bi-graph-up text-info fs-4 ms-1 me-1"></i><strong>Curve</strong></span></div>
		<p>🎉 <strong>Success!</strong> I've created a SMART curve for you!</p>
		<h2 id="smart-curve-details">SMART Curve Details</h2>
		<p><strong>Curve ID:</strong> <code>BRENT.YEARSPREAD</code></p>
		<p><strong>Configuration:</strong></p>
		<ul>
		<li><strong>Base Curve:</strong> ICE.IFEU.B:SETTLE (ICE Brent Crude Futures Settlement Prices)</li>
		<li><strong>Expression:</strong> <code>yearSpread(BASE)</code></li>
		<li><strong>Script:</strong> MyFunctions</li>
		<li><strong>What it does:</strong> Calculates 12-month year-over-year spreads from the ICE Brent forward curve</li>
		</ul>
		<h3 id="how-to-use-it">How to use it:</h3>
		<pre><code class="odsl language-odsl">// Retrieve the smart curve
		brent_year_spreads = $\{curve:"BRENT.YEARSPREAD:2024-01-15"\}
		&nbsp;
		// Or get the latest curve
		latest_spreads = $\{curve:"BRENT.YEARSPREAD"\}
		&nbsp;
		// Print results
		print brent_year_spreads</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
		<h3 id="example-output">Example Output:</h3>
		<p>The curve will contain contracts like:</p>
		<ul>
		<li><strong>M01-M13:</strong> 2.50 (January vs January next year)</li>
		<li><strong>M02-M14:</strong> 1.75 (February vs February next year)</li>
		<li><strong>M03-M15:</strong> 0.50 (March vs March next year)</li>
		<li>etc.</li>
		</ul>
		<p>This helps traders analyze the <strong>seasonal contango/backwardation pattern</strong> in Brent crude, showing how much the curve is moving up or down across a 12-month period.</p>
		<p>Would you like me to:</p>
		<ol>
		<li><strong>Retrieve and display</strong> the latest curve data?</li>
		<li><strong>Create other SMART curves</strong> with different spreads (6-month, 3-month, etc.)?</li>
		<li><strong>Modify the expression</strong> (e.g., add a scaling factor like <code>yearSpread(BASE) * 1.1</code>)?</li>
		</ol><i title="Like this response" class="bi-hand-thumbs-up me-1 actionicon"></i><i title="Dislike this response" class="bi-hand-thumbs-down me-1 actionicon"></i></div>
	</div>
</div>
