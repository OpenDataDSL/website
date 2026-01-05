import React from 'react';
import styles from './Forms.module.css';
import { loadReCaptcha } from '/js/captcha.js'

export function Sales(props) {
    return (
    <div>
        <div className="row">
            <div className={styles.formheader}>
                <div className="col text-center">
                    <div className={styles.formheadertext} itemScope itemType="https://schema.org/LocalBusiness">
                        <p className={styles.contactinfo} itemProp="email"><i className="bi bi-envelope-at-fill" alt="Phone" /><a href="mailto:info@opendatadsl.com"> info@opendatadsl.com</a></p>
                        <p className={styles.contactinfo} itemProp="telephone"><i className="bi bi-telephone-fill" alt="Phone" /><a href="tel:+44 1245 555053"> +44 1245 555053</a></p>
                        <p className={styles.contactinfo}><a target="_blank" href="http://eepurl.com/ih0lVr">Sign up to our newsletters!</a></p>
                    </div>
                </div>
            </div>
        </div>
        <ContactForm />
    </div>
    );
}

export function Demo(props) {
    return (
    <div>
        <div className="row">
            <div className={styles.demoheader}>
                <div className="col text-center">
                    <div className={styles.demoheadertext} itemScope itemType="https://schema.org/LocalBusiness">
                        <img src="/img/logo128.png" />
                        <p className="h1">How about a demo?</p>
                        <p className="h6">Our team is here to find the right solution for you, contact us to see this in action.</p>
                        <p className={styles.contactinfo} itemProp="email"><i className="bi bi-envelope-at-fill" alt="Phone" /><a href="mailto:info@opendatadsl.com"> info@opendatadsl.com</a></p>
                        <p className={styles.contactinfo} itemProp="telephone"><i className="bi bi-telephone-fill" alt="Phone" /><a href="tel:+44 1245 555053"> +44 1245 555053</a></p>
                        <p className={styles.contactinfo}><a target="_blank" href="http://eepurl.com/ih0lVr">Sign up to our newsletters!</a></p>
                    </div>
                </div>
            </div>
        </div>
        <MiniContactForm />
    </div>
    );
}

export function ContactForm(props) {
    var to = "sales";
    if (props.to) {
      to = props.to;
    }
    return (
            <div className={styles.formpage}>
                <p className={styles.filldetails}>Fill out your details below and somebody will be in contact with you very shortly.</p>
                <form method="POST" action={"https://api.opendatadsl.com/api/form/" + to}>
                    <div className="row">
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" name="firstName" className="form-control" id="firstName" />
                          </div>
                       </div>
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" name="lastName" className="form-control" id="lastName" />
                          </div>
                       </div>
                   </div>
                    <div className="row">
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
                          </div>
                       </div>
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="company" className="form-label">Company</label>
                            <input type="text" name="company" className="form-control" id="company" />
                          </div>
                       </div>
                   </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="message" className="form-control" id="message" rows="6" aria-describedby="messageHelp" />
                    <div id="messageHelp" className="form-text">Enter information about your area of interest, include your telephone number if you would like us to call you.</div>
                  </div>
                  <div id="recaptcha" className="g-recaptcha" data-sitekey="6LczjqUkAAAAACuHIEJpp3qDNKGqZtAV0k2aRBmr" onLoad={loadReCaptcha()}></div>
                  <br />
                  <button id="form_submit" type="submit" className="btn btn-primary" disabled>Submit</button>
                </form>
            </div>
    );
}

export function MiniContactForm() {
    return (
            <div className={styles.minipage}>
                <p className={styles.filldetails}>Fill out your details below and somebody will be in contact with you very shortly.</p>
                <form method="POST" action="https://api.opendatadsl.com/api/form/Sales">
                    <div className="row">
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" name="firstName" className="form-control" id="firstName" />
                          </div>
                       </div>
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" name="lastName" className="form-control" id="lastName" />
                          </div>
                       </div>
                   </div>
                    <div className="row">
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We&apos;ll never share your email address</div>
                          </div>
                       </div>
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="company" className="form-label">Company</label>
                            <input type="text" name="company" className="form-control" id="company" />
                          </div>
                       </div>
                   </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="message" className="form-control" id="message" rows="6" aria-describedby="messageHelp" />
                    <div id="messageHelp" className="form-text">Enter information about your area of interest, include your telephone number if you would like us to call you.</div>
                  </div>
                  <div id="recaptcha" className="g-recaptcha" data-sitekey="6LczjqUkAAAAACuHIEJpp3qDNKGqZtAV0k2aRBmr" onLoad={loadReCaptcha()}></div>
                  <br />
                  <button id="form_submit" type="submit" className="btn btn-primary" disabled>Submit</button>
                </form>
            </div>
    );
}

export function Webinar(content) {
    return (
            <div className={styles.eventpage}>
                <p className={styles.filldetails}>Fill out your details below to register for this webinar.</p>
                <form method="POST" action="https://api.opendatadsl.com/api/form/Webinar">
                    <div className="row">
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" name="firstName" className="form-control" id="firstName" />
                          </div>
                       </div>
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" name="lastName" className="form-control" id="lastName" />
                          </div>
                       </div>
                   </div>
                    <div className="row">
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We&apos;ll never share your email address</div>
                          </div>
                       </div>
                       <div className="col">
                          <div className="mb-3">
                            <label htmlFor="company" className="form-label">Company</label>
                            <input type="text" name="company" className="form-control" id="company" />
                          </div>
                       </div>
                   </div>
                  <input type="hidden" name="message" id="message" value={content.children} />
                  <div id="recaptcha" className="g-recaptcha" data-sitekey="6LczjqUkAAAAACuHIEJpp3qDNKGqZtAV0k2aRBmr" onLoad={loadReCaptcha()}></div>
                  <br />
                  <button id="form_submit" type="submit" className="btn btn-primary" disabled>Submit</button>
                </form>
            </div>
    );
}
