---
slug: precious_metals
title: Precious Metals
authors: [avinzelberg]
tags: [business case, precious metal, smartdata,  odsl]
image: /img/blog/metals/metals.jpg
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="col-md">
    <img src="/img/blog/metals/metals.jpg"/>
  </div>
  <div className="col-md">
  <h3>The Golden Connection: Exploring the Data-Rich World of Precious Metals</h3>  
    <p></p>
    In a world of economic uncertainty and fluctuating markets, precious metals have often emerged as a safe haven for investors seeking stability and wealth preservation.
    The most widely recognized precious metals are gold, silver, platinum, and palladium, although other metals such as rhodium and iridium are also considered precious.
    <p></p>
  </div>
</div>

<!--truncate-->

## Precious Metals


### Example: LBMA Metals Data in ODSL

We store precious metals data in ODSL, amongst others, from London Bullion Market Association [LBMA](https://www.lbma.org.uk/prices-and-data/precious-metal-prices#/).
Besides the prices for the different auction times for the precious metals we also store properties that can be used for instance for filtering, calculations or access rights specifications.

<img className={styles.product_screenshot} src="/img/blog/metals/gold.PNG" />


#### Visualization of the LBMA Metals Data

Let's explore some of the silver, gold, palladium and platinum data. Downloading the data stored as timeseries with our ODSL Excel-Addin and easily visualizing them using the standard functionalities in Excel.

<img className={styles.product_screenshot} src="/img/blog/metals/addin_overview.PNG" />

<img className={styles.product_screenshot} src="/img/blog/metals/addin_data.PNG" />

The LBMA data for precious metals are visualized for silver, gold, palladium and platinum for the different auction times, that are:
* 12:00 London time for silver 
* 10:30 and 15:00 London time for gold
* 9:45 and 14:00 London time for palladium and platinum.

<img className={styles.product_screenshot} src="/img/blog/metals/graphs.PNG" />

The correlation matrix visualized as a heatmap shows how the data are related. A correlation coefficient near 1 shows a high correlation (colored in green), whereas lower correlations are colored in yellow or red in this case.

<img className={styles.product_screenshot} src="/img/blog/metals/correl.PNG" />


## Conclusion

Precious metals play a vital role in industrial applications, with their unique physical properties contributing to development in technology, healthcare, and renewable energy. From electronics and catalytic converters to medical devices and jewelry, these metals have practical utility that adds to their value.

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