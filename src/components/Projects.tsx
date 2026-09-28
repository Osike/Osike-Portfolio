import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'Barrizii',
    description: 'Kenya’s boat booking platform for verified sea tours — fishing trips, snorkeling, sunset cruises, and water sports along the coast. Transparent pricing with licensed, insured operators.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'MERN Stack',
    url: 'https://barrizii.com',
    image: '/barrizii-home.jpg',
  },
  {
    id: 2,
    title: 'Afiya Pal',
    description: 'AI-powered public health platform for Africa — symptom checker, trusted health education, community events, and pathways to verified doctors. Free, 24/7, in English and Swahili.',
    tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    category: 'MERN Stack',
    url: 'https://www.afiyapal.co.ke/',
    image: '/afiyapal-home.jpg',
  },
  {
    id: 3,
    title: 'Trip-Trac',
    description: 'Logistics and trip tracking system for fleet operations — manage trucks, drivers, customers, and trips with a live dashboard for revenue, fleet utilization, and route activity.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    category: 'MERN Stack',
    url: 'https://trip-trac.vercel.app/',
    image: '/triptrac-dashboard.jpg',
  },
  {
    id: 4,
    title: 'ICP Project',
    description: 'Website for Islamic Community Project (ICP) — a Kenyan nonprofit delivering clean water, orphan care, education scholarships, health support, and community infrastructure.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'MERN Stack',
    url: 'https://islamiccommunityproject.co.ke/',
  },
];

const categories = ['All', 'MERN Stack'];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy dark:text-white mb-4">
            <span className="text-teal-500">Osike's</span> Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of Shadrack Osike's technical expertise across different technologies and domains
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
              >
                {'image' in project && project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className={`w-full h-44 object-cover bg-black ${
                      project.image.includes('triptrac') ? 'object-left-top' : 'object-top'
                    }`}
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-navy dark:text-white">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="p-2 bg-gray-100 dark:bg-slate-700 rounded-full group-hover:bg-teal-100 dark:group-hover:bg-teal-900 transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-teal-500" />
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition-colors text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};