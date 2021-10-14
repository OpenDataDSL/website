---
slug: support
---
import SupportBlock from '/src/components/Support'
import styles from '/src/components/Support.module.css';
import { Container } from 'react-bootstrap';
import { Support } from '/src/components/Discovery.js';

<Container className={styles.datablock}>
    <SupportBlock header="Questions" title="I have a question about" img="/img/home/questions.png">
    <ul>
        <li><a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL grammar or programming</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Company or corporate information</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Pricing</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Accounting, invoices and payments</a></li>
    </ul>
    </SupportBlock>
    <SupportBlock header="Issues" title="I have found an issue" img="/img/home/issues.png">
    <ul>
        <li><a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL language or services</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Data</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Integration</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Documentation</a></li>
    </ul>
    </SupportBlock>
    <SupportBlock header="Enhancements" title="I would like" img="/img/home/enhancements.png">
    <ul>
        <li><a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">A new feature</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Some specific data</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">A new integration</a></li>
        <li><a href="mailto:info@opendatadsl.com" target="_blank" rel="noopener noreferrer">Training</a></li>
    </ul>
    </SupportBlock>
</Container>
