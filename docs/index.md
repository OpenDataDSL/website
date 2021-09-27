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


## What is OpenDataDSL?
OpenDataDSL is THE Data Management Programming Language - the tools that makes managing data easy!
OpenDataDSLs components and API's let you quickly and seamlessly build your own world-scale Data Management Platform in the cloud.
We load any data that can be freely distributed and make it available to you - you can model, collect, load, check and report 
on any data you own or subscribe to using the same tools and user experience.

<a href="/SignUp">
    <Card style={{width:"18rem"}}>
            <Card.Body>
              <img src="/img/building-blocks.jpg" />
              <Card.Title>Start building for FREE today</Card.Title>          
              <Card.Text>No credit card required</Card.Text>
            </Card.Body>
    </Card>
</a>

## Discover OpenDataDSL

<Container className={styles.datablock}>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faPlug} /><b> Getting Started</b></Card.Header>
            <Card.Body>
              <Card.Text>A technical and non-technical introduction to the features and ecosystem of OpenDataDSL, and a step-by-step tutorial to get you up and running in minutes.</Card.Text>
              <ul>
                  <li><a href="/docs/product/intro">What is OpenDataDSL</a></li>
                  <li><a href="">How OpenDataDSL Works</a></li>
                  <li><a href="">Quick Start</a></li>
              </ul>
            </Card.Body>
    </Card>    
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faUpload} /><b> Uploading Data</b></Card.Header>
            <Card.Body>
              <Card.Text>A full guide on how to prepare, send, and update your data, along with guidance on how to manage your indices and data environments.</Card.Text>
              <ul>
                  <li><a href="">Create your data model</a></li>
                  <li><a href="">Prepare your data</a></li>
                  <li><a href="">Automating data uploads</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faDownload} /><b> Subscribing to Data</b></Card.Header>
            <Card.Body>
              <Card.Text>A guide on how to integrate both the public data and your proprietary data into other cloud systems or your local database infrastructure.</Card.Text>
              <ul>
                  <li><a href="">Introduction to Queues</a></li>
                  <li><a href="">Subscribing to Data</a></li>
                  <li><a href="">Some integration examples</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faUser} /><b> Personalisation</b></Card.Header>
            <Card.Body>
              <Card.Text>Learn how you can personalize your users' experience with a custom domain, company logo and colour scheme.</Card.Text>
              <ul>
                  <li><a href="">What is Personalisation</a></li>
                  <li><a href="">Custom Domain</a></li>
                  <li><a href="">Logo and Scheme</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faGlobe} /><b> Going to Production</b></Card.Header>
            <Card.Body>
              <Card.Text>Make sure you're on the right track and didn't forget anything before moving your data and processes to production.</Card.Text>
              <ul>
                  <li><a href="">Preparation</a></li>
                  <li><a href="">Creating a Check-List</a></li>
                  <li><a href="">Automate Rollout</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faUser} /><b> Performance and Scaling</b></Card.Header>
            <Card.Body>
              <Card.Text>Discover the infrastructure that powers OpenDataDSL and learn how to optimise your processes for maximum performance.</Card.Text>
              <ul>
                  <li><a href="">Technical Overview</a></li>
                  <li><a href="">Improving Data Performance</a></li>
                  <li><a href="">Process Optimisation</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faLock} /><b> Security</b></Card.Header>
            <Card.Body>
              <Card.Text>We take security seriously. Take some time to check our security basics and recommendations, including system users, roles and other best practices.</Card.Text>
              <ul>
                  <li><a href="">System Users</a></li>
                  <li><a href="">Security Best Practices</a></li>
                  <li><a href="">Application and Data Roles</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faWrench} /><b> Tools</b></Card.Header>
            <Card.Body>
              <Card.Text>Find solutions to specific problems, discover practical examples of what OpenDataDSL can do, and find inspiration for your data management experience.</Card.Text>
              <ul>
                  <li><a href="">Portal Overview</a></li>
                  <li><a href="">Excel Add-in</a></li>
                  <li><a href="">Miscellaneous FREE Tools</a></li>
              </ul>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header><FontAwesomeIcon icon={faBrain} /><b> Machine Learning and Rules</b></Card.Header>
            <Card.Body>
              <Card.Text>Learn how you can use our machine learning features to categorise and forecast data or apply business rules for event-driven automation of tasks.</Card.Text>
              <ul>
                  <li><a href="">Machine Learning Overview</a></li>
                  <li><a href="">Business Rules</a></li>
                  <li><a href="">Real-world examples</a></li>
              </ul>
            </Card.Body>
    </Card>
</Container>