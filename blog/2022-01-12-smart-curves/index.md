---
slug: smartcurves
title: SmartCurves
authors: [chartley]
tags: [smartcurve, curve]
---

<div className="row">
  <div className="column">
    <img src="/img/blog/SmartCurvesBlog.png"/>
  </div>
  <div className="column">
  <h2>What are Smart Curves?</h2>  
    Smart Curves are a revolutionary new way to create your own <b>Forward Curves</b>.
    <br /><br />Read on to find out how they work.
  </div>
</div>

<!--truncate-->

## On-Demand Forward Curves
Smart Curves are the easiest way to create Energy and Commodity Forward Curves.

:::tip On-Demand!
## Smart Curves are built on demand and cached for future requests.
:::

## Creating Smart Curves
A basic Smart Curve consists of:

* A base curve which can be a curve or another Smart Curve
* An expression which is used to generate the curve

![](/img/blog/BasePlusExpression.png)

## What is the SMART Part?
The base curve provides the dates for which the Smart Curve exists. 

When a Smart Curve Date is requested for the first time, the expression is evaluated and a Forward Curve is built.
Each subsequent call to the same date of the Smart Curve returns the cached Forward Curve.

Any changes to the input data for a specific date clears the cached copy of the Smart Curve for that date.
Any changes to the Smart Curve configuration clears the entire cache for that Smart Curve. 

## More Complex Calculations
Even though you simply use an expression to generate the curve, you can write some complex code behind the expression to create any type of Forward Curve.

More complex Smart Curves can include:

* An optional custom script name containing user definable functions
* Optional references to other curves or data used in the expression

You write the custom functions in ODSL Scripts and upload them to the database.
Simple coding like:

```js
import ${script:"#CurveScript"}

function agCurve(input)
    // Agricultural curve bootstrapped and backward filled
    boots = bootstrapCurve(input)
    agCurve = interpolate(boots, "BACKWARD")
end
```

* This script imports the global standard curve function library.
* It contains a single ```agCurve``` function which bootstraps an input curve to an arbitrage-free monthly curve using the built-in bootstrapCurve function.
* It then fills any missing tenors with future tenors to simulate how harvest trading works using the interpolate function from the curve function library.

The Smart Curve ODSL code to create and to use this function for a sample input curve is:

```js
SOYBEAN = Object()
SOYBEAN.CURVE = SmartCurve("#DCE.AG.CN.A.NO1_SOYBEAN.FUT:CLOSE", "agCurve(BASE)")
SOYBEAN.CURVE.script = "SmartCurveCustomScript"

save ${object:SOYBEAN}
```

### Additional Curve Inputs
You can add references to other Scalar, TimeSeries, Forward Curves or Smart Curves directly on the Smart Curve and reference them in the expression.

```js
sc = SmartCurve("baseCurve", "((BASE+OFFER)/2) * factor")
sc.OFFER = ref("data", "otherCurve")
sc.factor = 0.85
```

Some example expressions

* BASE*1.2
* (BASE+OFFER)/2
* bootstrapCurve(BASE)
* TimeSpread(BASE)

### Conversions
Currency and unit conversions happen automatically.
If you specify a currency and/or units on the Smart Curve, any inputs will be converted to the destination currency and units before the expression is calculated.

```js
sc1 = SmartCurve("#DCE.AG.CN.A.NO1_SOYBEAN.FUT:HIGH", "(BASE+LOW)/2")
sc1.LOW = ref("data", "#DCE.AG.CN.A.NO1_SOYBEAN.FUT:LOW")

// Convert to EUR/MT
sc1.currency = "EUR"
sc1.units = "MT"
```

## Testing Smart Curves
You can create and test Smart Curves directly using ODSL code in the VSCode development environment:

```js
cf = SmartCurve()
cf.baseCurve=ref("#MATBAROFEX.ROS.CORN.FUT:CLOSE")
cf.expression="interpolate(bootstrapCurve(BASE),'BACKWARD')"

// Build a curve dynamically for a date
c1 = cf.build("2022-01-07")
print c1.contracts
```

## Further Reading
* [Smart Curve Variable](/docs/odsl/variable/smartcurve)
* [Standard Curve Building Functions](/docs/public/scripts/curve-building)
