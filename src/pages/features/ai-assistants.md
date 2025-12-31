---
title: AI Assistants
---

import { Feature, Integration } from '/src/components/features'
import {Demo} from '/src/components/Forms.js';

<Feature title="AI Assistants" slogan="Expert assistance, smarter decisions" jpg="/img/icons/assistant.jpg" />

## The Knowledge Challenge
Energy and commodity trading demands specialized expertise across multiple domains. Your team needs to:

* Analyze complex market data and identify trading opportunities
* Build and validate forward curves with appropriate methodologies
* Manage operational workflows and troubleshoot data issues
* Write code for custom analytics and integrations
* Navigate API documentation and system configurations
* Understand platform capabilities and best practices

Traditionally, this requires hiring scarce specialists, scheduling meetings with busy experts, or spending hours searching documentation. Questions go unanswered, decisions get delayed, and junior team members struggle without immediate support.

### AI That Speaks Your Language
Fusion's AI Assistants provide instant expert assistance tailored specifically to energy and commodity trading operations. Unlike generic AI tools that provide surface-level answers, Fusion's assistants understand energy market terminology, trading workflows, and the OpenDataDSL platform environment.

Six specialized assistants deliver targeted expertise exactly when you need it—24/7 access to intelligent support that eliminates waiting and accelerates decision-making.

## The Six Specialized Assistants
### General Assistant
Your starting point for any question about energy markets, trading concepts, or platform navigation.

#### Expertise Areas:

* Market fundamentals and trading concepts
* Platform feature explanations and guidance
* General energy industry knowledge
* Routing complex questions to specialized assistants

#### Example Interactions:

* "Explain the difference between baseload and peakload power contracts"
* "How do I share a curve with another team member?"
* "What factors typically drive natural gas prices in winter?"
* "Which assistant should I use for building a custom analytics dashboard?"

The General Assistant serves as your intelligent guide—understanding your question's context and either providing immediate answers or directing you to the specialist who can help best.

### Analyse Assistant
Your quantitative analyst for market data exploration, statistical analysis, and insight generation.

#### Expertise Areas:

* Statistical analysis of price data and market relationships
* Correlation studies and spread analysis
* Volatility calculations and risk metrics
* Historical pattern recognition
* Data visualization and reporting

#### Example Interactions:

* "Calculate the rolling 30-day volatility for WTI over the past year and show me when it exceeded historical norms"
* "Analyze the correlation between German power prices and natural gas prices—is the relationship strengthening or weakening?"
* "What's the typical seasonal pattern for UK gas storage levels, and how does this year compare?"
* "Create a report showing daily price moves greater than 5% for all my monitored commodities this month"

The Analyse Assistant transforms raw market data into actionable insights, performing sophisticated analytics through natural language requests without requiring manual spreadsheet work or statistical software.

### Curve Assistant
Your curve-building specialist for forward curve construction, validation, and methodology.

#### Expertise Areas:

* Forward curve construction techniques
* Interpolation and extrapolation methods
* Gap handling and curve smoothing
* Multi-source curve blending
* Curve validation and quality checks
* ODSL curve-building code generation

#### Example Interactions:

* "Build a TTF gas forward curve using ICE futures for 2025-2026, then extend to 2030 using linear extrapolation from the final two years"
* "My Brent curve has a gap in Q3 2026—suggest the best interpolation method"
* "Create a spread curve between JKM and TTF LNG prices"
* "Generate ODSL code to build daily power curves with separate peak and off-peak pricing"
* "Why does my curve show an unusual spike in December 2025? Validate the input data"

The Curve Assistant combines deep knowledge of energy market structures with ODSL programming expertise, enabling both conversational curve building and sophisticated code generation.

### Operations Assistant
Your workflow automation expert for managing data pipelines, monitoring operations, and troubleshooting issues.

#### Expertise Areas:

* Data loader configuration and monitoring
* Workflow automation design
* Operational alerts and exception handling
* System health monitoring
* Troubleshooting data quality issues
* Scheduled task management

#### Example Interactions:

