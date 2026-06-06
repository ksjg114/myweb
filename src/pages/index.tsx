import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

type CardProps = {
  title: string;
  description: string;
  to: string;
  badge?: string;
};

function Card({ title, description, to, badge }: CardProps) {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {badge ? <span className={styles.badge}>{badge}</span> : null}
      </div>
      <p className={styles.cardDesc}>{description}</p>
      <span className={styles.cardCta}>打开 →</span>
    </Link>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const quickStart: CardProps[] = [
    { title: "报到前清单", description: "证件材料、必带物品、到校前必须完成的事。", to: "/docs/intro/checklist", badge: "必看" },
    { title: "报到当天时间线", description: "从进校到入住到注册：按时间顺序不迷路。", to: "/docs/enrollment/timeline", badge: "路线图" },
    { title: "宿舍入住与避坑", description: "床尺寸、入住宿舍第一天做什么、室友相处。", to: "/docs/enrollment/dormitory" },
  ];

  const essentials: CardProps[] = [
    { title: "校园网 & 邮箱", description: "连接/认证/常见问题，别错过通知。", to: "/docs/campus-life/wifi-email" },
    { title: "校园卡 / 一卡通", description: "充值、门禁、消费、挂失。", to: "/docs/enrollment/campus-card" },
    { title: "校园地图", description: "教学楼/食堂/快递点/校门方向。", to: "/docs/campus-life/campus-map" },
    { title: "选课入门", description: "流程 + 常见坑，先避雷。", to: "/docs/academics/course-selection" },
    { title: "安全与紧急信息", description: "必存电话、防诈骗提醒。", to: "/docs/campus-life/safety" },
    { title: "FAQ", description: "你想到的，新生大概率都问过。", to: "/docs/faq" },
  ];

  const fun: CardProps[] = [
    { title: "校门口吃什么", description: "步行 5–15 分钟：便宜好吃不踩雷。", to: "/docs/food/near-campus", badge: "人气" },
    { title: "校园里好玩的地方", description: "日落点、拍照点、散步路线。", to: "/docs/fun/campus-spots" },
    { title: "周末去哪玩", description: "地铁/公交可达的一日游推荐。", to: "/docs/fun/weekend" },
    { title: "交通怎么走", description: "从火车站/机场/地铁到学校路线。", to: "/docs/explore/transport", badge: "实用" },
  ];

  return (
    <Layout title={siteConfig.title} description="新生必备信息 + 校园生活经验 + 周边探索">
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubtitle}>
              面向【XX大学】的新生指南（示例站）：必备信息、校园生活、周边好玩，一站搞定。
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryBtn} to="/docs/intro/checklist">新生必看清单</Link>
              <Link className={styles.secondaryBtn} to="/docs/enrollment/timeline">报到时间线</Link>
              <Link className={styles.secondaryBtn} to="/docs/food/near-campus">周边吃喝玩乐</Link>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaPill}>适用：2025–2026 学年（示例）</span>
              <span className={styles.metaPill}>非官方整理｜以学校公告为准</span>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.panelTitle}>新生最常问</div>
            <ul className={styles.panelList}>
              <li><Link to="/docs/enrollment/documents">要带什么材料？</Link></li>
              <li><Link to="/docs/enrollment/dormitory">宿舍床多大？要带被子吗？</Link></li>
              <li><Link to="/docs/enrollment/campus-card">校园卡怎么充值/挂失？</Link></li>
              <li><Link to="/docs/campus-life/wifi-email">校园网连不上怎么办？</Link></li>
              <li><Link to="/docs/food/near-campus">校门口有什么好吃的？</Link></li>
            </ul>
            <Link className={styles.panelCta} to="/docs/faq">打开 FAQ →</Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>新生 10 分钟上手</h2>
            <p>先把最关键的事做完，再慢慢探索校园和城市。</p>
          </div>
          <div className={styles.grid3}>
            {quickStart.map((c) => <Card key={c.to} {...c} />)}
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.sectionHead}>
            <h2>必备入口</h2>
            <p>校园生活离不开的“账号、网络、卡、地图、选课”。</p>
          </div>
          <div className={styles.grid3}>
            {essentials.map((c) => <Card key={c.to + c.title} {...c} />)}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>吃喝玩乐 & 周边探索</h2>
            <p>把“好玩”做成你站点的特色：真实、可达、带路线。</p>
          </div>
          <div className={styles.grid4}>
            {fun.map((c) => <Card key={c.to + c.title} {...c} />)}
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.sectionHead}>
            <h2>一起维护这个站点</h2>
            <p>欢迎补充校内信息、周边店铺、避坑提醒。建议标注来源与适用年份。</p>
          </div>
          <div className={styles.callouts}>
            <div className={styles.callout}>
              <h3>发现错误？</h3>
              <p>提 Issue 或 PR 修正，最好附上来源链接。</p>
            </div>
            <div className={styles.callout}>
              <h3>想加推荐？</h3>
              <p>按模板补充：地点/距离/人均/推荐理由/注意事项。</p>
            </div>
            <div className={styles.callout}>
              <h3>重要声明</h3>
              <p>本站为非官方整理，涉及政策/日期/收费以学校公告为准。</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
