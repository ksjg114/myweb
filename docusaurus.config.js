// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '成都大学新生指南',
  tagline: '非官方 · 简洁 · 易查找',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cdu-students', // Usually your GitHub org/user name.
  projectName: 'cdu-freshman-guide', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '成都大学新生指南',
        logo: {
          alt: '成都大学新生指南 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '指南',
          },
          {
            type: 'doc',
            docId: 'FAQ/常见问题',
            position: 'left',
            label: 'FAQ',
          },
          {
            type: 'doc',
            docId: '关于/关于',
            position: 'left',
            label: '关于',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '指南',
            items: [
              {
                label: '入学必看',
                to: '/docs/入学必看/报到清单',
              },
              {
                label: '校园生活',
                to: '/docs/校园生活/校园地图',
              },
              {
                label: '学习与课程',
                to: '/docs/学习与课程/课程结构',
              },
              {
                label: '吃喝玩乐',
                to: '/docs/吃喝玩乐/校内美食',
              },
              {
                label: '周边探索',
                to: '/docs/周边探索/交通到市区',
              },
              {
                label: 'FAQ',
                to: '/docs/FAQ/常见问题',
              },
              {
                label: '关于',
                to: '/docs/关于/关于',
              },
            ],
          },
          {
            title: '说明',
            items: [
              {
                label: '本站为非官方指南',
                to: '/docs/关于/关于',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 成都大学新生指南.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
