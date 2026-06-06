import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '新生报到',
    image: 'https://www.cdu.edu.cn/__local/B/A7/87/224349942AA4BB6C9441D7A35BB_59225F15_1841C.jpg',
    to: '/docs/新生报到/地铁站',
    description: '地铁站、交通路线、校园地图、报到当天和请假模板集中放这里。',
  },
  {
    title: '宿舍篇',
    image: 'https://www.cdu.edu.cn/__local/1/22/6F/882E3603BBEA404C2E0C4923330_1870F203_1EB33.jpg',
    to: '/docs/宿舍篇/待补充',
    description: '宿舍用品、门禁、洗衣、报修和室友相处，后续按大纲补内容。',
  },
  {
    title: '食堂与吃喝',
    image: 'https://www.cdu.edu.cn/__local/7/52/FA/485DE80A52F585DB64EBA4D33FF_74AE8975_25807.jpg',
    to: '/docs/食堂与吃喝/待补充',
    description: '食堂支付、校内窗口、校外觅食和新生省钱吃饭攻略，后续补充。',
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
