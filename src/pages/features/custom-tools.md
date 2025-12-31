---
title: Custom Tools
---

import { Feature, Integration } from '/src/components/features'
import {Demo} from '/src/components/Forms.js';

<Feature title="Custom Tools" slogan="Your workflows, your tools, your edge" jpg="/img/icons/tools.jpg" />

## The Proprietary Workflow Challenge
Every energy and commodity trading firm develops unique competitive advantages—proprietary trading strategies, specialized analytical methods, custom risk models, or unique operational workflows. These advantages represent years of market experience, quantitative research, and institutional knowledge.

Yet translating this expertise into operational reality presents challenges:

**Tribal Knowledge:** Critical methodologies exist only in spreadsheets on individual traders' laptops or in the heads of key personnel. When staff leave or move roles, expertise walks out the door.
Inconsistent Execution: Different team members apply the same methodology differently. One trader's crack spread calculation doesn't match another's, creating valuation disputes and risk reporting inconsistencies.

**Manual Processes:** Sophisticated analyses require extensive manual work—copying data between systems, running complex spreadsheet macros, manually validating results. High-value expertise gets consumed by low-value mechanical tasks.

**Limited Scalability:** Your best analyst can only analyze so many opportunities. Your quantitative expert can only build so many models. Expertise doesn't scale across the organization.

**Software Development Bottlenecks:** Building custom applications requires scarce developer resources, long development cycles, and ongoing maintenance. By the time IT delivers, market conditions have changed or requirements have evolved.

**Integration Challenges:** Proprietary tools often exist in isolation—standalone spreadsheets, scripts that don't talk to other systems, models that can't access real-time data.

#### Custom Tools: Your Expertise, Automated and Accessible
OpenDataDSL's Custom Tools framework enables you to encode proprietary workflows, analytical methods, and trading strategies into reusable, scalable tools that work seamlessly within the platform. Transform tribal knowledge into institutional assets. Convert manual expertise into automated capabilities. Make sophisticated operations accessible to your entire team through simple interfaces.

## What Are Custom Tools?
Custom Tools are applications you build on the OpenDataDSL platform that encapsulate your unique workflows and methodologies:

* **Proprietary Analytics:** Your specialized calculations, models, and analytical methods
* **Trading Strategy Tools:** Automated execution of your unique trading approaches
* **Risk Models:** Custom risk calculations beyond standard VaR and Greeks
* **Valuation Methods:** Your specific approaches to pricing complex structures
* **Workflow Automation:** Multi-step processes unique to your operations
* **Decision Support:** Tools that apply your institutional knowledge to guide decisions
* **Client-Facing Applications:** Interfaces allowing clients to interact with your services

Custom Tools leverage OpenDataDSL's infrastructure—data management, curve building, API access, authentication, scheduling—so you focus on encoding your expertise, not rebuilding platform capabilities.

### Building Custom Tools
#### Using ODSL Code
For maximum flexibility and power, build Custom Tools using OpenDataDSL's domain-specific language:

#### Example: Proprietary Spark Spread Calculator
Your firm has a specialized spark spread methodology accounting for plant-specific heat rates, transmission losses, ancillary service costs, and operational constraints:

```js
// Custom spark spread tool with proprietary methodology
function calculateProprietarySparkSpread(plant, date)
    
    // Retrieve plant-specific parameters
    heatRate = plant.heatRate
    transmissionLoss = plant.transmissionCostMWh
    ancillaryServices = plant.ancillaryServiceCosts
    minRunTime = plant.minimumRunHours
    startupCost = plant.startupCostMW
    
    // Get relevant forward curves
    powerCurve = getCurve("POWER_" + plant.region, date)
    gasCurve = getCurve("GAS_" + plant.hub, date)
    
    // Calculate fuel cost including transmission
    fuelCostPerMWh = gasCurve * heatRate * 1.05 // 5% efficiency loss
    totalGasCost = fuelCostPerMWh + transmissionLoss
    
    // Calculate gross spark spread
    grossSparkSpread = powerCurve - totalGasCost
    
    // Adjust for operational constraints
    operationalAdjustment = calculateOperationalValue(
        grossSparkSpread, 
        minRunTime, 
        startupCost,
        plant.rampRate
    )
    
    // Include ancillary service value
    netSparkSpread = grossSparkSpread + operationalAdjustment + ancillaryServices
    
    // Return detailed breakdown
    return {
        grossSpread: grossSparkSpread,
        fuelCost: totalGasCost,
        operationalValue: operationalAdjustment,
        ancillaryValue: ancillaryServices,
        netSpread: netSparkSpread,
        economicToRun: netSparkSpread > 0
    }
end
```
This proprietary methodology—including your specific efficiency assumptions, operational constraints, and ancillary value calculations—becomes a reusable tool accessible across your organization.

#### Example: Custom Crude Oil Arbitrage Screener
Your trading desk specializes in identifying arbitrage opportunities between crude oil grades:

