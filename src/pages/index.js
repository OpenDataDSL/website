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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Smart Data Management Tools">
        <main>
            <Video />
            <HomepageFeatures />

                  <div style={{height:450}}>
                    <div className="row h-100">
                      <iframe className="h-100" src="https://cdn.forms-content.sg-form.com/e54e36ad-1c51-11ec-872a-6677fa1e7091"/>
                    </div>
                  </div>

            <div className={styles.section}>
                <HomepageAbout />
            </div>
        </main>
    </Layout>
  );
}
