import clsx from 'clsx';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const BenefitList = [
    {
        id: 1,
        title: 'Data Management',
        jpg: require('../../static/img/icons/mdm.png').default,
        text: 'Consolidate fragmented market data into a single, unified platform. Eliminate silos, automate quality checks, and give your team real-time access to accurate, standardized data. Spend less time managing data feeds and more time making informed trading decisions.',
        link: "data-management",
        slogan: "Your market data, unified and intelligent"
    },
    {
        id: 2,
        title: 'Data Catalogue',
        jpg: require('../../static/img/icons/catalogue.png').default,
        text: 'Access comprehensive global energy pricing data with Bring Your Own License (BYOL) flexibility. Our curated catalogue delivers verified, standardized market data from worldwide exchanges and providers—streamlining vendor integrations and reducing time-to-market for new commodities.',
        link: "data-catalogue",
        slogan: "The complete energy pricing data hub"
    },
    {
        id: 3,
        title: 'Smart Curves',
        jpg: require('../../static/img/icons/curve.png').default,
        text: 'Build accurate forward curves in minutes with intelligent automation. Smart Curves handles gaps, seasonality, and market conventions automatically, freeing your analysts from repetitive spreadsheet work to focus on strategic market analysis and risk assessment.',
        link: "smart-curves",
        slogan: "Create with AI, build with precision"
    },
    {
        id: 4,
        title: 'Fusion AI',
        jpg: require('../../static/img/icons/fusion.png').default,
        text: 'Fusion AI brings expert intelligence to every aspect of energy and commodity trading through six specialized AI assistants and autonomous AI agents. Get instant answers to complex market questions, build forward curves conversationally, automate operational workflows, and develop custom analytics — all through natural language interaction.',
        link: "fusion",
        slogan: "Your AI expert for energy professionals"
    },
    {
        id: 5,
        title: 'AI Assistants',
        jpg: require('../../static/img/icons/assistant.png').default,
        text: 'Get instant expert assistance with six specialized AI assistants tailored to energy trading. From data analysis to API integration, your team accelerates decision-making with 24/7 access to intelligent support that understands your workflows and speaks your language.',
        link: "ai-assistants",
        slogan: "Expert assistance, smarter decisions"
    },
    {
        id: 6,
        title: 'AI Agents',
        jpg: require('../../static/img/icons/agent.png').default,
        text: 'Automate routine workflows and scale operations without adding headcount. AI Agents handle scheduled tasks—curve updates, data validation, reporting—autonomously, reducing operational risk and freeing your traders to focus on high-value strategic activities.',
        link: "ai-agents",
        slogan: "Your 24/7 energy operations team"
    },
    {
        id: 7,
        title: 'Custom Tools',
        jpg: require('../../static/img/icons/tools.png').default,
        text: 'Build proprietary workflows that encode your competitive advantage. Create custom tools using OpenDataDSL\'s flexible framework to automate unique trading strategies and analytical processes. Transform tribal knowledge into repeatable, scalable operations that preserve your market edge.',
        link: "custom-tools",
        slogan: "Your workflows, your tools, your edge"
    },
    {
        id: 8,
        title: 'ODSL',
        jpg: require('../../static/img/icons/odsl.png').default,
        text: 'Express complex energy market operations in clear, concise code built specifically for commodities. ODSL\'s domain-specific syntax handles timeseries, curves, and data workflows naturally—reducing development time and making sophisticated operations accessible to your entire team.',
        link: "odsl-code",
        slogan: "Purpose-built for energy professionals"
    }
]

const Articles = [
  {
    type: "Blog",
    date: "Jan 01, 2026",
    title: "Blog: Fusion AI, Energy Intelligence",
    link: "./blog/fusion",
    text: "Fusion AI brings expert intelligence to every aspect of energy and commodity trading companies."
  },
  {
    type: "Event",
    date: "Jul 15, 2025",
    title: "Energy Trading Week",
    link: "./events/etw-2025",
    text: "ETW Europe 2025 - Come and visit us at ETW Europe on stand 39"
  },
  {
    type: "Blog",
    date: "Jul 09, 2025",
    title: "Forward Curve Insights - Time Spreads",
    link: "./blog/time_spread",
    text: "Decoding Forward Curves: Building Market Structure Intelligence with OpenDataDSL."
  },
  {
    type: "News",
    date: "Jun 06, 2025",
    title: "New Feature: OpenDataDSL Application Extensions",
    link: "./news/extensions",
    text: "Clients, partners and OpenDataDSL can now easily add bespoke functionality into the web portal using application extensions."
  },
  {
    type: "News",
    date: "Jan 27, 2025",
    title: "Data Monitoring gives unprecedented transparency",
    link: "./news/dataset-monitoring",
    text: "OpenDataDSL introduces the latest new feature to the SaaS platform - Data Monitoring - What is it and how can it help you?"
  },
  {
    type: "News",
    date: "Sep 2, 2024",
    title: "OpenDataDSL partners with Time2Market",
    link: "./news/partner-program",
    text: "OpenDataDSL welcomes their latest partner; Time2Market, the leading provider of market access and trading support services."
  },
  {
    type: "News",
    date: "May 28, 2024",
    title: "PZEM Energy Company chooses OpenDataDSL",
    link: "./news/pzem-chooses-opendatadsl",
    text: "OpenDataDSL announced today that PZEM Energy Company has chosen OpenDataDSL for their SaaS Data Management Platform."
  },
  {
    type: "News",
    date: "May 02, 2024",
    title: "OpenDataDSL partners with Previse Systems",
    link: "./news/previse-partnership",
    text: "OpenDataDSL welcomes their first partner; Previse Systems, a leading provider of ETRM software."
  }
]


