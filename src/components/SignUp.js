import React, { useEffect } from 'react'
import {configureAnimations} from '/js/odsl.js';
import styles from './SignUp.module.css';
import './TabHandling.css';

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
                        <li><span className={styles.check_icon}>✓</span> Access to public data sets</li>
                        <li><span className={styles.check_icon}>✓</span> ODSL scripting environment</li>
                        <li><span className={styles.check_icon}>✓</span> Community support</li>
                        <li><span className={styles.check_icon}>✓</span> Basic API access</li>
                        <li><span className={styles.check_icon}>✓</span> 1GB data storage</li>
                    </ul>
                    <button className={`${styles.signup_button} ${styles.secondary}`} onClick={(e) => showSignupForm('Starter')}>Get Started Free</button>
                </div>

                <div className={`${styles.pricing_card} ${styles.featured}`}>
                    <div className={styles.featured_badge}>POPULAR</div>
                    <div className={styles.plan_name}>Professional</div>
                    <div className={styles.plan_price}>€60<span>/user/month</span></div>
                    <div className={styles.plan_description}>For professional traders and analysts</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Everything in Starter</li>
                        <li><span className={styles.check_icon}>✓</span> Bring Your Own License (BYOL) data</li>
                        <li><span className={styles.check_icon}>✓</span> Advanced curve building</li>
                        <li><span className={styles.check_icon}>✓</span> Priority support</li>
                        <li><span className={styles.check_icon}>✓</span> 50GB data storage</li>
                        <li><span className={styles.check_icon}>✓</span> Custom workflows</li>
                    </ul>
                    <button className={styles.signup_button} onClick={(e) => showSignupForm('Professional')}>Start 14-Day Trial</button>
                </div>

                <div className={styles.pricing_card}>
                    <div className={styles.plan_name}>Business</div>
                    <div className={styles.plan_price}>€900<span>/month</span></div>
                    <div className={styles.plan_description}>For teams and trading desks</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Everything in Professional</li>
                        <li><span className={styles.check_icon}>✓</span> Multi-user collaboration</li>
                        <li><span className={styles.check_icon}>✓</span> Advanced analytics</li>
                        <li><span className={styles.check_icon}>✓</span> Dedicated support</li>
                        <li><span className={styles.check_icon}>✓</span> 500GB data storage</li>
                        <li><span className={styles.check_icon}>✓</span> SSO integration</li>
                    </ul>
                    <button className={styles.signup_button} onClick={(e) => showSignupForm('Business')}>Start 14-Day Trial</button>
                </div>
            </div>
        </div>
	);
}

function Fusion() {
	return (
        <div id="fusion" className="tab_content">
            <div className={styles.pricing_grid}>
                <div className={styles.pricing_card}>
                    <div className={styles.plan_name}>Fusion Essentials</div>
                    <div className={styles.plan_price}>€100<span>/month</span></div>
                    <div className={styles.plan_description}>AI-powered assistance for your daily tasks</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Access to 6 specialized AI assistants</li>
                        <li><span className={styles.check_icon}>✓</span> 100,000 tokens/month</li>
                        <li><span className={styles.check_icon}>✓</span> Basic ODSL code generation</li>
                        <li><span className={styles.check_icon}>✓</span> Standard support</li>
                        <li><span className={styles.check_icon}>✓</span> Web interface access</li>
                    </ul>
                    <button className={`${styles.signup_button} ${styles.secondary}`} onClick={(e) => showSignupForm('Fusion Essentials')}>Start Free Trial</button>
                </div>

                <div className={`${styles.pricing_card} ${styles.featured}`}>
                    <div className={styles.featured_badge}>&nbsp;&nbsp;&nbsp;RECOMMENDED</div>
                    <div className={styles.plan_name}>Fusion Pro</div>
                    <div className={styles.plan_price}>€400<span>/month</span></div>
                    <div className={styles.plan_description}>Full AI capabilities for serious traders</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Everything in Essentials</li>
                        <li><span className={styles.check_icon}>✓</span> 500,000 tokens/month</li>
                        <li><span className={styles.check_icon}>✓</span> Advanced code generation & debugging</li>
                        <li><span className={styles.check_icon}>✓</span> Curve analysis & optimization</li>
                        <li><span className={styles.check_icon}>✓</span> Microsoft Teams integration</li>
                        <li><span className={styles.check_icon}>✓</span> Priority AI support</li>
                        <li><span className={styles.check_icon}>✓</span> Custom assistant training</li>
                    </ul>
                    <button className={styles.signup_button} onClick={() => showSignupForm('Fusion Pro')}>Start Free Trial</button>
                </div>

                <div className={styles.pricing_card}>
                    <div className={styles.plan_name}>Fusion Enterprise</div>
                    <div className={styles.plan_price}>Custom</div>
                    <div className={styles.plan_description}>Unlimited AI power for your organization</div>
                    <ul className={styles.features_list}>
                        <li><span className={styles.check_icon}>✓</span> Everything in Pro</li>
                        <li><span className={styles.check_icon}>✓</span> Unlimited tokens</li>
                        <li><span className={styles.check_icon}>✓</span> Dedicated AI infrastructure</li>
                        <li><span className={styles.check_icon}>✓</span> Custom assistant development</li>
                        <li><span className={styles.check_icon}>✓</span> API access for automation</li>
                        <li><span className={styles.check_icon}>✓</span> 24/7 premium support</li>
                        <li><span className={styles.check_icon}>✓</span> SLA guarantees</li>
                    </ul>
                    <button className={styles.signup_button} onClick={() => showSignupForm('Fusion Enterprise')}>Contact Sales</button>
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
            <div className={styles.form_section}>
                <h2>Enterprise Solutions</h2>
                <p style={{textAlign: "center", color: "#64748b", marginBottom: "30px"}}>
                    Get a custom solution tailored to your organization's unique needs
                </p>

                <form id="enterpriseForm">
                    <div className={styles.form_group}>
                        <label>Full Name *</label>
                        <input type="text" required placeholder="John Smith" />
                    </div>
                    <div className={styles.form_group}>
                        <label>Company Email *</label>
                        <input type="email" required placeholder="john.smith@company.com" />
                    </div>

                    <div className={styles.form_group}>
                        <label>Company Name *</label>
                        <input type="text" required placeholder="Your Company" />
                    </div>

                    <div className={styles.form_group}>
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+44 20 1234 5678" />
                    </div>

                    <div className={styles.form_group}>
                        <label>Company Size *</label>
                        <select required>
                            <option value="">Select size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="500+">500+ employees</option>
                        </select>
                    </div>

                    <div className={styles.form_group}>
                        <label>Primary Use Case *</label>
                        <select required>
                            <option value="">Select use case</option>
                            <option value="energy-trading">Energy Trading</option>
                            <option value="commodity-trading">Commodity Trading</option>
                            <option value="risk-management">Risk Management</option>
                            <option value="data-analytics">Data Analytics</option>
                            <option value="portfolio-management">Portfolio Management</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={styles.form_group}>
                        <label>Tell us about your requirements</label>
                        <textarea placeholder="What are you looking to achieve? What challenges are you facing?"></textarea>
                    </div>

                    <div className={`{styles.form_group} ${styles.checkbox_group}`}>
                        <input type="checkbox" id="agree" required />
                        <label htmlFor="agree">I agree to be contacted by OpenDataDSL regarding this inquiry and understand I can opt out at any time.</label>
                    </div>

                    <button type="submit" className={styles.submit_button}>Request Consultation</button>
                </form>
            </div>

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


