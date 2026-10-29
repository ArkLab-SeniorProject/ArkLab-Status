import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const statusPosts = [
  {
    title: 'Post 1: Project Kickoff',
    description: 'Defining the core vision and getting the project off the ground with initial research and planning.',
    to: '/docs/post-1',
    image: '/img/Post-1/Cover.jpg',
  },
  {
    title: 'Post 2: Design Insights',
    description: 'Connecting real survivors to inform the design and development process for the future.',
    to: '/docs/post-2',
    image: '/img/Post-2/Cover.jpg',
  },
];

const teamMembers = [
  {
    name: 'Hannah Desmond',
    role1: 'Project Manager',
    role2: 'Design and Development Support',
    instagram: '@hannah_dez_',
    image: '/img/Home/Hannah.png',
  },
  {
    name: 'Olivia Knestaut',
    role1: 'Lead Full Stack Developer',
    role2: 'Data Architect',
    role3: 'Assistant Project Manager',
    instagram: '@ollywhelmed',
    image: '/img/Home/Olivia.png',
  },
  {
    name: 'Tiffany Khuu',
    role1: 'Lead Data Architect',
    role2: 'Full Stack Developer',
    instagram: '@tiffany_khuu',
    image: '/img/Home/Tiffany.png',
  },
  {
    name: 'Amy Au',
    role1: 'Lead Designer - UX',
    role2: 'Researcher',
    role3: 'Content and Copy Support',
    instagram: '@amyau_',
    image: '/img/Home/Amy.png',
  },
  {
    name: 'Maple Tieu',
    role1: 'Lead Designer - UI',
    role2: 'Content and Copy Writer',
    instagram: '@_queenmaple_',
    image: '/img/Home/Maple.png',
  },
  {
    name: 'Mack Addison',
    role1: 'Lead Researcher',
    role2: 'Content and Copy Writer',
    role3: 'Design and Development Support',
    instagram: '@hello_jokii',
    image: '/img/Home/Mack.png',
  },
];

const imageUrl = (image: string) => useBaseUrl(image);

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function StatusPostsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={styles.sectionTitle}>
              Status Posts
            </Heading>
          </div>
        </div>
        <div className={styles.cardsGrid}>
          {statusPosts.map((post) => (
            <Link key={post.to} to={post.to} className={styles.card}>
              <img
                src={imageUrl(post.image)}
                alt={`${post.title} cover image`}
                className={styles.cardImage}
              />
              <Heading as="h3">{post.title}</Heading>
              <p>{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectOverviewSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h1" className={styles.sectionTitle}>
              What do you do in the Aftermath?
            </Heading>
            <p className={styles.overviewText}>
              After a natural disaster, people are often left to navigate a complex recovery process while dealing with stress, uncertainty, and disrupted access to their normal resources. Important information like housing, insurance, and community assistance can be scattered across different sources, making it difficult to understand what needs to be done and when.
            </p>
            <p className={styles.overviewText}>
              <b>Aftermath is a guided mobile-focused disaster-recovery web-app</b> that helps people organize, understand, and navigate the many steps that come after a natural disaster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={styles.sectionTitle}>
              Ark Labs Members
            </Heading>
          </div>
        </div>
        <div className={styles.membersGrid}>
          {teamMembers.map((member) => (
            <div key={member.name} className={styles.memberCard}>
              <img
                src={imageUrl(member.image)}
                alt={member.name}
                className={styles.memberImage}
              />
              <Heading as="h3">{member.name}</Heading>
              <p className={styles.memberRole}>{member.role1}<br/>{member.role2}<br/>{member.role3}</p>
              <a
                href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.memberSocial}>
                {member.instagram}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Aftermath — a senior project by Ark Lab. What do you do in the Aftermath?">
      <HomepageHeader />
      <main>
        <StatusPostsSection />
        <ProjectOverviewSection />
        <TeamSection />
      </main>
    </Layout>
  );
}
