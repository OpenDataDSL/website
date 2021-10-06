const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Smart SAAS data management',
  tagline: 'A real-world solution for getting your DATA and PROCESSES in the CLOUD',
  url: 'https://www.opendatadsl.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OpenDataDSL', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    gtag: {trackingID: 'G-5D17T7Y69V'},
    colorMode: { disableSwitch: true},
    navbar: {
      title: 'OpenDataDSL',
      logo: {
        alt: 'OpenDataDSL Logo',
        src: 'img/logo.png',
      },
      items: [
        {type: 'doc', docId: 'home',position: 'left',label: 'Documentation'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/pricing', label: 'Pricing', position: 'left'},
        {to: '/support', label: 'Support', position: 'left'},
        {href: 'https://portal.opendatadsl.com', label: 'Portal', position: 'left'}
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
              to: '/docs/home',
            },
            {
              label: 'Tutorials',
              to: '/docs/tutorials/tutorials',
            },
            {
              label: 'Data Catalog',
              to: '/docs/data/catalog',
            },
            {
              label: 'Tags',
              to: '/docs/tags',
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
              label: 'Twitter',
              href: 'https://twitter.com/opendatadsl',
            },
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Walkfares Ltd.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      apiKey: 'b5d68b377e45d1475f649b9be78c760a',
      indexName: 'website',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: see doc section below
      appId: '4FAWMMLHR2',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          postsPerPage: 'ALL',
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [{
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css",
    integrity: "sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We",
    crossorigin: "anonymous"
    }
  ]
};
