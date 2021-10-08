---
slug: /tutorials/gettingstarted1
tags:
  - tutorial
  - subscription
  - getting-started
---
Subscribing to Data-Feeds
==========================================

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


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

<Tabs groupId="tool">
<TabItem value="portal" label="Web Portal" default>

* Select **Queues**
* Click the **New** button to open up the queue creation screen.
* Give the queue the name **tutorial**
* Ignore the handler as we are going to handle the queue consumption ourself
* After creation, you will see the queue details on the screen, copy the **connection** string, you will need this for later on


</TabItem>
<TabItem value="odsl" label="OpenDataDSL">

```js
tutorial = object as #QUEUE
     queue = "tutorial"
end
save ${queue:tutorial}
```

</TabItem>
<TabItem value="rest" label="REST API">

```js
POST https://api.opendatadsl.com/queue/v1
Authorization: Bearer {{token}}

{
  "queue": "tutorial"
}
```

</TabItem>
</Tabs>

### Subscribe to data

We now need to create a subscription that will feed FX TimeSeries into our newly created queue.

<Tabs groupId="tool">
<TabItem value="portal" label="Web Portal" default>

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


</TabItem>
<TabItem value="odsl" label="OpenDataDSL">

```js
// Create the subscription
sub_ecb_fx = object as #Subscription
    name = "sub_ecb_fx"
    enabled = true
    objects[0] = object as #SubscriptionObject
        key = "GBP"
        id = "#ECB_FX.EURGBP:SPOT"
    end
    objects[1] = object as #SubscriptionObject
        key = "JPY"
        id = "#ECB_FX.EURJPY:SPOT"
    end
    objects[2] = object as #SubscriptionObject
        key = "USD"
        id = "#ECB_FX.EURUSD:SPOT"
    end
    targets[0] = object as #SubscriptionTarget
        name = "QueueTarget"
        queue = "tutorial"
    end
end

save ${subscription:sub_ecb_fx}
```

</TabItem>
<TabItem value="rest" label="REST API">

```js
POST https://api.opendatadsl.com/subscription/v1
Authorization: Bearer {{token}}

{
    "name": "sub_ecb_fx",
    "objects": [{
        "key": "GBP",
        "id": "#ECB_FX.EURGBP:SPOT"
    },{
        "key": "JPY",
        "id": "#ECB_FX.EURJPY:SPOT"
    },{
        "key": "USD",
        "id": "#ECB_FX.EURUSD:SPOT"
    }],
    "targets":[{
      "name": "QueueTarget",
      "queue": "tutorial"
    }]
}
```

</TabItem>
</Tabs>

## Step 2 - Create our consumer

Here we can decide which consumer(s) we want to create for our subscription

* [Feed SQL Server Database](#feed-sql-server-database)
* [Feed ServiceBus](#feed-servicebus)
* [Feed BI Reporting Tool](#feed-bi-reporting-tool)

### Feed SQL Server Database

### Feed ServiceBus

### Feed BI Reporting Tool
