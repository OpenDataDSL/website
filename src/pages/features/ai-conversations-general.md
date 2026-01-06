---
title: AI Converations
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="General AI Conversations" slogan="Real interations with the general assistant for help using the OpenDataDSL Platform" jpg="/img/icons/assistants/general.png" />

<section className="section">
	<div className="container">
		<h2>General Assistant</h2>
		<p>Your starting point for any question about energy markets, trading concepts, or platform navigation.</p>
		<h5>Expertise Areas</h5>
		<ul>
			<li>Market fundamentals and trading concepts</li>
			<li>Platform feature explanations and guidance</li>
			<li>General energy industry knowledge</li>
			<li>Routing complex questions to specialized assistants</li>
		</ul>
	</div>
</section>

<section className="section">
	<div className="container">
		### Ask about code syntax
		The general assistant can search the OpenDataDSL documentation site for information about code syntax
	</div>
</section>

<div class="chat-messages" id="chatMessages">
	<div class="message user">
		<div class="message-content">Can you create a smart curve using the yearSpread function using ICE Brent</div>
	</div>    
	<div class="message assistant">
		<div class="message-content">
			<div class="border-bottom mb-2">
				<span>Answer from assistant: <i class="bi-chat-right-text text-secondary fs-4 ms-1 me-1"></i><strong>General</strong></span>
			</div>
			<h2 id="odsl-array-iteration-syntax">ODSL Array Iteration Syntax</h2>
			<p>Great question! Here are the main ways to iterate through arrays in ODSL:</p>
			<h3 id="1-forin-loop-iterating-through-array-elements"><strong>1. For…In Loop (Iterating through array elements)</strong></h3>
			<p>Use <code>for arg in args</code> followed by <code>next</code> to loop through an array and print each element</p>
			<blockquote>
			<p>Getting started with ODSL | OpenDataDSL - Smart SAAS Data Management<br />
			<span><a target="_blank" href="https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl">https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl</a></span></p>
			</blockquote>
			<p>:</p>
			<pre><code class="odsl language-odsl">args = ["Hello", "World"]
			for arg in args
			print arg
			next</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
			<h3 id="2-for-loop-iterating-through-a-range-of-numbers"><strong>2. For Loop (Iterating through a range of numbers)</strong></h3>
			<p>You can loop through a sequence of numbers using a for statement from a start to end value, with <code>next</code> ending the loop</p>
			<blockquote>
			<p>Getting started with ODSL | OpenDataDSL - Smart SAAS Data Management<br />
			<span><a target="_blank" href="https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl">https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl</a></span></p>
			</blockquote>
			<blockquote>
			<p>Getting started with ODSL | OpenDataDSL - Smart SAAS Data Management<br />
			<span><a target="_blank" href="https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl">https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl</a></span></p>
			</blockquote>
			<p>:</p>
			<pre><code class="odsl language-odsl">for i = 1 to 10
			print i
			next</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
			<h3 id="3-while-loop"><strong>3. While Loop</strong></h3>
			<p>Used to loop around code whilst a condition is true</p>
			<blockquote>
			<p>Language Glossary | OpenDataDSL - Smart SAAS Data Management<br />
			<span><a target="_blank" href="https://doc.opendatadsl.com/docs/odsl/glossary">https://doc.opendatadsl.com/docs/odsl/glossary</a></span></p>
			</blockquote>
			<blockquote>
			<p>Language Glossary | OpenDataDSL - Smart SAAS Data Management<br />
			<span><a target="_blank" href="https://doc.opendatadsl.com/docs/odsl/glossary">https://doc.opendatadsl.com/docs/odsl/glossary</a></span></p>
			</blockquote>
			<p>:</p>
			<pre><code class="odsl language-odsl">a = 0
			while a &lt; 10
			a = a + 1
			end</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
			<h3 id="4-conditional-logic-within-loops"><strong>4. Conditional Logic within Loops</strong></h3>
			<p>You can add conditions within loops using <code>if</code>, <code>elseif</code>, and <code>else</code> statements, where equality checks use <code>==</code> (distinguishing from assignment with single <code>=</code>)</p>
			<blockquote>
			<p>Getting started with ODSL | OpenDataDSL - Smart SAAS Data Management<br />
			<span><a target="_blank" href="https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl">https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl</a></span></p>
			</blockquote>
			<p>:</p>
			<pre><code class="odsl language-odsl">for i = 1 to 10
			if i &gt; 5
				print i
			elseif i == 3
				print "Three"
			else
				print "Something else"
			end
			next</code><i title="Copy this code" class="bi-copy me-1 float-end actionicon"></i></pre>
			<h3 id="key-points"><strong>Key Points:</strong></h3>
			<ul>
			<li>Arrays are constructed using square brackets <code>[' and ']'</code></li>
			</ul>
			<blockquote>
			<p>Getting started with ODSL | OpenDataDSL - Smart SAAS Data Management<br />
			<span><a target="_blank" href="https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl">https://doc.opendatadsl.com/docs/tutorials/gettingstartedodsl</a></span></p>
			</blockquote>
			<ul>
			<li>ODSL is simple and similar to BASIC with special extensions</li>
			<li>The VS Code ODSL extension provides helpful code snippets - typing <code>for</code> at the start of a line prompts a template you can tab through and customize</li>
			</ul>
			<blockquote>
			<p>Microsoft VS Code Extension | OpenDataDSL - Smart SAAS Data Management<br/ >
			<span><a target="_blank" href="https://doc.opendatadsl.com/docs/user/vscode">https://doc.opendatadsl.com/docs/user/vscode</a></span></p>
			</blockquote>
			<p>Would you like me to show you more advanced examples or explain any specific use case?</p><i title="Like this response" class="bi-hand-thumbs-up me-1 actionicon"></i>
			<i title="Dislike this response" class="bi-hand-thumbs-down me-1 actionicon"></i>
		</div>
	</div>
