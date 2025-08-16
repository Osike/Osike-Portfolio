import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
  { id: 'event', label: 'Event' },
];

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode();
  const activeSection = useScrollSpy(['hero', 'about', 'projects', 'skills', 'education', 'philosophy', 'contact','event']);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Replace with actual CV URL
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Shadrack_Osike_CV.pdf';
    link.click();
  };

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

          <div className="hidden md:flex space-x-8">
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