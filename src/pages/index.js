import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const quickLinks = [
  {
    title: '报到清单',
    description: '证件、材料、生活用品，出发前按表核对。',
    to: '/docs/入学必看/报到清单',
  },
  {
    title: '报到流程',
    description: '到校先去哪、办什么、怎么避免白跑。',
    to: '/docs/入学必看/报到流程',
  },
  {
    title: '校园服务',
    description: '教务系统、邮箱、办事大厅、图书馆入口。',
    to: '/docs/校园生活/校园服务',
  },
  {
    title: '周边探索',
    description: '地铁进城、青龙湖、熊猫基地和周末路线。',
    to: '/docs/周边探索/周末小旅行',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          面向成都大学新生的非官方速查手册：入学、宿舍、选课、吃饭、出行，一站式查清楚。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            开始阅读新生指南
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <Heading as="h2" className="text--center">
          新生先看
        </Heading>
        <div className="row">
          {quickLinks.map((item) => (
            <div className="col col--3 margin-bottom--lg" key={item.to}>
              <Link className={styles.quickCard} to={item.to}>
                <Heading as="h3">{item.title}</Heading>
                <p>{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎来到${siteConfig.title}`}
      description="成都大学新生非官方指南：入学必看、校园生活、学习与课程、吃喝玩乐、周边探索与FAQ。">
      <HomepageHeader />
      <main>
        <QuickStart />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