```js
// Proprietary crude arbitrage identification tool
function findCrudeArbitrageOpportunities(targetMargin)
    
    // Load all crude curves from your catalogue
    crudeGrades = ["BRENT", "WTI", "DUBAI", "URALS", "ESPO", "MAYA"]
    curves = {}
    
    for grade in crudeGrades
        curves[grade] = getCurve("CRUDE_" + grade, TODAY)
    end
    
    opportunities = []
    
    // Analyze all possible pairs
    for grade1 in crudeGrades
        for grade2 in crudeGrades
            if grade1 != grade2
                
                // Calculate quality-adjusted differential
                qualityDiff = calculateQualityAdjustment(grade1, grade2)
                transportCost = getTransportCost(grade1, grade2)
                storageCost = getStorageCost(grade1)
                
                // Analyze spread over time
                spread = curves[grade1] - curves[grade2]
                adjustedSpread = spread - qualityDiff - transportCost - storageCost
                
                // Identify opportunities exceeding target margin
                for tenor in adjustedSpread.tenors
                    if adjustedSpread[tenor] > targetMargin
                        opportunities.add({
                            buy: grade2,
                            sell: grade1,
                            tenor: tenor,
                            rawSpread: spread[tenor],
                            adjustedSpread: adjustedSpread[tenor],
                            margin: adjustedSpread[tenor] - targetMargin,
                            confidence: calculateConfidence(spread[tenor], historicalMean)
                        })
                    end
                end
            end
        end
    end
    
    // Rank by risk-adjusted return
    return opportunities.sortBy("margin * confidence", "desc")
end
```

Your sophisticated arbitrage logic—quality adjustments, transport costs, confidence scoring—runs automatically, screening opportunities continuously without manual analysis.

### Building Tools with Fusion AI
For users preferring natural language over coding, Fusion AI accelerates custom tool development through conversational interaction:

> * **You:** "I want to create a tool that calculates the value of our natural gas storage assets based on forward curves, injection/withdrawal capacities, and seasonal optimization"
> * **Code Assistant:** "I'll help you build that storage valuation tool. Let me understand your methodology:

```
What's your approach for calculating intrinsic value—spread between injection and withdrawal periods?
Do you model operational constraints like minimum inventory levels and cycling limits?
Should the tool consider optionality value from flexible injection/withdrawal decisions?
What discount rate do you apply for time value?"
```

> * **You:** [Explains methodology]
> * **Code Assistant:** "Perfect. I'll create a custom tool that:

```
Takes storage facility parameters as input
Retrieves relevant gas forward curves
Calculates optimal injection/withdrawal schedule
Values intrinsic spread plus operational flexibility
Outputs detailed cash flow analysis and NPV
```

> * **Code Assistant:** "Here's the ODSL code for your storage valuation tool..."
> * [Generates complete custom tool implementation]

Fusion's AI assistants transform your domain expertise into working code, asking clarifying questions to ensure the tool accurately reflects your methodology.

### Tool Enhancement Through Conversation
Once created, you refine custom tools through iterative dialogue:

> * **You:** "The storage tool is great, but I need it to also consider basis risk between my storage location and the trading hub"
> * **Code Assistant:** "I'll add basis risk modeling. Should I:

```
Use historical basis relationships to project future basis?
Allow manual basis curve input for scenario analysis?
Include basis volatility in the uncertainty analysis?"
```

> * **You:** "Use historical relationships but allow manual overrides"
> * **Code Assistant:** "Updated. The tool now incorporates basis risk with historical mean reversion but accepts manual basis curve inputs when you have specific market views..."

Custom tools evolve as your strategies and requirements change, without lengthy development cycles.

## Custom Tool Capabilities
### Rich User Interfaces
Custom Tools aren't just backend calculations—they include intuitive interfaces:

* **Input Forms:** Define parameters through dropdowns, date pickers, numeric inputs, and file uploads rather than editing code
* **Interactive Visualizations:** Display results as charts, graphs, heatmaps, and tables that users can explore and filter
* **Scenario Comparison:** Run multiple scenarios side-by-side with visual comparison of outcomes
* **Export Capabilities:** Generate reports, spreadsheets, PDFs, or data files from tool outputs
* **Responsive Design:** Tools work seamlessly on desktop, tablet, or mobile devices

### Integration with Platform Data
Custom Tools seamlessly access OpenDataDSL's complete data infrastructure:

* **Data Catalogue Access:** Tools automatically use your licensed market data
* **Smart Curves Integration:** Tools reference forward curves built by Smart Curves
* **Real-Time Updates:** Tools work with live data feeds as markets move
* **Historical Analysis:** Tools access complete historical archives for back-testing
* **Version Control:** Tools use specific curve versions for audit and compliance

### Workflow Automation
Custom Tools integrate with AI Agents for autonomous execution:

* **Scheduled Analysis:** Tools run automatically on defined schedules
* **Event-Triggered Execution:** Tools activate when market conditions meet criteria
* **Batch Processing:** Tools analyze entire portfolios or opportunity sets overnight
* **Alert Generation:** Tools notify stakeholders when findings require attention

### Access Control and Governance
Maintain control over proprietary methodologies:

