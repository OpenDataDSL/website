import clsx from 'clsx';



const BenefitList = [
    {
        id: 1,
        title: 'Data Management',
        jpg: require('../../static/img/icons/mdm.png').default,
        text: 'Transform market data from a fragmented operational burden into a unified strategic foundation.',
        link: "data-management",
        slogan: "Your market data, unified and intelligent"
    },
    {
        id: 2,
        title: 'Data Catalogue',
        jpg: require('../../static/img/icons/catalogue.png').default,
        text: 'Transform data acquisition from weeks of vendor negotiations and integration work into immediate access.',
        link: "data-catalogue",
        slogan: "The complete energy pricing data hub"
    },
    {
        id: 19,
        title: 'Data Loaders',
        text: 'Load broker files, exchange workbooks, APIs and web page tables step by step on screen, and run them on a schedule, with no code.',
        link: "data-loaders",
        slogan: "Load any file or API into the platform, without writing a script"
    },
    {
        id: 13,
        title: 'Validation',
        jpg: require('../../static/img/icons/validation.png').default,
        text: 'Check every curve and timeseries as it arrives, keep a record of every data point, and only send on the data you can trust.',
        link: "validation",
        slogan: "Trust every curve and timeseries before anyone uses it"
    },
    {
        id: 3,
        title: 'Smart Curves',
        jpg: require('../../static/img/icons/curve.png').default,
        text: 'Turn forward curve construction into intelligent, automated infrastructure using AI.',
        link: "smart-curves",
        slogan: "Create with AI, build with precision"
    },
    {
        id: 12,
        title: 'Composer',
        jpg: require('../../static/img/icons/composer.png').default,
        text: 'Line up curves and timeseries side by side, calculate spreads and margins, and chart them, rebuilt every time the data changes.',
        link: "composer",
        slogan: "Your market views, built in minutes and kept up to date"
    },
    {
        id: 4,
        title: 'Fusion AI',
        jpg: require('../../static/img/icons/fusion.png').default,
        text: 'AI built into every workflow, helping your business respond faster, work smarter, and scale effortlessly.',
        link: "fusion",
        slogan: "Your AI expert for energy professionals"
    },
    {
        id: 5,
        title: 'AI Assistants',
        jpg: require('../../static/img/icons/assistant.png').default,
        text: 'AI Assistants bring domain-specific knowledge by answering questions and generating insights.',
        link: "ai-assistants",
        slogan: "Expert assistance, smarter decisions"
    },
    {
        id: 6,
        title: 'AI Agents',
        jpg: require('../../static/img/icons/agent.png').default,
        text: 'Transform operations from manual, time-consuming, error-prone processes into intelligent, autonomous workflows.',
        link: "ai-agents",
        slogan: "Your 24/7 energy operations team"
    },
    {
        id: 11,
        title: 'AI Playbooks',
        jpg: require('../../static/img/icons/playbook.png').default,
        text: 'Write a job down once in plain language. Fusion runs it step by step, checks its own work, and asks before anything changes.',
        link: "ai-playbooks",
        slogan: "Your best process, run the same way every time"
    },
    {
        id: 7,
        title: 'Custom Tools',
        jpg: require('../../static/img/icons/tools.png').default,
        text: 'Transform spreadsheets and siloed expertise into enterprise-grade solutions that scale your unique market advantage.',
        link: "custom-tools",
        slogan: "Your workflows, your tools, your edge"
    },
    {
        id: 8,
        title: 'ODSL',
        jpg: require('../../static/img/icons/odsl.png').default,
        text: 'Empower business users to code with the 4GL language purpose-built for energy professionals.',
        link: "odsl-code",
        slogan: "Purpose-built for energy professionals"
    },
    {
        id: 9,
        title: 'Data Reconciliation',
        jpg: require('../../static/img/icons/reconcile.png').default,
        text: 'Transform reconciliation from manual, time-consuming, error-prone processes into intelligent, autonomous workflows.',
        link: "data-reconciliation",
        slogan: "Automated Comparison Analysis"
    },
    {
        id: 10,
        title: 'Cloud Connect',
        jpg: require('../../static/img/icons/cloud-connect.png').default,
        text: 'Access your OpenDataDSL platform data directly in Databricks, Spark, pandas, and any analytics tool you already use — without copying, exporting, or waiting.',
        link: "cloud-connect",
        slogan: "Your data, in your cloud, in your tools"
    },
    {
        id: 14,
        title: 'Integration',
        text: 'Send curves and timeseries to ETRMs, risk engines and data lakes on a schedule, with a daily report of what reached each system.',
        link: "integration",
        slogan: "Every curve, every system, every morning, with proof"
    },
    {
        id: 15,
        title: 'Workflows',
        text: 'Draw the steps that download, load, check and build your data as a diagram, and run them as scheduled processes.',
        link: "workflows",
        slogan: "Draw your data processes, run them on a schedule"
    },
    {
        id: 16,
        title: 'Promotion',
        text: 'Move what you build and test into production, see every change before you push, and undo any deployment.',
        link: "promotion",
        slogan: "From test to production, reviewed, recorded and reversible"
    },
    {
        id: 17,
        title: 'Alerts',
        text: 'Every problem with your data in one place, tracked like a support ticket until it is solved.',
        link: "alerts",
        slogan: "Every problem with your data, in one place until it is solved"
    },
    {
        id: 18,
        title: 'Extensions',
        text: 'Ready-made apps for the portal and Excel, and Fusion AI to build your own on the data you already have.',
        link: "extensions",
        slogan: "Ready-made apps for the portal and Excel, and the tools to build your own"
    }
]

