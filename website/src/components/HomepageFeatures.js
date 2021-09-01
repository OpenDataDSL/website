import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

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
    title: 'Make Massive Savings',
    jpg: require('../../static/img/save_money.jpg').default,
    description: (
      <>
        In OpenDataDSL you only pay for what you use, so you can cut
        your IT spend on managing data.
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
        Build applications using our APIs and customise the portal with your logo and colours to
        make it your own.
      </>
    ),
  },
];

function Feature({jpg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={jpg} className={styles.featureSvg} alt={title} />
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
