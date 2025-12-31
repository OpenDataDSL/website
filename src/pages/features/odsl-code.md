---
title: ODSL
---

import { Feature, Integration } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="ODSL Programming Language" slogan="Purpose-built for energy professionals" jpg="/img/icons/odsl.jpg" />

## The Programming Language Challenge
Energy and commodity trading operations demand sophisticated data manipulation, complex calculations, and intricate workflow automation. Traditionally, this requires either:

**General-Purpose Programming Languages** (Python, Java, C#): Powerful but verbose when dealing with energy-specific concepts. Simple operations like "shift this forward curve by one business day" or "calculate the spread between two timeseries" require dozens of lines of boilerplate code handling date conventions, data structures, and edge cases.

**Spreadsheets:** Accessible but limited, error-prone, and impossible to version control or scale. Complex formulas become unmaintainable. Sharing logic across teams means copying spreadsheets, creating versioning nightmares.

**Proprietary Scripting:** Vendor-specific languages lock you into specific platforms and don't translate between systems.

The result? Traders and analysts spend excessive time writing repetitive code rather than implementing sophisticated logic. Developers unfamiliar with energy markets struggle to understand domain-specific requirements. Code becomes brittle, difficult to maintain, and hard to understand months after being written.

## ODSL: Domain-Specific Power

**OpenDataDSL Language (ODSL)** is a programming language designed specifically for energy and commodity markets. ODSL expresses complex market operations in clear, concise syntax that mirrors how energy professionals think about data, curves, and workflows.

ODSL isn't a general-purpose language trying to accommodate energy markets—it's built from the ground up for commodities trading, with native understanding of:

* **Timeseries:** Market data, prices, volumes with full calendar and business day awareness
* **Forward Curves:** Construction, manipulation, and transformation of forward price curves
* **Market Conventions:** Contract months, delivery periods, tenors, and commodity-specific structures
* **Data Workflows:** Extract, transform, load operations common in energy data management

What requires 50-100 lines in Python or Java often takes 5-10 lines in ODSL. What's obscure and technical in general languages is clear and intuitive in ODSL.

## Core ODSL Concepts
### Timeseries: First-Class Citizens

In ODSL, timeseries aren't arrays or data frames requiring library imports—they're native data types:

```js
// Create a timeseries
prices = TimeSeries("DAILY")
prices["2025-01-15"] = 75.50
prices["2025-01-16"] = 76.20
prices["2025-01-17"] = 74.85

// Operations that understand energy market calendars
weekdayPrices = prices.alignCalendar("BUSINESS_DAYS")
monthlyAverage = prices.aggregate("MONTHLY", "MEAN")
rollingVol = prices.volatility(30) // 30-period rolling volatility

// Timeseries arithmetic is natural
spread = brentPrices - wtiPrices
crackedMargin = dieselPrices - (crudePrices * 1.15) // 15% yield
```

No imports, no date parsing libraries, no manual calendar handling—ODSL understands business days, month-end conventions, and energy market calendars natively.

### Forward Curves: Built-In Intelligence
Forward curves are fundamental to energy trading. ODSL treats them as native constructs:

```js
// Bootstrap a forward curve from futures contracts
curve = bootstrapCurve(NYMEX_NG_FUTURES, "FORWARD")

// Curve operations are intuitive
jan2026Price = curve["2026-01"]
q1_2026_avg = curve.average("2026-Q1")
summerStrip = curve["2026-05":"2026-09"]

// Interpolation and gap filling
smoothCurve = curve.interpolate("CUBIC_SPLINE")
extendedCurve = curve.extend("LINEAR", "2030-12-31")

// Curve transformations
shockedCurve = curve * 1.10 // 10% parallel shift
basisAdjusted = curve + basisCurve
```

Operations that would require custom classes, date arithmetic, and careful indexing in other languages are single expressions in ODSL.

### Natural Date Handling
Energy markets have unique date concepts—contract months, delivery periods, balance-of-month. ODSL handles these naturally:

```js
// Energy market date expressions
contractMonth = "2025-03" // March 2025 contract
deliveryPeriod = "2025-Q2" // Q2 2025 delivery
balanceOfMonth = "BOM-2025-01" // Balance of January 2025
prompt = "FRONT" // Front month
nextSeason = "NEXT-SUMMER"

// Date arithmetic understands energy conventions
nextMonth = contractMonth + 1M
nextQuarter = deliveryPeriod + 1Q
oneYearForward = TODAY + 1Y

// Business day awareness
settlementDate = tradeDate + 2BD // 2 business days
monthEnd = "2025-01".endOf("MONTH")
```

### Market Data Operations
Loading and transforming market data is concise and readable:

```js
// Load data from catalogue
brentFutures = ${ICE:BRENT_FUTURES}
powerPrices = ${NORDPOOL:DAYAHEAD_PRICES}

// Transformations are expressive
hourlyToDaily = powerPrices.aggregate("DAILY", "MEAN")
monthlyPeaks = powerPrices.filter(hour >= 8 AND hour <= 20).aggregate("MONTHLY", "MAX")

// Quality checks
missingDays = powerPrices.findGaps()
outliers = brentFutures.detectOutliers(3.0) // 3 std deviations

// Data alignment across different frequencies
aligned = align(dailyData, hourlyData, "INTERPOLATE")
```

## ODSL in Action: Real Examples
### Example 1: Spark Spread Calculation

**The Task:** Calculate spark spread (power price minus gas cost adjusted for heat rate) across a forward curve.
**In Python** (simplified, still requires 30+ lines):

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
heat_rate = 7.5
efficiency_loss = 0.05
spark_spread = power_aligned - (gas_aligned * heat_rate * (1 + efficiency_loss))

# Monthly aggregation
result = spark_spread.resample('M').mean()
```

**In ODSL:**

```js
// Load forward curves
powerCurve = getCurve("POWER_GERMANY_BASELOAD")
gasCurve = getCurve("GAS_TTF")

// Calculate spark spread
heatRate = 7.5
sparkSpread = powerCurve - (gasCurve * heatRate * 1.05)

// Results automatically aligned by ODSL's curve arithmetic
```

The ODSL version is not only shorter—it's clearer in intent and handles date alignment, curve interpolation, and market conventions automatically.

### Example 2: Seasonal Pattern Analysis

**The Task:** Analyze historical seasonal patterns in natural gas prices and apply to forward curve.
**In ODSL:**

```js
// Load historical daily prices
historicalPrices = ${NYMEX:NG_HISTORY}

// Calculate average seasonal pattern (5 years)
seasonalPattern = historicalPrices
    .filterRange(TODAY - 5Y, TODAY)
    .groupBy("MONTH")
    .aggregate("MEAN")
    .normalize() // Express as index to annual mean

// Load current forward curve
forwardCurve = getCurve("NYMEX_NG_FORWARD")

// Apply historical seasonality
seasonalAdjustedCurve = forwardCurve * seasonalPattern

// Compare to market pricing
marketSeasonality = forwardCurve.seasonalIndex()
basisToHistorical = marketSeasonality - seasonalPattern

// Identify months where market differs from historical pattern
opportunities = basisToHistorical.filter(abs(value) > 0.15)
```

This analysis—loading historical data, calculating patterns, applying to curves, and identifying anomalies—is expressed clearly in a few lines.

### Example 3: Portfolio Mark-to-Market

**The Task:** Value a portfolio of forward positions using latest curves.
**In ODSL:**

```js
// Load portfolio positions
positions = ${PORTFOLIO:TRADING_BOOK_A}

// Load all relevant forward curves
curves = {}
for commodity in positions.commodities
    curves[commodity] = getCurve(commodity + "_FORWARD")
end

// Value each position
totalValue = 0
positionDetails = []

for position in positions
    curve = curves[position.commodity]
    
    // Get price for position's delivery period
    price = curve[position.deliveryPeriod]
    
    // Calculate position value
    value = position.volume * price
    totalValue += value
    
    // Store details
    positionDetails.add({
        id: position.id,
        commodity: position.commodity,
        volume: position.volume,
        price: price,
        value: value
    })
end

// Generate report
report = {
    valuationDate: TODAY,
    totalValue: totalValue,
    positions: positionDetails,
    curveVersions: curves.versions() // Audit trail
}

save(report, "VALUATION_" + TODAY)
```

Portfolio valuation logic that's readable by traders, risk managers, and developers alike.

### Example 4: Data Quality Monitoring

**The Task:** Check daily settlement data for completeness and anomalies.
**In ODSL:**

```js
// Load today's settlements
settlements = ${ICE:BRENT_SETTLEMENTS}[TODAY]

// Define expected contracts (front 24 months)
expectedContracts = generateContractList("MONTHLY", TODAY, 24)

// Check completeness
missingContracts = expectedContracts - settlements.contracts
if missingContracts.size() > 0
    alert("Missing settlements: " + missingContracts.toString())
end

// Check for outliers
for contract in settlements
    historicalMean = ${ICE:BRENT_SETTLEMENTS}[contract]
        .filterRange(TODAY - 30D, TODAY - 1D)
        .mean()
    
    historicalStdDev = ${ICE:BRENT_SETTLEMENTS}[contract]
        .filterRange(TODAY - 30D, TODAY - 1D)
        .stddev()
    
    zScore = abs(contract.price - historicalMean) / historicalStdDev
    
    if zScore > 3.0
        alert("Outlier detected: " + contract.name + 
              " - Price: " + contract.price + 
              " - Z-score: " + zScore)
    end
end

// Check price relationships
if abs(settlements["M1"] - settlements["M2"]) > 5.0
    alert("Unusual M1-M2 spread: " + 
          (settlements["M1"] - settlements["M2"]))
end
```

Comprehensive data quality checks expressed clearly, maintainably, and running automatically.

## Advanced ODSL Features
### Functions and Reusability
Define reusable functions encoding your methodologies:

```js
// Custom function for your proprietary curve building
function buildProprietaryCurve(commodity, methodology)
    
    // Load base data
    futures = ${EXCHANGE:commodity + "_FUTURES"}
    brokerQuotes = ${BROKER:commodity + "_QUOTES"}
    
    // Apply your specific logic
    if methodology == "LIQUIDITY_WEIGHTED"
        nearCurve = bootstrapCurve(futures[1:12], "FORWARD")
        farCurve = averageCurve(brokerQuotes, "ANNUAL")
        curve = blend(nearCurve, farCurve, transitionDate, 3M)
    elseif methodology == "FUNDAMENTAL"
        curve = buildFundamentalCurve(commodity, supplyModel, demandModel)
    end
    
    // Apply quality adjustments
    curve = curve.smooth("CUBIC_SPLINE")
    curve = curve.validate(minPrice, maxPrice)
    
    return curve
end

// Use your function consistently
brentCurve = buildProprietaryCurve("BRENT", "LIQUIDITY_WEIGHTED")
wtiCurve = buildProprietaryCurve("WTI", "LIQUIDITY_WEIGHTED")
```

### Conditional Logic and Control Flow
ODSL supports full programming constructs while maintaining readability:

```js
// Market regime detection
volatility = prices.volatility(30)
trend = prices.linearTrend(60)

if volatility > 0.40 AND abs(trend) < 0.02
    regime = "HIGH_VOL_RANGEBOUND"
    strategy = conservativeStrategy()
elseif volatility < 0.20 AND trend > 0.05
    regime = "LOW_VOL_TRENDING_UP"
    strategy = aggressiveStrategy()
else
    regime = "NORMAL"
    strategy = standardStrategy()
end

// Apply strategy based on regime
positions = strategy.generateSignals(marketData)
```

### Error Handling and Validation
Robust code handles exceptions gracefully:

```js
try
    curve = getCurve("POWER_GERMANY")
    
    // Validate curve quality
    if curve.hasGaps()
        throw "Curve has gaps in critical delivery periods"
    end
    
    if curve.min() < 0
        throw "Curve contains negative prices - data error suspected"
    end
    
    // Proceed with calculation
    result = calculateSparkSpread(curve, gasCurve)
    
catch error
    log("Curve building failed: " + error.message)
    sendAlert("Curve issue requires attention", error.details)
    
    // Use fallback methodology
    curve = getLastValidCurve("POWER_GERMANY")
    result = calculateSparkSpread(curve, gasCurve)
    flagAsEstimate(result)
end
```

### Data Transformation Pipelines
Chain operations for complex transformations:

```js
// Multi-step data preparation pipeline
cleanedData = rawPowerPrices
    .removeOutliers(3.0)
    .fillGaps("LINEAR")
    .alignCalendar("BUSINESS_DAYS")
    .aggregate("DAILY", "MEAN")
    .smooth("MOVING_AVERAGE", 7)
    
// Pipeline operations are readable and maintainable
Integration with Platform
Accessing Data Catalogue
ODSL provides seamless access to your entire data catalogue:
odsl// Simple reference syntax
iceBrent = ${ICE:BRENT_FUTURES}
ttfGas = ${TTF:DAY_AHEAD}
nordpoolPower = ${NORDPOOL:SYSTEM_PRICE}

// Historical data with date ranges
historicalPrices = ${ICE:BRENT_FUTURES}["2020-01-01":"2024-12-31"]

// Specific contracts or delivery periods
frontMonth = ${NYMEX:NG_FUTURES}["FRONT"]
summerStrip = ${ICE:POWER_UK}["2025-SUMMER"]
```

Building Smart Curves
ODSL is the engine powering Smart Curves:

```js
// Smart Curve construction logic you define
curve = bootstrapCurve(liquidContracts, "FORWARD")
curve = curve.extend(fundamentalModel, "2030-12-31")
curve = curve.adjustForSeasonality(historicalPattern)
curve = curve.validate(qualityRules)

// Save versioned curve
saveCurve(curve, "POWER_GERMANY_BASELOAD", TODAY)
```

### Triggering Workflows
ODSL scripts drive AI Agent workflows:

```js
// Automated workflow script
function dailyCurveUpdate()
    
    // Load latest settlements
    settlements = ${ICE:BRENT_SETTLEMENTS}[TODAY]
    
    // Validate data quality
    if validateSettlements(settlements)
        
        // Rebuild curve
        curve = buildProprietaryCurve("BRENT", "STANDARD")
        
        // Check for significant moves
        previousCurve = getCurve("BRENT_FORWARD", TODAY - 1BD)
        maxMove = (curve / previousCurve - 1).max()
        
        if abs(maxMove) > 0.05
            sendAlert("Brent curve moved > 5%: " + maxMove)
        end
        
        // Publish updated curve
        saveCurve(curve, "BRENT_FORWARD", TODAY)
        
    else
        sendAlert("Settlement data validation failed")
    end
end

// Schedule this to run daily via AI Agent
```

### API Integration
ODSL can interact with external systems:

```js
// Push data to external risk system
function exportToRiskSystem(curves)
    
    // Format for external system
    payload = formatForRiskAPI(curves)
    
    // Authenticate and send
    response = httpPost(
        "https://risk.company.com/api/curves",
        payload,
        headers: {"Authorization": "Bearer " + apiToken}
    )
    
    if response.status == 200
        log("Curves exported successfully")
    else
        throw "Export failed: " + response.error
    end
end
```

## Learning and Development
### Readable by Non-Programmers
ODSL's clarity makes it accessible to traders and analysts:

```js
// This code is readable by energy market professionals
// even without programming background

winterStrip = gasCurve["2025-11":"2026-03"]
winterAverage = winterStrip.average()
summerStrip = gasCurve["2025-05":"2025-09"]
summerAverage = summerStrip.average()

seasonalSpread = winterAverage - summerAverage

if seasonalSpread < historicalMean - 2 * historicalStdDev
    conclusion = "Winter strip looks undervalued relative to summer"
else
    conclusion = "Seasonal spread within normal range"
end
```

## Fusion AI Assistance
Don't know how to code something? Ask Fusion's Code Assistant:

> * **You:** "How do I calculate the 30-day moving average correlation between Brent and WTI?"
> * **Code Assistant:**

```js
// Load price series
brent = ${ICE:BRENT_FUTURES}["FRONT"]
wti = ${NYMEX:WTI_FUTURES}["FRONT"]

// Calculate rolling 30-day correlation
correlation = brent.rollingCorrelation(wti, 30)

// Plot results
plot(correlation, title: "Brent-WTI 30-day Correlation")
```

Fusion accelerates ODSL learning and development.

## Extensive Documentation

Comprehensive language reference, function library, and examples available through the platform.

## Real-World Impact
Faster Development: "What took our Python developers two weeks to build and test, we now implement in ODSL in days. The domain-specific syntax eliminates boilerplate and reduces errors." — Lead Developer, Energy Trading Firm
Accessible to Traders: "Our senior traders write ODSL scripts to automate their analytical workflows without waiting for IT. They understand the code because it speaks their language." — Head of Trading Technology, Commodity Fund
Maintainable Code: "We can understand ODSL scripts written years ago because the code is self-documenting. In Python, we'd need extensive comments; in ODSL, the intent is clear." — CTO, Power Marketing Company
Rapid Prototyping: "When quantitative researchers develop new strategies, they prototype in ODSL first. We can test ideas in hours instead of waiting for full software development cycles." — Head of Quantitative Research, Energy Merchant
Cross-Team Collaboration: "Traders, analysts, and developers all work in ODSL. We speak the same language, which eliminates translation errors between business requirements and technical implementation." — COO, Natural Gas Trader

## From Verbose to Concise, From Generic to Specialized
ODSL transforms energy and commodity programming from verbose, error-prone general-purpose coding into concise, clear, domain-specific expressions. Your code reads like energy market logic because it is energy market logic—not generic programming constructs forced to accommodate domain concepts.

Whether you're building sophisticated Smart Curves, automating operational workflows, implementing proprietary trading strategies, or creating custom analytical tools, ODSL provides the language to express your expertise clearly, maintainably, and efficiently.

* Learn ODSL: [Interactive tutorial]
* Language reference: [Complete documentation]
* Get help coding: [Try Fusion Code Assistant]
* Example library: [Browse ODSL scripts]

<Demo />