</div>

<section className="section">
	<div className="container">
		### Validate holiday calendars
		The general assistant can validate the OpenDataDSL calendars against external sources
	</div>
</section>

<div class="chat-messages" id="chatMessages">
	<div class="message user">
		<div class="message-content">Can you validate the calendar #HENG 2026 holidays against other internet sources?</div>
	</div>    
	<div class="message assistant">
		<div class="message-content">
			<div class="border-bottom mb-2">
				<span>Answer from assistant: <i class="bi-chat-right-text text-secondary fs-4 ms-1 me-1"></i><strong>General</strong></span>
			</div>
			<h2 id="summary-calendar-validation-results-for-heng-2026">Summary: Calendar Validation Results for #HENG 2026</h2>
			<p>I've successfully validated the <strong>#HENG (England and Wales Holidays) calendar</strong> for 2026 against multiple internet sources. Here are the results:</p>
			<h3 id="✅-validation-passed---all-holidays-verified"><strong>✅ VALIDATION PASSED - All Holidays Verified</strong></h3>
			<p>The OpenDataDSL #HENG calendar contains <strong>8 holidays</strong> that are <strong>all accurate</strong>:</p>
			<table>
			<thead>
			<tr>
			<th id="date">Date</th>
			<th id="holiday">Holiday</th>
			<th id="status">Status</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>January 1</td>
			<td>New Year's Day</td>
			<td>✅ Verified</td>
			</tr>
			<tr>
			<td>April 3</td>
			<td>Good Friday</td>
			<td>✅ Verified</td>
			</tr>
			<tr>
			<td>April 6</td>
			<td>Easter Monday</td>
			<td>✅ Verified</td>
			</tr>
			<tr>
			<td>May 4</td>
			<td>Early May Bank Holiday</td>
			<td>✅ Verified</td>
			</tr>
			<tr>
			<td>May 25</td>
			<td>Spring Bank Holiday</td>
			<td>✅ Verified</td>
			</tr>
			<tr>
			<td>August 31</td>
			<td>Summer Bank Holiday</td>
			<td>✅ Verified</td>
			</tr>
			<tr>
			<td>December 25</td>
			<td>Christmas Day</td>
			<td>✅ Verified</td>
			</tr>
			<tr>
			<td>December 28</td>
			<td>Boxing Day (Substitute)</td>
			<td>✅ Verified</td>
			</tr>
			</tbody>
			</table>
			<h3 id="key-validation-details">Key Validation Details:</h3>
			<p>All dates match official UK 2026 bank holiday information</p>
			<blockquote>
			<p>2026 UK Bank Holidays – Stay Prepared | Good Tuesday<br/>
			<span><a target="_blank" href="https://goodtuesday.com/pages/2026-uk-bank-holidays">https://goodtuesday.com/pages/2026-uk-bank-holidays</a></span></p>
			</blockquote>
			<p>, including:</p>
			<ul>
			<li>The substitute weekday for Boxing Day correctly falls on Monday (December 28), since Christmas falls on a weekend in 2026</li>
			</ul>
			<blockquote>
			<p>UK bank holidays - GOV.UK<br/>
			<span><a target="_blank" href="https://www.gov.uk/bank-holidays">https://www.gov.uk/bank-holidays</a></span></p>
			</blockquote>
			<ul>
			<li>When a bank holiday is on a weekend, a substitute weekday becomes a bank holiday, normally the following Monday</li>
			</ul>
			<blockquote>
			<p>England and Wales Bank Holidays 2026 - UK Holidays<br/>
			<span><a target="_blank" href="https://uk-public-holidays.com/england-and-wales-bank-holidays-2026/">https://uk-public-holidays.com/england-and-wales-bank-holidays-2026/</a></span></p>
			</blockquote>
			<ul>
			<li>England and Wales have eight bank holidays in 2026</li>
			</ul>
			<blockquote>
			<p>Bank Holidays 2026 | Away Resorts<br/>
			<span><a target="_blank" href="https://www.awayresorts.co.uk/discover/bank-holidays/">https://www.awayresorts.co.uk/discover/bank-holidays/</a></span></p>
			</blockquote>
			<blockquote>
			<p>Bank Holidays 2026 | Away Resorts<br/>
			<span><a target="_blank" href="https://www.awayresorts.co.uk/discover/bank-holidays/">https://www.awayresorts.co.uk/discover/bank-holidays/</a></span></p>
			</blockquote>
			<p>, matching the #HENG calendar exactly</p>
			<h3 id="sources-cross-referenced">Sources Cross-Referenced:</h3>
			<ul>
			<li>Official GOV.UK bank holidays page</li>
			<li>Good Tuesday (2026 UK Bank Holidays)</li>
			<li>Public Holiday Guide</li>
			<li>Multiple authoritative UK holiday tracking websites</li>
			</ul>
			<p><strong>Conclusion:</strong> Your #HENG 2026 calendar is <strong>100% accurate</strong> and consistent with all official UK sources.</p><i title="Like this response" class="bi-hand-thumbs-up me-1 actionicon"></i><i title="Dislike this response" class="bi-hand-thumbs-down me-1 actionicon"></i>
		</div>
	</div>
</div>