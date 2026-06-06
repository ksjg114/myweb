import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '新生报到',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80',
    to: '/docs/新生报到/地铁站',
    description: '地铁站、交通路线、校园地图、报到当天和请假模板集中放这里。',
  },
  {
    title: '宿舍篇',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80',
    to: '/docs/宿舍篇/待补充',
    description: '宿舍用品、门禁、洗衣、报修和室友相处，后续按大纲补内容。',
  },
  {
    title: '食堂与吃喝',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    to: '/docs/食堂与吃喝/八大食堂介绍',
    description: '八大食堂、支付提醒、档口选择和真实评价渠道，先吃离宿舍近的。',
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
