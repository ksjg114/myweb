import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '入学必看',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        报到清单、宿舍入住、校园卡与避坑提醒，帮助你快速完成入学流程。
      </>
    ),
  },
  {
    title: '校园生活',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        食堂、超市、图书馆与校园服务一页了解，新生生活不再手忙脚乱。
      </>
    ),
  },
  {
    title: '吃喝玩乐与周边探索',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        校内外美食、城市地标与周末小旅行，玩得开心也不踩坑。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
