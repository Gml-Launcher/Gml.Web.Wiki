import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import HeroSection from "../components/HomepageFeatures/HeroSection";
import Translate, {translate} from "@docusaurus/Translate";
import HelloBar from "../components/homepage/HelloBar";
import CtaSection from "../components/homepage/CtaSection";
import HeroQuickLinks from "../components/homepage/HeroQuickLinks";
import CommunitySection from "../components/homepage/CommunitySection";
import HelpSection from "../components/homepage/HelpSection";
import GuidesAndSamples from "../components/homepage/GuidesAndSamples";
import MagicBento from "../components/homepage/MagicBento/MagicBento";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/welcome">
              <Translate
                  id="theme.blog.post.readMore"
                  description="The title of the 404 page">                  
              </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Gml Лаунчер">
        <HelloBar />
      {/*<HomepageHeader />*/}
      <HeroSection />
      {/*<HeroQuickLinks />*/}
        <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={12}
            glowColor="6, 37, 81"
        />
      <GuidesAndSamples />
      <HelpSection />
      <CommunitySection />
      {/*
      <CtaSection />
      */}
      <main>
        {/*<HomepageFeatures />*/}
      </main>
    </Layout>
  );
}
