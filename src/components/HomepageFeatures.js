import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import {ContactForm} from '/src/components/Forms.js';

const AboutList = [
  {
    title: 'Our Story',
    jpg: require('../../static/img/home/our-story.png').default,
    description: (
      <>
        After many years of building and using data management systems, 
        we condensed all this knowledge into a domain specific language 
        which encapsulates all aspects of data management in a simple and intuitive way.
      </>
    )
  },
  {
    title: 'Our Vision',
    jpg: require('../../static/img/home/our-vision.png').default,
    description: (
      <>
        Our vision is to make high quality, flexible and low cost data modelling, 
        management and reporting tools for all sizes of businesses and all types of markets.
      </>
    )
  },
  {
    title: 'Our Technology',
    jpg: require('../../static/img/home/our-technology.png').default,
    description: (
      <>
        As a cloud SAAS company, we leverage elastic scaling and serverless technology 
        to provide high quality, high performance, world scale software and services.
      </>
    )
  }
]

const FeatureList = [
  {
    title: 'Excel Add-in',
    jpg: require('../../static/img/home/focus-on-data.png').default,
    description: (
      <>
        Find, read and write MongoDB data directly in Excel
      </>
    ),
    link: "easy-to-use"
  },
  {
    title: 'Web Portal',
    jpg: require('../../static/img/home/data-anywhere.png').default,
    description: (
      <>
        Visualise MongoDB documents and TimeSeries.
      </>
    ),
    link: "make-it-yours"
  },
  {
    title: '4GL Language',
    jpg: require('../../static/img/home/big-savings.png').default,
    description: (
      <>
        An easy scripting language to improve working with MongoDB.
      </>
    ),
    link: "big-savings"
  }
];

function Feature({jpg, title, description, link}) {
  var result;
  if (jpg) {
    result = (
      <div className={clsx('col col--4')}>
        <a href={link}>
          <div className="text--center">
            <img src={jpg} className={styles.featureSvg} alt={title} />
          </div>
        </a>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  } else {
    result = (
      <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  return result;
}

export function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomepageAbout() {
  return (
    <section className={styles.features, styles.section}>
      <div className="container">
        <div className="row">
            <p className={styles.sectionheader}>Who are we?</p>
        </div>
        <div className="row">
          {AboutList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomepageNextSteps() {
    return (
        <section className={styles.features}>
          <div className="container">
            <div className={styles.section}>
                <p className={styles.sectionheader}>Next Steps</p>
            </div>
            <ContactForm />
          </div>
        </section>
    );
}

