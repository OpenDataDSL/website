import React, { useEffect } from 'react'
import {configureAnimations} from '/js/odsl.js';
import styles from './SignUp.module.css';
import './TabHandling.css';
import { ContactForm } from '/src/components/Forms.js';

export function SignUp() {
  useEffect(() => {
	configureAnimations();
  }, [])

  return (
	<>
		<div className={styles.header}>
			<h1 className="scroll-to-display">Get Started with OpenDataDSL</h1>
			<p className="scroll-to-display">Choose the perfect plan for your energy & commodity trading needs</p>
		</div>

		<div className={styles.container}>
			<Tabs />
			<PlatformTab />
			<Fusion />
			<Enterpise />
		</div>	
	</>
  );
}

function Tabs() {
	return (
		<>
			<div className={styles.tabs}>
                <button className="tab active" onClick={() => switchTab('platform')}>OpenDataDSL Platform</button>
                <button className="tab" onClick={() => switchTab('fusion')}>Fusion AI</button>
                <button className="tab" onClick={() => switchTab('enterprise')}>Enterprise Solutions</button>
			</div>
		</>
	);
}

function PlatformTab() {
	return (
        <div id="platform" className="tab_content active">
            <div className={styles.pricing_grid}>
                <div className={styles.pricing_card}>
                    <div className={styles.plan_name}>Starter</div>
                    <div className={styles.plan_price}>Free</div>
                    <div className={styles.plan_description}>Perfect for exploring OpenDataDSL capabilities</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Community version</li>
                        <li><span className={styles.check_icon}>✓</span> ODSL scripting environment</li>
                        <li><span className={styles.check_icon}>✓</span> Community support</li>
                        <li><span className={styles.check_icon}>✓</span> Access local MongoDB</li>
                        <li><span className={styles.check_icon}>✓</span> Access MongoDB Atlas</li>
                    </ul>
                    <a href="./plans/community"><button className={styles.signup_button}>More Info</button></a>
                </div>

                <div className={`${styles.pricing_card} ${styles.featured}`}>
                    <div className={styles.featured_badge}>POPULAR</div>
                    <div className={styles.plan_name}>Professional</div>
                    <div className={styles.plan_price}>€60<span>/user/month</span></div>
                    <div className={styles.plan_description}>For professional traders and analysts</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Access all Public data</li>
                        <li><span className={styles.check_icon}>✓</span> Bring Your Own License (BYOL) data</li>
                        <li><span className={styles.check_icon}>✓</span> Advanced curve building</li>
                        <li><span className={styles.check_icon}>✓</span> Web Portal</li>
                        <li><span className={styles.check_icon}>✓</span> Excel Add-in</li>
                        <li><span className={styles.check_icon}>✓</span> Priority support</li>
                        <li><span className={styles.check_icon}>✓</span> 50GB data storage</li>
                        <li><span className={styles.check_icon}>✓</span> Custom workflows</li>
                    </ul>
                    <a href="/POC"><button className={styles.signup_button}>Free POC</button></a>
                </div>

                <div className={styles.pricing_card}>
                    <div className={styles.plan_name}>Business</div>
                    <div className={styles.plan_price}><span>from</span>€3.5k<span>/month</span></div>
                    <div className={styles.plan_description}>For teams and trading desks</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Everything in Professional</li>
                        <li><span className={styles.check_icon}>✓</span> Multi-user collaboration</li>
                        <li><span className={styles.check_icon}>✓</span> Advanced analytics</li>
                        <li><span className={styles.check_icon}>✓</span> Message Queues</li>
                        <li><span className={styles.check_icon}>✓</span> Managed Services</li>
                        <li><span className={styles.check_icon}>✓</span> Dedicated support</li>
                        <li><span className={styles.check_icon}>✓</span> 500GB data storage</li>
                        <li><span className={styles.check_icon}>✓</span> SSO integration</li>
                    </ul>
                    <a href="/POC"><button className={styles.signup_button}>Free POC</button></a>
                </div>
            </div>
        </div>
	);
}

