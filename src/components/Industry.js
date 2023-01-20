import React from 'react';
import styles from './Industry.module.css';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';

export function Product(props) {
    var border = false;
    if (props.border && props.border == "true")
        border = true;
    if (props.left == "true") {
        return (
                <div className="row padding-vert--md">
                    <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
                    <div className="col  text-left col-xs-12 col-sm-10 col-md-10 col-lg-10">
                        <div className={border?styles.rowborder:styles.row}>
                            {ShowImage(props.image, props.zoomimage, props.buttonurl)}
                            {ShowText(props.title, props.subtitle, props.text1, props.text2, props.buttontext, props.buttonurl)}
                        </div>
                    </div>
                    <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
                </div>
        );
    } else {
        return (
                <div className="row padding-vert--md">
                    <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
                    <div className="col  text-left col-xs-12 col-sm-10 col-md-10 col-lg-10">
                        <div className={border?styles.rowborder:styles.row}>
                            {ShowText(props.title, props.subtitle, props.text1, props.text2, props.buttontext, props.buttonurl)}
                            {ShowImage(props.image, props.zoomimage, props.buttonurl)}
                        </div>
                    </div>
                    <div className="text-left col-xs-12 col-sm-3 col-md-3 col-lg-3"> </div>
                </div>
        );
    }
}

function ShowText(title, subtitle, text1, text2, buttontext, buttonurl) {
    return (
        <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <h3>{subtitle}</h3>
            </div>
            <div>
                <p>{text1}</p>
                <p>{text2}</p>
                <ShowButton buttontext={buttontext} buttonurl={buttonurl} />
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

function ShowImage(image, zoomimage, buttonurl) {
    var fixed = false;
    if (zoomimage && zoomimage == "false")
        fixed = true;
    if (fixed && buttonurl)
        return ShowLinkImage(image, buttonurl);
    return (
        <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="image_container">
                <img className={fixed?styles.product_screenshot_fixed:styles.product_screenshot} src={image}/>
            </div>
        </div>
    );
}

function ShowLinkImage(image, buttonurl) {
    return (
        <div className="col  text-left col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
                    <div className={styles.tagline}>{props.text}</div>
                    <br />
                    <span>Get started today with a <span className={props.hltext}>30 Day </span><span>FREE Trial</span></span>
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