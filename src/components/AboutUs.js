import React, { useEffect } from 'react'
import {configureAnimations} from '/js/odsl.js';
import styles from './AboutUs.module.css';

export function AboutUs() {
  useEffect(() => {
    configureAnimations();
  }, [])

  return (
	<>
		<Hero />
		<OurStory />
		<Different />
		<Expertise />
		<Fusion />
		<Values />
		<Team />
		<CTA />
	</>
  );
}

function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.container}>
				<h1 className="scroll-to-display">Transforming Energy & Commodity Trading</h1>
				<p className="scroll-to-display">We're building the future of data management and AI-powered intelligence for energy and commodity professionals worldwide</p>
			</div>
		</div>
	);
}

function OurStory() {
	return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2>Our Story</h2>
            <p>Born from decades of experience in energy and commodity trading, OpenDataDSL emerged from a simple observation: the industry needed better tools.</p>
            
            <div className={styles.story_content}>
                <div className={styles.story_text}>
                    <h3>The Challenge</h3>
                    <p>Energy and commodity traders were drowning in data. Forward curves, market prices, weather patterns, regulatory requirements—managing it all required expensive systems, complex integrations, and countless hours of manual work.</p>
                    <p>Traditional solutions were rigid, costly, and built for a different era. Teams needed something better.</p>
                </div>
                <div className={styles.story_text}>
                    <h3>Our Solution</h3>
                    <p>We created OpenDataDSL, a specialized platform designed specifically for energy and commodity professionals. Our domain-specific language makes complex data operations simple, while our flexible architecture adapts to how you work.</p>
                    <p>Now, we're taking the next step with Fusion—bringing AI-powered intelligence directly into your workflow.</p>
                </div>
            </div>
        </div>
    </section>
	);
}

function Different() {
	return (
    <section className={`${styles.section} ${styles.section_alt}`}>
        <div className={styles.container}>
            <h2>Why We're Different</h2>
            <div className={styles.stats_grid}>
                <div className={styles.stat_card}>
                    <div className={styles.stat_number}>15+</div>
                    <div className={styles.stat_label}>Years in Energy Trading</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_number}>100%</div>
                    <div className={styles.stat_label}>Industry Focused</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_number}>24/7</div>
                    <div className={styles.stat_label}>Data Processing</div>
                </div>
                <div className={styles.stat_card}>
                    <div className={styles.stat_number}>6</div>
                    <div className={styles.stat_label}>Specialized AI Assistants</div>
                </div>
            </div>
        </div>
    </section>
	);
}

function Expertise() {
	return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2>Our Expertise</h2>
            <p>Deep domain knowledge meets cutting-edge technology</p>
            
            <div className={styles.expertise_grid}>
                <div className={styles.expertise_item}>
                    <h4>Energy & Commodity Trading</h4>
                    <p>We understand forward curves, market structures, and trading operations because we've lived them. Our platform is built by traders, for traders.</p>
                </div>
                <div className={styles.expertise_item}>
                    <h4>Data Management</h4>
                    <p>From market data to proprietary calculations, we handle the full data lifecycle with tools designed for commodity-specific challenges.</p>
                </div>
                <div className={styles.expertise_item}>
                    <h4>Regulatory Compliance</h4>
                    <p>REMIT, ETRM, and regulatory reporting requirements are built into our DNA. Stay compliant without the complexity.</p>
                </div>
                <div className={styles.expertise_item}>
                    <h4>API & Integration</h4>
                    <p>Connect to ICE, CME, and any data source you need. Our integration capabilities scale from simple connections to enterprise architectures.</p>
                </div>
                <div className={styles.expertise_item}>
                    <h4>Analytics & Modeling</h4>
                    <p>Sophisticated curve building, scenario analysis, and risk calculations—all powered by our domain-specific language.</p>
                </div>
                <div className={styles.expertise_item}>
                    <h4>AI & Automation</h4>
                    <p>With Fusion, we're bringing specialized AI assistants that understand your data, your workflows, and your industry.</p>
                </div>
            </div>
        </div>
    </section>
	);
}

function Fusion() {
	return (
    <div className={styles.fusion_highlight}>
        <div className={styles.container}>
            <h2>Introducing Fusion</h2>
            <p>The next evolution in commodity trading intelligence. Six specialized AI assistants working together to transform how you interact with data, build curves, analyze markets, and automate operations.</p>
            <p>Fusion isn't just another AI tool—it's your expert team, available 24/7, fluent in ODSL, and trained specifically for energy and commodity professionals.</p>
            <a href="/features/fusion" className={styles.cta_button}>Explore Fusion</a>
        </div>
    </div>
	);
}

