import React, { useEffect } from 'react'
import {configureAnimations} from '/js/odsl.js';
import styles from './Support.module.css';

export function Support() {
  useEffect(() => {
    configureAnimations();
  }, [])

  return (
	<>
		<Hero />
		<Plans />
        <CTA />
	</>
  );
}

function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.container}>
				<h1 className="scroll-to-display">Support Information</h1>
				<p className="scroll-to-display">This page gives an overview of the method to use to ask questions or get technical and data support.</p>
			</div>
		</div>
	);
}

function Plans() {
	return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2 className="scroll-to-display">The Support Plans</h2>
            
            <div className={styles.support_grid}>
                <div className={styles.support_item}>
                    <h4>Community Support</h4>
					<h5>Community Plan</h5>
                    <hr />
                    <h6>Questions:</h6>
                    <p>Use StackOverflow add the tag <a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL</a></p>
                    <h6>Application Issues:</h6>
                    <p>Email <a href="mailto:support@opendatadsl.com" target="_blank" rel="noopener noreferrer">support@opendatadsl.com</a></p>
                    <h6>All other queries</h6>
                    <p>Email <a href="mailto:support@opendatadsl.com" target="_blank" rel="noopener noreferrer">support@opendatadsl.com</a></p>
                </div>
                <div className={styles.support_item}>
                    <h4>Standard Support</h4>
					<h5>Standard Plan</h5>
                    <hr />
                    <h6>Questions:</h6>
                    <p>Use StackOverflow add the tag <a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL</a></p>
                    <h6>Application Issues:</h6>
                    <p>Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer">Service Desk</a></p>
                    <h6>All other queries</h6>
                    <p>Email <a href="mailto:support@opendatadsl.com" target="_blank" rel="noopener noreferrer">support@opendatadsl.com</a></p>
                </div>
                <div className={styles.support_item}>
                    <h4>London Hours Support</h4>
					<h5>Premium Plan</h5>
                    <hr />
                    <h6>Questions:</h6>
                    <p>Use StackOverflow add the tag <a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL</a></p>
                    <p>OR Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer">Service Desk</a></p>
                    <h6>Application Issues:</h6>
                    <p>Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer">Service Desk</a></p>
                    <h6>Data Issues:</h6>
                    <p>Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer">Service Desk</a></p>
                    <h6>All other queries</h6>
                    <p>Email <a href="mailto:support@opendatadsl.com" target="_blank" rel="noopener noreferrer">support@opendatadsl.com</a></p>
                </div>
                <div className={styles.support_item}>
                    <h4>Enterprise Support</h4>
					<h5>Gold (24/5) and Platinum (24/7) Plan</h5>
                    <hr />
                    <h6>Questions:</h6>
                    <p>Use StackOverflow add the tag <a href="https://stackoverflow.com/questions/tagged/odsl" target="_blank" rel="noopener noreferrer">ODSL</a></p>
                    <p>OR Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer">Service Desk</a></p>
                    <p>OR Call your account manager</p>
                    <h6>Application Issues:</h6>
                    <p>Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer">Service Desk</a></p>
                    <h6>Data Issues:</h6>
                    <p>Log an issue in the <a href="https://opendatadsl.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer">Service Desk</a></p>
                    <h6>All other queries</h6>
                    <p>Email <a href="mailto:support@opendatadsl.com" target="_blank" rel="noopener noreferrer">support@opendatadsl.com</a></p>
                </div>
            </div>
        </div>
    </section>
	);
}

function CTA() {
	return (
    <section className={styles.section}>
        <div className={styles.container} style={{textAlign: "center"}}>
            <h2>Ready to Transform Your Operations?</h2>
            <p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Join energy and commodity professionals who are already leveraging OpenDataDSL and Fusion to work smarter, faster, and more profitably.</p>
            <a href="/SignUp" className={styles.cta_button} style={{background: "#3b82f6", color: "white"}}>Get Started Today</a>
        </div>
    </section>
	);
}