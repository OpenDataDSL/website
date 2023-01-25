import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {HomepageFeatures, HomepageAbout, HomepageNextSteps } from '../components/HomepageFeatures';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import CookieConsent from "react-cookie-consent";
import { UseCase, Product, VideoBanner, SocialMedia } from '../components/Industry';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Smart Data Management Tools">
        <main>
            <CookieConsent location="top" overlay>We use cookies to personalise content and to analyse our traffic, if you continue we'll assume that you are happy to receive them. For more information, see our <a href="/legal/Cookie-Policy">cookie policy</a></CookieConsent>
            <VideoBanner video="/img/utility/turbines.mp4" text="Stay focussed with real-time, smart alerts" hltext={styles.darkgreen} textcolor={styles.dark}>
                <span className={styles.dark}>Utility <span className={styles.darkgreen}>Market Data</span> Management</span>
            </VideoBanner>
            <div className={styles.smallsectionskip} />
            <Products />
            <div className={styles.smallsectionskip} />
            <HomepageNextSteps />
            <div className={styles.smallsectionskip} />
            <HomepageAbout />
            <div className={styles.smallsectionskip} />
            <SocialMedia />
            <div className={styles.smallsectionskip} />
        </main>
    </Layout>
  );
}

function Products() {
    return (
    <div className={styles.products}>

        <div className={styles.productBanner}>Discover the data and tools that will transform your business</div>

        <div className={styles.chatter}>
            <p>With over 30 years of building Energy and Commodity Data Management and Curve Building software,
            we have the knowledge and understanding to build world-class tools. We cover all aspects of data within the Utility
            industry from collection to building forecasts.
            </p>
        </div>

        <UseCase
            left="false"
            title="Water and sewerage company"
            image="/img/utility/watercompany.jpg"
            ft1="Global Access"
            fx1="Improve access from anywhere using cloud-based web and mobile applications"
            fi1="/img/icons/globe.png"
            ft2="Geo Mapping"
            fx2="Assign physical geo locations to your assets to aid engineers in the field"
            fi2="/img/icons/geomapping.png"
            ft3="Alerts"
            fx3="Use event-driven processes to alert technicians when critical thresholds have been breached"
            fi3="/img/icons/alert.png"
            ft4="Time Sensitive"
            fx4="When critical infrastructure begins to fail, you need to get information to engineers ASAP"
            fi4="/img/icons/optimise.png"
            checks="IOT,Alerting,Mobile App,Geo Mapping"
            text1="Monitoring water pipeline flows in order to quickly respond to potential leaks requires real-time sensor data to be collected and automatically analyzed. Millions of datapoints need to be processed every day"
            text2="Using OpenDataDSL, the company can feed in sensor data, create simple logic in the ODSL language to alert technicians when thresholds are breached. Using the Geo-mapping capability, they can pinpoint the exact location and enter notes in the field using their mobile device"
        />

        <Product
            left="false"
            title="Web Portal - Geo Tagging"
            subtitle="Geo-Tag any data!"
            image="/img/home/geo-mapping.png"
            text1="Take your data visualisation to the next level by geo-tagging your documents; filter on any properties and drill down to data-mine any linked information"
            text2="Bring your data to life and make locational data easy to use"
        />

        <Product
            left="true"
            title="Web Portal - Visualisation"
            subtitle="Make the most of your data"
            image="/img/home/document-visualization.png"
            text1="Create data models that help you navigate your data like never before - search, browse and visualise documents, timeseries and forward curves"
            text2="Get a complete view of every document and make it easy for your business to fully exploit them"
        />

        <Product
            left="false"
            title="Web Portal - Monitoring"
            subtitle="Monitor your processes in real-time"
            image="/img/home/process-monitoring.png"
            text1="Create scheduled or data-driven workflows and scripts to capture, transform and load data"
            text2="Easily build workflows for ETL and integration with your ETRM system."
        />


        <Product
            left="true"
            title="Excel Add-in"
            subtitle="Read/Write Market data In Excel"
            image="/img/home/excel-addin.png"
            text1="Create, read and update all your data directly from within your own Excel spreadsheets"
            text2="Available for both desktop and web Excel"
            buttontext="Find out more"
            buttonurl="/excel"
        />


        <Product
            left="false"
            title="Easy 4GL Language"
            subtitle="Powerful scripting language"
            image="/img/home/odsl-code.png"
            text1="Let your creativity shine with our easy yet powerful scripting language. Use our VS Code extension to make coding easy with intellsense, syntax highlighting, code snippets, breakpoints and debugging"
            text2="Perform aggregations like this one with ease!"
        />


    </div>
    );
}
