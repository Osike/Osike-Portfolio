import React from 'react';
import { Link } from 'react-router-dom';
import { useSectionNav } from '../hooks/useSectionNav';
import { chaptersNewestFirst } from '../data/chapters';

const brands = [
  { name: 'Barrizii', logo: '/barrizii.png', url: 'https://barrizii.com' },
  { name: 'Trip-Trac', logo: '/trucklogo.png', url: 'https://trip-trac.vercel.app/' },
  { name: 'Noorzam', logo: '/noorzam.png' },
  { name: 'Smart Timetable', logo: '/timetable.png' },
  { name: 'Loyalty Tracker', logo: '/logos/loyaltytracker.png' },
];

const explore = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Selected work' },
  { id: 'education', label: 'Journey' },
  { id: 'events', label: 'Field log' },
];

const connect = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/osike-shadrack/' },
  { label: 'GitHub', url: 'https://github.com/osike' },
  { label: 'Instagram', url: 'https://instagram.com/hp_brains' },
  { label: 'shadyabacus@gmail.com', url: 'mailto:shadyabacus@gmail.com' },
];

export const BrandStrip: React.FC = () => (
  <section className="o-built" aria-label="Brands I’ve built">
    <div className="o-wrap o-built-inner">
      <div className="o-kicker">Brands I’ve built</div>
      <div className="o-logos">
        {brands.map((brand) => {
          const content = (
            <>
              <img src={brand.logo} alt="" loading="lazy" />
              {brand.name}
            </>
          );
          return brand.url ? (
            <a key={brand.name} className="o-logo" href={brand.url} target="_blank" rel="noreferrer">
              {content}
            </a>
          ) : (
            <div key={brand.name} className="o-logo">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const Footer: React.FC = () => {
  const goTo = useSectionNav();

  return (
    <footer className="o-foot">
      <div className="o-wrap">
        <div className="o-foot-top">
          <div className="o-foot-brand">
            <div className="o-brand">
              <span className="o-brand-mark">S</span>
              <span className="o-brand-name">Shadrack Osike</span>
            </div>
            <p>Software engineer and founder of Barrizii, building practical technology from Mombasa, Kenya.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {explore.map((item) => (
                <li key={item.id}>
                  <button type="button" onClick={() => goTo(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Chapters</h4>
            <ul>
              {chaptersNewestFirst.slice(0, 3).map((chapter) => (
                <li key={chapter.id}>
                  <Link to={`/articles/${chapter.id}`}>{chapter.title.split(':')[0]}</Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => goTo('articles')}>
                  All chapters
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              {connect.map((item) => (
                <li key={item.label}>
                  <a href={item.url} target={item.url.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="o-foot-bottom">
          <span>© {new Date().getFullYear()} Shadrack Osike. Built in Mombasa.</span>
          <span>osikeshadrack.dev</span>
        </div>
      </div>
    </footer>
  );
};
