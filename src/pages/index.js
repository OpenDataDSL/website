import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {AIHero, HomepageFeatures, News} from '@site/src/components/HomepageFeatures';
import CookieConsent from "react-cookie-consent";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {configureAnimations} from '/js/odsl.js';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    configureAnimations();
  }, [])

  return (
    <Layout title={`${siteConfig.title}`} description="The Energy Intelligence Platform">
      <main>
        <CookieConsent location="top" overlay>We use cookies to personalise content and to analyse our traffic, if you continue we'll assume that you are happy to receive them. For more information, see our <a href="/legal/Cookie-Policy">cookie policy</a></CookieConsent>
        <AIHero />
        <HomepageFeatures />
        <News />
      </main>
    </Layout>
  );
}
