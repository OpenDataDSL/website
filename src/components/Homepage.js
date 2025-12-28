import React from 'react';
import styles from './Homepage.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const BenefitList = [
    {
        title: 'Market Data Management',
        jpg: require('../../static/img/icons/mdm.jpg').default,
        text: 'Consolidate fragmented market data into a single, unified platform. Eliminate silos, automate quality checks, and give your team real-time access to accurate, standardized data. Spend less time managing data feeds and more time making informed trading decisions.',
        link: "easy-to-use",
        slogan: "Your market data, unified and intelligent"
    },
    {
        title: 'Data Catalogue',
        jpg: require('../../static/img/icons/catalogue.jpg').default,
        text: 'Access comprehensive global energy pricing data with Bring Your Own License (BYOL) flexibility. Our curated catalogue delivers verified, standardized market data from worldwide exchanges and providers—streamlining vendor integrations and reducing time-to-market for new commodities.',
        link: "easy-to-use",
        slogan: "Your complete energy pricing intelligence hub"
    },
    {
        title: 'Smart Curves',
        jpg: require('../../static/img/icons/curve.jpg').default,
        text: 'Build accurate forward curves in minutes with intelligent automation. Smart Curves handles gaps, seasonality, and market conventions automatically, freeing your analysts from repetitive spreadsheet work to focus on strategic market analysis and risk assessment.',
        link: "easy-to-use",
        slogan: "Create with AI, build with precision"
    },
    {
        title: 'AI Assistants',
        jpg: require('../../static/img/icons/assistant.jpg').default,
        text: 'Get instant expert assistance with six specialized AI assistants tailored to energy trading. From data analysis to API integration, your team accelerates decision-making with 24/7 access to intelligent support that understands your workflows and speaks your language.',
        link: "easy-to-use",
        slogan: "Expert assistance, instant answers, smarter decisions"
    },
    {
        title: 'AI Agents',
        jpg: require('../../static/img/icons/agent.jpg').default,
        text: 'Automate routine workflows and scale operations without adding headcount. AI Agents handle scheduled tasks—curve updates, data validation, reporting—autonomously, reducing operational risk and freeing your traders to focus on high-value strategic activities.',
        link: "easy-to-use",
        slogan: "AI agents: Your 24/7 energy operations team"
    },
    {
        title: 'Custom Tools',
        jpg: require('../../static/img/icons/tools.jpg').default,
        text: 'Build proprietary workflows that encode your competitive advantage. Create custom tools using OpenDataDSL\'s flexible framework to automate unique trading strategies and analytical processes. Transform tribal knowledge into repeatable, scalable operations that preserve your market edge.',
        link: "easy-to-use",
        slogan: "Your workflows, your tools, your edge"
    },
    {
        title: 'ODSL',
        jpg: require('../../static/img/icons/odsl.jpg').default,
        text: 'Express complex energy market operations in clear, concise code built specifically for commodities. ODSL\'s domain-specific syntax handles timeseries, curves, and data workflows naturally—reducing development time and making sophisticated operations accessible to your entire team.',
        link: "easy-to-use",
        slogan: "Purpose-built for energy professionals"
    }
]



export function AIHero() {
  return (
        <div>
            <section className={styles.herotwo}>
                <div className={styles.herotwo__bg}>
                    <div className={styles.herotwo__bg__inner}></div>
                </div>
                <div className={styles.container}>
                    <div className={styles.herotwo__content}>
                        <h2 className={`${styles.herotwo__title} wow ${styles.fadeInUp}`} data-wow-duration="1500ms">Energy Intelligence Platform</h2>
                        <p className={`${styles.herotwo__subtitle} pb-5 wow ${styles.fadeInUp}`} data-wow-duration="1500ms">AI Enabled Data Management</p>
                    </div>
                </div>
                <Swiper modules={[EffectCoverflow, Autoplay]}
                  effect="coverflow"
                  spaceBetween={10}
                  slidesPerView={5}
                  loop={true}
                  coverflowEffect={{rotate:40, stretch:0,depth:100,modifier:1,slideShadows:true}}
                  speed={1000}
                  autoplay={{delay:3000, pauseOnMouseEnter: true, disableOnInteraction: false}}
                  autoHeight={true}
                  breakpoints={{
                        "0": {"slidesPerView": 1},
                        "576": {"slidesPerView": 2},
                        "992": {"slidesPerView": 3},
                        "1200": {"slidesPerView": 5},
                        "2500": {"slidesPerView": 6}
                    }}
                >
                  {BenefitList.map((props, idx) => (
                    <SwiperSlide key={idx}>
                        <div className={styles.herodiv}>
                            <Benefit key={idx} {...props} />
                        </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </section>
      </div>
  );
};

function Benefit({jpg, title, text, link, slogan}) {
  return (
      <div className="p-4">
        <a href={link}>
          <div className="text--center">
            <img src={jpg} className={styles.featureSvg} alt={title} />
          </div>
        </a>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{text}</p>
          <h4>{slogan}</h4>
        </div>
      </div>
    )
}
