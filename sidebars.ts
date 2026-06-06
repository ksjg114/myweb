import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '入学必看',
      collapsed: false,
      items: [
        'intro/welcome',
        'intro/checklist',
      ],
    },
    {
      type: 'category',
      label: '报到与注册',
      collapsed: false,
      items: [
        'enrollment/timeline',
        'enrollment/documents',
        'enrollment/dormitory',
        'enrollment/campus-card',
      ],
    },
    {
      type: 'category',
      label: '校园生活',
      collapsed: false,
      items: [
        'campus-life/campus-map',
        'campus-life/wifi-email',
        'campus-life/library',
        'campus-life/safety',
      ],
    },
    {
      type: 'category',
      label: '学习与课程',
      collapsed: true,
      items: [
        'academics/course-selection',
        'academics/systems',
        'academics/tips',
      ],
    },
    {
      type: 'category',
      label: '吃喝玩乐',
      collapsed: true,
      items: [
        'food/near-campus',
        'fun/campus-spots',
        'fun/weekend',
      ],
    },
    {
      type: 'category',
      label: '周边探索',
      collapsed: true,
      items: [
        'explore/transport',
        'explore/city-guide',
      ],
    },
    'faq',
    'about',
  ],
};

export default sidebars;
