import React from 'react';
import styles from './features.module.css';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

export function Feature(props) {
    var isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    var border = false;
    if (props.border && props.border == "true")
        border = true;
    var fixed = false;
    if (isMobile || (props.zoomimage && props.zoomimage == "false"))
        fixed = true;

    return (
            <div className="row padding-vert--md">
                <div className="col text-left">
                    <div>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={border?styles.rowborder:styles.row}>
                        {ShowText(props)}
                        {props.video == null ? ShowImage(props.image, fixed, props.buttonurl, props.buttontext) : ShowVideo(props.video, props.buttonurl, props.buttontext)}
                    </div>
                </div>
            </div>
    );
}

function ShowText(props) {
    return (
        <div className="text-left col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div>
                <h3>{props.subtitle}</h3>
            </div>
            <div>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                {props.section3?<h4>{props.section3}</h4>:""}
                <p>{props.text3}</p>
                {props.section4?<h4>{props.section4}</h4>:""}
                <p>{props.text4}</p>
            </div>
        </div>
    );
}

function ShowButton(props) {
    if (props.buttontext) {
        return <Button className="btn btn-primary" href={props.buttonurl}>{props.buttontext}</Button>;
    } else {
        return <span />
    }
}

function ShowUCImage(image) {
    var isMobile = useMediaQuery({ query: `(max-width: 1428px)` });
    if (isMobile) {
        return <div />;
    }

    return (
        <div className="text-left col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div className="image_container">
                <img className={styles.uc_image} src={image}/>
            </div>
        </div>
    );
}

function ShowImage(image, fixed, buttonurl, buttontext) {
    if (fixed && buttonurl)
        return ShowLinkImage(image, buttonurl);
    return (
        <div className="text-left col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div className="image_container">
                <img className={fixed?styles.product_screenshot_fixed:styles.product_screenshot} src={image}/>
                <ShowButton buttontext={buttontext} buttonurl={buttonurl} />
            </div>
        </div>
    );
}

function ShowVideo(video, buttonurl, buttontext) {
    return (
        <div className="text-left col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div className="image_container">
                <video loop="loop" autoPlay playsInline muted id="mejs_5779260256995651_html5" preload="none" src={video} className={styles.datavideo} >
                    <source type="video/mp4" src={video} />
                </video>
                <ShowButton buttontext={buttontext} buttonurl={buttonurl} />
            </div>
        </div>
    );
}

function ShowLinkImage(image, buttonurl) {
    return (
        <div className="text-left col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <a href={buttonurl}>
                <div className="image_container">
                    <img className={styles.product_screenshot_fixed} src={image}/>
                </div>
            </a>
        </div>
    );
}

export function VideoBanner(props) {

    return (
    <div className={styles.videocontainer}>
        <span className={styles.videobg} data-ratio="2">
			<div id="mep_0" tabIndex="0" role="application" aria-label="Video Player" className={styles.videoplayer} >
			    <div className="mejs-inner">
			        <div className={styles.mediaelement}>
                        <div id="mejs_5779260256995651">
                            <video loop="loop" autoPlay playsInline muted id="mejs_5779260256995651_html5" preload="none" src={props.video} className={styles.datavideo} >
                                <source type="video/mp4" src={props.video} />
                            </video>
                        </div>
			        </div>
                </div>
            </div>
        </span>
        <div className={styles.h_text_block}>
            <div className={styles.h_text_major}>
                <div className={styles.h_text_inner}>
                    {props.children}
                </div>
            </div>
            <div className={styles.h_text_minor}>
                <div className={styles.h_text_inner}>
                    <div className={styles.tagline}><span className={props.textcolor}>{props.text}</span></div>
                    <br />
                    <span className={props.textcolor}>Get started today with a <span className={props.hltext}>30 Day </span><span>FREE Trial</span></span>
                </div>
            </div>
            <div className={styles.h_text_minor}>
                <div className={styles.h_text_inner}>
                    <Button className={styles.signupbutton} href="/contact">Contact Us</Button>
                    <Button className={styles.signupbutton} href="/SignUp">Get Started</Button>
                    <Button className={styles.infobutton} href="https://doc.opendatadsl.com">More Info</Button>
                </div>
            </div>
        </div>
    </div>
);
}

export function SimpleVideoBanner(props) {

    return (
    <div className={styles.simplevideocontainer}>
        <span className={styles.videobg} data-ratio="2">
			<div id="mep_0" tabIndex="0" role="application" aria-label="Video Player" className={styles.videoplayer} >
			    <div className="mejs-inner">
			        <div className={styles.mediaelement}>
                        <div id="mejs_5779260256995651">
                            <video loop="loop" autoPlay playsInline muted id="mejs_5779260256995651_html5" preload="none" src={props.video} className={styles.datavideo} >
                                <source type="video/mp4" src={props.video} />
                            </video>
                        </div>
			        </div>
                </div>
            </div>
        </span>
        <div class="mt-5">
            <div className={styles.h_text_block}>
                <div className={styles.h_text_major}>
                    <div className={styles.h_text_inner}>
                        {props.children}
                    </div>
                </div>
                <div className={styles.h_text_minor}>
                    <div className={styles.h_text_inner}>
                        <div className={styles.tagline}><span className={props.textcolor}>{props.text}</span></div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export function SocialMedia() {
return (
            <section className={styles.stayintouch}>
            <h1>Stay In Touch</h1>
            <div className="row">
                <div className="float-right column" style={{height:50}}>
                    <a href="https://twitter.com/opendatadsl" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Twitter.png" /></a>
                    <a href="https://www.linkedin.com/company/opendatadsl" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/LinkedIn.png" /></a>
                    <a href="https://www.facebook.com/OpenDataDSL" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Facebook.png" /></a>
                    <a href="https://www.pinterest.co.uk/OpenDataDSL" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Pinterest.png" /></a>
                    <a href="https://www.instagram.com/opendatadsl" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Instagram.png" /></a>
                    <a href="https://vimeo.com/user155861440" target="_blank" rel="noopener noreferrer" className="m-1"><img src="/img/social/Vimeo.png" /></a>
                </div>
            </div>
            </section>
    );
}