const Articles = [
  {
    type: "Blog",
    date: "Nov 07, 2026",
    title: "Blog: Data Loaders",
    link: "./blog/data-loaders",
    image: "/img/blog/data-loaders-overview.png",
    text: "Any file or API, into the platform, without writing a script: build a loader on screen, map its columns with Fusion AI's help, and run it on a schedule."
  },
  {
    type: "Blog",
    date: "Nov 05, 2026",
    title: "Blog: Integration",
    link: "./blog/integration",
    image: "/img/blog/integration-hero.png",
    text: "Every curve, every system, every morning, with proof: send validated data to ETRMs, risk engines and data lakes on a schedule."
  },
  {
    type: "Blog",
    date: "Oct 15, 2026",
    title: "Blog: Validation",
    link: "./blog/validation",
    image: "/img/blog/validation-overview.png",
    text: "Trust every curve and timeseries before anyone uses it: checks suggested from your own data, a record for every data point, and only validated data downstream."
  },
  {
    type: "News",
    date: "Oct 15, 2026",
    title: "New Feature: Validation",
    link: "./news/validation",
    image: "/img/blog/validation-dashboard.png",
    text: "Automatic checks on every curve and timeseries, a record of every data point, and automations that only send on data you can trust."
  },
  {
    type: "Blog",
    date: "Oct 15, 2026",
    title: "Blog: Composer",
    link: "./blog/composer",
    image: "/img/blog/composer-overview.png",
    text: "Your market views, built in minutes and kept up to date: spreads, margins and converted curves without spreadsheets."
  },
  {
    type: "News",
    date: "Oct 15, 2026",
    title: "New Feature: Composer",
    link: "./news/composer",
    image: "/img/blog/composer-gallery.png",
    text: "Analytic worksheets of curves and timeseries: line them up, calculate and chart them, rebuilt automatically when the data changes."
  },
  {
    type: "Blog",
    date: "Oct 08, 2026",
    title: "Blog: Fusion AI Playbooks",
    link: "./blog/fusion-ai-playbooks",
    image: "/img/blog/fusion-playbooks-overview.png",
    text: "Your best process, run the same way every time: how playbooks make AI repeatable, checked and governed."
  },
  {
    type: "News",
    date: "Oct 04, 2026",
    title: "New Feature: Fusion AI Playbooks",
    link: "./news/ai-playbooks",
    text: "Repeatable, governed AI workflows: Fusion runs your process step by step, checks its work and asks before anything changes."
  },
  {
    type: "News",
    date: "Apr 21, 2026",
    title: "New Feature: Cloud Connect",
    link: "./news/cloud-connect",
    text: "Cloud Connect allows seamless integration with Databricks, Spark, and Azure Synapse."
  },
  {
    type: "Event",
    date: "Feb 13, 2026",
    title: "E-world 2026 recap",
    link: "./events/e-world-recap-2026",
    text: "The team visited the E-World conference in Essen, Germany - here is what we learned."
  },
  {
    type: "Blog",
    date: "Jan 01, 2026",
    title: "Blog: Fusion AI, Energy Intelligence",
    link: "./blog/fusion",
    text: "Fusion AI brings expert intelligence to every aspect of energy and commodity trading companies."
  },
  {
    type: "Event",
    date: "Jul 15, 2025",
    title: "Energy Trading Week",
    link: "./events/etw-2025",
    text: "ETW Europe 2025 - Come and visit us at ETW Europe on stand 39"
  },
  {
    type: "Blog",
    date: "Jul 09, 2025",
    title: "Forward Curve Insights - Time Spreads",
    link: "./blog/time_spread",
    text: "Decoding Forward Curves: Building Market Structure Intelligence with OpenDataDSL."
  },
  {
    type: "News",
    date: "Jun 06, 2025",
    title: "New Feature: OpenDataDSL Application Extensions",
    link: "./news/extensions",
    text: "Clients, partners and OpenDataDSL can now easily add bespoke functionality into the web portal using application extensions."
  },
  {
    type: "News",
    date: "Jan 27, 2025",
    title: "Data Monitoring gives unprecedented transparency",
    link: "./news/dataset-monitoring",
    text: "OpenDataDSL introduces the latest new feature to the SaaS platform - Data Monitoring - What is it and how can it help you?"
  },
  {
    type: "News",
    date: "Sep 2, 2024",
    title: "OpenDataDSL partners with Time2Market",
    link: "./news/partner-program",
    text: "OpenDataDSL welcomes their latest partner; Time2Market, the leading provider of market access and trading support services."
  },
  {
    type: "News",
    date: "May 28, 2024",
    title: "PZEM Energy Company chooses OpenDataDSL",
    link: "./news/pzem-chooses-opendatadsl",
    text: "OpenDataDSL announced today that PZEM Energy Company has chosen OpenDataDSL for their SaaS Data Management Platform."
  },
  {
    type: "News",
    date: "May 02, 2024",
    title: "OpenDataDSL partners with Previse Systems",
    link: "./news/previse-partnership",
    text: "OpenDataDSL welcomes their first partner; Previse Systems, a leading provider of ETRM software."
  }
]


