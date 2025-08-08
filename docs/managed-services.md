---
slug: /managed-services
title: Managed Services
sidebar_position: 2
---
import { Feature } from '/src/components/Features';
import styles from '/css/docs.module.css';

OpenDataDSL Managed Services covers all the infrastructure, software, data and services we provide out-of-the-box.

![](/img/features/managed-services-horizontal.png)

## Data Aggregation

OpenDataDSL provides a comprehensive and centralized source of internal and external information, which can be used across an enterprise in multiple work streams and for multiple purposes such as research, back testing, business intelligence, ERP, data analytics, portfolio pricing or risk management.


### Data Catalog

Click [here](https://doc.opendatadsl.com/docs/data/catalog) to view the current data catalog

### Current Data Roadmap

Click [here](https://doc.opendatadsl.com/docs/data/roadmap) to view the current data roadmap

All the data we collect is organised into:
* [Master Data](#master-data) - descriptive information about the data collected used to organise and catalog
* [Event Data](#event-data) - the transactional data, such as prices and volumes, that gets appended to regularly


## Master Data

<h3>Clean, categorised, descriptive, informative and searchable</h3>


Master Data in the OpenDataDSL platform is the key information about a product comprised of:
* Detailed information about the specific product
* Dimensional data used for filtering
* Links to event data, timeseries, curves and reports
* GEO location information for physical assets
* Linked vendor and internal custom documentation 


<div className={styles.features}>

### Detailed Information

<Feature
    subtitle="Clear and precise information"
    image="/img/features/master-data.png"
    text1="Master Data is the glue that joins together all information related to a specific product."
    text2="For all the data we manage, we provide high quality master data which you can augment with your own properties, tags custom timeseries, curves, reports and documentation."
/>

### Filtering

<Feature
    subtitle="Automatic, dynamic filters"
    video="/img/features/master-data-filtering.mp4"
    text1="Locating data in the platform is simple, intuitive and dynamic because it utilises master data properties."
    text2="Add custom tags to add your own nomenclature in order to enhance the searching and filtering for your end users."
    section3="Save your filters"
    text3="Saving your filters allows you to create a <a href='/docs/implementation/favourites'>one-click favourite</a> to improve productivity and get you right where you need to be."
/>
</div>

## Event Data

<h3>Transactional data we load every day</h3>

Event Data in the OpenDataDSL platform is the dated transactional market data.

From Event Data, we create timeseries and forward curve views - the data is only stored once, but can be viewed from many different perspectives.

<div className={styles.features}>

### Raw Pricing Data

<Feature
    subtitle="Raw market pricing information"
    image="/img/features/event-data.png"
    text1="Event Data is the transactional data provided by the source that is loaded every day (sometimes many times per day)."
    text2="This raw pricing data is stored and monitored for changes/corrections."
/>

</div>

## Dataset Monitoring

<h3>Tools for operational support</h3>

## Calendars

## Forward Curves

## Timeseries

## Reports and Insights

