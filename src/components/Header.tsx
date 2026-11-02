import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useSectionNav } from '../hooks/useSectionNav';

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'education', label: 'Journey' },
  { id: 'events', label: 'Field log' },
  { id: 'articles', label: 'Chapters' },
  { id: 'contact', label: 'Contact' },
];

const spyIds = ['hero', ...links.map((link) => link.id)];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const goTo = useSectionNav();
  const { pathname } = useLocation();
  const activeSection = useScrollSpy(spyIds);
  const active = pathname.startsWith('/articles') ? 'articles' : activeSection;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    goTo(id);
  };

  return (
    <>
      <header className="o-nav">
        <div className="o-wrap o-nav-inner">
          <button type="button" className="o-brand" onClick={() => go('hero')}>
            <span className="o-brand-mark">S</span>
            <span className="o-brand-name">Shadrack Osike</span>
          </button>

          <nav className="o-nav-links" aria-label="Main">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                className={active === link.id ? 'is-on' : ''}
                onClick={() => go(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button type="button" className="o-btn o-btn-primary" onClick={() => go('contact')}>
            Let’s talk <span aria-hidden="true">→</span>
          </button>

          <button
            type="button"
            className="o-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="o-menu" role="dialog" aria-label="Menu">
          {links.map((link, index) => (
            <button key={link.id} type="button" onClick={() => go(link.id)}>
              {link.label}
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
          <button type="button" className="o-btn o-btn-primary" onClick={() => go('contact')}>
            Let’s talk →
          </button>
        </div>
      )}
    </>
  );
};
