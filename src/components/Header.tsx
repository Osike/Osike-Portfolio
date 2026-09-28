import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SunIcon,
  MoonIcon,
  DocumentArrowDownIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const journeyItems = [
  { id: 'events', label: 'Events & Achievements' },
  { id: 'articles', label: 'Chapter Archives' },
];

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode();
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const journeyRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useScrollSpy([
    'hero',
    'about',
    'projects',
    'education',
    'philosophy',
    'events',
    'articles',
    'contact',
  ]);

  const isJourneyActive =
    activeSection === 'events' || activeSection === 'articles';

  const scrollToSection = (sectionId: string) => {
    setIsJourneyOpen(false);

    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: sectionId });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Shadrack_Osike_CV.pdf';
    link.click();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        journeyRef.current &&
        !journeyRef.current.contains(event.target as Node)
      ) {
        setIsJourneyOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsJourneyOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-navy dark:text-white cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Shadrack Osike
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-teal-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {section.label}
              </motion.button>
            ))}

            <div ref={journeyRef} className="relative">
              <motion.button
                type="button"
                onClick={() => setIsJourneyOpen((open) => !open)}
                aria-expanded={isJourneyOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                  isJourneyActive
                    ? 'text-teal-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Events & Achievements
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${
                    isJourneyOpen ? 'rotate-180' : ''
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isJourneyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[220px] rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-2"
                  >
                    {journeyItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          activeSection === item.id
                            ? 'text-teal-500 bg-teal-50 dark:bg-teal-950/40'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-navy dark:hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-slate-600" />
              )}
            </motion.button>

            <motion.button
              onClick={downloadCV}
              className="inline-flex items-center px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-full hover:bg-teal-600 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
              Download CV
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
