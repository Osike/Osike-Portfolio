import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

type Brand = {
  name: string;
  logo: string;
  url?: string;
};

const brands: Brand[] = [
  {
    name: 'Barrizi',
    logo: '/barrizii.png',
    url: 'https://barrizii.com',
  },
  {
    name: 'Trip-Trac',
    logo: '/trucklogo.png',
    url: 'https://trip-trac.vercel.app/',
  },
  {
    name: 'Noorzam',
    logo: '/noorzam.png',
  },
  {
    name: 'Smart Timetable',
    logo: '/timetable.png',
  },
  {
    name: 'Loyalty Tracker',
    logo: '/logos/loyaltytracker.png',
  },
];

const footerLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
];

function BrandGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex items-center gap-12 pr-12" aria-hidden={hidden || undefined}>
      {brands.map((brand) => {
        const logo = (
          <span className="flex h-16 w-40 items-center justify-center rounded-xl bg-white px-4">
            <img
              src={brand.logo}
              alt={hidden ? '' : brand.name}
              className="h-12 w-auto max-w-[140px] object-contain"
              loading="lazy"
            />
          </span>
        );

        if (!brand.url || hidden) {
          return (
            <div key={brand.name} className="shrink-0">
              {logo}
            </div>
          );
        }

        return (
          <a
            key={brand.name}
            href={brand.url}
            target="_blank"
            rel="noreferrer"
            aria-label={brand.name}
            className="shrink-0 transition-transform hover:scale-105"
          >
            {logo}
          </a>
        );
      })}
    </div>
  );
}

export const BrandStrip: React.FC = () => {
  return (
    <div className="py-12 overflow-hidden">
      <h3 className="text-2xl font-bold text-center mb-8">
        Brands & Collaborations
      </h3>
      <div className="relative">
        <motion.div
          className="flex w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <BrandGroup />
          <BrandGroup hidden />
        </motion.div>
      </div>
    </div>
  );
};

export const FooterLinks: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToSection = (sectionId: string) => {
    if (pathname !== '/') {
      navigate({ pathname: '/', hash: sectionId });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
      {footerLinks.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => goToSection(section.id)}
          className="text-gray-300 hover:text-teal-400 transition-colors"
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy dark:bg-slate-900 text-white">
      <BrandStrip />

      <div className="border-t border-gray-700 dark:border-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2026 Shadrack Osike. All rights reserved.
            </div>
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};
