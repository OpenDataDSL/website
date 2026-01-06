---
slug: referrals
hide_table_of_contents: true
---
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import styles from './referrals.module.css';
import { PartnerProgram, ExpertiseItem } from '/src/components/PartnerProgram.js'

<PartnerProgram title="Become a Referral Partner" subtitle="We are welcoming new partners to become referral partners to earn referral income." />



<section className="section">
	<div className="container">
        <h2>Unlimited Earning Potential</h2>
        <p>Generate income by referring OpenDataDSL to your clients or build extensions and insights within the platform for specific market sector functionality</p>        
        <p>If you are interested in becoming a partner, email our partners team at partner@opendatadsl.com</p>
        <div className={styles.expertise_grid}>
            <ExpertiseItem title="Earnings up to 40%" text="You will receive up to 40% of the revenue from your referred client for as long as they remain a paying client." />
            <ExpertiseItem title="Unrestricted Territory" text="You will have no restrictions on territory or market segment." />
            <ExpertiseItem title="Unlimited Earnings" text="You will have no cap on the amount of referral money you can earn." />
        </div>
    </div>
</section>

<section className="section section_alt">
	<div className="container">
        <h2>Typical OpenDataDSL Referral Partners</h2>
        <p>The OpenDataDSL referral program is a great match for</p>
        <div className={styles.expertise_grid}>
            <ExpertiseItem title="Consultants" text="Recommend the OpenDataDSL platform to your clients and also earn money implementing their requirements into the platform." />
            <ExpertiseItem title="Bloggers/Influencers" text="Use your following to create an income stream from blogging about and recommending the OpenDataDSL platform." />
            <ExpertiseItem title="Content creators/Data providers" text="Expose and monitise your content in our multi-tenant, secure cloud-based data management platform. Allow your clients to visualise, export and gain valuable insights on your content." />
            <ExpertiseItem title="Technology advisors" text="Leverage your expertise to help companies quickly adopt our high-performance, secure data management platform in the cloud." />
        </div>
    </div>
</section>


