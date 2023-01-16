const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'OpenDataDSL - Smart SAAS Data Management for MongoDB',
  tagline: 'Data Management for MongoDB',
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
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/support', label: 'Support', position: 'left'},
        {to: '/plans', label: 'Pricing', position: 'left'},
        {href: 'https://doc.opendatadsl.com', label: 'Documentation', position: 'left'},
        {href: 'https://portal.opendatadsl.com', label: 'Portal', position: 'left'}
      ],
    },
    metadata: [{name: 'keywords', content: 'mongodb, smart, smart curves, forward curves, market data, commodity, energy, timeseries, data management, blog'}],
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
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About Us',
              to: '/AboutUs',
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
              to: '/register',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Walkfares Ltd.`,
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
    '/js/mc.js'
  ],
  stylesheets: [{
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css",
    integrity: "sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We",
    crossorigin: "anonymous"
    }
  ]
};
