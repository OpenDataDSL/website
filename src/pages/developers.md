---
slug: developers
hide_table_of_contents: true
---
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import styles from './referrals.module.css';
import { PartnerProgram, ExpertiseItem } from '/src/components/PartnerProgram.js'

<PartnerProgram title="Become a Development Partner" subtitle="We are welcoming new partners to become development partners to earn income for building extensions to the OpenDataDSL platform." />

<section className={styles.section}>
    <div className={styles.container}>
        <h2>Unlimited Earning Potential</h2>
        <p>Generate income by building extensions to be included in the OpenDataDSL Platform Gallery which our clients can install into their environment.</p>        
        <div className={styles.expertise_grid}>
            <ExpertiseItem title="Earn 85% of price" text="You will receive 85% of the revenue from clients using your paid-for extension." />
            <ExpertiseItem title="Unrestricted Territory" text="You will have no restrictions on territory or market segment." />
            <ExpertiseItem title="Unlimited Earnings" text="You will have no cap on the amount of referral money you can earn." />
        </div>
    </div>
</section>

<section className={`${styles.section} ${styles.section_alt}`}>
    <div className={styles.container}>
        <h2>Typical OpenDataDSL Referral Partners</h2>
        <p>The OpenDataDSL developer program is a great match for</p>
        <div className={styles.expertise_grid}>
            <ExpertiseItem title="Developers" text="Utilise your development skills to build extensions, insights and content, delivered in a professional, secure, cloud-based platform to your clients." />
            <ExpertiseItem title="Consultants" text="Build insights and content within the platform to help companies make the most of their data." />
            <ExpertiseItem title="Content creators/Data providers" text="Expose and monitise your content in our multi-tenant, secure cloud-based data management platform. Allow your clients to visualise, export and gain valuable insights on your content." />
            <ExpertiseItem title="Technology advisors" text="Expose and monitise your content in our multi-tenant, secure cloud-based data management platform. Allow your clients to visualise, export and gain valuable insights on your content." />
        </div>
    </div>
</section>

If you are interested in becoming a development partner, email our partners team at partner@opendatadsl.com.

