const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Smart SAAS Data Management',
  tagline: 'SMART data management and reporting',
  url: 'https://www.opendatadsl.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OpenDataDSL', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    colorMode: { disableSwitch: true},
    navbar: {
      title: 'OpenDataDSL',
      logo: {
        alt: 'OpenDataDSL Logo',
        src: 'img/logo.png',
      },
      items: [
        {type:'dropdown', label: 'Company', position: 'left', items:[
            {to: '/AboutUs', label: 'About Us'},
            {to: '/contact', label: 'Contact Us'},
            {to: '/support', label: 'Support'},
            {to: '/plans', label: 'Pricing'}
        ]},
        {type:'dropdown', label: 'Solutions', position: 'left', items:[
            {to: '/energy', label: 'Energy and Oil Industry'},
            {to: '/agriculture', label: 'Agricultural Industry'},
            {to: '/utility', label: 'Utilities'},
            {to: '/mongodb', label: 'MongoDB Users'}
        ]},
        {type:'dropdown', label: 'Partners', position: 'left', items:[
            {to: '/partners', label: 'Partner Program'},
            {to: '/referrals', label: 'Referral Program'},
            {to: '/developers', label: 'Developer Program'}
        ]},
        {to: '/news', label: 'News', position: 'left'},
        {to: '/events', label: 'Events', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {href: 'https://doc.opendatadsl.com', label: 'Documentation', position: 'right'},
        {href: 'https://portal.opendatadsl.com', label: 'Portal', position: 'right'}
      ],
    },
    metadata: [{name: 'keywords', content: 'mongodb, smart, smart curves, forward curves, market data, commodity, energy, timeseries, data management, blog, reporting'}],
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Home',
              href: 'https://doc.opendatadsl.com',
            },
            {
              label: 'Tutorials',
              href: 'https://doc.opendatadsl.com/docs/Tutorials',
            },
            {
              label: 'Topics',
              href: 'https://doc.opendatadsl.com/docs/category/topics',
            },
            {
              label: 'Data Catalog',
              href: 'https://doc.opendatadsl.com/docs/data/catalog',
            },
            {
              label: 'Tags',
              href: 'https://doc.opendatadsl.com/docs/tags',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/odsl',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/U2bBfsnR9c',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/opendatadsl',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/opendatadsl'
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/OpenDataDSL'
            },
            {
              label: 'Pinterest',
              href: 'https://www.pinterest.co.uk/OpenDataDSL'
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/opendatadsl'
            },
            {
              label: 'Vimeo',
              href: 'https://vimeo.com/user155861440'
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCgoZgofpos9P8Zwtzkr3IWA'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact Us',
              to: '/contact',
            },
            {
              label: 'About Us',
              to: '/AboutUs',
            },
            {
              label: 'Partners',
              to: '/partners',
            },
            {
              label: 'News',
              to: '/news',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Legal Notices',
              to: '/legal/Legal-Notices',
            },
            {
              label: 'Register for our NewsLetter',
              href: 'http://eepurl.com/ih0lVr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenDataDSL Ltd.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java'],
    },
//    algolia: {
//        enabled: false,
//      apiKey: 'a8b0e275e6e4c02b53e5dffadd88e2c7',
//      indexName: 'website',
//
//      // Optional: see doc section below
//      contextualSearch: false,
//
//      // Optional: see doc section below
//      appId: 'GNGE5W5WZ3',
//
//      // Optional: Algolia search parameters
//      searchParameters: {},
//
//      //... other Algolia params
//    }
  },
  plugins: [
    [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'news-blog',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'news',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './news',
          blogTitle: 'News',
        },
      ],
    [
        '@docusaurus/plugin-content-blog',

          {
            /**
             * Required for any multi-instance plugin
             */
            id: 'events-blog',
            /**
             * URL route for the blog section of your site.
             * *DO NOT* include a trailing slash.
             */
            routeBasePath: 'events',
            /**
             * Path to data on filesystem relative to site dir.
             */
            path: './events',
            blogTitle: 'Events',
          },
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {trackingID: 'G-BXX397L1KH'},
        docs: false,
        blog: {
          postsPerPage: 'ALL',
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
        }
      },
    ],
  ],
  scripts: [
    {src:'/js/captcha.js',module:true},
    '/js/visitorqueue.js',
    {src:'https://www.google.com/recaptcha/api.js?onload=recaptchaOnload&render=explicit', defer: true, async: true},
    {src:'https://opendatadsl.statuspage.io/embed/script.js', defer: true, async: true}
  ],
  stylesheets: [{
        rel: "dns-prefetch",
        href: "//t.visitorqueue.com",
        style: 'display: none !important;'
    },{
        rel: "stylesheet",
        href: "https://p.visitorqueue.com/styles/c49aef6c-24b7-4b77-809d-b7e13c691cc8.css",
        type: 'text/css',
        id: 'vq_flick_styles'
    },{
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css",
        integrity: "sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We",
        crossorigin: "anonymous"
    }
  ]
};
