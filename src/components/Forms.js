import React from 'react';
import styles from './Forms.module.css';

export function Sales(props) {
    return (
    <div>
        <div className="row">
            <div className={styles.formheader}>
                <div className="col text-center">
                    <div className={styles.formheadertext}>
                        <img src="/img/logo128.png" />
                        <p className="h1">Contact Sales</p>
                        <p className="h6">Our team is here to find the right solution for you, discuss various feature and pricing options, and connect you with the info you need.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.formpage}>
            <form method="POST" action="https://odsl.azurewebsites.net/api/form/sales">
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
                <div id="messageHelp" className="form-text">Enter information about your area of interest to discuss with the sales team, include your telephone number if you would like us to call you.</div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    );
}
