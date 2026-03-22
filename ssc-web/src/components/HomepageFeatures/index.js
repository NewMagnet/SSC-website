import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    image: 'img/spyglass.png',
    buttonText: '风光一览！',
    buttonLink: 'gallery',
    description: <>看看这群人在服务器里干了些什么<br/>☀️(๑╹◡╹)ﾉ"""</>
  },
  {
    image: 'img/cookie.png',
    buttonText: '未来规划！', 
    buttonLink: 'docs/plan',
    description: <>看看这群人<del>食不食油饼</del>又画了什么大饼<br/>😈&lt;(｀^´)&gt;</>
  },
  {
    image: 'img/nether-star.gif',
    buttonText: '加入我们！',
    buttonLink: 'docs/join',
    description: <>成为服务器的一员！awa<br/>🥳φ(&gt;ω&lt;*)</>
  }
];

function Feature({image, buttonText, buttonLink, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureImage}>
          <img src={image}/>
        </div>
        <div className={styles.featureButton}>
          <a className="button button--primary button--lg" href={buttonLink}>
            {buttonText}
          </a>
        </div>
        <div className={styles.featureContent}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresTitle}>
          <Heading as="h2" className={styles.featuresSectionTitle}>
            了解一下我们吧！
          </Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => <Feature key={idx} {...props} />)}
        </div>   
      </div>
    </section>
  );
}