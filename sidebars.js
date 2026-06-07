// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '新生报到',
      collapsed: false,
      items: [
        '新生报到/地铁站',
        '新生报到/交通方式',
        '新生报到/校园地图与基础设施',
        '新生报到/报到当天',
        '新生报到/请假与校园跑军训',
      ],
    },
    {
      type: 'category',
      label: '宿舍篇',
      collapsed: false,
      items: ['宿舍篇/宿舍生活'],
    },
    {
      type: 'category',
      label: '学习与课程',
      collapsed: true,
      items: [
        '学习与课程/课表、学习通与选课',
        '学习与课程/VPN与CDU邮箱',
      ],
    },
    {
      type: 'category',
      label: '食堂与吃喝',
      collapsed: true,
      items: ['食堂与吃喝/八大食堂介绍'],
    },
    {
      type: 'category',
      label: '校园生活',
      collapsed: true,
      items: ['校园生活/公共设施'],
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsed: true,
      items: ['FAQ/待补充'],
    },
    {
      type: 'category',
      label: '关于',
      collapsed: true,
      items: ['关于/关于本站'],
    },
  ],
};

export default sidebars;
