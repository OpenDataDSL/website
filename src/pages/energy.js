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
            <VideoBanner video="/img/home/splash.mp4" text="We have all the data and tools you will ever need" hltext={styles.h_text_highlight}>
                <span>Energy <span className={styles.h_text_highlight}>Market Data</span> Management</span>
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
            we have the knowledge and understanding to build world-class tools. We cover all aspects of data within the Energy and Oil
            industry from collection to building custom Forward Curves and integrating with your ETRM system.
            </p>
        </div>

        <UseCase
            left="false"
            title="Commodity Trading Company"
            image="/img/energy/trading.jpg"
            ft1="Smart Curves"
            fx1="Smart curves simplify the process of building custom forward curves"
            ft2="Excel Add-in"
            fx2="Using Excel, traders can update their own marks which can be used as inputs to Smart Curves"
            ft3="Integrate"
            fx3="Use event-driven subscriptions to push the curves to a queue to feed into a CTRM/ETRM system"
            ft4="Market Data"
            fx4="Access all publicily available data and privately loaded broker and licensed data"
            checks="Smart Curves,Calendars,Market Data,Integration"
            text1="A commodity trading company using the futures market creates 100s of forward curves to deal with all the products they trade, the location of the commodity and other factors. Using Excel for creating these curves is not efficient enough"
            text2="Using OpenDataDSL, the company can create all their curves using Smart Curves which are dynamically calculated in the cloud and automatically pushed into the company’s Commodity Trading and Risk Management system (CTRM/ETRM)"
        />

        <Product
            left="false"
            title="Smart Curves"
            subtitle="Forward Curves on demand"
            image="/img/energy/SmartCurve.png"
            text1="Smart Curves are a revolutionary new way to create your own Forward Curves. Simple, smart, intuitive - anyone can create a Smart Curve!"
            text2="See the product screenshot for an example of creating a MID Smart Curve from LOW and HIGH price curves"
            buttontext="Read the blog"
            buttonurl="/blog/smartcurves"
        />

        <Product
            left="true"
            title="Data Catalog"
            subtitle="Market and Fundamental Data"
            image="/img/home/data-catalog.png"
            text1="We collect any freely available and distributable data from around the world and make it free for you to download and use"
            text2="We help you collect all licensed or restricted data by providing a pre-built loader for you to store the data privately"
            buttontext="Browse Data Catalog"
            buttonurl="https://doc.opendatadsl.com/docs/data/catalog"
        />

        <Product
            left="false"
            title="Excel Add-in"
            subtitle="Read/Write Market data In Excel"
            image="/img/home/excel-addin.png"
            text1="Create, read and update all your data directly from within your own Excel spreadsheets"
            text2="Available for both desktop and web Excel"
            buttontext="Find out more"
            buttonurl="/excel"
        />

        <Product
            left="true"
            title="Web Portal - Monitoring"
            subtitle="Monitor your processes in real-time"
            image="/img/home/process-monitoring.png"
            text1="Create scheduled or data-driven workflows and scripts to capture, transform and load data"
            text2="Easily build workflows for ETL and integration with your ETRM system."
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
            title="Easy 4GL Language"
            subtitle="Powerful scripting language"
            image="/img/home/odsl-code.png"
            text1="Let your creativity shine with our easy yet powerful scripting language. Use our VS Code extension to make coding easy with intellsense, syntax highlighting, code snippets, breakpoints and debugging"
            text2="Perform aggregations like this one with ease!"
        />


    </div>
    );
}
