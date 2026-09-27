import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const statusPosts = [
  {
    title: 'Week 1: Project Kickoff',
    description: 'Defining the core vision and assigning roles.',
    to: '/docs/week-1',
  },
];

const teamMembers = [
  {
    name: 'Hannah Desmond',
    role1: 'Project Manager',
    role2: 'Design and Development Support',
    instagram: '@hannah_dez_',
    image: '/img/Hannah.png',
  },
  {
    name: 'Olivia Knestaut',
    role1: 'Lead Full Stack Developer',
    role2: 'Data Architect',
    role3: 'Assistant Project Manager',
    instagram: '@ollywhelmed',
    image: '/img/Olivia.png',
  },
  {
    name: 'Tiffany Khuu',
    role1: 'Lead Data Architect',
    role2: 'Full Stack Developer',
    instagram: '@',
    image: '/img/AftermathLogo.png',
  },
  {
    name: 'Amy Au',
    role1: 'Lead Designer - UX',
    role2: 'Researcher',
    role3: 'Content and Copy Support',
    instagram: '@amyau_',
    image: '/img/AftermathLogo.png',
  },
  {
    name: 'Maple Tieu',
    role1: 'Lead Designer - UI',
    role2: 'Content and Copy Writer',
    instagram: '@_queenmaple_',
    image: '/img/AftermathLogo.png',
  },
  {
    name: 'Mack Addison',
    role1: 'Lead Researcher',
    role2: 'Content and Copy Writer',
    role3: 'Design and Development Support',
    instagram: '@hello_jokii',
    image: '/img/Mack.png',
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
            <Heading as="h2" className={styles.sectionTitle}>
              Project Overview
            </Heading>
            <p className={styles.overviewText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className={styles.overviewText}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
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
              Ark Lab Members
            </Heading>
          </div>
        </div>
        <div className={styles.membersGrid}>
          {teamMembers.map((member) => (
            <div key={member.name} className={styles.memberCard}>
              <img
                src={member.image}
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
