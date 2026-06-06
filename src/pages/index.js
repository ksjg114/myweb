import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const quickLinks = [
  {
    title: '新生报到',
    description: '地铁站、交通方式、报到当天和请假模板。',
    to: '/docs/新生报到/地铁站',
  },
  {
    title: '宿舍篇',
    description: '宿舍用品、门禁、作息和报修后续补充。',
    to: '/docs/宿舍篇/待补充',
  },
  {
    title: '学习与课程',
    description: '课表、学习通、选课、VPN 和 CDU 邮箱。',
    to: '/docs/学习与课程/课表、学习通与选课',
  },
  {
    title: '食堂与吃喝',
    description: '八大食堂、支付提醒和校外觅食逐步补充。',
    to: '/docs/食堂与吃喝/八大食堂介绍',
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
          面向成都大学新生的非官方速查手册：先按新生报到走通，再慢慢补宿舍、课程和食堂。
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
      description="成都大学新生非官方指南：入学必看、校园生活、学习与课程、食堂与FAQ。">
      <HomepageHeader />
      <main>
        <QuickStart />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
