import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/osike.jpg"
                alt="Shadrack Osike - Software Engineer and Tech Entrepreneur profile picture"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-teal-200 dark:bg-teal-800 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-navy dark:text-white mb-8">
              About <span className="text-teal-500">Osike</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm <strong>Shadrack Osike</strong>, Co-founder of LoyaltyTracker. I bring a unique blend of entrepreneurial vision 
                and technical expertise to every project. My journey in technology is driven by a 
                passion for creating solutions that make a real difference in people's lives.
              </p>
              
              <p>
                Specializing in full-stack development with the MERN stack and Django + Python, 
                I've had the privilege of building transformative solutions that span multiple 
                industries. From healthcare applications to logistics platforms, each project 
                presents an opportunity to push technological boundaries.
              </p>
              
              <p>
                My work extends beyond writing code—it's about understanding problems deeply, 
                crafting elegant solutions, and ensuring that technology serves humanity. Through 
                multiple impactful tech projects, I've learned that the best solutions emerge 
                when technical excellence meets genuine empathy for user needs.
              </p>
              
              <p className="text-teal-500 font-semibold italic">
                "I believe in building technology that doesn't just work—it transforms experiences 
                and creates lasting value for those who use it."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};