* "Set up a daily workflow that loads ICE settlements at 5pm, rebuilds all my curves, and emails me if any curve shows a >10% change"
* "Why didn't my natural gas curve update this morning? Check the data loader status"
* "Create an alert that notifies me when any of my monitored commodities moves more than 3 standard deviations from its 30-day average"
* "My power data feed failed yesterday—what happened and how do I backfill the missing data?"

The Operations Assistant transforms platform management from reactive troubleshooting to proactive workflow design, ensuring your data pipelines run smoothly and issues are caught before they impact trading decisions.

### Code Assistant
Your programming expert for ODSL development, scripting, and technical implementation.

#### Expertise Areas:

* ODSL language syntax and best practices
* Custom analytics development
* Data transformation scripting
* Code debugging and optimization
* Algorithm implementation
* Integration code examples

#### Example Interactions:

* "Write ODSL code that calculates the spark spread for German power using gas prices and thermal efficiency"
* "How do I loop through all contracts in a curve and apply a transformation to each?"
* "My ODSL script is running slowly—can you optimize this timeseries aggregation?"
* "Convert my Excel VBA macro for crack spread calculation into ODSL"
* "Generate a script that exports all curves to CSV files for my risk system"

The Code Assistant accelerates development for both experienced programmers and those new to ODSL, providing working code examples, debugging assistance, and best practice guidance.

### Integrate Assistant
Your integration specialist for connecting OpenDataDSL with external systems, APIs, and applications.

#### Expertise Areas:

* REST API usage and authentication
* System integration patterns
* Data export/import workflows
* Third-party tool connections
* API troubleshooting
* SDK implementation guidance

#### Example Interactions:

* "How do I authenticate to the OpenDataDSL API from Python?"
* "Create a workflow that pushes updated curves to our risk management system's API every evening"
* "I need to pull data from an external weather API and combine it with our power curves—how should I structure this?"
* "Generate Python code that fetches all ICE Brent settlements and loads them into our data warehouse"
* "My API call is returning a 403 error—what's wrong with my authentication?"

The Integrate Assistant bridges OpenDataDSL with your broader technology ecosystem, enabling seamless data flow between platforms and empowering your team to build connected workflows.

## Conversational Intelligence
Fusion's assistants don't just answer isolated questions—they engage in multi-turn conversations that build context and refine solutions.

### Context Awareness
* You: "Build me a Brent forward curve"
* Curve Assistant: [Generates curve]
* You: "Now create a WTI curve using the same methodology"
* Curve Assistant: [Applies same approach to WTI data, remembering your preferences]

### Iterative Refinement
* You: "Analyze the correlation between coal and natural gas prices"
* Analyse Assistant: [Provides correlation analysis]
* You: "The correlation looks weak in summer months—can you analyze those periods separately?"
* Analyse Assistant: [Segments analysis by season, providing deeper insight]

### Proactive Suggestions
* You: "I need to automate daily curve updates"
* Operations Assistant: "I can help set up that workflow. Will you need validation checks before curves update? Should stakeholders be notified of significant moves?"

## Creating Your Own Custom Assistants
Beyond the six core assistants, OpenDataDSL enables you to create custom assistants tailored to your organization's specific workflows, proprietary methodologies, and unique expertise.

### Why Build Custom Assistants?

**Encode Institutional Knowledge:** Capture your firm's trading strategies, analytical approaches, and operational procedures in an AI assistant that can train new team members and ensure consistency.

**Specialized Domain Expertise:** Create assistants focused on specific markets, products, or workflows—a "Coal Trading Assistant" with deep knowledge of coal quality specifications and regional markets, or a "Compliance Assistant" that understands regulatory reporting requirements.

**Proprietary Methodologies:** Embed your competitive advantages—unique curve building techniques, risk modeling approaches, or valuation methodologies—in assistants that help your team apply them consistently.

**Client-Facing Tools:** Build assistants that external clients can use to interact with your data and services without exposing underlying complexity.

### How Custom Assistants Work
Custom assistants are built using the same underlying AI technology as Fusion's core six, but enhanced with:

**Custom Knowledge:** Upload your organization's documentation, trading guidelines, methodology papers, and procedural manuals. The assistant learns from these materials and references them when answering questions.