export function AIHero() {
  return (
    <section className="home-hero">
      <div className="container home-hero__inner">
        <div className="home-hero__text">
          <p className="eyebrow">Energy Intelligence Platform</p>
          <h1>Market data you can trust, ready for every team and every system</h1>
          <p className="home-hero__lead">
            OpenDataDSL collects, validates and manages your energy and commodity market data,
            builds your forward curves, and puts AI to work on it, so traders, analysts and risk
            teams all work from the same numbers.
          </p>
          <div className="home-hero__actions">
            <a className="btn-solid" href="/contact">Book a demo</a>
            <a className="btn-outline" href="#platform">Explore the platform</a>
          </div>
        </div>
        <div className="home-hero__shot">
          <img className="home-hero__collage" src="/img/product/home-collage.png" alt="OpenDataDSL screens: Data Loaders mapping a broker file, with Composer, Validation and Fusion AI behind it" />
        </div>
      </div>
    </section>
  );
};

export function BrowserFrame({src, alt}) {
  return (
    <div className="browser-frame">
      <div className="browser-frame__bar"><span /><span /><span /></div>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export function HomepageFeatures() {
  return (
    <section className="home-section" id="platform">
      <div className="container">
        <div className="home-section__head">
          <p className="eyebrow">The platform</p>
          <h2>One platform for your market data, curves and AI</h2>
          <p>Unified tools that strengthen processes and let every team respond quickly, scale and deliver measurable outcomes.</p>
        </div>
        <div className="product-grid">
          {BenefitList.map((props, idx) => (
            <Benefit key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefit({title, text, link}) {
  return (
    <a className="product-card" href={"/features/" + link}>
      <div className="product-card__shot">
        <img src={"/img/product/" + link + ".png"} alt={title + " screenshot"} loading="lazy" />
      </div>
      <div className="product-card__body">
        <h3>{title}</h3>
        <p>{text}</p>
        <span className="product-card__link">Learn more <i className="bi bi-arrow-right" /></span>
      </div>
    </a>
  )
}

export function News() {
  const latest = Articles.filter(a => a.image).slice(0, 6);
  return (
    <section className="home-section home-section--alt">
      <div className="container">
        <div className="home-section__head home-section__head--row">
          <div>
            <p className="eyebrow">Insights</p>
            <h2>Latest from OpenDataDSL</h2>
          </div>
          <div className="home-section__links">
            <a href="/blog">All blog posts <i className="bi bi-arrow-right" /></a>
            <a href="/news">All news <i className="bi bi-arrow-right" /></a>
          </div>
        </div>
        <div className="article-grid">
          {latest.map((props, idx) => (
            <NewsCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

function NewsCard({type, link, title, text, date, image}) {
  return (
    <a className="article-card" href={link}>
      <div className="article-card__img"><img src={image} alt="" loading="lazy" /></div>
      <div className="article-card__body">
        <span className="article-card__meta">{type} &middot; {date}</span>
        <h3>{title.replace(/^(Blog|New Feature): /, '')}</h3>
        <p>{text}</p>
      </div>
    </a>
  )
}
