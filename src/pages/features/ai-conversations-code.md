---
title: AI Converations
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Code AI Conversations" slogan="Real interations with the code assistant for generating and using the ODSL language" jpg="/img/icons/assistants/code.png" />


<section className="section">
	<div className="container">
		<h2>Code Assistant</h2>
		<p>Your programming expert for ODSL development, scripting, and technical implementation.</p>
		<h5>Expertise Areas</h5>
		<ul>
			<li>ODSL language syntax and best practices</li>
			<li>Custom analytics development</li>
			<li>Data transformation scripting</li>
			<li>Code debugging and optimization</li>
			<li>Algorithm implementation</li>
			<li>Integration code examples</li>
		</ul>
	</div>
</section>


<section className="section">
	<div className="container">
		### Analysing Scripts
		The code assistant can pull stored user scripts from the platform and analyse the functionality.
	</div>
</section>

<div class="chat-messages" id="chatMessages">
	<div class="message user">
		<div class="message-content">Can you analyse the script MyFunctions to see what it does?</div>
	</div>    
	<div class="message assistant">
		<div class="message-content">
			<div class="border-bottom mb-2"><span>Answer from assistant: <i class="bi-code text-success fs-4 ms-1 me-1"></i><strong>Code</strong></span></div>
			<p>Perfect! I found the <strong>MyFunctions</strong> script. Let me decode and analyze it for you:</p>
			<h2 id="script-analysis-myfunctions">Script Analysis: MyFunctions</h2>
			<p>
				<strong>Script Type:</strong> ODSL  <br/>
				<strong>Version:</strong> 2  <br/>
				<strong>Last Updated:</strong> 14 January 2022  <br/>
			</p>
			<h3 id="what-it-does">What It Does:</h3>
			<p>This script contains a <strong>single function called <code>timespread</code></strong> that calculates <strong>calendar spreads</strong> from a bootstrapped forward curve.</p>
			<h3 id="function-details">Function Details:</h3>
			<p><strong>Function Name:</strong> <code>timespread(input)</code></p>
			<p><strong>Purpose:</strong> Creates a new curve containing the spreads (price differences) between consecutive monthly contracts after bootstrapping an input curve.</p>
			<p><strong>How it works:</strong></p>
			<ol>
				<li><strong>Bootstraps the input curve</strong> - Converts the input curve into an arbitrage-free monthly curve using the <code>bootstrapCurve()</code> function</li>
				<li><strong>Creates a spread curve</strong> - Initializes a new empty curve with the same ondate as the input</li>
				<li><strong>Iterates through months</strong> - Loops through each month in the bootstrapped curve (starting from the second month)</li>
				<li><strong>Calculates spreads</strong> - For each month, calculates the difference between the current month's value and the previous month's value</li>
				<li><strong>Adds spread contracts</strong> - Creates new contracts in the form "M01-M02", "M02-M03", etc., with the calculated spread value</li>
				<li><strong>Returns the spread curve</strong> - The final output is a curve containing all the calendar spreads</li>
			</ol>
			<h3 id="example-usage">Example Usage:</h3>
			<pre><code class="odsl language-odsl">base_curve = $\{curve:"CRUDE_OIL:BASE:2022-01-14"\}
			spreads = timespread(base_curve)
			// Result: A curve with contracts like M01-M02: 0.50, M02-M03: -0.25, etc.</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
			<h3 id="use-case">Use Case:</h3>
			<p>This is commonly used in <strong>energy trading</strong> to analyze the <strong>contango/backwardation</strong> of futures markets by looking at the month-on-month price differences.</p>
			<p>Would you like me to help you:</p>
			<ul>
				<li><strong>Modify this function</strong> for a different purpose?</li>
				<li><strong>Create a similar function</strong> with different logic?</li>
				<li><strong>Test this function</strong> with sample data?</li>
			</ul>
		</div>
	</div>
</div>

<section className="section">
	<div className="container">
		### Create a curve build function
		This example shows the code assistant generating a new curve building function.
	</div>
</section>

