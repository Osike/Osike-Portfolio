import React from 'react';
import { motion } from 'framer-motion';
import { useSectionNav } from '../hooks/useSectionNav';
import { events } from '../data/events';
import { articles } from '../data/articles';
import { projects } from '../data/projects';

const toolkit = ['MongoDB', 'Express', 'React', 'Node.js', 'Django', 'Python', 'TypeScript', 'PostgreSQL'];

const podiums = events.filter((event) =>
  /winner|runner|place|position/i.test(event.achievement ?? '')
).length;

const stats = [
  { n: String(projects.length), l: 'Products shipped' },
  { n: String(podiums), l: 'Hackathon podiums' },
  { n: `${events.length}`, l: 'Events, talks & workshops' },
  { n: String(articles.length).padStart(2, '0'), l: 'Chapters written' },
];

export const Hero: React.FC = () => {
  const goTo = useSectionNav();

  return (
    <section id="hero" className="o-wrap">
      <div className="o-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="o-kicker">
            <span className="o-dot" />
            Software engineer · Founder of Barrizii · Mombasa, Kenya
          </div>
          <h1>
            Building tech that solves <em>real problems.</em>
          </h1>
          <p className="o-hero-dek">
            I’m Shadrack Osike — a full-stack developer and entrepreneur turning everyday African
            problems into products people actually use: from sea tours and public health to fleets
            and fraud prevention.
          </p>
          <div className="o-hero-ctas">
            <button type="button" className="o-btn o-btn-primary" onClick={() => goTo('projects')}>
              See selected work <span aria-hidden="true">→</span>
            </button>
            <button type="button" className="o-btn o-btn-ghost" onClick={() => goTo('articles')}>
              Read the chapters
            </button>
          </div>
        </motion.div>

        <motion.div
          className="o-portrait"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="o-portrait-block" />
          <img src="/pik.jpg" alt="Shadrack Osike, software engineer and founder of Barrizii" />
          <div className="o-portrait-tag">
            <small>Currently</small>
            <strong>CEO &amp; Founder, BARRIZII</strong>
          </div>
        </motion.div>
      </div>

      <div className="o-stats">
        {stats.map((stat) => (
          <div key={stat.l} className="o-stat">
            <div className="o-stat-n">{stat.n}</div>
            <div className="o-stat-l">{stat.l}</div>
          </div>
        ))}
      </div>

      <div className="o-toolkit">
        <span>Core toolkit</span>
        {toolkit.map((tool) => (
          <span key={tool} className="o-chip">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
};
