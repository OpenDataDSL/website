---
id: home
title: Documentation Home
sidebar_position: 1
tags:
  - product
  - home
---
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug, faUpload, faDownload, faUser, faGlobe, faLock, faWrench, faBrain } from '@fortawesome/free-solid-svg-icons'
import styles from '/src/components/DataCatalog.module.css';
import StartBuilding from '/src/components/StartBuilding.js';


## What is OpenDataDSL?
OpenDataDSL is THE Data Management Programming Language - the tool that makes managing data easy!

The OpenDataDSL components and API's let you quickly and seamlessly build your own world-scale data management platform in the cloud.
We load any data that can be freely distributed and make it available to you - you can model, collect, load, check and report 
on any data you own or subscribe to using the same tools and user experience.

<StartBuilding />

## Discover OpenDataDSL

#### Follow these Quick Discovery Guides to familiarise yourself with OpenDataDSL

<Container className={styles.datablock}>
    <Card style={{width:"18rem"}}>
        <Card.Header><a href="/docs/discovery/getting-started"><FontAwesomeIcon icon={faPlug} /><b> Getting Started</b></a></Card.Header>
            <Card.Body>
              <Card.Text>A technical and non-technical introduction to the features and ecosystem of OpenDataDSL and finishes off with some tutorial tracks you can follow.</Card.Text>
              <ul>
                  <li><a href="/docs/discovery/getting-started#what-is-opendatadsl">What is OpenDataDSL</a></li>
                  <li><a href="/docs/discovery/getting-started#how-opendatadsl-works">How OpenDataDSL Works</a></li>
                  <li><a href="/docs/discovery/getting-started#quick-start">Quick Start</a></li>
              </ul>
            </Card.Body>
    </Card>    
    <Card style={{width:"18rem"}}>
        <Card.Header><a href="/docs/discovery/uploading-data"><FontAwesomeIcon icon={faUpload} /><b> Uploading Data</b></a></Card.Header>
            <Card.Body>
              <Card.Text>An overview on how to prepare, send, and update your data, along with guidance on how to automate data loading and data environments.</Card.Text>
              <ul>
                  <li><a href="/docs/discovery/uploading-data#data-environments">Data Environments</a></li>
                  <li><a href="/docs/discovery/uploading-data#create-your-data-model">Create your data model</a></li>
                  <li><a href="/docs/discovery/uploading-data#automating-data-loads">Automating data uploads</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><a href="/docs/discovery/subscribing-to-data"><FontAwesomeIcon icon={faDownload} /><b> Subscribing to Data</b></a></Card.Header>
            <Card.Body>
              <Card.Text>A guide on how to integrate both the public data and your proprietary data into other cloud systems or your local database infrastructure.</Card.Text>
              <ul>
                  <li><a href="/docs/discovery/subscribing-to-data#introduction-to-queues">Introduction to Queues</a></li>
                  <li><a href="/docs/discovery/subscribing-to-data#subscribing-to-data">Subscribing to Data</a></li>
                  <li><a href="/docs/discovery/subscribing-to-data#integration-examples">Some integration examples</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><a href="/docs/discovery/personalisation"><FontAwesomeIcon icon={faUser} /><b> Personalisation</b></a></Card.Header>
            <Card.Body>
              <Card.Text>Learn how you can personalize your users' experience with a custom domain, company logo and colour scheme.</Card.Text>
              <ul>
                  <li><a href="/docs/discovery/personalisation#what-is-personalisation">What is Personalisation</a></li>
                  <li><a href="/docs/discovery/personalisation#custom-domain">Custom Domain</a></li>
                  <li><a href="/docs/discovery/personalisation#logo-and-scheme">Logo and Scheme</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><a href="/docs/discovery/going-to-production"><FontAwesomeIcon icon={faGlobe} /><b> Going to Production</b></a></Card.Header>
            <Card.Body>
              <Card.Text>Make sure you're on the right track and didn't forget anything before moving your data and processes to production.</Card.Text>
              <ul>
                  <li><a href="/docs/discovery/going-to-production#preparation">Preparation</a></li>
                  <li><a href="/docs/discovery/going-to-production#creating-a-check-list">Creating a Check-List</a></li>
                  <li><a href="/docs/discovery/going-to-production#automate-rollout">Automate Rollout</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><a href="/docs/discovery/performance-and-scaling"><FontAwesomeIcon icon={faUser} /><b> Performance and Scaling</b></a></Card.Header>
            <Card.Body>
              <Card.Text>Discover the infrastructure that powers OpenDataDSL and learn how to optimise your processes for maximum performance.</Card.Text>
              <ul>
                  <li><a href="/docs/discovery/performance-and-scaling#technical-overview">Technical Overview</a></li>
                  <li><a href="/docs/discovery/performance-and-scaling#improving-data-performance">Improving Data Performance</a></li>
                  <li><a href="/docs/discovery/performance-and-scaling#process-optimisation">Process Optimisation</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><a href="/docs/discovery/security"><FontAwesomeIcon icon={faLock} /><b> Security</b></a></Card.Header>
            <Card.Body>
              <Card.Text>We take security seriously. Take some time to check our security basics and recommendations, including system users, roles and other best practices.</Card.Text>
              <ul>
                  <li><a href="/docs/discovery/security#security-basics">Security Basics</a></li>
                  <li><a href="/docs/discovery/security#security-best-practices">Security Best Practices</a></li>
                  <li><a href="/docs/discovery/security#application-and-data-roles">Application and Data Roles</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><a href="/docs/discovery/tools"><FontAwesomeIcon icon={faWrench} /><b> Tools</b></a></Card.Header>
            <Card.Body>
              <Card.Text>Find solutions to specific problems, discover practical examples of what OpenDataDSL can do, and find inspiration for your data management experience.</Card.Text>
              <ul>
                  <li><a href="/docs/discovery/tools#portal-overview">Portal Overview</a></li>
                  <li><a href="/docs/discovery/tools#excel-add-in">Excel Add-in</a></li>
                  <li><a href="/docs/discovery/tools#miscellaneous-free-tools">Miscellaneous FREE Tools</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><a href="/docs/discovery/machine-learning-and-rules"><FontAwesomeIcon icon={faBrain} /><b> Machine Learning and Rules</b></a></Card.Header>
            <Card.Body>
              <Card.Text>Learn how you can use our machine learning features to categorise and forecast data or apply business rules for event-driven automation of tasks.</Card.Text>
              <ul>
                  <li><a href="/docs/discovery/machine-learning-and-rules#machine-learning-overview">Machine Learning Overview</a></li>
                  <li><a href="/docs/discovery/machine-learning-and-rules#business-rules">Business Rules</a></li>
                  <li><a href="/docs/discovery/machine-learning-and-rules#real-world-examples">Real-world examples</a></li>
              </ul>
            </Card.Body>
    </Card>
</Container>