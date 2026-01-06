// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { useEffect } from 'react'
import {configureAnimations} from '/js/odsl.js';
//const Data = require('https://doc.opendatadsl.com/data/catalog.json');
var Data = require('/data/catalog.json');

export function Animate() {
	useEffect(() => {
		configureAnimations();
	}, [])
	return (<></>);
}

export function Feature(props) {
	useEffect(() => {
		configureAnimations();
	}, [])

	return (
		<div className="hero">
			<div className="container">
				<img src={props.jpg} className="featureSvg scroll-to-display" />
				<h1 className="scroll-to-display">{props.title}</h1>
				<p className="scroll-to-display">{props.slogan}</p>
			</div>
		</div>
	);
}

export function NextButton(props) {
	return (
		<a href={props.link} className="cta_button next_button" style={{background: "#0c7011ff", color: "white"}}>{props.text}&nbsp;&nbsp;<i className="bi bi-fast-forward-fill" /></a>
	);
}

export function Integration(props) {
	return (
		<div className="col-md-6 col-lg-4 p-4 col-xs-12 border border-radius">
			<a href={props.link}>
				<div className='row'>
					<div className="col-4">
						<img src={props.jpg} className="integrationSvg" alt={props.title} />
					</div>
					<div className="col-8">
						<h4>{props.title}</h4>
						<p>{props.text}</p>
					</div>
				</div>
    		</a>
		</div>
	);
}

export function Card(props) {
	return (
		<div className="col-md-6 col-lg-4 p-md-1 p-lg-4 col-xs-12 border border-radius">
			<div className='row'>
				<div className="col-4">
					<img src={props.jpg} className="integrationSvg" alt={props.title} />
				</div>
				<div className="col-8">
					<h4>{props.title}</h4>
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	);
}

export function ListCard(props) {
	let list = JSON.parse(props.list);
	return (
		<div className="col-3 p-4 m-1 border border-radius">
			<div className='row'>
				<div className="col-4">
					<img src={props.jpg} className="integrationSvg" alt={props.title} />
				</div>
				<div className="col-8">
					<h3>{props.title}</h3>
					<ul>
						{list.map((p, idx) => (
							<li key={idx}>{p}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export function Catalog() {
  return (
        <div>
            <section className="catalogue-section section">
                <div className="catalogue-swiper scroll-to-display">
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
                    {Data.map((props, idx) => (
                      <SwiperSlide key={idx}>
                          <div className="catalogue-div">
                              <CatalogCard key={idx} {...props} />
                          </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
              </div>
            </section>
      </div>
  );
};

function CatalogCard({link, provider, title, text, providerType, dataset}) {
  return (
      <a href={"https://doc.opendatadsl.com" + link}>
        <div className="p-4">
          <div className="text--center padding-horiz--md">
            <h3 className="catalogue-headline">{provider}</h3>
            <h4 className="catalogue-date">{providerType} - {dataset}</h4>
            <h4 className="catalogue-date">{title}</h4>
            <p>{text}</p>
          </div>
        </div>
      </a>
    )
}

