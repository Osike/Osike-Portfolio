import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const timeline = [
  {
    type: 'education',
    title: 'BTIT — Technical University of Mombasa',
    subtitle: 'Bachelor of Technology in Information Technology',
    period: '2022 - 2026',
    description: 'Comprehensive study in software development, database systems, and network technologies.',
  },
  {
    type: 'education',
    title: 'Power Learn Project',
    subtitle: 'Software Engineering Certification',
    period: '2025',
    description: 'Intensive program focused on full-stack development and modern software engineering practices.',
  },
  {
    type: 'experience',
    title: 'AFRIBOT',
    subtitle: 'Software Engineer',
    period: 'Present',
    description: 'Building innovative software solutions and contributing to cutting-edge technology projects.',
  },
  {
    type: 'experience',
    title: 'Swahilipot Hub Foundation',
    subtitle: 'Software Engineer Intern',
    period: 'May 2025 - Aug 2025',
    description: 'Developed web applications and contributed to community-focused tech initiatives.',
  },
  {
    type: 'experience',
    title: 'Power Learn Project',
    subtitle: 'Volunteer — Ticketing Manager & Technical Support',
    period: 'Present',
    description: 'Managed technical support systems and provided mentorship to emerging developers.',
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy dark:text-white mb-4">
            Education & Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            My journey of learning and professional growth
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-slate-600" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline icon */}
                <div className="relative z-10 w-16 h-16 bg-white dark:bg-slate-900 border-4 border-teal-500 rounded-full flex items-center justify-center mr-6">
                  {item.type === 'education' ? (
                    <AcademicCapIcon className="w-6 h-6 text-teal-500" />
                  ) : (
                    <BriefcaseIcon className="w-6 h-6 text-teal-500" />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-navy dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-teal-500 bg-teal-100 dark:bg-teal-900 px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};