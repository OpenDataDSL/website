---
title: Support
description: Support information
slug: /support
hide_table_of_contents: true
---
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import styles from './support.module.css';

# Support Information

This page gives an overview of the method to use to ask questions or get technical and data support.

<Button className="btn btn-success" href="https://opendatadsl.statuspage.io/" target="_blank">Current System Status</Button>

<hr/>

<Container className={styles.datablock}>
    <Card className={styles.card}>
        <Card.Header className={styles.header}><a href="/plans/community"><span className={styles.name}>Community Support</span><br/><span className={styles.info}>Community and Standard Plans</span></a></Card.Header>
        <Card.Body className={styles.body}>
            <span className={styles.bold}>Questions:</span>
            <br />
            <span>Use StackOverflow add the tag <a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL</a></span>
            <br />
            <br />
            <span className={styles.bold}>Application Issues:</span>
            <br />
            <span>Community Plan - Email <a href="mailto:support@opendatadsl.com" target="_blank" rel="noopener noreferrer">support@opendatadsl.com</a></span>
            <br />
            <span>Standard Plan - Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer">Service Desk</a></span>
            <br />
            <br />
            <span className={styles.bold}>All other queries:</span>
            <br />
            <span>Email <a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">info@opendatadsl.com</a></span>
        </Card.Body>
    </Card>    
    <Card className={styles.card}>
        <Card.Header className={styles.header}><a href="/plans/standard"><span className={styles.name}>London Hours Support</span><br/><span className={styles.info}>Premium Plan</span></a></Card.Header>
        <Card.Body className={styles.body}>
            <span className={styles.bold}>Questions:</span>
            <br />
            <span>Use StackOverflow add the tag <a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL</a></span>
            <br />
            <span>OR Ask it in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portal/4" target="_blank" rel="noopener noreferrer">Service Desk</a></span>
            <br />
            <br />
            <span className={styles.bold}>Application Issues:</span>
            <br />
            <span>Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portal/4/group/5" target="_blank" rel="noopener noreferrer">Service Desk</a></span>
            <br />
            <br />
            <span className={styles.bold}>Data Issues:</span>
            <br />
            <span>Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portal/4/group/6" target="_blank" rel="noopener noreferrer">Service Desk</a></span>
            <br />
            <br />
            <span className={styles.bold}>All other queries:</span>
            <br />
            <span>Email <a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">info@opendatadsl.com</a></span>
        </Card.Body>
    </Card>
    <Card className={styles.card}>
        <Card.Header className={styles.header}><a href="/plans/premium"><span className={styles.name}>Enterprise Support</span><br/><span className={styles.info}>Gold (24/5) and Platinum (24/7) Plan</span></a></Card.Header>
        <Card.Body className={styles.body}>
            <span className={styles.bold}>Questions:</span>
            <br />
            <span>Use StackOverflow add the tag <a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL</a></span>
            <br />
            <span>OR Ask it in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portal/4" target="_blank" rel="noopener noreferrer">Service Desk</a></span>
            <br />
            <span>OR Call your account manager</span>
            <br />
            <br />
            <span className={styles.bold}>Application Issues:</span>
            <br />
            <span>Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portal/4/group/5" target="_blank" rel="noopener noreferrer">Service Desk</a></span>
            <br />
            <span>OR Call your account manager</span>
            <br />
            <br />
            <span className={styles.bold}>Data Issues:</span>
            <br />
            <span>Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portal/4/group/6" target="_blank" rel="noopener noreferrer">Service Desk</a></span>
            <br />
            <span>OR Call your account manager</span>
            <br />
            <br />
            <span className={styles.bold}>All other queries:</span>
            <br />
            <span>Email <a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">info@opendatadsl.com</a></span>
        </Card.Body>
    </Card>
</Container>
