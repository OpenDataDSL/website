import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {HomepageFeatures, HomepageAbout} from '../components/HomepageFeatures';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.headBanner)}>
      <Container className={styles.datablock}>
        <Col>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.padded)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Button className="btn btn-primary btn-lg" href="/docs/product/intro">OpenDataDSL Introduction - 5min ⏱️</Button>
          {/* <Link
            className={styles.button}
            to="/docs/product/Tutorials/Getting-started-with-ODSL">
            OpenDataDSL Tutorial - 5min ⏱️
          </Link> */}
        </div>
        </Col>
        <Col>
          <img src="/img/ss20210909.svg" />
        </Col>
      </Container>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Smart Data Management Tools">
      <HomepageHeader />
      <main>
        <h1 className={styles.sectionBanner}>Features</h1>
        <HomepageFeatures />
        <div className={styles.section}>
          <h1 className={styles.sectionBanner}>About Us</h1>
          <HomepageAbout />
        </div>
      </main>
    </Layout>
  );
}
