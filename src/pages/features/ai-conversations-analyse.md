---
title: AI Converations
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Analyse AI Conversations" slogan="Real interations with the analyse assistant for analysing and reporting on data" jpg="/img/icons/assistants/analyse.png" />

<section className="section">
	<div className="container">
		<h2>Analyse Assistant</h2>
		<p>Your quantitative analyst for market data exploration, statistical analysis, and insight generation.</p>
		<h5>Expertise Areas</h5>
		<ul>
			<li>Statistical analysis of price data and market relationships</li>
			<li>Correlation studies and spread analysis</li>
			<li>Volatility calculations and risk metrics</li>
			<li>Historical pattern recognition</li>
		</ul>
	</div>
</section>

<section className="section">
	<div className="container">
		### Analyse UK Power Prices
		The analyse assistant can use both internal data and external information from the internet.
	</div>
</section>

<div class="chat-messages" id="chatMessages">
	<div class="message user">
		<div class="message-content">What's driving the recent spike in UK power prices?</div>
	</div>    
	<div class="message assistant">
		<div class="message-content">
			<div class="border-bottom mb-2">
				<span>Answer from assistant: <i class="bi-chat-right-text text-secondary fs-4 ms-1 me-1"></i><strong>General</strong></span>
			</div>
			<p>Based on recent information, here's what's driving UK power prices up:</p>
			<h2 id="primary-driver-wholesale-gas-prices">Primary Driver: Wholesale Gas Prices</h2>
			<p>A recent spike in wholesale prices is the main driver of price rises, accounting for around 78% of the total increase</p>
			<blockquote>
			<p>Energy price cap will rise by 6.4% from April | Ofgem<br/>
			<span><a target="_blank" href="https://www.ofgem.gov.uk/press-release/energy-price-cap-will-rise-64-april">https://www.ofgem.gov.uk/press-release/energy-price-cap-will-rise-64-april</a></span></p>
			</blockquote>
			<p>announced in April 2025. The rise in the price cap is overwhelmingly caused by the increase in wholesale costs of energy – primarily the cost of gas</p>
			<blockquote>
			<p>Energy UK Explains: April 2025 price cap rise - Energy UK<br/>
			<span><a target="_blank" href="https://www.energy-uk.org.uk/publications/energy-uk-explains-april-2025-price-cap-rise/">https://www.energy-uk.org.uk/publications/energy-uk-explains-april-2025-price-cap-rise/</a></span></p>
			</blockquote>
			<p>.</p>
			<h2 id="why-gas-prices-are-high">Why Gas Prices Are High</h2>
			<p>Several factors are putting upward pressure on gas and power prices:</p>
			<ol>
			<li><strong>Winter Weather &amp; Storage</strong>: January 2025 was colder than the 10-year average in the UK, leading to higher consumption of gas. Additionally, Europe is coming out of winter with far lower levels of gas storage compared to recent years, which has put pressure on prices</li>
			</ol>
			<blockquote>
			<p>Energy UK Explains: April 2025 price cap rise - Energy UK<br/>
			<span><a target="_blank" href="https://www.energy-uk.org.uk/publications/energy-uk-explains-april-2025-price-cap-rise/">https://www.energy-uk.org.uk/publications/energy-uk-explains-april-2025-price-cap-rise/</a></span></p>
			</blockquote>
			<p>.</p>
			<ol start="2">
			<li><strong>Structural Vulnerability</strong>: Gas sets the wholesale price of electricity in the UK 98% of the time</li>
			</ol>
			<blockquote>
			<p>Factcheck: Why expensive gas – not net-zero – is keeping UK electricity prices so high - Carbon Brief<br/>
			<span><a target="_blank" href="https://www.carbonbrief.org/factcheck-why-expensive-gas-not-net-zero-is-keeping-uk-electricity-prices-so-high/">https://www.carbonbrief.org/factcheck-why-expensive-gas-not-net-zero-is-keeping-uk-electricity-prices-so-high/</a></span></p>
			</blockquote>
			<p>, which means gas is bought and sold on a global market, meaning the price households in the UK pay for both electricity and gas is heavily influenced by gas prices, causing the price of electricity to fluctuate with gas prices even if cheaper sources are available</p>
			<blockquote>
			<p>Energy UK Explains: April 2025 price cap rise - Energy UK<br/>
			<span><a target="_blank" href="https://www.energy-uk.org.uk/publications/energy-uk-explains-april-2025-price-cap-rise/">https://www.energy-uk.org.uk/publications/energy-uk-explains-april-2025-price-cap-rise/</a></span></p>
			</blockquote>
			<p>.</p>
			<h2 id="additional-cost-factors">Additional Cost Factors</h2>
			<p>Beyond wholesale prices, other components are adding to bills:</p>
			<ul>
			<li><strong>Network Costs</strong>: The price cap increased in October 2025 largely because the price of maintaining and building the country's energy network has gone up, with network costs increasing by 6.5%</li>
			</ul>
			<blockquote>
			<p>Are energy prices going up? | Analysis [UK, 2025]<br/>
			<span><a target="_blank" href="https://www.sunsave.energy/blog/will-energy-bills-go-down">https://www.sunsave.energy/blog/will-energy-bills-go-down</a></span></p>
			</blockquote>
			<blockquote>
			<p>Are energy prices going up? | Analysis [UK, 2025]<br/>
			<span><a target="_blank" href="https://www.sunsave.energy/blog/will-energy-bills-go-down">https://www.sunsave.energy/blog/will-energy-bills-go-down</a></span></p>
			</blockquote>
			<p>.</p>
			<ul>
			<li><strong>Policy Costs</strong>: Policy costs have increased by 8.6%, largely down to the expansion of the £150 Warm Home Discount to another 2.7 million homes, which will cost £400 million</li>
			</ul>
			<blockquote>
			<p>Are energy prices going up? | Analysis [UK, 2025]<br/>
			<span><a target="_blank" href="https://www.sunsave.energy/blog/will-energy-bills-go-down">https://www.sunsave.energy/blog/will-energy-bills-go-down</a></span></p>
			</blockquote>
			<p>.</p>
			<ul>
			<li><strong>Growing Electricity Demand</strong>: An emerging critical factor is the explosive growth in electricity demand from artificial intelligence and data center expansion, with AI projected to drive a 165% increase in data center power demand by 2030</li>
			</ul>
			<blockquote>
			<p>UK Business Energy Costs 2025: Electricity Prices Surge Simplified<br/>
			<span><a target="_blank" href="https://kilowattenergy.co.uk/business-energy-costs-2025/">https://kilowattenergy.co.uk/business-energy-costs-2025/</a></span></p>
			</blockquote>
			<p>.</p>
			<p>In summary, the spike is primarily driven by wholesale gas costs influenced by global markets, winter weather conditions, low European storage levels, and increasing domestic demand pressures.</p><i title="Like this response" class="bi-hand-thumbs-up me-1 actionicon"></i><i title="Dislike this response" class="bi-hand-thumbs-down me-1 actionicon"></i>
		</div>
	</div>
</div>
