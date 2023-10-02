// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zettel Notes',
  tagline: 'Markdown note taking app for android',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Zettel Notes',
        logo: {
          alt: 'Zettel Notes Logo',
          src: 'favicon.ico',
        },
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Join our Community',
            items: [
              {
                label: '📣 Telegram Channel',
                href: 'https://t.me/zettelnotes',
              },
              {
                label: '👥 Telegram Support Group',
                href: 'https://t.me/joinchat/DZ2eFcOk3Mo4MDk1',
              },
              {
                label: '🗞️ Reddit post',
                href: 'https://www.reddit.com/r/Zettelkasten/comments/npr00a/introducing_my_new_android_app_for_zettelkasten/',
              },
              {
                label: '🗞️ Zettelkasten.de post',
                href: 'https://forum.zettelkasten.de/discussion/1844/introducing-my-new-android-app-for-zettelkasten-zettel-notes',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://thedoc.eu.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/damionx7/Zettel-Notes-Documentation/',
              },
              {
                label: 'Youtube Channel',
                href: 'https://www.youtube.com/@zettelnotes/videos',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
