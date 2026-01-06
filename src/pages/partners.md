---
slug: partners
hide_table_of_contents: true
---
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import styles from './partners.module.css';
import { PartnerProgram, Partner, PartnerSwiper } from '/src/components/PartnerProgram.js'

<PartnerProgram title="OpenDataDSL - a partner you can rely on" subtitle="Join our ecosystem of technology innovators, consulting experts, and data providers transforming commodity markets worldwide." />

<section className="section">
	<div className="container">
        <h2>Partnership Mission</h2>
        <p>Here at OpenDataDSL we are clear on our mission – to take the data that matters to our clients – external or internal – and make it useful to them everywhere and anywhere – data plumbing in the cloud. That mission means OpenDataDSL operates as part of a network of connected data storage providers, content providers, business applications, workflow engines and visualization tools.</p>    
        <p>For our clients to be successful our partnerships need to be successful – increasingly a solution is not solely owned by one company, but a collection of best of breed capabilities provided by multiple organisations who collaborate when things are going well and even more so when they are not. Having trusted expert partners and being open to sharing knowledge, insight and opportunities benefits ourselves, our clients and our partners. </p>    
    </div>
</section>

<section className="section section_alt">
	<div className="container">
        <h2>Partner Benefits</h2>
        <ul>
            <li>Training and access to our documentation and people</li>
            <li>Support in demonstrations and tender processes</li>
            <li>Access to our platform to enable integration</li>
            <li>Expertise in data and data management to help our partners optimize their solutions</li>
        </ul>
        <center>
            <a href="/referrals"><img src="/img/partner/referral-program.jpg" width="250px" /></a>
        </center>
    </div>
</section>

<section className="section">
	<div className="container">
        <h2>Our Valued Partners</h2>
        <p>If you are interested in becoming a partner, email our partners team at partner@opendatadsl.com</p>
        <PartnerSwiper />
    </div>
</section>


