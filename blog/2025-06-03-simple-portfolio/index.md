---
slug: simple-portfolio
title: Simple Portfolio
authors: [chartley]
tags: [portfolio, profit, finance, odsl, extensions]
---
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
    <img src="/img/blog/portfolio/portfolio.jpg"/>
  </div>
  <div className="column">
  <h2>Manage Trading P&L</h2>
  <p>The latest OpenDataDSL platform release has a major new feature: Extensions</p>
  <p>Extensions allow us, our partners and you to extend the platform portal, allowing you to create bespoke tools and functionality.</p> 
  <p><b>The blog focusses on a specific extension we have created which allows you to easily track profit and loss on trades you make.?</b></p> 
  </div>
</div>

<!--truncate-->
## Portfolio Management
The simple portfolio extension consists of a number of components which make it easy to log trades, calculate profit/loss and aggregate the P&L in a portfolio of instruments. 

### Portfolio
We define a portfolio as a basket of tradable instruments which can represent a specific commodity, location or any arbitrary grouping you decide.

### Trades
Trades in our simple portfolio are a record of an amount of a specific instrument, bought or sold for a specific price and timepoint.

Each trade event contains the following information (only information required for calculating profit):

|Name|Type|Description|
|-|-|-|
|TRADE_ID|String|Unique trade id|
|INSTRUMENT|String|The data id of the product traded|
|PRICE|Number|The price traded at|
|VOLUME|Number|The volume traded, negative for a bid (sell trade)|


Trades can be entered in one of the following ways:
* In the portal
* In the Excel Add-in
* Using the REST API or one of the SDK's

### Market data
The trades are tracked against market data in order to track the daily profit and loss. 

### Event-driven calculations
When new trades or market data is updated, the profit and loss for the portfolios is re-calculated.

### Reports and widgets

The following reports are provided with the simple portfolio extension:

* Trade report - a report of all your trades over a time period
* Open positions - a report showing all your current open trades

![](/img/blog/trade_report.png)

* Profit and Loss - a report showing a daily P&L for each portfolio

![](/img/blog/widget.png)

## Conclusion
The simple portfolio extension is an example of bespoke functionality that can be easily added to the OpenDataDSL platform using the new extension functionality.

We are actively looking for more use-cases that we can build out as platform extensions, if you have a use-case you would like to see, please get in contact using the form below or email us directly.

## Next steps
Do you want to see this in action and see how you can benefit from OpenDataDSL?

Tell us about your project, and we can let you know how we can help.

* Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)
* [Sign Up](/SignUp) today and become part of the OpenDataDSL community!
* Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


