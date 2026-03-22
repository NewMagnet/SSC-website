import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useEffect } from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.heroImage}>
              <img src="img/SSC_icon.jpg"/>
            </div>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          </div>
        </div>
      </div>
      <div className={styles.footnote}>
        <div>↓ 向下查看更多 ↓</div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const navbarHide = () => {
      navbar?.classList.toggle('navbar--hidden', window.scrollY < 100);
      navbar?.classList.toggle('navbar--visible', !(window.scrollY < 100));
    };
    window.addEventListener('scroll', navbarHide);
    navbar?.classList.add('navbar--hidden');
    return () => window.removeEventListener('scroll', navbarHide);
  }, []);
  
  return (
    <Layout title="Starry Sakura Craft" description="A server for souls to meet and thrive.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}