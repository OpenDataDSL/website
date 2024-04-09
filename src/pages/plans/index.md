---
title: OpenDataDSL Plans
description: Information on all the OpenDataDSL pricing plans
hide_table_of_contents: true
---
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import { faPlug, faUpload, faDownload, faUser, faGlobe, faLock, faWrench, faBrain, faCode, faTable, faCubes } from '@fortawesome/free-solid-svg-icons'
import { faCertificate, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css';

# Pricing Plans

This page gives an overview of the OpenDataDSL pricing plans - click on any of the plans to get further detailed information on the plans and how to get started.


<Container className={styles.datablock}>
    <Card className={styles.card}>
        <Card.Header className={styles.header}><a href="/plans/community"><span className={styles.name}>Community</span><br/><span className={styles.gbp}>£</span><span className={styles.price}>0</span><br/><span className={styles.info}>/user/month<br /><br /></span></a></Card.Header>
        <Card.Body className={styles.body}>
            <br />
            <br />
            <ul>
                <li>Edit, run and debug ODSL code</li>
                <li>Data modelling</li>
                <li>Data quality management</li>
                <li>Timeseries, curves and events</li>
                <li>Manage data in MongoDB</li>
            </ul>
            <br />
            <br />
            <ul>
                <li>Community Support</li>
            </ul> 
        </Card.Body>
    </Card>    
    <Card className={styles.card}>
        <Card.Header className={styles.header}><a href="/plans/standard"><span className={styles.name}>Standard</span><br/><span className={styles.price}>Call</span><br/><span className={styles.info}><br /><br /></span></a></Card.Header>
        <Card.Body className={styles.body}>
            <span className={styles.bold}>Community features plus:</span>
            <br />
            <br />
            <ul>
                <li>Fully Cloud Based</li>
                <li>REST API</li>
                <li>Excel Add-in</li>
                <li>Web Portal</li>
                <li>Access to our public data library</li>
                <li>Live push of data updates</li>
            </ul>
            <br />
            <ul>
                <li>Community Support</li>
                <li>99.5% guaranteed uptime</li>
            </ul> 
        </Card.Body>
    </Card>
    <Card className={styles.card}>
        <Card.Header className={styles.header}><a href="/plans/premium"><span className={styles.name}>Premium</span><br/><span className={styles.price}>Call</span><br/><span className={styles.info}><br /><br /></span></a></Card.Header>
        <Card.Body className={styles.body}>
            <span className={styles.bold}>Standard features plus:</span>
            <br />
            <br />
            <ul>
                <li>Workflows</li>
                <li>Scheduled and event-driven Processes</li>
                <li>Message queues</li>
                <li>Data subscriptions</li>
                <li>Process monitoring in Web Portal</li>
                <li>Access to pre-built data loaders</li>
            </ul>
            <ul>
                <li>London Hours Support</li>
                <li>99.5% guaranteed uptime</li>
            </ul> 
        </Card.Body>
    </Card>
    <Card className={styles.card}>
        <Card.Header className={styles.header}><a href="/plans/enterprise"><span className={styles.name}>Enterprise</span><br/><span className={styles.price}>Call</span><br/><span className={styles.info}>custom plan for your enterprise</span><br/></a><br/></Card.Header>
        <Card.Body className={styles.body}>
            <span className={styles.bold}>Premium features plus:</span>
            <br />
            <br />
            <ul>
                <li>Dedicated services</li>
                <li>Preview environment</li>
                <li>Early access to new features</li>
                <li>Priority enhancement requests</li>
                <li>Account manager</li>
                <li>Premium Services</li>
            </ul>
            <br />
            <ul>
                <li>24x7 Support</li>
                <li>99.5% guaranteed uptime</li>
            </ul> 
        </Card.Body>
    </Card>
</Container>

