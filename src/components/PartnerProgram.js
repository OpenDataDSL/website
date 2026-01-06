import React, { useEffect } from 'react'
import {configureAnimations} from '/js/odsl.js';
import styles from './PartnerProgram.module.css';
import './TabHandling.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const partners = [
	{
		name:"Previse Systems", 
		text:"At Previse Systems, we fundamentally reshape the way Energy Trading and Risk Management (ETRM) software is designed, implemented and operated.", 
		logo:"/img/partner/PVS_Logo_rgb.jpg", 
		link:"/partners/previse-systems", 
		website:"https://previsesystems.com"
	}, {
		name:"Revenue.AI", 
		text:"Pricing and revenue management driven by cognitive AI - Outperform your competitiors with the power of cutting-edge technologies", 
		logo:"https://revenue.ai/wp-content/uploads/2023/04/Group-183.png", 
		link:"/partners/revenue-ai", 
		website:"https://revenue.ai"
	}, {
		name:"Time2Market", 
		text:"Time2Market is the only independent market access service provider in the energy industry. We help energy trading companies looking to expand their operations to new power and gas markets, and investment firms entering the energy industry for the first time.", 
		logo:"/img/partner/time2market-dark-notagline-500.png", 
		link:"/partners/time-2-market", 
		website:"https://www.time2market.net?utm_source=Referral&utm_medium=OpenDataDSL-Website&utm_campaign=Partners"
	}
]

export function PartnerProgram(props) {
  useEffect(() => {
	configureAnimations();
  }, [])

  return (
	<>
		<div className={styles.hero}>
			<h1 className="scroll-to-display">{props.title}</h1>
			<p className="scroll-to-display">{props.subtitle}</p>
		</div>

		<div className={styles.container}>
		</div>	
	</>
  );
}

export function ExpertiseItem(props) {
	return (
		<div className={styles.expertise_item}>
			<h4>{props.title}</h4>
			<p>{props.text}</p>
		</div>
	);
}

export function PartnerSwiper() {
  return (
        <div>
            <section className="partner-section">
                <div className="partner-swiper scroll-to-display">
                  <Swiper modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    speed={3000}
                    autoplay={{delay:1000, pauseOnMouseEnter: true, disableOnInteraction: false}}
                    autoHeight={true}
                    breakpoints={{
                          "0": {"slidesPerView": 1},
                          "576": {"slidesPerView": 1},
                          "992": {"slidesPerView": 1},
                          "1200": {"slidesPerView": 2},
                          "2500": {"slidesPerView": 2}
                      }}
                  >
                    {partners.map((props, idx) => (
                      <SwiperSlide key={idx}>
                          <div className="news-div">
                              <Partner key={idx} {...props} />
                          </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
              </div>
            </section>
      </div>
  );
};

export function Partner(props) {
	return (
		<div className="blue_item">
			<h4>{props.name}</h4>
			<a href={props.website}><img src={props.logo} width="150px" style={{marginBottom: "30px"}} /></a>
			<p className="partner-text">{props.text}</p>
			<a href={props.link}>More about {props.name}</a>
		</div>
	);
}