<div class="chat-messages" id="chatMessages">
	<div class="message user">
		<div class="message-content">Can you create an odsl function that does a timespread, but with a spread of 12 months, e.g. M01-M13</div>
	</div>    
	<div class="message assistant">
		<div class="message-content">
			<div class="border-bottom mb-2"><span>Answer from assistant: <i class="bi-code text-success fs-4 ms-1 me-1"></i><strong>Code</strong></span></div>
			<p>Perfect! ✅ The script has been validated successfully. Here's the <strong>yearSpread</strong> function:</p>
			<h2 id="yearspread-function">yearSpread Function</h2>
			<pre><code class="odsl language-odsl">function yearSpread(input)
				bootstrapped = bootstrapCurve(input)
				spread = Curve(input.ondate)
				&nbsp;
				contracts = bootstrapped.contracts
				contractSize = contracts.size()
				&nbsp;
				for i = 1 to contractSize - 12
					current = contracts[i - 1]
					future = contracts[i + 11]
					&nbsp;
					spreadValue = future.value - current.value
					spreadTenor = current.tenor + "-" + future.tenor
					&nbsp;
					spread.add(spreadTenor, spreadValue)
				next
				&nbsp;
				yearSpread = spread
			end</code></pre>
			<h3 id="what-it-does">What it does:</h3>
			<p>Calculates <strong>12-month spreads</strong> (year-over-year spreads) from a forward curve. It compares prices that are 12 months apart (e.g., M01 vs M13, M02 vs M14, etc.).</p>
			<h3 id="function-signature">Function Signature:</h3>
			<pre><code class="odsl language-odsl">yearSpread(input)</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
			<h3 id="parameters">Parameters:</h3>
			<ul>
				<li><strong>input</strong> (Curve) - A forward curve to calculate spreads from</li>
			</ul>
			<h3 id="how-it-works">How it works:</h3>
			<ol>
				<li><strong>Bootstraps the input curve</strong> - Creates an arbitrage-free monthly curve</li>
				<li><strong>Creates a new curve</strong> - Initializes an empty curve for the year spreads</li>
				<li><strong>Iterates through contracts</strong> - Loops through all contracts, comparing each month with the month 12 periods ahead</li>
				<li><strong>Calculates spreads</strong> - Subtracts the earlier month value from the later month value (M13 - M01)</li>
				<li><strong>Creates spread contracts</strong> - Adds contracts labeled "M01-M13", "M02-M14", etc.</li>
				<li><strong>Returns the year spread curve</strong> - A curve containing all the 12-month spreads</li>
			</ol>
			<h3 id="example-usage">Example Usage:</h3>
			<pre><code class="odsl language-odsl">// Load a crude oil curve
			crude = $\{curve:"CRUDE_OIL:BASE:2024-01-15"\}
			&nbsp;
			// Calculate year spreads
			year_spreads = yearSpread(crude)
			&nbsp;
			// Print results
			print year_spreads
			// Output: Curve with M01-M13: 2.50, M02-M14: 1.75, M03-M15: 0.50, etc.</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
			<h3 id="use-case">Use Case:</h3>
			<p>This is useful for analyzing <strong>contango/backwardation patterns</strong> across a full year cycle, helping traders identify structural market conditions and seasonal patterns in commodity futures.</p>
			<hr/>
			<p>Would you like me to:</p>
			<ol>
				<li><strong>Save this function</strong> to the platform?</li>
				<li><strong>Modify the function</strong> (e.g., different spread periods, different calculation)?</li>
				<li><strong>Test it</strong> with actual market data?</li>
				<li><strong>Create other spread variations</strong> (e.g., 6-month spreads, quarterly spreads)?</li>
			</ol>
        </div>
	</div>
</div>

<section className="section">
	<div className="container">
		### Save script
		The code assistant can save the script to the platform.
	</div>
</section>


<div class="chat-messages" id="chatMessages">
	<div class="message user">
		<div class="message-content">Can you add the function to the MyFunctions script</div>
	</div>    
	<div class="message assistant">
		<div class="message-content">
		<div class="border-bottom mb-2"><span>Answer from assistant: <i class="bi-code text-success fs-4 ms-1 me-1"></i><strong>Code</strong></span></div>
		<p>Perfect! ✅ <strong>Successfully saved!</strong></p>
		<p>The <strong>yearSpread</strong> function has been added to your <strong>MyFunctions</strong> script. The script now contains <strong>both functions</strong>:</p>
		<ol>
			<li><strong>timespread(input)</strong> - Calculates month-on-month spreads (original function)</li>
			<li><strong>yearSpread(input)</strong> - Calculates 12-month year-over-year spreads (new function)</li>
		</ol>
		<h3 id="you-can-now-use-both-functions">You can now use both functions:</h3>
		<pre><code class="odsl language-odsl">// Get a curve
		curve = $\{curve:"CRUDE_OIL:BASE:2024-01-15"\}
		&nbsp;
		// Calculate month spreads
		monthly_spreads = timespread(curve)
		&nbsp;
		// Calculate year spreads
		yearly_spreads = yearSpread(curve)
		&nbsp;
		// Print results
		print "Monthly spreads: " + monthly_spreads
		print "Yearly spreads: " + yearly_spreads</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
		<p>The script has been saved with ID: <strong>ai-generated\MyFunctions</strong></p>
		<p>Would you like me to:</p>
		<ol>
			<li><strong>Create other spread functions</strong> (e.g., quarterly, seasonal)?</li>
			<li><strong>Test these functions</strong> with actual market data?</li>
			<li><strong>Modify the existing functions</strong>?</li>
		</ol><i title="Like this response" class="bi-hand-thumbs-up me-1 actionicon"></i><i title="Dislike this response" class="bi-hand-thumbs-down me-1 actionicon"></i></div>
	</div>
