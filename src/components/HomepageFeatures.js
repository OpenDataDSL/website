import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const AboutList = [
  {
    title: 'Our Story',
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
    description: (
      <>
        Our vision is to make high quality, flexible and low cost data modelling, 
        management and reporting for all sizes of businesses and all types of markets.
      </>
    )
  },
  {
    title: 'Technology',
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
    title: 'Easy to Use',
    jpg: require('../../static/img/easy_to_use.jpg').default,
    description: (
      <>
        OpenDataDSL was designed from the ground up to be a Software As A Service (SAAS) 
        product, no more out-of-date, hard-to-install software.
      </>
    ),
    link: "easy-to-use"
  },
  {
    title: 'Focus on What Matters',
    jpg: require('../../static/img/focus.jpg').default,
    description: (
      <>
        OpenDataDSL lets you focus on your data whilst we take care
        of the chores.
      </>
    ),
  },
  {
    title: 'Big Savings',
    jpg: require('../../static/img/save_money.jpg').default,
    description: (
      <>
        In OpenDataDSL you only pay for what you use.
      </>
    ),
  },
  {
    title: 'Any Data Anywhere',
    jpg: require('../../static/img/any_data.jpg').default,
    description: (
      <>
        Create 'real-world' data structures, add geo-tagging and use
        machine-learning to enrich and automate your data.
      </>
    ),
  },
  {
    title: 'Secure',
    jpg: require('../../static/img/secure.jpg').default,
    description: (
      <>
        Use your own Azure Active Directory to authenticate your users and
        secure your data.
      </>
    ),
  },
  {
    title: 'Make It Yours',
    jpg: require('../../static/img/customise.jpg').default,
    description: (
      <>
        Build applications using our APIs and customise the portal with your own domain, logo and colours to
        make it your own.
      </>
    ),
  },
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {AboutList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

