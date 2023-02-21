---
slug: matrix
title: Using a matrix object in ODSL
authors: [avinzelberg]
tags: [business case, smartdata, matrix, odsl]
image: /img/blog/mongodb.svg
hide_table_of_contents: true
---
import styles from './index.module.css';

<div className="row">
  <div className="column">
    <img src="/img/blog/matrix/matrix_holographic.jpg"/>
  </div>
  <div className="column">
  <h2>Assured, no need to decide between the red or the blue pill...</h2>  
    ...but explore how easy it is to use matrices in ODSL.
    For this purpose we analyse 17 Industry Portfolios for two time frames.
  </div>
</div>

<!--truncate-->

## Analysis of 17 Industry Portfolios

### Inputs

We consider United States related input data of market value weighted equity portfolios representing 17 industry sectors listed below and whose monthly return data can be found in the online database of Kenneth R. French's [website](http://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html). For further analysis we store the monthly returns available for the time horizon July 1926 until December 2022 as time series in ODSL using the Excel-Addin or a loader.

The list of the 17 Industries:
* **FOOD:** Food
* **MINES:** Mining and Minerals
* **OIL:** Oil and Petroleum Products
* **CLTHS:** Textiles, Apparel & Footwear
* **DURBL:** Consumer Durables
* **CHEMS:** Chemicals
* **CNSM:** Drugs, Soap, Perfumes, Tobacco
* **CNSTR:** Construction and Construction Materials
* **STEEL:** Steel Works Etc
* **FABPR:** Fabricated Products
* **MACHN:** Machinery and Business Equipment
* **CARS:** Automobiles
* **TRANS:** Transportation
* **UTILS:** Utilities
* **RTAIL:** Retail Stores
* **FINAN:** Banks, Insurance Companies, and Other Financials
* **OTHER:** Other

At the [website](http://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html) of Kenneth R. French you get further information on the industry portfolio composition.

### Time frames
The analysis is done for two different time horizons, specifically for the 3 years of covid, namely 2020, 2021, 2022 and the 3 years before covid, 2017, 2018 and 2019. Consequently for both time frames we have a set of 36 observations.


### Data visualisation

In the ODSL WebPortal the data can be checked. Exemplary the return time series for FOOD and CARS industries are shown for the entire time horizon.

<img className={styles.product_screenshot} src="/img/blog/matrix/wp_TS_all.png" />

In comparison to that setting a specific range to show up in the WebPortal, here years 2017-2022, which cover both time frames. Looking at the two lines (blue is FOOD and red is CARS), we already see a different behaviour of the two lines: In the first half the values are quite close and in the second half the values differ quite a lot. 

<img className={styles.product_screenshot} src="/img/blog/matrix/wp_TS_6y.png" />


### Usage of matrices in ODSL WebPortal
A matrix with the main statistics and a correlation matrix can help to analyse the data and represent the dependencies for the 17 industries in a structured way.

#### Main Statistics
As main statistics we consider minimum value, maximum value, mean and standard deviation that are calculated, stored and shown up for the two time frames. 

##### Before Covid

In the time frame before covid we have the lowest return for STEEL (-15.46%) followed by CNSTR (-13.96%) and CHEMS (-13.62%) and the highest for STEEL (17.11%) followed by MINES (14.03%) and DURBL (12.83%). 

For STEEL the highst risk (standard deviation 7.45%) followed by OIL (standard deviation 6.10%) is not accompanied by high returns but quite the opposite lowest returns (mean 0.24% for STEEL and -0.11% for OIL).

<img className={styles.product_screenshot} src="/img/blog/matrix/wp_m_bc_stat.png" />

In an ExcelSheet, where the matrix can also be downloaded and formatted, the information looks like:

<img className={styles.product_screenshot} src="/img/blog/matrix/m_bc_stat.png" />

##### During Covid

During covid period the lowest returns are noted for OIL (-34.69%) followed by CARS (-25.35%) and TRANS (-22.65%) and the highest returns for CARS (38.72%) followed by OIL (32.87%) and STEEL (23.84%). 

The highest risk for CARS (standard deviation 14.95%) is here accompanied by highest return (mean 2.72%).

<img className={styles.product_screenshot} src="/img/blog/matrix/wp_m_c_stat.png" />

Here, the formatted matrix in Excel shows up as:
<img className={styles.product_screenshot} src="/img/blog/matrix/m_c_stat.png" />

##### ODSL Code

```js

// List of data sets with object_id P17INDUSTR
objects = find ${data} where _objid="P17INDUSTR"

// List of strings containing the profiles (17 industries)
d = find unique _dataid from ${data} where _objid="P17INDUSTR"

// Defining a matrix with 4 columns for statistics and 17 rows for industries
xLabels = (["Min", "Max", "Mean", "StdDev"])
stats = Matrix(d.size, xLabels.size)
stats.setXLabels(xLabels)
stats.setYLabels(d)

set precision 2
data = []
// Re-scaling the data, so pick only a specific time range for analysis 
// fill the matrix
for i in objects
    i.withRange("2017-01-01", "2019-12-01")
    stats.setValueAt(i.dataid, "Min", min(i))
    stats.setValueAt(i.dataid, "Max", max(i))
    stats.setValueAt(i.dataid, "Mean", mean(i))
    stats.setValueAt(i.dataid, "StdDev", stdev(i))
next

// Define the matrix and save it
MX_P17 = Object()
MX_P17.category = "MATRIX"
MX_P17.STATS_17_18_19 = stats
save ${object: MX_P17}

```


#### Correlations between industries 


The dependencies between the 17 industries can be calculated in a correlation matrix and visualized in a specific graph, a so called heatmap, where darkest color represent highest correlation and brightest color lowest correlation.

##### Before covid:
<img className={styles.product_screenshot} src="/img/blog/matrix/wp_m_bc.png" />

After downloading and formatting the matrix in Excel, the heatmap looks like:
<img className={styles.product_screenshot} src="/img/blog/matrix/m_bc.png" />

##### During covid:
<img className={styles.product_screenshot} src="/img/blog/matrix/wp_m_c.png" />

The heatmap in Excel for the time frame during covid looks like:
<img className={styles.product_screenshot} src="/img/blog/matrix/m_c.png" />

##### ODSL Code

```js
// Calculate the correlation
// The output is a correlation matrix
mx = correlation(data)

```

### Usage of matrices in ODSL Excel-Addin
The ODSL Excel Addin provides powerful features to download, upload or refresh your data.

![/img/blog/matrix/excel-addin.png](/img/blog/matrix/excel-addin.png)

The Excel-Addin understands where the matrix is placed in the sheet and by (un-)ticking the box you can decide (not) to refresh the matrix data information. 

![/img/blog/matrix/excel-addin_m.png](/img/blog/matrix/excel-addin_m.png)


## More information or free trial?
Tell us about your project, and we can let you know how we can help.

Contact us at [info@opendatadsl.com](mailto:info@opendatadsl.com)

## Further Reading
* [What is OpenDataDSL?](https://doc.opendatadsl.com/docs/product/intro)
* [VSCode extension](https://doc.opendatadsl.com/docs/user/vscode)
* [Coding in ODSL](https://doc.opendatadsl.com/docs/odsl)
* [Matrix in ODSL](https://doc.opendatadsl.com/docs/odsl/variable/matrix)