---
title: Getting Started
sidebar_position: 1
tags:
  - discovery
  - odsl
  - quickstart
---
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faTable, faCubes, faUser, faGlobe, faLock, faWrench, faBrain } from '@fortawesome/free-solid-svg-icons'
import styles from '/src/components/StartBuilding.module.css';
import StartBuilding from '/src/components/StartBuilding.js';
import {Discovery, InDepth} from '/src/components/Discovery.js';

<Discovery text="This discovery guide gives a technical and non-technical introduction to the features and ecosystem of OpenDataDSL and finishes off with some tutorial tracks you can follow." />

## What is OpenDataDSL

OpenDataDSL is designed as a high-performance, cloud-based, SAAS data management toolkit.

OpenDataDSL is comprised of the following:
* A DSL (Domain Specific Language) specifically built for Data Management, the language can be run:
    * Within Microsoft Visual Studio Code
    * As a local application
    * As a remote process in the cloud that can be triggered by time or event
* Remote Services that the DSL uses and can also be accessed via REST
* A Messaging layer based on Microsoft Azure Service Bus
* A cluster of MongoDB Atlas databases
* User interface tools such as the Portal, Excel Add-in and VSCode Extension

<InDepth href="/docs/product/intro" />

## How OpenDataDSL Works

:::info
### All the OpenDataDSL user software is FREE to use for any number of users
:::

You only pay to use the services, fulfilled subscriptions, sending messages, running processes and data storage, 
see [pricing](/pricing) for more information.

You get started with OpenDataDSL by logging into the [Portal](https://portal.opendatadsl.com) using your corporate
credentials and entering some information about you and your company - see [SignUp](/SignUp).

## Quick Start
Choose from one of the following quick start tracks to get you started:

<Container className={styles.datablock}>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faCode} /><b> OpenDataDSL Developer</b></Card.Header>
            <Card.Body>
              <Card.Text>Take this track to learn how to code in the OpenDataDSL programming language.</Card.Text>
              <Button>Get Started</Button>
            </Card.Body>
    </Card>    
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faTable} /><b> Data Modeller</b></Card.Header>
            <Card.Body>
              <Card.Text>Take this track to learn how to model and store data in OpenDataDSL.</Card.Text>
              <Button>Get Started</Button>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faCubes} /><b> API Developer</b></Card.Header>
            <Card.Body>
              <Card.Text>Take this track to learn the OpenDataDSL API's and build your own applications.</Card.Text>
              <Button>Get Started</Button>
            </Card.Body>
    </Card>
</Container>

---

<StartBuilding />