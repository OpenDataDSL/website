---
slug: smartcurves
title: SMART Forward Curves
authors: [chartley]
tags: [smartcurve, curve]
image: /img/blog/smartcurves/smartcurve.jpg
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
    <img src="/img/blog/smartcurves/smartcurve.jpg"/>
  </div>
  <div className="column">
  <h2>What are Smart Curves?</h2>  
    Smart Curves are a revolutionary new way to create your own <b>Forward Curves</b>.
    <br /><br />Read on to find out how they work.
  </div>
</div>

<!--truncate-->


### Creating Smart Curves
Smart Curves are simply a Forward Curve with an expression applied to it.

![](/img/blog/BasePlusExpression.png)

This may seem too simple - but the power of what you can do in the expression makes this suitable for the generation of any type of Forward Curve.

:::tip Simplify!
Smart Curves are the *easiest* way to create Energy and Commodity Forward Curves.
:::

<img className={styles.product_screenshot} src="/img/blog/smartcurves/curve_screenshot.png" />
<span className={styles.product_screenshot_title}>Screenshot from the OpenDataDSL portal of an hourly forward curve</span>

### Advantages

* **Simple**
  > A simple configuration to create Smart Curves from any Forward Curve.
* **Configurable**
  > Utilise any other data (Curves/TimeSeries/Scalars).
* **Powerful**
  > Expressions can be curve operations, built-in functions or your own custom functions.
* **Scalable**
  > Smart Curves are extremely lightweight and built on demand so are infinitely scalable.
* **Fast**
  > Smart Curves are ready as soon as the input data is updated.
* **Low Cost**
  > No costly processes to run to build curves - curves are built on-demand.
* **Customizable**
  > Create you own algorithms.
* **Hierarchical**
  > Smart Curves can be based on other Smart Curves.

## What is the SMART Part?
The base curve provides the dates for which the Smart Curve exists. 

When a Smart Curve Date is requested for the first time, the expression is evaluated, and a Forward Curve is built.
Each subsequent call to the same date of the Smart Curve returns the cached Forward Curve.

Any changes to the input data for a specific date clears the cached copy of the Smart Curve for that date.
Any changes to the Smart Curve configuration clears the entire cache for that Smart Curve. 

## More Complex Calculations
Even though you simply use an expression to generate the curve, you can write some complex code behind the expression to create any type of Forward Curve.

More complex Smart Curves can include:

* An optional custom script name containing user definable functions
* Optional references to other curves or data used in the expression

You write the custom functions in [ODSL Scripts](https://doc.opendatadsl.com/docs/odsl) and upload them to the database.
The following function creates a time spread curve:

```js
/**
 * Create a curve with spreads created from the months in the 
 * input curve after bootstrapping
 *
 * @param input The input curve
 */
function timespread(input)
    boots = bootstrapCurve(input)
    timespread = Curve(input.ondate)
    last = boots.contracts[0]
    for i = 1 to boots.contracts.size - 1
        m = boots.contracts[i]
        value = m.value - last.value
        spread = Contract(input.ondate, last.tenor + "-" + m.tenor, value)
        timespread.add(spread)
        last = m
    next
end
```

You can then use this function in the OpenDataDSL portal, to create a time-spread curve:

<img className={styles.product_screenshot} src="/img/blog/smartcurves/timespread.png" />
<span className={styles.product_screenshot_title}>Screenshot from the OpenDataDSL portal creating a smart curve</span>

<img className={styles.product_screenshot} src="/img/blog/smartcurves/timespread_chart.png" />
<span className={styles.product_screenshot_title}>Screenshot from the OpenDataDSL portal of the time-spread curve</span>



### Additional Curve Inputs
You can add references to other Scalar, TimeSeries, Forward Curves or Smart Curves directly on the Smart Curve and reference them in the expression.

<img className={styles.product_screenshot} src="/img/blog/smartcurves/pjm_atc.png" />
<span className={styles.product_screenshot_title}>Screenshot from the OpenDataDSL portal creating a smart curve with multiple inputs</span>


#### Some example expressions

* BASE*1.2
* (BASE+OFFER)/2
* bootstrapCurve(BASE)
* TimeSpread(BASE)

### Conversions
Currency and unit conversions happen automatically.
If you specify a currency and/or units on the Smart Curve, any inputs will be converted to the destination currency and units before the expression is calculated.

<img className={styles.product_screenshot} src="/img/blog/smartcurves/conversion.png" />
<span className={styles.product_screenshot_title}>Screenshot from the OpenDataDSL portal creating a smart curve specifying currency and units</span>


## Testing Smart Curves
You can create and test Smart Curves directly using ODSL code in the [VSCode development environment](https://doc.opendatadsl.com/docs/user/vscode):

```js
// Create a smart curve
cf = SmartCurve("MYCURVE:CLOSE", "interpolate(bootstrapCurve(BASE),'BACKWARD')")

// Build a curve dynamically for a date
c1 = cf.build("2022-01-07")
print c1.contracts
```

## Conclusion
SMART curves have revolutionised the way we build curves by simplifying and streamlining every aspect from creation to daily operations. 

## Next steps
Do you want to see this in action and see how you can benefit from OpenDataDSL?

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [Smart Curve Tutorial](https://doc.opendatadsl.com/docs/tutorials/smart-curves)
* [Smart Curve Variable](https://doc.opendatadsl.com/docs/odsl/variable/smartcurve)
* [Standard Curve Building Functions](https://doc.opendatadsl.com/docs/public/scripts/curve-building)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)