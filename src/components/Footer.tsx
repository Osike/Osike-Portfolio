import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  {
    name: 'Barrizi',
    logo: '/logos/Barrizi.png',
  },
  {
    name: 'Sheriac Bot',
    logo: '/logos/sheriac-bot.png',
  },
  {
    name: 'Afiya Pal',
    logo: '/logos/afiya-pal.png',
  },
  {
    name: 'Sendy',
    logo: '/trucklogo.png',
  },
  {
    name: 'Noorzam',
    logo: '/noorzam.png',
  },
  {
    name: 'TechHub',
    logo: '/logos/techhub.png',
  },
];

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy dark:bg-slate-900 text-white">
      {/* Brands Carousel */}
      <div className="py-12 overflow-hidden">
        <h3 className="text-2xl font-bold text-center mb-8">
          Brands & Collaborations
        </h3>
        
        <div className="relative">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: '200%' }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} - Collaboration with Shadrack Osike`}
                  className="h-12 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 dark:border-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2025 Shadrack Osike. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {['About', 'Projects', 'Skills', 'Contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};