export function AIHero() {
  return (
        <div>
            <section className="herotwo">
                <div className="herotwo__bg">
                    <div className="herotwo__bg__inner"></div>
                </div>
                <div className="container">
                    <div className="herotwo__content">
                        <h2 className="herotwo__title scroll-to-display">Energy Intelligence Platform</h2>
                        <p className="herotwo__subtitle scroll-to-display pb-5">AI Enabled Data Management</p>
                    </div>
                </div>
                <div className='video-spinner scroll-to-display'>
                  <img src='/img/home/hero-video-bg.png' alt="Loading..." />
                  <svg className="circleText" viewBox="830 -80 50 550" data-duration="5">
                    <path id="textcircle" fill="none" stroke="#FF9800" strokeWidth="0" data-duration="5"
                          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250">
                    </path>                    
                    <text dy="-25">  
                      <textPath className='curved-circle-item' href="#textcircle"> - Play Intro Video - Play Intro Video</textPath>
                    </text>                  
                  </svg>
                </div>
                <div className="main-swiper scroll-to-display">
                  <Swiper modules={[EffectCoverflow, Autoplay]}
                    effect="coverflow"
                    spaceBetween={10}
                    slidesPerView={5}
                    loop={true}
                    coverflowEffect={{rotate:40, stretch:0,depth:100,modifier:1,slideShadows:true}}
                    speed={1000}
                    autoplay={{delay:1000, pauseOnMouseEnter: true, disableOnInteraction: false}}
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
                          <div className="herodiv">
                              <BenefitCard key={idx} {...props} />
                          </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
              </div>
            </section>
      </div>
  );
};

function BenefitCard({jpg, title, slogan, link}) {
  return (
      <div className="p-4">
        <div className="text--center">
          <img src={jpg} className="featureSvg" alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{slogan}</p>
        </div>
      </div>
    )
}

export function HomepageFeatures() {
  return (
      <section className="feature-section">
        <div className="features">
          {BenefitList.map((props, idx) => (
              <Benefit key={idx} {...props} />
          ))}
        </div>
      </section>
  );
}

function Benefit({jpg, title, text, link, slogan, id}) {
  return (
      <div className={clsx("row p-4 feature-item mb-2 scroll-to-display-x scroll-to-display-"+id)}>
        <div className='col-12'>
          <img src={jpg} className="featureSvg" alt={title} />
          <h2>{title}</h2>
          <p>{text}</p>
          <h5>{slogan}</h5>
          <a href={"/features/"+link}>
            <button className="button button--primary">Learn More</button>
          </a>
        </div>
      </div>
    )
}

export function News() {
  return (
        <div>
            <section className="news-section">
                    <div className="container">
                    <div className="herotwo__content">
                        <h2 className="herotwo__title scroll-to-display">Insights</h2>
                    </div>
                </div>
                <div className="news-swiper scroll-to-display">
                  <Swiper modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    speed={1000}
                    autoplay={{delay:1000, pauseOnMouseEnter: true, disableOnInteraction: false}}
                    autoHeight={true}
                    breakpoints={{
                          "0": {"slidesPerView": 1},
                          "576": {"slidesPerView": 1},
                          "992": {"slidesPerView": 1},
                          "1200": {"slidesPerView": 3},
                          "2500": {"slidesPerView": 3}
                      }}
                  >
                    {Articles.map((props, idx) => (
                      <SwiperSlide key={idx}>
                          <div className="news-div">
                              <NewsCard key={idx} {...props} />
                          </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
              </div>
            </section>
      </div>
  );
};

function NewsCard({type, link, title, text, date}) {
  return (
      <a href={link}>
        <div className="p-4">
          <div className="text--center padding-horiz--md">
            <span className="news-date">{type + " - " + date}</span>
            <h3 className="news-headline">{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </a>
    )
}
