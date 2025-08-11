import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="public/group.jpg"
          alt="Technology Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80 dark:bg-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.blockquote
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            "Build tech that solves{' '}
            <span className="text-teal-400">real problems</span>, with{' '}
            <span className="text-teal-400">clarity</span>,{' '}
            <span className="text-teal-400">empathy</span>, and{' '}
            <span className="text-teal-400">impact</span>."
          </motion.blockquote>
          
          <motion.div
            className="w-24 h-1 bg-teal-400 mx-auto mt-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
};