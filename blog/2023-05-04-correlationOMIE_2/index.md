---
slug: correlation1
title: Data Analysis
authors: [avinzelberg]
tags: [business case, smartdata, matrix, odsl]
image: /img/blog/mongodb.svg
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
    <img src="/img/blog/correl/analysis-data.jpg"/>
  </div>
  <div className="column">
  <h2>Data insights</h2>  
    In this blog, we show you how to use OpenDataDSL matrices and the ODSL Excel Add-in to gain valuable insights into your data. Here we show you the different facetts of analysing an hourly time series.
  </div>
</div>

<!--truncate-->

## Data analysis

Data analysis refers to the process of systematically examining and interpreting data using various analytical and statistical techniques to derive insights and draw conclusions. Some common techniques used in data analysis include regression analysis, hypothesis testing, machine learning, data visualization, and data mining. Data analysis can involve several steps, including data collection, cleaning, transformation, modeling, and visualization. The goal is to extract meaningful information from raw data, identify patterns and trends, and use these insights to support the business.

## Hourly Electricity Price Data

As an example we use Iberian Electricity data published by [OMIE](https://www.omie.es/en/spot-hoy). Specifically we use electricity prices for Spain for the year 2022 on an hourly granularity.

Visualizing the timeseries of the hourly price time series using ODSL-WebPortal

<img className={styles.product_screenshot} src="/img/blog/correl/omie_es_ts.PNG" />


so we look at the prices as a collection of observations that are recorded over time, here an hourly granularity. This visualization of time series data is a common way to analyse trends, seasonality, and other patterns that occur over time.

Another way to get insights to the data is to convert this time series into a matrix, where columns represent the hours of the day 1-24 and rows represent the days of the year 1-365. This transformed view supports the task to analyse the same data input but per hour of the day over time. ODSL supports it with a function **toMatrix()**

```js

// Input time series are the electricity prices for Spain from OMIE for 2022
input = ${data:"#OMIE.EL.ES.DA:PRICE_TS"}
d1 = parse("2022-01-01T00:00:00", "yyyy-MM-dd'T'HH:mm:ss", "Europe/Madrid")
d2 = parse("2022-12-31T23:00:00", "yyyy-MM-dd'T'HH:mm:ss", "Europe/Madrid")
input = input.range(d1, d2)

// transform the time series into a matrix
mx = input.toMatrix(DailyCalendar())

```

You can visualize the data view in ODSL Web-Portal:

<img className={styles.product_screenshot} src="/img/blog/correl/omie_es_mat.PNG" />

or using our ODSL Excel-Addin (here a graphs snipped for the days 1-31 of year 2022):

<img className={styles.product_screenshot} src="/img/blog/correl/omie_es_mat_excel.PNG" />

### Correlation

Referring to my latest blog [Data - Facts and Figures](https://www.opendatadsl.com/blog/correlation), we know that correlation analysis helps to identify dependencies in the data set. ODSL supports different input options calculating the Bravais-Pearson correlation coefficients. In the blog [Data - Facts and Figures](https://www.opendatadsl.com/blog/correlation) two time series are used. In this blog here, we use a matrix as an input,  where the correlation of each of the columns is calculated with all of the columns of the matrix. The result is again a matrix. Moreover the function supports a shift parameter to shrink the size of the inputs. 

```js
// set the precision to 4 for rounding
set precision 4
// calculating the correlation using a matrix mx as an input (from above)
// and a shift parameter of 1 or 7:
obj.HRS_ES_2022_d_d1 = correlation(mx, 1)
obj.HRS_ES_2022_d_d7 = correlation(mx, 7)

```

A use case for this is the correlation matrix from above of a day **d** against the previous day **d-1** when the **shift parameter is 1**. Obviously you can use any shift parameter - for instance with a **shift parameter of 7** you calculate the correlation from today **d** against previous weeks prices which is **d-7**.

#### Heatmap formatting

The matrix output colored as a heatmap using the formatting:

<img className={styles.product_screenshot} src="/img/blog/correl/heatmap_format.PNG" />

where no correlation is blue, correlation of 50% is colored in white and perfect correlation is colored in orange.

#### The correlation matrix from day d against d-1:

The correlation between day d and day d-1 of the 24 hours granularity over 364 days range (due to a shift of 1 day) is quite high with correlation coefficients between 63,69% and 92,51%.

<img className={styles.product_screenshot} src="/img/blog/correl/correl_d1.PNG" />

#### The correlation matrix from day d against d-7:

The correlation between day d and day d-7 of the 24 hours granularity over 358 days range (due to a shift of 7 days) is moderate with correlation coefficients between 41,39% and 65,59%.

<img className={styles.product_screenshot} src="/img/blog/correl/correl_d7.PNG" />



## Conclusion

Correlation analysis helps to identify dependencies in the data set and serves to setup solid price forecasts, where it is essential to know how the price dependencies is behaving historically with specific investigations for short and long contracts. One use case for it is shaping forward curves.

## Next steps
Do you want to see this in action and see how you can benefit from OpenDataDSL?

Fill out the form below, we will contact you to arrange a personally tailored demo.

<Demo />


## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)
* [Matrix in ODSL](https://doc.opendatadsl.com/docs/odsl/variable/matrix)