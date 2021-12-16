---
slug: unstructured-data
title: Unstructured Data
authors: [chartley]
tags: [data, sql, odsl, unstructured]
---

<div className="row">
  <div className="column">
    <img src="/img/blog/type-service.png"/>
  </div>
  <div className="column">
  <h2>Unstructured Data</h2>
SQL is a very well-known DSL (Domain Specific Language) for managing structured data. 
In this article we compare it to a modern DSL that catapults data management into the 21st century   
  </div>
</div>



<!--truncate-->

## Background
This article demonstrates how you can use **OpenDataDSL** to manage your **Unstructured Data** in specific reference to 
the excellent article that explains *What is Unstructured Data and why is it so important to businesses* by 
[Bernard Marr for Forbes](https://www.forbes.com/sites/bernardmarr/2019/10/16/what-is-unstructured-data-and-why-is-it-so-important-to-businesses-an-easy-explanation-for-anyone)

### Structured Data
When we talk about Structured Data, we refer to Relational Databases and the use of SQL to manage and query that data.

SQL was first formalised and adopted as an ANSI standard in 1986 and then the ISO in 1987.
It has gone through a number of iterations since then in order to adapt to the changing database landscape.
SQL works with relational database which impose a predefined schema on the data which implicitly makes the data 'structured'.
For many applications this works well and the schema forces you to work with the model that has been designed to fit the data.

### Design Evolution
This restriction however, comes at a cost.
As business evolves, there will inevitably be additional information required which will result in a database schema change.
This change can involve one of the following, in order of complexity:

* Adding more fields to a table
* Adding a new table which you would link to using foreign keys
* Changing the design or breaking a table into multiple tables

### Unstructured Data
In 1998 [Carlo Strozzi](http://www.strozzi.it/cgi-bin/CSA/tw7/I/en_US/NoSQL/Home%20Page) coined the term NoSQL which referred
to his opensource relational database that didn't use SQL.
Since then NoSQL has become the terminology used for non-relational databases where SQL cannot be used or it doesn't make sense to use.

The [DB-Engines Ranking WebSite](https://db-engines.com/en/ranking) is a comprehensive catalog of all types of databases.

:::info
**95% of businesses worldwide cite the need to manage unstructured data as a problem for their business**

*Source: Forbes*
:::

In a digitally powered economy like ours, only those with the right form of data can successfully navigate the market, 
make future predictions, and adjust their business to fit market trends. 
Unfortunately, most of the data we generate today is unstructured, which means it comes in different forms, sizes, and even shapes. 
Hence, it is difficult and costly to manage and analyze, which explains why it is a big problem for most companies.

:::info
**80-90% of the data we generate today is unstructured**

*Source: CIO, Forbes*
:::

## How Can OpenDataDSL Help?
All the data in OpenDataDSL is stored in [MongoDB](https://www.mongodb.com) which is primarily a **Document Database**,
but can also be classed as a spatial database, a search engine and most recently a TimeSeries database.
MongoDB is the highest ranking non-relational database in [DB-Engines Ranking](https://db-engines.com/en/ranking).