</div>

<section className="section">
	<div className="container">
		### Add comments to a script
		The code assistant can read a script from the platform, add comments to it and save it back
	</div>
</section>

<div class="chat-messages" id="chatMessages">
	<div class="message user">
		<div class="message-content">Can you add comments to the functions in the MyFunctions script and save it back</div>
	</div>    
	<div class="message assistant">
		<div class="message-content">
		<div class="border-bottom mb-2"><span>Answer from assistant: <i class="bi-code text-success fs-4 ms-1 me-1"></i><strong>Code</strong></span></div>
		<p>Perfect! ✅ <strong>Successfully saved!</strong></p>
		<p>The <strong>MyFunctions</strong> script has been updated with detailed comments for both functions. Here's what was added:</p>
		<pre><code class="odsl language-odsl">// Function: timespread
		// Description: Calculates month-on-month spreads from a bootstrapped forward curve
		// Parameters: input (Curve) - A forward curve to calculate spreads from
		// Returns: Curve - A curve containing consecutive month spreads (M01-M02, M02-M03, etc.)
		// Use Case: Analyze contango/backwardation patterns in commodity futures markets
		function timespread(input)
			bootstrapped = bootstrapCurve(input)
			spread = Curve(input.ondate)
			&nbsp;
			contracts = bootstrapped.contracts
			contractSize = contracts.size()
			&nbsp;
			// Loop through contracts, comparing each month with the next month
			for i = 1 to contractSize - 1
				current = contracts[i - 1]
				next = contracts[i]
				&nbsp;
				// Calculate the spread value (difference between consecutive months)
				spreadValue = next.value - current.value
				spreadTenor = current.tenor + "-" + next.tenor
				&nbsp;
				// Add the spread contract to the output curve
				spread.add(spreadTenor, spreadValue)
			next
			&nbsp;
			timespread = spread
		end
		&nbsp;
		// Function: yearSpread
		// Description: Calculates 12-month year-over-year spreads from a forward curve
		// Parameters: input (Curve) - A forward curve to calculate spreads from
		// Returns: Curve - A curve containing 12-month spreads (M01-M13, M02-M14, etc.)
		// Use Case: Analyze seasonal patterns and year-over-year contango/backwardation
		function yearSpread(input)
			bootstrapped = bootstrapCurve(input)
			spread = Curve(input.ondate)
			&nbsp;
			contracts = bootstrapped.contracts
			contractSize = contracts.size()
			&nbsp;
			// Loop through contracts, comparing each month with the month 12 periods ahead
			for i = 1 to contractSize - 12
				current = contracts[i - 1]
				future = contracts[i + 11]
				&nbsp;
				// Calculate the spread value (difference between 12-month apart contracts)
				spreadValue = future.value - current.value
				spreadTenor = current.tenor + "-" + future.tenor
				&nbsp;
				// Add the spread contract to the output curve
				spread.add(spreadTenor, spreadValue)
			next
			&nbsp;
			yearSpread = spread
		end</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
		<p>The script has been saved with <strong>comprehensive comments</strong> that document:</p>
		<ul>
			<li>Function purpose</li>
			<li>Parameters and return values</li>
			<li>Use cases</li>
			<li>Inline code explanations</li>
		</ul>
		<p>Would you like me to:</p>
		<ol>
			<li><strong>Add even more detailed comments</strong> (e.g., mathematical formulas, examples)?</li>
			<li><strong>Create documentation</strong> for this script?</li>
			<li><strong>Test the functions</strong> with actual data?</li>
		</ol><i title="Like this response" class="bi-hand-thumbs-up me-1 actionicon"></i><i title="Dislike this response" class="bi-hand-thumbs-down me-1 actionicon"></i></div>
        </div>
    <div>
	</div>
</div>

