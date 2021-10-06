import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {HomepageFeatures, HomepageAbout} from '../components/HomepageFeatures';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Smart Data Management Tools">
        <main>
            <div className={clsx("mb-3",styles.headBanner)} id="content">
                <div class="container px-4 px-md-3">
                    <div class="row align-items-lg-center">
                        <div class="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
                            <img src="/img/ss20210909.svg" className={clsx('img-fluid',styles.logo)} />
                        </div>
                        <div class="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
                            <h1 className={clsx("mb-3", styles.title)}>{siteConfig.title}</h1>
                            <p class={clsx("lead mb-4", styles.tagline)}>A real-world solution for getting your DATA and PROCESSES in the CLOUD. Get started today with a free account using your corporate log-in</p>
                            <div class="d-flex flex-column flex-md-row">
                                <a href="/SignUp" className={clsx("btn btn-lg mb-3 me-md-3",styles.button)} onclick="ga('send', 'event', 'Jumbotron actions', 'Sign Up', 'Sign Up');">Sign Up</a>
                                <a href="/docs/discovery/getting-started" class="btn btn-lg btn-outline-secondary mb-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Information', 'More Info');">More Information</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={styles.sectionskip}></p>
            </div>
            <HomepageFeatures />
            <div className={styles.section}>
                <HomepageAbout />
            </div>
        </main>
    </Layout>
  );
}