function Fusion() {
	return (
        <div id="fusion" className="tab_content">
            <h2 className={styles.desc}>Fusion AI is a premium feature that can be added to <b>Professional</b>, <b>Business</b> or <b>Enterprise</b> OpenDataDSL platform plan</h2>
            <div className={styles.pricing_grid}>
                <div className={styles.pricing_card}>
                    <div className={styles.plan_name}>Fusion PAYG</div>
                    <div className={styles.plan_price}>PAYG<span> (Pay-As-You-Go)</span></div>
                    <div className={styles.plan_description}>AI-powered assistance for your daily tasks</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Access to 6 specialized AI assistants</li>
                        <li><span className={styles.check_icon}>✓</span> Top up as needed</li>
                        <li><span className={styles.check_icon}>✓</span> Custom Assistants</li>
                        <li><span className={styles.check_icon}>✓</span> AI Agents</li>
                        <li><span className={styles.check_icon}>✓</span> Custom Tools</li>
                        <li><span className={styles.check_icon}>✓</span> Standard support</li>
                        <li><span className={styles.check_icon}>✓</span> Web interface access</li>
                    </ul>
                    <a href="/POC"><button className={styles.signup_button}>Free POC</button></a>
                </div>

                <div className={`${styles.pricing_card} ${styles.featured}`}>
                    <div className={styles.featured_badge}>&nbsp;&nbsp;&nbsp;RECOMMENDED</div>
                    <div className={styles.plan_name}>Fusion Pro</div>
                    <div className={styles.plan_price}><span>from</span>€250<span>/month</span></div>
                    <div className={styles.plan_description}>Full AI capabilities for serious traders</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Everything in Essentials</li>
                        <li><span className={styles.check_icon}>✓</span> 100M input tokens/month</li>
                        <li><span className={styles.check_icon}>✓</span> 5M output tokens/month</li>
                        <li><span className={styles.check_icon}>✓</span> Top up as needed</li>
                        <li><span className={styles.check_icon}>✓</span> Microsoft Teams integration</li>
                        <li><span className={styles.check_icon}>✓</span> Priority AI support</li>
                    </ul>
                    <a href="/POC"><button className={styles.signup_button}>Free POC</button></a>
                </div>

                <div className={styles.pricing_card}>
                    <div className={styles.plan_name}>Fusion Enterprise</div>
                    <div className={styles.plan_price}>€50<span> BYO API Key</span></div>
                    <div className={styles.plan_description}>Unlimited AI power for your organization</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Everything in Pro</li>
                        <li><span className={styles.check_icon}>✓</span> Use your own Anthropic API key</li>
                    </ul>
                    <a href="/POC"><button className={styles.signup_button}>Free POC</button></a>
                </div>
            </div>

            <div className={styles.info_box}>
                <h3>What Makes Fusion Different?</h3>
                <p>Fusion isn't just another AI chatbot. It's a team of six specialized assistants trained specifically for energy and commodity trading. From analyzing forward curves to generating ODSL code, Fusion understands your domain and speaks your language.</p>
            </div>
        </div>
	);
}

function Enterpise() {
	return (
        <div id="enterprise" className="tab_content">
                <ContactForm />

            <div className={styles.benefits}>
                <h3>Enterprise Benefits</h3>
                <div className={styles.benefits_grid}>
                    <div className={styles.benefit_item}>
                        <h4>Custom Deployment</h4>
                        <p>Use your own MongoDB Atlas server cluster</p>
                    </div>
                    <div className={styles.benefit_item}>
                        <h4>Security & Compliance</h4>
                        <p>Enterprise-grade security with full compliance support</p>
                    </div>
                    <div className={styles.benefit_item}>
                        <h4>Dedicated Support</h4>
                        <p>24/7 support team with SLA guarantees</p>
                    </div>
                    <div className={styles.benefit_item}>
                        <h4>Custom Integration</h4>
                        <p>Seamless integration with your existing systems</p>
                    </div>
                    <div className={styles.benefit_item}>
                        <h4>Unlimited Users</h4>
                        <p>No user-based pricing</p>
                    </div>
                </div>
            </div>
        </div>
	);
}


