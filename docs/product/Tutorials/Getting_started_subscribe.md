---
slug: /tutorials/gettingstarted1
tags:
  - tutorial
  - subscription
  - getting-started
---
Getting started: Subscribing to Data-Feeds
==========================================

A "Getting Started" guide to OpenDataDSL - subscribe to our **FREE** public data feeds.

## Introduction

This is the first of the "Getting Started" series of tutorials which take you through real-world examples of how to 
work with OpenDataDSL.

In this tutorial, we take you step-by-step through the process of subscribing to a FREE data feed and take you through
various options for feeding that data into databases and applications within your own enterprise. 

The diagram below explains the areas that this tutorial covers.

![](/img/tutorial/getting-started-1-overview.png)

We are going to feed the data file to your choice of 3 different consumers:
* A C# application which will feed the data into a local SQL Server Database
* A [Camel](https://camel.apache.org/) Enterprise Integration Pattern (EIP) which will feed into a local service bus
* A Cloud BI Reporting tool

:::info
In our tutorial, only one consumer will work at a time. You could do this, however this tutorial is focussed on 
implementing a specific consumer for a subscription.  
::: 

## Step 1 - Subscribing to a data feed

In this tutorial, we are going to subscribe to a daily feed of FX rates as provided by the European Central Bank. 
The dataset code is [ECB_FX](/docs/dataset/ECB_FX), there are 32 exchange rates against the Euro from various other currencies.

### Create a queue

In this step we will create a queue that will be used with the subscription that we create.

In the portal:
* Select **Queues**
* Click the **New** button to open up the queue creation screen.
* Give the queue the name **tutorial**
* Ignore the handler as we are going to handle the queue consumption ourself
* After creation, you will see the queue details on the screen, copy the **connection** string, you will need this for later on

### Subscribe to data

We now need to create a subscription that will feed FX TimeSeries into our newly created queue.

In the portal:
* Select **Subscriptions**
* Click the **New** button to open up the subscription creation screen
* Give the subscription the name **sub_ecb_fx**
* Click on the **Add Data** button
* Add a **Filter** by clicking the + button and select **Dataset**
* Find **#ECB_FX** in the list
* Click the check-box at the top to select all the data items
* Click **OK**
* Click on the **Add Target** button
* Select **Queue Target** from the dropdown and then select the **tutorial** queue that we created in the previous step
* Click **OK** to save our subscription

## Step 2 - Create our consumer

Here we can decide which consumer(s) we want to create for our subscription

* [Feed SQL Server Database](#feed-sql-server-database)
* [Feed ServiceBus](#feed-servicebus)
* [Feed BI Reporting Tool](#feed-bi-reporting-tool)

### Feed SQL Server Database

### Feed ServiceBus

### Feed BI Reporting Tool