* **Role-Based Access:** Different users see different tools based on permissions
* **Usage Tracking:** Audit trail of who used which tools when
* **Approval Workflows:** Sensitive tools require manager approval before execution
* **Version Management:** Track tool versions, roll back changes if needed
* **IP Protection:** Code remains secure; users access functionality without seeing implementation

## Custom Tool Examples
### Proprietary Trading Strategy Tools

#### Options Valuation with Custom Greeks
Your firm uses specialized Greek calculations accounting for commodities-specific factors like convenience yield, storage costs, and delivery optionality. Build a custom tool that:

* Calculates your proprietary Greeks methodology
* Applies to all energy options positions
* Compares to standard Black-Scholes for validation
* Highlights positions where methodology differences matter most

#### Spread Trading Signal Generator
Your quantitative research has identified profitable spread relationships with specific entry/exit signals. Create a tool that:

* Monitors relevant commodity spreads continuously
* Applies your signal generation logic
* Ranks opportunities by expected return and confidence
* Generates executable trade recommendations with sizing

### Custom Risk Models
#### Tail Risk Assessment Tool
Standard VaR doesn't capture the extreme events critical to energy markets. Build a custom tool using your specialized tail risk methodology:

* Models correlated extreme moves across commodity positions
* Incorporates operational risks (forced outages, supply disruptions)
* Calculates potential loss in stress scenarios specific to energy markets
* Identifies portfolio concentrations vulnerable to tail events

#### Weather-Adjusted Risk Calculator
Temperature-sensitive positions require weather-aware risk models. Create a tool that:

* Integrates weather forecast data with energy positions
* Calculates exposure to temperature deviations
* Models correlation between weather and demand/prices
* Produces weather-adjusted risk metrics and scenarios

### Operational Tools
#### Daily P&L Attribution Tool
Understanding P&L drivers requires sophisticated attribution beyond standard systems. Build a custom tool that:

* Decomposes P&L into curve moves, roll down, new trades, and model changes
* Attributes at position, book, and desk levels
* Compares to trader expectations and flags surprises
* Generates detailed commentary for management reporting

#### Regulatory Reporting Automation
Complex regulatory requirements demand accurate, consistent reporting. Create a tool that:

* Extracts required data from your positions and transactions
* Applies your interpretation of regulatory requirements
* Formats according to specific regulator specifications
* Generates submission files with full validation and audit trail

### Client-Facing Tools
#### Portfolio Valuation Portal
Provide clients with self-service access to their portfolio data through a custom tool that:

* Shows current position valuations using latest curves
* Displays historical performance and P&L evolution
* Allows scenario analysis with client-defined assumptions
* Generates customized reports in client's preferred format

#### Hedging Recommendation Engine
Offer clients sophisticated hedging advice through a tool that:

* Analyzes client's physical exposure and risk tolerance
* Identifies optimal hedge strategies considering market conditions
* Compares hedge effectiveness across different instruments
* Provides executable recommendations with pricing

## Real-World Impact
Institutional Knowledge Preserved: "Our best trader developed a unique crack spread methodology over 15 years. We encoded it as a custom tool—now everyone on the desk can apply his expertise, and when he retires, his knowledge stays with the firm." — Head of Oil Trading, Major Energy Company
Consistency Across Teams: "Different analysts were valuing storage assets differently, creating confusion and disputes. Our custom storage valuation tool ensures everyone uses the same methodology, eliminating inconsistency." — CFO, Natural Gas Storage Operator
Competitive Advantage Scalable: "We identified a profitable trading pattern through quantitative research, but only our quant team could execute it. We built a custom tool that lets all our traders apply the strategy—scaling our edge across the entire desk." — CTO, Commodity Hedge Fund
Faster Decision-Making: "Complex arbitrage analysis that took hours in spreadsheets now happens in seconds with our custom screening tool. We execute on opportunities before competitors even identify them." — Trading Director, Power Marketing Firm
Client Service Differentiation: "Our custom client portal tools give our customers capabilities they can't get elsewhere. It's become a key differentiator in winning and retaining business." — COO, Energy Merchant

## From Tribal Knowledge to Institutional Asset
Custom Tools transform your proprietary expertise from individual knowledge into organizational capabilities. Your competitive advantages become:
Documented: Methodologies explicitly defined in code, not hidden in spreadsheets
Accessible: Available to entire team through simple interfaces, not locked with experts
Consistent: Applied identically every time, eliminating execution variation
Scalable: Used across all relevant opportunities without adding headcount
Preserved: Remain institutional assets even as personnel change
Continuously Improving: Easy to refine as market conditions and strategies evolve
Whether built through ODSL code for maximum control or developed conversationally with Fusion AI for rapid deployment, Custom Tools encode what makes your firm unique—ensuring your competitive edge strengthens rather than erodes over time.

* Explore custom tool possibilities: [Schedule consultation]
* See example tools: [View demonstration library]
* Start building: [Try Fusion free trial]
* Technical documentation: [Custom tools developer guide]

<Demo />