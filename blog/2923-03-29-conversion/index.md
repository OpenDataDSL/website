---
slug: conversion
title: Data Conversion
authors: [chartley]
tags: [conversion, currency, units, odsl]
image: /img/blog/conversion.jpg
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
    <img src="/img/blog/conversion.jpg"/>
  </div>
  <div className="column">
  <h2>Extensive and reliable data conversion</h2>  
    In this blog, we show you how OpenDataDSL makes currency, unit, calendar, timezone and precision conversion simple.  
  </div>
</div>

<!--truncate-->

### Why convert data?
Converting data is important for several reasons:

* **Standardization**: Different countries and industries use different units of measure and currency. Converting units and currencies to a standard unit helps to facilitate communication and ensure consistency across different systems.
* **Comparison**: 
  Converting currency and units of data allows for easy comparison between different values and onverting the frequency of data can also facilitate comparison with other data that is reported at a different frequency.
* **Accuracy**: Converting currency and units of data ensures accuracy in calculations. If you are working with data that uses different units, it can be difficult to make accurate calculations without converting them to a common unit.
* **Convenience**: Converting currency and units of data can also make it easier to work with data. For example, if you are working with a dataset that uses multiple units of measure, converting them to a common unit can make it easier to analyze the data and draw conclusions.
* **Consistency**: When working with data from multiple sources, it's important to ensure that all data is standardized to the same timezone. This helps to ensure that analysis and comparisons are accurate and consistent. Converting the frequency of data can help ensure consistency in reporting and analysis. If different data sets are reported at different frequencies, it can be difficult to compare them or draw meaningful conclusions.
* **Collaboration**: If people are working on the same data but in different timezones, converting the timezone of the data can help ensure that everyone is working with the same information.
* **Local time analysis**: Converting the timezone of data can also help in analyzing data according to local time, which can be important in areas such as transportation, healthcare, and logistics where local time is a critical factor.
* **Reduce noise and volatility**: High-frequency data can be more volatile and noisy, making it difficult to identify long-term trends. By converting the frequency to a lower level, such as monthly or quarterly, the noise and volatility can be reduced, making it easier to identify trends and patterns.
* **Simplify analysis**: Converting the frequency of data can make analysis simpler and more efficient. It can reduce the amount of data that needs to be analyzed and make it easier to identify significant changes or patterns.

Overall, conversion is important to ensure accuracy, consistency, collaboration, and convenience when working with data.

### What can you convert?
<img className={styles.product_screenshot} src="/img/blog/conversion_types.png" />

<hr />

:::info SMART Conversion
In most scenarios within OpenDataDSL, data is automatically converted to match the task you are trying to achieve
:::


### Currency and Units
All data stored in OpenDataDSL should have a unit of measure applied and all pricing data should also have a currency.
Converting currency and/or units helps for comparisons, for example, if you are trying to compare the price of a product in two different countries, you need to convert the currencies to make an accurate comparison.

We collect data from various [global fx currency rate providers](https://doc.opendatadsl.com/docs/data/fx) which can be used for currency conversions.

### Calendar/Frequency of Data
Converting the frequency of data refers to the process of changing the time interval at which data is recorded or reported. For example, converting daily data to monthly or quarterly data.

You have various options on how to scale the data between different frequencies:
* Summed - Sums the values in the period
* Averaged - Averages the values in the period
* End - Takes the last value in the period
* Beginning - Takes the first value in the period
* High - Takes the highest value in the period
* Low - Takes the lowest value in the period
* Delta - Takes the change of values between the periods

### Timezone
It's important to have data in a specific timezone in order to accurately analyze it. For example, if you are analyzing pricing data from a specific region, you may need to convert the timezone to accurately reflect the timing of trades in that region.

### Precision
Data precision is important because it determines the level of accuracy and reliability of the information being analyzed. Inaccurate or imprecise data can lead to flawed analysis and decision-making, which can have serious consequences for businesses, organizations, and individuals.

You can read more about how OpenDataDSL handles data precision in my [previous blog](/blog/ensuring-data-precision). 

## Next steps
Do you want to see this in action and see how you can benefit from OpenDataDSL?

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [Excel Add-in](https://doc.opendatadsl.com/docs/user/excel)
* [SMART Curves](https://www.opendatadsl.com/blog/smartcurves)
