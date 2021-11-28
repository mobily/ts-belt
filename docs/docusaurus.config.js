const root = require('../package.json')

module.exports = {
  title: 'ts-belt',
  tagline: 'The tagline of my site',
  url: 'https://mobily.github.io',
  baseUrl: '/ts-belt/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mobily',
  projectName: 'ts-belt',
  themeConfig: {
    navbar: {
      title: `v${root.version}`,
      logo: {
        alt: 'TS Belt',
        src: 'img/ts-belt-logo.png',
      },
      items: [
        {
          href: 'https://www.buymeacoffee.com/utSC0k7',
          label: 'Sponsor ❤️',
          position: 'right',
        },
        {
          href: 'https://github.com/mobily/ts-belt',
          label: 'Github',
          position: 'right',
        },
        {
          href: 'https://twitter.com/__marcin_',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Github',
          items: [
            {
              label: 'Pull Requests',
              href: 'https://github.com/mobily/ts-belt/pulls',
            },
            {
              label: 'Issues',
              href: 'https://github.com/mobily/ts-belt/issues',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/__marcin_',
            },
            {
              label: 'Github',
              href: 'https://github.com/mobily',
            },
            {
              label: 'Dev.to',
              href: 'https://dev.to/mobily',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus ❤️`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
