import React from 'react';
import { BrandStrip, FooterLinks } from './Footer';

export const ArticleFooter: React.FC = () => {
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
