const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'OpenDataDSL',
  tagline: 'Smart Data Management Tools',
  url: 'https://www.opendatadsl.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OpenDataDSL', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'OpenDataDSL',
      logo: {
        alt: 'OpenDataDSL Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'product/intro',
          position: 'left',
          label: 'Documentation',
          sidebarPath: 'product'
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/pricing', label: 'Pricing', position: 'left'},
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
              label: 'Getting Started',
              to: '/docs/product/intro',
            },
            {
              label: 'Tutorials',
              to: '/docs/product/Tutorials/Tutorials',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
