---
title: Smart Curves
hide_table_of_contents: true
---

import { Feature, Integration } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="Smart Curves" slogan="Create with AI, build with precision" jpg="/img/icons/curve.jpg" />

## The Forward Curve Challenge
Forward curves are fundamental to energy and commodity trading—essential for pricing deals, valuing portfolios, managing risk, and making strategic decisions. Yet building accurate, consistent curves remains surprisingly labor-intensive:

**Manual Spreadsheet Workflows:** Traders and analysts spend hours daily copying data from multiple sources, applying interpolation rules, handling gaps, and adjusting for market conventions. A single curve might require data from spot markets, futures exchanges, and broker quotes—each with different structures and timing.

**Inconsistency Across Teams:** Different desks build the same curve differently. One trader uses linear interpolation, another prefers cubic splines. Marketing uses yesterday's curve while trading updated theirs this morning. Portfolio valuation and risk reporting diverge because they're based on different curve versions.

**Error-Prone Processes:** Manual curve construction introduces mistakes—missed contract months, incorrect date alignments, formula errors in spreadsheets. These errors cascade through valuations, hedging decisions, and regulatory reports.

**Time-Sensitive Operations:** Markets move fast. When a major price publication hits or breaking news impacts fundamentals, curves need immediate updates. Manual processes can't keep pace.

**Complex Market Structures:** Energy markets have unique characteristics—seasonality patterns, delivery periods, locational basis differentials, calendar vs. contract month structures. Generic curve tools don't understand these nuances.

## Smart Curves: Automation Meets Expertise
OpenDataDSL's Smart Curves transforms forward curve construction from manual drudgery into intelligent automation. The system builds accurate, consistent curves automatically—understanding market conventions, handling gaps intelligently, and ensuring your entire organization works from the same validated curves.

### Intelligence Built In
**Market Convention Awareness:** Smart Curves understands how different energy markets work:

* Power curves with hourly, daily, weekly, monthly, quarterly, and seasonal granularity
* Natural gas with calendar month, balance-of-month, and prompt structures
* Oil with contract month vs. delivery period distinctions
* Coal with different quotation periods across regional markets

**Automatic Gap Handling:** Markets don't always provide complete forward coverage. Smart Curves intelligently fills gaps using configurable methods:

* Forward/backward interpolation based on liquid contracts
* Seasonal patterns learned from historical data
* Basis relationships to correlated markets
* User-defined rules for specific market conditions

**Seasonality Recognition:** Energy markets exhibit strong seasonal patterns. Smart Curves automatically detects and applies:

* Summer/winter differentials in power and gas
* Shoulder season characteristics
* Day-of-week patterns for power curves
* Holiday and weekend adjustments

**Multiple Input Sources:** A single curve might combine:

* Exchange-traded futures for near-term liquidity
* Broker quotes for illiquid tenors
* Assessed prices from price reporting agencies
* Proprietary models for far-forward periods

Smart Curves merges these sources intelligently, prioritizing based on liquidity, recency, and reliability.

## Consistency and Control
#### Versioned Curves
Every curve update creates a versioned snapshot. Track exactly what curve was used for any historical valuation, audit trades, or analyze how curves evolved through market events.

#### Audit Trail 
Complete transparency into curve construction—which data points were used, what methodology was applied, when updates occurred, who approved changes.

#### Access Control
Role-based permissions ensure appropriate oversight. Junior analysts can view curves, senior traders can approve updates, risk managers can lock curves for official valuations.

#### Real-Time Updates
When underlying market data changes, dependent curves update automatically. One settlement publication triggers updates across all affected forward curves, ensuring consistency.

## Building Curves with ODSL Code
For sophisticated curve construction requiring custom logic, OpenDataDSL's domain-specific language (ODSL) provides powerful yet concise syntax specifically designed for energy market operations.

### Simple Curve Construction
```js
// Build a natural gas forward curve from futures contracts
curve = bootstrapCurve(NYMEX_NG_FUTURES, "FORWARD")

// Apply seasonal adjustment based on historical patterns
curve = seasonalAdjust(curve, HISTORICAL_SEASONAL_FACTORS)

// Extend curve beyond liquid contracts using fundamental model
curve = extend(curve, GAS_STORAGE_MODEL, "2027-12-31")
```

### Handling Multiple Input Sources
```js
// Combine exchange data with broker quotes
nearCurve = bootstrapCurve(ICE_BRENT_FUTURES[1:24], "FORWARD")
farCurve = brokerQuotes(OIL_BROKER_DATA, "ANNUAL", "2026-01-01", "2030-12-31")

// Blend curves with smooth transition
blendedCurve = blend(nearCurve, farCurve, "2025-12-31", 3)
```

### Complex Market-Specific Logic
```js
// Power curve with base, peak, off-peak structure
baseCurve = bootstrapCurve(POWER_BASE_FUTURES, "FORWARD")
peakCurve = bootstrapCurve(POWER_PEAK_FUTURES, "FORWARD")

// Calculate off-peak from base and peak using market relationships
offPeakCurve = deriveOffPeak(baseCurve, peakCurve, PEAK_HOURS_PROFILE)

// Create hourly profiles for each delivery period
hourlyCurve = createHourlyProfile(baseCurve, peakCurve, offPeakCurve, DAILY_SHAPE)
```