**Tool Integration:** Connect assistants to your proprietary tools, databases, and systems. An assistant can query your internal databases, execute your custom analytics, or interface with your specialized applications.

**Workflow Templates:** Define common workflows specific to your operations. An assistant can guide users through complex multi-step processes with interactive prompts and validation.
**Role-Based Behavior:** Configure assistants differently for different users—junior traders get educational guidance, while senior analysts receive advanced technical details.

### Building a Custom Assistant
Creating a custom assistant uses Fusion's intuitive configuration interface:
#### Define Purpose and Scope:
Specify what the assistant should help with—a particular market, workflow type, or functional area.
Example: "Emissions Trading Assistant" focused on EU ETS, UK ETS, and voluntary carbon markets.

#### Upload Knowledge Sources:
Provide documents that define your domain expertise:

* Trading strategy guides
* Market analysis reports
* Operational procedures
* Compliance documentation
* Code libraries and examples

#### Configure Tools and Integrations:
Connect the assistant to relevant systems:

* Internal databases for proprietary data
* Custom analytics functions
* External APIs for specialized data
* Notification systems for alerts

#### Set Behavioral Guidelines:
Define how the assistant should interact:

* Tone and communication style
* Level of technical detail
* Approval workflows for sensitive operations
* Escalation procedures for complex questions

#### Train and Refine:
Test the assistant with real questions, refine responses, and gather feedback from users to continuously improve performance.

### Custom Assistant Examples

#### LNG Trading Assistant:
Specialized in LNG spot and term markets, freight calculations, regasification dynamics, and global supply/demand fundamentals. Knows your company's shipping contracts, terminal access, and counterparty relationships.

#### Regulatory Reporting Assistant:
Guides users through REMIT reporting requirements, EMIR trade reporting, and other compliance obligations. Validates data completeness, flags potential reporting errors, and generates submission-ready files.

#### Portfolio Optimization Assistant:
Understands your firm's risk limits, capital constraints, and strategic objectives. Suggests optimal hedging strategies, evaluates new trade opportunities against portfolio constraints, and performs what-if scenario analysis.

#### Client Service Assistant:
Provides your clients with self-service access to their data, curve updates, and market commentary—answering questions about positions, valuations, and market moves without requiring analyst time.

## Assistant Collaboration

### Beyond Individual Expertise
While each Fusion assistant brings deep specialized knowledge, their true power emerges when they collaborate. Just as your trading floor benefits from specialists working together—a curve builder consulting with a quantitative analyst, or an operations manager coordinating with a developer—Fusion's assistants seamlessly collaborate to solve complex problems that span multiple domains.

### How Assistants Collaborate
Assistants understand when a task requires expertise beyond their specialty and automatically engage the right colleague:

#### Curve Assistant + Code Assistant:

> * **You:** "Build a complex oil crack spread curve that accounts for seasonal refinery utilization patterns"
> * **Curve Assistant:** "This requires custom ODSL code for the refinery utilization logic. Let me consult with the Code Assistant..."
> * [Curve Assistant engages Code Assistant]
> * **Code Assistant:** [Generates ODSL script for seasonal utilization patterns]
> * **Curve Assistant:** [Integrates the code into curve construction methodology]
> * **Result:** "Here's your crack spread curve with seasonal adjustments. The Code Assistant created the utilization pattern logic, and I've applied it to your refinery margins."

#### Code Assistant + Integrate Assistant:

> * **You:** "Write a script that fetches weather data from an external API and combines it with our power demand forecasts"
> * **Code Assistant:** "I'll handle the data combination logic. Let me work with the Integrate Assistant on the external API connection..."
> * [Code Assistant engages Integrate Assistant]
> * **Integrate Assistant:** [Creates external API client code with authentication]
> * **Code Assistant:** [Writes data merging and forecast adjustment logic]
> * **Result:** "Here's your complete script. The Integrate Assistant handled the weather API connection, and I've written the logic to adjust your demand forecasts based on temperature data."

### Transparent Collaboration
When assistants collaborate, you see the process:

