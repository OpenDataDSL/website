import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {HomepageFeatures, HomepageAbout} from '../components/HomepageFeatures';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import CookieConsent from "react-cookie-consent";

function Video() {
    return (
    <div className={styles.videocontainer}>
        <span className={styles.videobg} data-ratio="2">
			<div id="mep_0" tabIndex="0" role="application" aria-label="Video Player" className={styles.videoplayer} >
			    <div className="mejs-inner">
			        <div className={styles.mediaelement}>
                        <div id="mejs_5779260256995651">
                            <video loop="loop" autoPlay playsInline muted id="mejs_5779260256995651_html5" preload="none" src="/img/home/data-video.mov" className={styles.datavideo} >
                                <source type="video/mp4" src="/img/home/data-video.mov" />
                            </video>
                        </div>
			        </div>
                </div>
            </div>
        </span>
        <div className={styles.h_text_block}>
            <div className={styles.h_text_major}>
                <div className={styles.h_text_inner}>
                    <span>TurboCharge your <span className={styles.h_text_highlight}>MongoDB</span> Project</span>
                </div>
            </div>
            <div className={styles.h_text_minor}>
                <div className={styles.h_text_inner}>
                    <div className={styles.tagline}>All the tools you need to make the most of your MongoDB database</div>
                    <br />
                    <span>Get started today with a <span className={styles.h_text_highlight}>14 Day </span><span>FREE Trial</span></span>
                </div>
            </div>
            <div className={styles.h_text_minor}>
                <div className={styles.h_text_inner}>
                    <Button className={styles.signupbutton} href="/contact-sales">Contact Sales</Button>
                    <Button className={styles.signupbutton} href="/SignUp">Get Started</Button>
                    <Button className={styles.infobutton} href="https://doc.opendatadsl.com">More Info</Button>
                </div>
            </div>
        </div>
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

function Products() {
    return (
    <div className={styles.products}>
        <div className={styles.productBanner}>Discover the tools that will transform your business</div>
        <div className="row padding-vert--md">
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
            <div className="col  text-left col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div>
                            <h2>Excel Add-in</h2>
                        </div>
                        <div>
                            <h3>Read/Write MongoDB data In Excel</h3>
                        </div>
                        <div>
                            <p>Create, read and update all your data in MongoDB Atlas directly from within your own Excel spreadsheets</p>
                            <p>Available for both desktop and web Excel</p>
                        </div>
                    </div>
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="image_container">
                            <img className={styles.product_screenshot} src="/img/home/excel-addin.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
        </div>

        <div className="row padding-vert--md">
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
            <div className="col  text-left col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="image_container">
                            <img className={styles.product_screenshot} src="/img/home/document-visualization.png"/>
                        </div>
                    </div>
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div>
                            <h2>Web Portal - Visualisation</h2>
                        </div>
                        <div>
                            <h3>Make the most of your MongoDB data</h3>
                        </div>
                        <div>
                            <p>Create data models that help you navigate your MongoDB Atlas data like never before - search, browse and visualise documents and timeseries</p>
                            <p>Get a complete view of every document and make it easy for your business to fully exploit them</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
        </div>

        <div className="row padding-vert--md">
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
            <div className="col  text-left col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div>
                            <h2>Web Portal - Geo Tagging</h2>
                        </div>
                        <div>
                            <h3>Geo-Tag any data!</h3>
                        </div>
                        <div>
                            <p>Take your data visualisation to the next level by geo-tagging your documents; filter on any properties and drill down to data-mine any linked information</p>
                            <p>Bring your data to life and make locational data easy to use</p>
                        </div>
                    </div>
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="image_container">
                            <img className={styles.product_screenshot} src="/img/home/geo-mapping.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
        </div>

        <div className="row padding-vert--md">
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
            <div className="col  text-left col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="image_container">
                            <img className={styles.product_screenshot} src="/img/home/process-monitoring.png"/>
                        </div>
                    </div>
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div>
                            <h2>Web Portal - Monitoring</h2>
                        </div>
                        <div>
                            <h3>Monitor your processes in real-time</h3>
                        </div>
                        <div>
                            <p>Create scheduled or data-driven workflows and scripts to capture, transform and load data into MongoDB</p>
                            <p>Realtime visualization of process timelines</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
        </div>

        <div className="row padding-vert--md">
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
            <div className="col  text-left col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div>
                            <h2>Easy 4GL Language</h2>
                        </div>
                        <div>
                            <h3>Powerful scripting language</h3>
                        </div>
                        <div>
                            <p>Let your creativity shine with our easy yet powerful scripting language. Use our VS Code extension to make coding easy with intellsense, syntax highlighting, code snippets, breakpoints and debugging</p>
                            <p>Perform aggregations like this one with ease!</p>
                            <Button className={styles.signupbutton} href="https://doc.opendatadsl.com/docs/tutorials/qs/mongodb">Get Started</Button>
                        </div>
                    </div>
                    <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="image_container">
                            <img className={styles.product_screenshot} src="/img/home/odsl-code.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
        </div>
    </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Smart Data Management Tools">
        <main>
            <CookieConsent location="top" overlay>We use cookies to personalise content and to analyse our traffic, if you continue we'll assume that you are happy to receive them. For more information, see our <a href="/legal/Cookie-Policy">cookie policy</a></CookieConsent>
            <Video />
            <div className={styles.smallsectionskip} />
            <Products />
            <div className={styles.smallsectionskip} />

            <div className={styles.section}>
                <HomepageAbout />
            </div>

            <div className={styles.smallsectionskip} />
            <section className={styles.stayintouch}>
            <h1>Stay In Touch</h1>
            <div className="row">
                <div className="float-right column" style={{height:50}}>
                    <a href="https://twitter.com/opendatadsl" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Twitter.png" /></a>
                    <a href="https://www.linkedin.com/company/opendatadsl" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/LinkedIn.png" /></a>
                    <a href="https://www.facebook.com/OpenDataDSL" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Facebook.png" /></a>
                    <a href="https://www.pinterest.co.uk/OpenDataDSL" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Pinterest.png" /></a>
                    <a href="https://www.instagram.com/opendatadsl" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Instagram.png" /></a>
                    <a href="https://vimeo.com/user155861440" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Vimeo.png" /></a>
                </div>
            </div>
            </section>

            <div className={styles.smallsectionskip} />

            <div className={styles.hidden} itemScope itemType="https://schema.org/WebSite">
              <meta itemProp="url" content="https://www.opendatadsl.com/"/>
              <form itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
                <meta itemProp="target" content="https://www.opendatadsl.com/search?q={search_term_string}"/>
                <input itemProp="query-input" type="text" name="search_term_string" required/>
                <input type="submit"/>
              </form>
            </div>

        </main>
    </Layout>
  );
}