function Values() {
	return (
    <section className={`${styles.section} ${styles.section_alt}`}>
        <div className={styles.container}>
            <h2>Our Values</h2>
            <div className={styles.values_grid}>
                <div className={styles.value_card}>
                    <h3>Industry Focus</h3>
                    <p>We don't build generic solutions. Every feature, every tool, every AI assistant is designed specifically for energy and commodity professionals.</p>
                </div>
                <div className={styles.value_card}>
                    <h3>Innovation</h3>
                    <p>From creating ODSL to launching Fusion, we're constantly pushing boundaries to give you competitive advantages in the market.</p>
                </div>
                <div className={styles.value_card}>
                    <h3>Partnership</h3>
                    <p>Your success is our success. We work alongside you to understand challenges, refine solutions, and deliver real ROI.</p>
                </div>
                <div className={styles.value_card}>
                    <h3>Expertise</h3>
                    <p>Deep knowledge of trading operations, data management, and regulatory requirements informs everything we build.</p>
                </div>
            </div>
        </div>
    </section>
	);
}

function Team() {
	return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2 className="scroll-to-display">The Team</h2>
            <p>Meet the team of experts at OpenDataDSL</p>
            
            <div className={styles.team_grid}>
                <div className={styles.team_item}>
					<img className={styles.team_icon} src='/img/authors/ColinHartley.jpg' />
                    <h4>Colin Hartley</h4>
					<h5>Founder and CEO</h5>
					<a href="https://www.linkedin.com/pulse/behind-data-7-leading-vision-building-purpose-from-idea-vieira-hu1gf/?trackingId=7UwaqEfQR5OlPt70BiooYw%3D%3D" ><h5>Read his interview in the Behind the Data series</h5></a>
                    <p>Colin has been building data management systems since the 1990's and has worked for various prestigious companies such as B.P. and Deutsche Bank. Colin was the founder of DataGenic in 2002 who specialised in Energy and Commodity data aggregation and data management systems. Colin designed and built their award-winning software and was CTO until the company was sold to Enverus in 2017.</p>
					<p>Using experience from many years of building data management systems used by some of the world's largest energy and commodity companies, Colin has designed and built OpenDataDSL and Fusion AI.</p>
                </div>
                <div className={styles.team_item}>
					<img className={styles.team_icon} src='/img/authors/Ram.jpg' />
                    <h4>Kodandaramu Rangaiah</h4>
					<h5>Founder and COO</h5>
					<a href="https://www.linkedin.com/pulse/behind-data-meet-people-driving-innovation-odsl-renato-vieira-zaktf/?trackingId=7UwaqEfQR5OlPt70BiooYw%3D%3D" ><h5>Read his interview in the Behind the Data series</h5></a>
                    <p>Kodandaramu (Ram) Rangaiah has been working in IT Industry for the last 20 years based in Bangalore. Ram started DataGenic India in 2006 and was responsible for the management of all operations in the Bangalore office and was the primary developer for the DataGenic data management systems.</p>
					<p>Ram worked previously in Sonata Software, Deutsche Bank and Lehman Brothers which provided exposure to the latest technologies and business domain knowledge.</p>
                </div>
                <div className={styles.team_item}>
					<img className={styles.team_icon} src='/img/authors/SimonJackson.png' />
                    <h4>Simon Jackson</h4>
					<h5>Operations Director</h5>
					<a href="https://www.linkedin.com/pulse/behind-data-conversation-simon-jackson-operations-director-vieira-f7vgf/?trackingId=7UwaqEfQR5OlPt70BiooYw%3D%3D" ><h5>Read his interview in the Behind the Data series</h5></a>
                    <p>Simon has been working in data management since 1987. He started working at a leading back-office data provider 1 week before Black Monday, which taught him that it is vital you have confidence in the data you rely on even when market conditions mean the data itself appears intuitively wrong. After working in data content creation in the finance sector, his passion for solutions and customer needs led him into integration support and operations. For the last few decades Simon has worked with some of the leading enterprise data solutions providers – building and leading teams, functions and divisions – always driving up client expectations for what a data management solution should provide, but just as importantly – delivering on them.</p>
					<p>He has the utmost confidence he will do it again with OpenDataDSL allowing our clients to truly benefit from digitalisation and open standards - enabling the use of data anywhere and everywhere, easily, securely, compliantly and reliably.</p>
                </div>
                <div className={styles.team_item}>
					<img className={styles.team_icon} src='/img/authors/AnjaVinzelberg.jpg' />
                    <h4>Dr. Anja Vinzelberg</h4>
					<h5>Head of Data Analytics</h5>
					<a href="https://www.linkedin.com/pulse/behind-data-conversation-dr-anja-vinzelberg-head-analytics-vieira-bl9ff/?trackingId=7UwaqEfQR5OlPt70BiooYw%3D%3D" ><h5>Read her interview in the Behind the Data series</h5></a>
                    <p>Anja enriches the team with many years of industry experience as a data consumer.</p>
					<p>After studying mathematics and economics she worked for Reuters risk management solutions working with customers in the financial banking industry. This was followed by working in the risk management team of a family-owned oil company and more recently working in the data management team from DataGenic.</p>
					<p>At DataGenic she utilised her business knowledge and became the SME for forward curves for any commodity class within customer projects in Europe and the United States.</p>
					<p>Anja now utilises her almost 20 years of in-depth expertise in data management solutions and data science and is successfully bridging the technical team with the business users.</p>
                </div>
                <div className={styles.team_item}>
					<img className={styles.team_icon} src='/img/authors/RenatoVieira.jpg' />
                    <h4>Renato Vieira</h4>
					<h5>Business Development Manager</h5>
					<a href="https://www.linkedin.com/pulse/behind-data-6-connecting-vision-value-conversation-renato-vieira-dw0ef/?trackingId=7UwaqEfQR5OlPt70BiooYw%3D%3D" ><h5>Read his interview in the Behind the Data series</h5></a>
                    <p>Renato is a seasoned Sales Professional, with over 20 years of experience in the Energy Commodities Data Industry working at various software companies in the Energy Sector.</p>
					<p>His previous experience at DataGenic, along with his language skills made is tenure a success by adding logos to the client list and building client relationships all across Europe.</p>
					<p>He now joins OpenData DSL to promote the next generation of Market Data Management Software based on a true Saas Platform that goes beyond being simply a data feed and a curve builder.</p>
                </div>
                <div className={styles.team_item}>
					<img className={styles.team_icon} src='/img/authors/SunilRamesh.jpg' />
                    <h4>Sunil Ramesh</h4>
					<h5>Head of User Experience</h5>
					<a href="https://www.linkedin.com/pulse/behind-data-5-architecting-innovation-conversation-sunil-vieira-ieokf/?trackingId=7UwaqEfQR5OlPt70BiooYw%3D%3D" ><h5>Read his interview in the Behind the Data series</h5></a>
					<p>Sunil has been working in the IT industry for the last 20 years for companies such as Walter & Walter Intl. (Mauritius), DataGenic and Enverus. Sunil primarily works on front-end UI/UX development and has years of experience developing full-fledged products and e-commerce sites.</p>
					<p>Sunil has developed products such as i-TexLite (textile industry software), Tax-i (taxation software for Mauritius govt.) and has worked on various e-commerce sites for French and German clients. For DataGenic he built the entire Genic DataManager front-end, exposing a powerful extensibility framework for clients to integrate custom extensions and plugins.</p>
					<p>Sunil now heads up the UX team working on the front-ends for the web, excel and mobile platforms for OpenDataDSL.</p>
                </div>
                <div className={styles.team_item}>
					<img className={styles.team_icon} src='/img/authors/ShubhaSwaroop.png' />
                    <h4>Shubha Swaroop</h4>
					<h5>Head of Data Operations</h5>
					<a href="https://www.linkedin.com/pulse/behind-data-4-engine-room-trusted-renato-vieira-qrjwf/?trackingId=7UwaqEfQR5OlPt70BiooYw%3D%3D" ><h5>Read her interview in the Behind the Data series</h5></a>
					<p>Shubha is a hands-on Finance, Energy and Commodity data specialist, experienced in data solutions and client services for over 13 years. Her journey started in DataGenic where she worked with data vendors and built out the DataGenic DataHub and the operational data support team.</p>
					<p>Her expertise is in data quality compliance, data analysis and converting business requirements into functional specifications.</p>
					<p>Shubha now heads up the Data Operations team building out the OpenDataDSL public data repository and helping clients to build their proprietary data repository.</p>
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