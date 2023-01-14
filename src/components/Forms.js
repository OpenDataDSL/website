import React from 'react';
import styles from './Forms.module.css';

export function Sales(props) {
    return (
    <div>
        <div class="row">
            <div className={styles.formheader}>
                <div class="col text-center">
                    <div className={styles.formheadertext}>
                        <img src="/img/logo128.png" />
                        <p class="h1">Contact Sales</p>
                        <p class="h6">Our team is here to find the right solution for you, discuss various feature and pricing options, and connect you with the info you need.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.formpage}>
            <form method="POST" action="https://odsl.azurewebsites.net/api/form/sales">
                <div class="row">
                   <div class="col">
                      <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" name="firstName" class="form-control" id="firstName" />
                      </div>
                   </div>
                   <div class="col">
                      <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" name="lastName" class="form-control" id="lastName" />
                      </div>
                   </div>
               </div>
                <div class="row">
                   <div class="col">
                      <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email address</label>
                        <input type="email" name="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We&apos;ll never share your email with anyone else.</div>
                      </div>
                   </div>
                   <div class="col">
                      <div class="mb-3">
                        <label for="company" class="form-label">Company</label>
                        <input type="text" name="company" class="form-control" id="company" />
                      </div>
                   </div>
               </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea name="message" class="form-control" id="message" rows="6" aria-describedby="messageHelp" />
                <div id="messageHelp" class="form-text">Enter information about your area of interest to discuss with the sales team.</div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    );
}