* **Who's Helping:** Clear indication when additional assistants join the conversation
* **Why They're Involved:** Explanation of what expertise each assistant contributes
* **Seamless Integration:** Results presented coherently as if from a single expert team
* **Full Context:** All assistants have access to the complete conversation history

You don't need to manually switch between assistants or repeat context—Fusion handles coordination intelligently.

### Learning From Collaboration
As assistants work together on your projects, they learn your preferences and patterns:

* If you frequently need curve validation after building curves, the Curve Assistant proactively suggests engaging the Analyse Assistant
* When you ask the Code Assistant for integration scripts, it remembers you prefer Python and automatically consults the Integrate Assistant for API patterns
* The Operations Assistant learns that your volatility alerts should always include analysis commentary, so it coordinates with the Analyse Assistant by default

### Multi-Domain Problem Solving
Complex energy trading challenges rarely fit neatly into single specialties. Fusion's collaborative assistants tackle problems the way expert teams do—bringing together the right mix of skills:

#### Scenario: New Market Entry
You: "We're entering the Australian power market. Help me get set up."

General Assistant orchestrates:

* Integrate Assistant: Connects to Australian NEM data sources
* Curve Assistant: Builds appropriate forward curves for regional nodes
* Analyse Assistant: Analyzes historical price patterns and volatility
* Operations Assistant: Sets up daily data loading and curve updates
* Code Assistant: Creates custom analytics for NEM-specific features

Result: Complete market entry support from data connectivity through analytical infrastructure—delivered collaboratively by the entire assistant team.

### The Collaborative Advantage
This inter-assistant collaboration delivers benefits impossible with isolated tools:

**No Knowledge Silos:** Expertise flows seamlessly across domains
**Comprehensive Solutions:** Complex problems solved end-to-end without multiple tool switches
**Reduced Learning Curve:** You don't need to know which specialist to consult—the General Assistant routes intelligently
**Consistent Quality:** All assistants work from shared context and organizational knowledge
**Accelerated Workflows:** Solutions that might require coordinating multiple human specialists happen in a single conversation

### Human-Like Team Dynamics

#### Fusion's assistants collaborate the way effective human teams do:

* **Specialization:** Each maintains deep expertise in their domain
* **Communication:** They understand each other's capabilities and languages
* **Coordination:** The General Assistant orchestrates complex multi-specialist tasks
* **Shared Goals:** All work toward solving your complete problem, not just their piece
* **Continuous Learning:** The team improves together based on your feedback and patterns

The result is an AI team that doesn't just answer questions—it collaboratively solves the complex, multi-faceted challenges that define energy and commodity trading operations.

## Real-World Impact
* **Accelerated Onboarding:** "New analysts become productive in weeks instead of months. The assistants answer their basic questions immediately, letting senior traders focus on strategy rather than training." — Head of Trading, Energy Merchant
* **24/7 Availability:** "Our Asian and European desks work different hours. Fusion assistants provide expert support to both teams without requiring overlapping coverage from human specialists." — COO, Global Commodity Fund
* **Reduced Bottlenecks:** "Our quant team used to be overwhelmed with analysis requests. Now traders self-serve most analytical questions through the Analyse Assistant, and quants focus on developing new models." — Chief Analyst, Power Trading Firm
* **Consistent Methodology:** "Custom assistants ensure everyone follows our approved curve-building methodology. No more divergent approaches across desks that create valuation inconsistencies." — Chief Risk Officer, Natural Gas Marketer
* **Cost Efficiency:** "We get specialist-level support across six domains without hiring six specialists. The ROI was obvious after the first quarter." — CFO, Independent Energy Trader

## Intelligence That Scales
Fusion's AI Assistants—both core and custom—transform how your organization accesses expertise. Instead of bottlenecked specialists, delayed meetings, or unanswered questions, your team has immediate access to intelligent support that understands your domain, your data, and your workflows.

Whether you're analyzing markets, building curves, automating operations, writing code, integrating systems, or applying your proprietary methodologies, Fusion provides the right expert assistant for every task.

Experience AI Assistants: [Start free trial] | Explore custom assistant capabilities: [Schedule consultation] | See assistants in action: [Watch demonstration video]

<Demo />