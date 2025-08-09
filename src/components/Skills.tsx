import React from 'react';
import { motion } from 'framer-motion';

const coreStacks = [
  'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Django', 'Python'
];

const otherTools = [
  'REST APIs', 'Git', 'Firebase', 'Stripe', 'Figma', 'Agile Development'
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy dark:text-white mb-4">
            My Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-8 text-center">
              Core Stacks
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {coreStacks.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-4 rounded-xl text-center font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-8 text-center">
              Other Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {otherTools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 p-4 rounded-xl text-center font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};