## ODSL Advantages
#### Domain-Specific Syntax
Operations like bootstrapCurve, seasonalAdjust, and extend are native language constructs—not library functions requiring verbose configuration.

#### Timeseries Native
ODSL understands energy market timeseries natively—contract months, delivery periods, tenors. No manual date arithmetic or calendar calculations.

#### Readable and Maintainable
Curve construction logic is clear and concise. New team members understand what the code does. Changes are straightforward.

#### Version Controlled
Store curve building scripts in version control. Track changes, review modifications, roll back if needed.

## Building Curves with Fusion AI
For users who prefer natural language over code, Fusion AI revolutionizes curve construction through conversational interaction with specialized AI assistants.

### The Curve Assistant
Fusion's Curve Assistant is trained specifically on energy market curve construction. It understands forward curve terminology, market structures, and OpenDataDSL curve-building capabilities.

### Natural Language Curve Requests:
"Build a Brent forward curve using ICE futures for the first 24 months, then extend using the IEA's long-term oil price forecast through 2030."

The Curve Assistant:
* Identifies the required data sources (ICE Brent futures, IEA forecasts)
* Generates appropriate ODSL code for bootstrapping and extension
* Explains the methodology being used
* Executes the code and validates results
* Provides visualization and summary statistics

### Interactive Refinement:
"The curve looks too steep in 2027. Can you smooth the transition between futures and forecasts?"
The assistant understands context from the previous interaction, adjusts the blending methodology, and regenerates the curve with improved smoothing.

### Learning Your Preferences:
"I always want to use cubic spline interpolation for natural gas curves and linear for power curves."
Fusion learns these preferences and applies them automatically in future curve construction requests.

### Fusion-Powered Workflows
#### Rapid Prototyping:
"Create a spread curve between TTF and NBP gas, then show me historical spread volatility and suggest optimal hedge ratios."
Fusion's Analyse Assistant works alongside the Curve Assistant—one builds the spread curve, the other performs statistical analysis, and together they provide actionable insights.

#### Scenario Analysis:
"Build three oil curves: base case using current futures, bull case with 20% higher prices, bear case with 30% lower prices. Then value my forward purchase portfolio under each scenario."
Fusion generates multiple curves, applies them to your portfolio, and presents comparative results—what might take hours manually, completed in minutes.

#### Automated Updates:
"Every day at 6pm, rebuild all my natural gas curves using the latest settlements and send me a summary if any curve moved more than 5% at any tenor."
Fusion's Operations Assistant converts this request into an automated workflow using AI Agents, ensuring curves stay current without manual intervention.

### Code Generation and Learning
Even if you prefer working in code, Fusion accelerates development:

#### "How do I build a coal curve with separate monthly prices for different quality grades (API levels)?"

The **Code Assistant** generates ODSL examples showing:

* How to structure multi-dimensional curves
* Best practices for quality adjustments
* Sample code with your specific coal markets

## Integration with Platform Capabilities
Smart Curves don't exist in isolation—they're integral to OpenDataDSL's complete platform:

<div className="container">
	<div className="row">
		<Integration title="Data Catalogue Integration" jpg="/img/icons/catalogue.jpg" text="Curves automatically pull from catalogued market data. When you build a curve, you reference standardized datasets, not raw vendor feeds." link="/features/data-catalogue" />
		<Integration title="Smart Loaders" jpg="/img/icons/mdm.jpg" text="Curves rebuild automatically when underlying data updates. A new futures settlement triggers immediate curve recalculation." link="/features/data-management#smart-loaders" />
		<Integration title="AI Agents" jpg="/img/icons/assistant.jpg" text="Automate curve construction workflows—daily updates, exception monitoring, publication to downstream systems." link="/features/ai-agents" />
	</div>
</div>


#### Custom Tools
Embed curve building into proprietary applications. Your front-office systems, risk platforms, and client portals access curves via API.

#### Version Control
Every curve update is versioned. Historical analysis, compliance audits, and trade reconstruction use the exact curve that existed at any point in time.

## Real-World Impact
* **From Hours to Minutes:** "Curve construction that took our analysts 3-4 hours daily now runs automatically in minutes. They focus on interpreting market moves rather than building spreadsheets." — Head of Analytics, Independent Oil Trader
* **Consistency Across Organization:** "Different desks were valuing the same book differently because they built curves differently. Smart Curves eliminated valuation disputes and improved our risk reporting accuracy." — CFO, Power Trading Company
* **Faster Market Response:** "When major news breaks, we revalue positions immediately with updated curves. That speed advantage has won us deals against slower competitors." — Managing Director, Energy Merchant
* **Reduced Errors:** "We eliminated valuation errors caused by spreadsheet mistakes. Smart Curves' validation catches issues before they reach traders or risk managers." — Chief Risk Officer, Commodity Fund

## From Manual to Intelligent
Smart Curves transforms forward curve construction from a repetitive, error-prone manual task into an intelligent, automated process. Whether you prefer the precision of ODSL code or the convenience of Fusion's conversational AI, OpenDataDSL provides the tools to build accurate curves efficiently.

Your team spends less time on mechanical curve construction and more time on what matters—understanding market dynamics, identifying opportunities, and executing profitable trades.

* **See Smart Curves in action:** - [Watch demonstration video]
* **Try building curves with Fusion:** - [Start free trial]
* **Technical documentation:** - [View ODSL curve building guide]

<Demo />