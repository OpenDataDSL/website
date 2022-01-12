import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {HomepageFeatures, HomepageAbout} from '../components/HomepageFeatures';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';

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
                    <span>Smart <span className={styles.h_text_highlight}>SAAS</span> Data Management</span>
                </div>
            </div>
            <div className={styles.h_text_minor}>
                <div className={styles.h_text_inner}>
                    <span>A real-world solution for getting your DATA and PROCESSES in the CLOUD
                    <br />
                    Get started today with a <span className={styles.h_text_highlight}>FREE ACCOUNT</span>
                    </span>
                </div>
            </div>
            <div className={styles.h_text_minor}>
                <div className={styles.h_text_inner}>
                    <Button className={styles.signupbutton} href="/SignUp">Sign Up</Button>
                    <Button className={styles.infobutton} href="/docs/discovery/getting-started">More Info</Button>
                </div>
            </div>
        </div>
    </div>
);
}

function SmartCurves() {
    return (
        <div className="row">
            <picture>
                  <source media="(max-width: 640px)" srcset="/img/home/SmartCurvesBanner-mobile.png" />
                  <source media="(min-width: 641px)" srcset="/img/home/SmartCurvesBanner.png" />
                  <img src="/img/home/SmartCurvesBanner.png" />
            </picture>
        </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Smart Data Management Tools">
        <main>
            <Video />
            <div className={styles.smallsectionskip} />
            <HomepageFeatures />
            <div className={styles.smallsectionskip} />
            <SmartCurves />
            <div className={styles.smallsectionskip} />

            <section className={styles.stayintouch}>
            <h1>Stay In Touch</h1>
            <div className="row">
                <div className="float-right column" style={{height:450}}>
                    <a href="https://twitter.com/opendatadsl" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Twitter.png" /></a>
                    <a href="https://www.linkedin.com/company/opendatadsl" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/LinkedIn.png" /></a>
                    <a href="https://www.facebook.com/OpenDataDSL" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Facebook.png" /></a>
                    <a href="https://www.pinterest.co.uk/OpenDataDSL" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Pinterest.png" /></a>
                    <a href="https://www.instagram.com/opendatadsl" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Instagram.png" /></a>
                    <a href="https://vimeo.com/user155861440" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Vimeo.png" /></a>
<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
                    <div className={styles.mc_div} id="mc_embed_signup">
                        <form action="https://opendatadsl.us20.list-manage.com/subscribe/post?u=94ab649e417c079356b26adc3&amp;id=582c506efa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">
                            <label htmlFor="mce-EMAIL">Subscribe</label>
                            <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                            <div className={styles.mc_hidden} aria-hidden="true">
                                <input type="text" name="b_94ab649e417c079356b26adc3_582c506efa" tabIndex="-1" defaultValue="" />
                            </div>
                            <div className="clear">
                                <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>

            <div className={styles.smallsectionskip} />
            <div className={styles.section}>
                <HomepageAbout />
            </div>

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
