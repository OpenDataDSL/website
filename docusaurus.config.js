// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smart SAAS Data Platform for Energy Markets',
  tagline: 'The Energy Intelligence Platform',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.opendatadsl.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OpenDataDSL', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {trackingID: 'G-BXX397L1KH'},
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  scripts: [
    {src:'/js/captcha.js',module:true},
    '/js/visitorqueue.js',
    '/js/odsl_client.js',
    {src:'https://www.google.com/recaptcha/api.js?onload=recaptchaOnload&render=explicit', defer: true, async: true},
    {src:'https://opendatadsl.statuspage.io/embed/script.js', defer: true, async: true},
    {
      src:'https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js', 
      id:'chatbot', 
      environmentId:'cfb09aee-3d6e-e618-a4cf-d4db519731a4',
      crossorigin:'anonymous'
    }
  ],
  stylesheets: [
    {
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
    },
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        disableSwitch: true,
      },
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
            {to: '/SignUp', label: 'Plans'}
        ]},
        {type:'dropdown', label: 'Solutions', position: 'left', items:[
            {to: '/features/data-management', label: 'Data Management'},
            {to: '/features/data-catalogue', label: 'Data Catalogue'},
            {to: '/features/smart-curves', label: 'Smart Curves'},
            {to: '/features/odsl-code', label: 'ODSL Language'},
            {to: '/features/fusion', label: 'Fusion AI'},
            {to: '/features/ai-assistants', label: 'AI Assistants'},
            {to: '/features/ai-agents', label: 'AI Agents'},
            {to: '/features/custom-tools', label: 'Custom AI Tools'}
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
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java']
      },
    }),
};

export default config;
