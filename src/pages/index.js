import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {HomepageFeatures, HomepageAbout, HomepageNextSteps} from '../components/HomepageFeatures';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import CookieConsent from "react-cookie-consent";
import { Product, VideoBanner, SocialMedia } from '../components/Industry';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Smart Data Management Tools">
        <main>
            <CookieConsent location="top" overlay>We use cookies to personalise content and to analyse our traffic, if you continue we'll assume that you are happy to receive them. For more information, see our <a href="/legal/Cookie-Policy">cookie policy</a></CookieConsent>
            <VideoBanner video="/img/home/data-video.mov" hltext={styles.h_text_highlight_green}>
                <span>Create a <span className={styles.h_text_highlight_green}>SMART</span> data experience</span>
                <span className={styles.h_subtext}>All the tools you need to enhance the value of your data</span>
                <span className={styles.collect}>Collect - gather data from anywhere</span>
                <span className={styles.manage}>Manage - quality check and augment</span>
                <span className={styles.share}>Share - create stunning reports to share</span>
            </VideoBanner>
            <div className={styles.smallsectionskip} />
            <MainFeature />
            <div className={styles.smallsectionskip} />
            <Slideshow />
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

function MainFeature() {
    return (
    <div className={styles.products}>
        <div className={styles.productBanner}>Discover the tools that will transform your business</div>

        <div className={styles.chatter}>
            <span className={styles.feature}>Cloud platform </span>
            <span className={styles.dot} />
            <span className={styles.feature}> Stunning charts </span>
            <span className={styles.dot} />
            <span className={styles.feature}> Intuitive tools </span>
            <span className={styles.dot} />
            <span className={styles.feature}> Excel Add-in </span>
            <span className={styles.dot} />
            <span className={styles.feature}> Easy 4GL language</span>
        </div>
    </div>
   );
}

function Slideshow() {
    return (
    <div className={styles.slides}>
        <div className={styles.productBanner}>Create Stunning Reports</div>
        <div className={styles.slideshow}>
            <ul className={styles.slideshow}>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
            </ul>
        </div>
    </div>
   );
}

function Products() {
    return (
    <div className={styles.products}>
        <div className={styles.productBanner}>Industries and Use Cases</div>
        <Product
            left="false"
            title="Energy and Oil Industry"
            subtitle="Smart tools and reliable data"
            image="/img/home/energy.jpg"
            zoomimage="false"
            text1="Market and fundamental data from around the world combined with easy-to-use, smart software"
            text2="Timeseries, Forward Curves and Options"
            buttontext="Find out more"
            buttonurl="/energy"
        />

        <Product
            left="true"
            title="Utilities"
            subtitle="Stay focussed with real-time, smart alerts"
            image="/img/home/utility.jpg"
            zoomimage="false"
            text1="Never miss an outage or spike in usage with our event management tools and real-time alerts"
            text2="Real-time capture and storage of all your metrics"
            buttontext="Find out more"
            buttonurl="/utility"
        />

        <Product
            left="false"
            title="Agriculture"
            subtitle="Delivering market pricing to your desktop"
            image="/img/home/agriculture.jpg"
            zoomimage="false"
            text1="Stay informed with commodity pricing data from around the world geo-tagged to enhance the smart capabilities of our software"
            text2="Build smart forward curves and manage your prices and transactions with our Excel Add-in and Web Portal"
            buttontext="Find out more"
            buttonurl="/agriculture"
        />

        <Product
            left="true"
            title="MongoDB Atlas"
            subtitle="Tools to make using MongoDB easier"
            image="/img/mongodb.png"
            zoomimage="false"
            text1="Get started with our easy ETL tools to transform and load any data into your MongoDB Atlas cluster"
            text2="Use our Excel Add-in and Web Portal to model, create, edit and visualise your data"
            buttontext="Find out more"
            buttonurl="/mongodb"
        />

        <Product
            left="false"
            title="Data Catalog"
            subtitle="Market and Fundamental Data"
            image="/img/home/data-catalog.png"
            zoomimage="false"
            text1="We collect any freely available and distributable data from around the world and make it free for you to download and use"
            text2="We help you collect all licensed or restricted data by providing a pre-built loader for you to store the data privately"
            buttontext="Browse Data Catalog"
            buttonurl="https://doc.opendatadsl.com/docs/data/catalog"
        />

    </div>
    );
}

function SmartCurves() {
    return (
        <div className="row">
            <a href="/blog/smartcurves">
                <picture>
                      <source media="(max-width: 640px)" srcset="/img/home/SmartCurvesBanner-mobile.png" />
                      <source media="(min-width: 641px)" srcset="/img/home/SmartCurvesBanner.png" />
                      <img src="/img/home/SmartCurvesBanner.png" />
                </picture>
            </a>
        </div>
    );
}

