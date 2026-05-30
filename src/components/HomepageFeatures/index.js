import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '入学必看',
    image: 'https://www.cdu.edu.cn/__local/B/A7/87/224349942AA4BB6C9441D7A35BB_59225F15_1841C.jpg',
    to: '/docs/入学必看/报到清单',
    description: '报到清单、流程、宿舍入住和新生避坑，按步骤做就行。',
  },
  {
    title: '校园生活',
    image: 'https://www.cdu.edu.cn/__local/1/22/6F/882E3603BBEA404C2E0C4923330_1870F203_1EB33.jpg',
    to: '/docs/校园生活/校园服务',
    description: '食堂、快递、校园服务、图书馆和线上系统入口集中整理。',
  },
  {
    title: '吃喝玩乐与周边探索',
    image: 'https://www.cdu.edu.cn/__local/7/52/FA/485DE80A52F585DB64EBA4D33FF_74AE8975_25807.jpg',
    to: '/docs/周边探索/周末小旅行',
    description: '十陵、青龙湖、市区和周末小旅行，用低成本打开成都。',
  },
];

function Feature({image, title, description, to}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <Link className={styles.featureCard} to={to}>
        <img className={styles.featureImage} src={image} alt={title} loading="lazy" />
        <div className="padding--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          按场景阅读
        </Heading>
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
