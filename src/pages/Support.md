---
slug: support
---
import SupportBlock from '/src/components/Support'
import styles from '/src/components/Support.module.css';
import { Container } from 'react-bootstrap';

Support Information
===================

Do you have a question, found an issue or have an idea how we can make OpenDataDSL even better?

<Container className={styles.datablock}>
    <SupportBlock header="Questions" title="I have a question about" img="/img/questions.jpg">
    <ul>
        <li><a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL grammar or programming</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Company or corporate information</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Pricing</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Accounting, invoices and payments</a></li>
    </ul>
    </SupportBlock>
    <SupportBlock header="Issues" title="I have found an issue" img="/img/issues.jpg">
    <ul>
        <li><a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL language or services</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Data</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Integration</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Documentation</a></li>
    </ul>
    </SupportBlock>
    <SupportBlock header="Enhancements" title="I would like" img="/img/enhancements.jpg">
    <ul>
        <li><a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">A new feature</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Some specific data</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">A new integration</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Training</a></li>
    </ul>
    </SupportBlock>
</Container>
