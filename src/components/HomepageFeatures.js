import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import {ContactForm} from '/src/components/Forms.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

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

const WhyChoose = [
  {
    title: 'Agile & extensible',
    jpg: require('../../static/img/logo.png').default,
    description: (
      <>
        Our platform is easily and rapidly extended. Build extensions, reports and insights to manage and visualise your data your way. Our service architecture ensures no downtime for upgrades and enhancements.
      </>
    )
  },
  {
    title: 'Data management expertise',
    jpg: require('../../static/img/logo.png').default,
    description: (
      <>
        Our team of data management experts can design, load and productionise any data - fast. A full suite of automations covers history loading, validation and ongoing monitoring. Don't wait for new data.
      </>
    )
  },
  {
    title: 'World-class support',
    jpg: require('../../static/img/logo.png').default,
    description: (
      <>
        Our clients receive world-class support so that best-practice data management becomes second nature. 24/5, 24/7, Working Hours - choose the package that is right for you.
      </>
    )
  },
  {
    title: 'World-scale technology',
    jpg: require('../../static/img/logo.png').default,
    description: (
      <>
        Our product was built in the cloud for the cloud, utilising the world-scale capabilities of the Microsoft Azure platform. Autoscaling ensures our platform doesn't slow down, neither do your critical tasks.
      </>
    )
  },
  {
    title: 'Cloud based security',
    jpg: require('../../static/img/logo.png').default,
    description: (
      <>
        Use your own Microsoft Entra ID (Active Directory) to authorise access for your users. Integrate security and authentication into your own corporate workflow.
      </>
    )
  },
  {
    title: 'Seamless integrations',
    jpg: require('../../static/img/logo.png').default,
    description: (
      <>
        Seamlessly integrate with your ETRM/CTRM system and all your other major business systems. Push/Pull, File, API, Queue, Bucket and more - we have you covered.
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

export function WhyChooseODSL() {
  return (
    <section>
      <div className="container">
        <div className="row">
            <p className={styles.sectionheader}>World-class support meets smart technology</p>
        </div>
        <div className="row">
          {WhyChoose.map((props, idx) => (
            <InfoBlock key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBlock({jpg, title, description, link}) {
  var result = (
      <div className={clsx('col col--4')}>
        <a href={link}>
          <div className="text--center">
            <img src={jpg} className={styles.infoIcon} alt={title} />
          </div>
        </a>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  return result;
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

export function AIHero2() {
    return (
        <div onLoad={init}>
            <div id="preloader" className={styles.preloader}>
                <div className={styles.preloader__image}></div>
            </div>
        <section className={styles.herotwo}>
            <div className={styles.herotwo__bg}>
                <div className={styles.herotwo__bg__inner}></div>
            </div>
            <div className={styles.container}>
                <div className={styles.herotwo__content}>
                    <h2 className={`${styles.herotwo__title} wow ${styles.fadeInUp}`} data-wow-duration="1500ms">Energy Intelligence Platform</h2>
                    <p className={`${styles.herotwo__title2} wow ${styles.fadeInUp}`} data-wow-duration="1500ms">AI for Energy</p>
                    <div className={`${styles.herotwo__button} wow ${styles.fadeInUp}`} data-wow-duration="1500ms">
                        <a href="/fusion" className={styles.aigencebtn}>
                            <span className={styles.aigencebtn__text}>Discover More</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={`${styles.herotwo__container} container`}>
                <div className={`${styles.herotwo__carousel} aigence-swiper__carousel`} data-swiper-options='{
                "effect": "coverflow",
                "grabCursor": true,
                "centeredSlides": true,
                "spaceBetween": 10,
                "loop": true,
                "speed": 1000,
                "autoplay": {
                    "delay": 3000
                },
                "coverflowEffect": {
                    "rotate": 45,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                },
                "breakpoints": {
                    "0": {
                        "slidesPerView": 1
                    },
                    "576": {
                        "slidesPerView": 2
                    },
                    "992": {
                        "slidesPerView": 3
                    },
                    "1200": {
                        "slidesPerView": 4
                    }
                }
            }'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className={styles.herotwo__carousel__image}>
                                <div className={styles.herodiv}>
                                    <h1>This is a benefit</h1>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className={styles.herotwo__carousel__image}>
                                <img src="/img/home/hero-2-1.jpg" alt="hero slide" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className={styles.herotwo__carousel__image}>
                                <img src="/img/home/hero-2-1.jpg" alt="hero slide" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className={styles.herotwo__carousel__image}>
                                <img src="/img/home/hero-2-1.jpg" alt="hero slide" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className={styles.herotwo__carousel__image}>
                                <img src="/img/home/hero-2-1.jpg" alt="hero slide" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className={styles.herotwo__carousel__image}>
                                <img src="/img/home/hero-2-1.jpg" alt="hero slide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

function VideoCircle() {
return (
            <div className={`${styles.herotwo__shape_1} row`}>
                    <div className="col-lg-12 wow fadeInRight" data-wow-duration="1500ms">
                        <div className={styles.herotwo__videobox}>
                            <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className={`${styles.herotwo__video} video-popup ${styles.videoimage}`}>
                                <span className={styles.herotwo__video__icon}><i className="bi bi-play-fill"></i></span>
                                <div className={styles.curvedcircle}>
                                    <div className="curvedcircle__item" data-circle-text-options='{
                            "radius": 70,
                            "forceWidth": true,
                            "forceHeight": true
                        }'>
                                        - Play Intro Video - Play Intro Video
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
            </div>
)
}

function MiniCarousel() {
    return (
                <div className="container">
                    <div className="client-carousel client-carousel--home2 client-carousel--two">
                        <div className="client-carousel__content">
                            <h4 className="client-carousel__title">3500 happy customers</h4>
                        </div>
                        <div className="client-carousel__carousel aigence-owl__carousel owl-theme owl-carousel" data-owl-options='{
                    "items": 5,
                    "margin": 65,
                    "smartSpeed": 700,
                    "loop": true,
                    "autoplay": 6000,
                    "nav": false,
                    "dots": false,
                    "navText": ["<i className=\"icon-left-arrow\"></i>","<i className=\"icon-right-arrow\"></i>"],
                    "responsive":{
                        "0":{
                            "items": 2,
                            "margin": 40
                        },
                        "500":{
                            "items": 3,
                            "margin": 40
                        },
                        "768":{
                            "items": 3,
                            "margin": 80
                        },
                        "992":{
                            "items": 4,
                            "margin": 60
                        },
                        "1200":{
                            "items": 5,
                            "margin": 109
                        }
                    }
                    }'>
                            <div className={styles.clientcarousel__item}>
                                <img src="/img/home/brand-2-1.png" alt="aigence" className={styles.clientcarousel__image}/>
                                <img src="/img/home/brand-2-1-hover.png" alt="aigence" className={styles.clientcarousel__hover_image}/>
                            </div>
                            <div className={styles.clientcarousel__item}>
                                <img src="/img/home/brand-2-1.png" alt="aigence" className={styles.clientcarousel__image}/>
                                <img src="/img/home/brand-2-1-hover.png" alt="aigence" className={styles.clientcarousel__hover_image}/>
                            </div>
                            <div className={styles.clientcarousel__item}>
                                <img src="/img/home/brand-2-1.png" alt="aigence" className={styles.clientcarousel__image}/>
                                <img src="/img/home/brand-2-1-hover.png" alt="aigence" className={styles.clientcarousel__hover_image}/>
                            </div>
                            <div className={styles.clientcarousel__item}>
                                <img src="/img/home/brand-2-1.png" alt="aigence" className={styles.clientcarousel__image}/>
                                <img src="/img/home/brand-2-1-hover.png" alt="aigence" className={styles.clientcarousel__hover_image}/>
                            </div>
                            <div className={styles.clientcarousel__item}>
                                <img src="/img/home/brand-2-1.png" alt="aigence" className={styles.clientcarousel__image}/>
                                <img src="/img/home/brand-2-1-hover.png" alt="aigence" className={styles.clientcarousel__hover_image}/>
                            </div>
                            <div className={styles.clientcarousel__item}>
                                <img src="/img/home/brand-2-1.png" alt="aigence" className={styles.clientcarousel__image}/>
                                <img src="/img/home/brand-2-1-hover.png" alt="aigence" className={styles.clientcarousel__hover_image}/>
                            </div>
                        </div>
                    </div>
                </div>

    )

}

  // window load event
export function AIPageLoad() {
    console.log("AI Page Load");
    $(window).on("pageshow", init);
    return (<div />);
}

export function init() {
    console.log("Initialising Animations");

    if ($("#preloader").length) {
        console.log("Fading out pre loader");
        $("#preloader").fadeOut();
    }
    thmOwlInit();
    aigenceSwiperInit();
    //priceFilter();

    if ($(".masonry-layout").length) {
      $(".masonry-layout").imagesLoaded(function () {
        $(".masonry-layout").isotope({
          layoutMode: "masonry"
        });
      });
    }
    if ($(".fitRow-layout").length) {
      $(".fitRow-layout").imagesLoaded(function () {
        $(".fitRow-layout").isotope({
          layoutMode: "fitRows"
        });
      });
    }

    if ($(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }

    if ($(".post-filter.has-dynamic-filter-counter").length) {
      // var allItem = $('.single-filter-item').length;

      var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
        "li"
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).append("<sup>[" + count + "]</sup>");
      });
    }

  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

//    aigence_curved_circle();


}

function aigence_curved_circle() {
    let circleTypeElm = $(".curvedcircle__item");
    if (circleTypeElm.length) {
      circleTypeElm.each(function () {
        let elm = $(this);
        let options = elm.data("circle-text-options");
        elm.circleType(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }
  }

  function thmOwlInit() {
    // owl slider
    let aigenceowlCarousel = $(".aigence-owl__carousel");
    if (aigenceowlCarousel.length) {
      aigenceowlCarousel.each(function () {
        let elm = $(this);
        let options = elm.data("owl-options");
        let thmOwlCarousel = elm.owlCarousel(
          "object" === typeof options ? options : JSON.parse(options)
        );
        elm.find("button").each(function () {
          $(this).attr("aria-label", "carousel button");
        });
      });
    }
  }
  function aigenceSwiperInit() {
    let swipers = $(".aigence-swiper__carousel");

    if (swipers.length) {
      swipers.each(function (index, element) {
        let $this = $(element);
        let options = $this.attr("data-swiper-options");
        let parsedOptions;

        try {
          parsedOptions = JSON.parse(options);
        } catch (e) {
          console.warn("Invalid JSON in data-swiper-options:", e);
          parsedOptions = {}; // fallback
        }

        new Swiper(element, parsedOptions);
      });
    }
  }
