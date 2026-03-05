import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'XX大学新生指南（示例）',
  tagline: '必备信息 + 校园生活 + 周边好玩，一站搞定',
  favicon: 'img/favicon.ico',

  // 你上线后改成真实域名（Cloudflare Pages 也能用默认 pages.dev）
  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'your-org',
  projectName: 'freshman-guide',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://example.com/your-repo/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '新生指南',
      items: [
        {to: '/docs/intro/checklist', label: '入学必看', position: 'left'},
        {to: '/docs/campus-life/campus-map', label: '校园生活', position: 'left'},
        {to: '/docs/food/near-campus', label: '吃喝玩乐', position: 'left'},
        {to: '/docs/explore/transport', label: '周边探索', position: 'left'},
        {to: '/docs/faq', label: 'FAQ', position: 'left'},
        {href: 'https://github.com/your-org/freshman-guide', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '快速入口',
          items: [
            {label: '报到清单', to: '/docs/intro/checklist'},
            {label: '报到时间线', to: '/docs/enrollment/timeline'},
            {label: '校门口吃什么', to: '/docs/food/near-campus'},
          ],
        },
        {
          title: '声明',
          items: [
            {label: '关于本站', to: '/docs/about'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 示例站点`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies any,
};

export default config;
