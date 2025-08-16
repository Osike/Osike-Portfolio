import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, ExternalLink, Award } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  year: number;
  location: string;
  type: 'hackathon' | 'conference' | 'meetup' | 'workshop' | 'summit';
  achievement?: string;
  description: string;
  image?: string;
  linkedinLink?: string;
  instagramLink?: string;
}

const events: Event[] = [
  // 2025 Events
  {
    id: 'kachiri-2025',
    title: 'Kachiri Code Hackathon',
    year: 2025,
    location: 'Kenya',
    type: 'hackathon',
    achievement: 'Winner',
    description: 'Emerged victorious in this competitive coding hackathon, showcasing innovative solutions.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack',
    instagramLink: 'https://instagram.com/hp_brains'
  },
  {
    id: 'icp-tum-2025',
    title: 'ICP TUM Innovation Week',
    year: 2025,
    location: 'Technical University of Mombasa',
    type: 'hackathon',
    achievement: '4th Position',
    description: 'Secured 4th position in the Internet Computer Protocol hackathon at TUM Innovation Week.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack',
    instagramLink: 'https://instagram.com/hp_brains'
  },
  {
    id: 'djangocon-2025',
    title: 'DjangoCon Africa',
    year: 2025,
    location: 'Africa',
    type: 'conference',
    description: 'Participated in the premier Django conference for African developers, learning latest trends.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'gdg-pwani-2025',
    title: 'Build with AI - GDG Pwani',
    year: 2025,
    location: 'Pwani, Kenya',
    type: 'workshop',
    description: 'Explored cutting-edge AI development tools and techniques with Google Developer Group.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'depin-summit-2025',
    title: 'DePIN Summit',
    year: 2025,
    location: 'Mombasa',
    type: 'summit',
    description: 'Attended the Decentralized Physical Infrastructure Networks summit, exploring blockchain infrastructure.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'edtech-2025',
    title: 'Ed-Tech Event',
    year: 2025,
    location: 'iHub & SwahiliPot',
    type: 'conference',
    description: 'Explored educational technology innovations and their impact on learning.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'tum-innovation-2025',
    title: 'TUM Innovation Week',
    year: 2025,
    location: 'Technical University of Mombasa',
    type: 'conference',
    description: 'Participated in innovation-focused discussions and tech showcases.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'texas-meetup-2025',
    title: 'University of Texas Meetup',
    year: 2025,
    location: 'SwahiliPot Hub',
    type: 'meetup',
    description: 'Networked with international students and professionals from University of Texas.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'pitching-thursdays-2025',
    title: 'Pitching Thursdays',
    year: 2025,
    location: 'SwahiliPot Hub',
    type: 'meetup',
    description: 'Regular participation in startup pitching sessions and entrepreneurship discussions.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'men-conference-2025',
    title: 'Men Conference - Mental Awareness',
    year: 2025,
    location: 'Kenya',
    type: 'conference',
    description: 'Participated in mental health awareness event focusing on men\'s mental wellness.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'binance-africa-2025',
    title: 'Binance Africa',
    year: 2025,
    location: 'Africa',
    type: 'conference',
    description: 'Attended Binance Africa event exploring cryptocurrency and blockchain developments.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },

  // 2024 Events
  {
    id: 'icp-pwani-2024',
    title: 'ICP Pwani Innovation Week',
    year: 2024,
    location: 'Pwani, Kenya',
    type: 'hackathon',
    achievement: '2nd Runner-up',
    description: 'Secured second runner-up position in the Internet Computer Protocol hackathon.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack',
    instagramLink: 'https://instagram.com/hp_brains'
  },
  {
    id: 'pwani-devfest-2024',
    title: 'Pwani DevFest',
    year: 2024,
    location: 'Pwani, Kenya',
    type: 'conference',
    description: 'Participated in Google Developer Group\'s flagship annual developer conference.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'django-meetup-2024',
    title: 'Django Social Meetup',
    year: 2024,
    location: 'Mombasa',
    type: 'meetup',
    description: 'Connected with Django developers and shared experiences in web development.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'pwani-innovation-2024',
    title: 'Pwani Innovation Week',
    year: 2024,
    location: 'Pwani, Kenya',
    type: 'conference',
    description: 'Engaged in innovation discussions and tech entrepreneurship sessions.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'aya-hq-2024',
    title: 'Aya HQ TUM Workshop',
    year: 2024,
    location: 'Technical University of Mombasa',
    type: 'workshop',
    description: 'Participated in technical workshop focusing on software development practices.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },

  // 2023 Events
  {
    id: 'pwani-devfest-2023',
    title: 'Pwani DevFest',
    year: 2023,
    location: 'Pwani, Kenya',
    type: 'conference',
    description: 'Continued learning journey at the annual Google Developer Group conference.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },

  // 2022 Events
  {
    id: 'pwani-devfest-2022',
    title: 'Pwani DevFest',
    year: 2022,
    location: 'Pwani, Kenya',
    type: 'conference',
    description: 'Early career participation in tech community events and developer conferences.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  }
];

const typeColors = {
  hackathon: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  conference: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  meetup: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  workshop: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  summit: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
};

const typeIcons = {
  hackathon: Trophy,
  conference: Users,
  meetup: Users,
  workshop: Award,
  summit: Award
};

export const Events: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<string | 'all'>('all');

  const years = [...new Set(events.map(event => event.year))].sort((a, b) => b - a);
  const types = [...new Set(events.map(event => event.type))];

  const filteredEvents = events.filter(event => {
    const yearMatch = selectedYear === 'all' || event.year === selectedYear;
    const typeMatch = selectedType === 'all' || event.type === selectedType;
    return yearMatch && typeMatch;
  }).sort((a, b) => b.year - a.year);

  const eventsByYear = filteredEvents.reduce((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = [];
    }
    acc[event.year].push(event);
    return acc;
  }, {} as Record<number, Event[]>);

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy dark:text-white mb-4">
            Events & Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A journey through hackathons, conferences, workshops, and tech community events. 
            Each experience has shaped my growth as a developer and entrepreneur.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {/* Year Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedYear === 'all'
                  ? 'bg-teal-500 text-white'
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-slate-600'
              }`}
            >
              All Years
            </button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedYear === year
                    ? 'bg-teal-500 text-white'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-slate-600'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === 'all'
                  ? 'bg-navy dark:bg-slate-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
              }`}
            >
              All Types
            </button>
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedType === type
                    ? 'bg-navy dark:bg-slate-600 text-white'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events Timeline */}
        <div className="space-y-16">
          {Object.entries(eventsByYear).map(([year, yearEvents], yearIndex) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: yearIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Year Header */}
              <div className="flex items-center mb-8">
                <div className="bg-teal-500 text-white px-6 py-3 rounded-full font-bold text-xl">
                  {year}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-teal-500 to-transparent ml-4"></div>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearEvents.map((event, eventIndex) => {
                  const TypeIcon = typeIcons[event.type];
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Event Header */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                              <TypeIcon className="w-5 h-5 text-teal-500" />
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[event.type]}`}>
                              {event.type}
                            </span>
                          </div>
                          {event.achievement && (
                            <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-bold">
                              {event.achievement}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-navy dark:text-white mb-2">
                          {event.title}
                        </h3>

                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {event.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-3">
                          {event.linkedinLink && (
                            <motion.a
                              href={event.linkedinLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>LinkedIn</span>
                            </motion.a>
                          )}
                          {event.instagramLink && (
                            <motion.a
                              href={event.instagramLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Instagram</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-navy dark:text-white text-center mb-8">
            Event Participation Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {types.map(type => {
              const count = events.filter(event => event.type === type).length;
              const TypeIcon = typeIcons[type];
              return (
                <div key={type} className="text-center">
                  <div className="p-4 bg-teal-100 dark:bg-teal-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <TypeIcon className="w-8 h-8 text-teal-500" />
                  </div>
                  <div className="text-2xl font-bold text-navy dark:text-white">{count}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm capitalize">{type}s</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
// so yeah I want to change this portfoilio to be more of a book like to have a book structure in maneer that one can read ...under the events and i'll also start writing articles about anything it comes in my mind actually I'll write some article about entraprenurship ---targeting the b2b structure ......curently developing a truck managemnt system and slowly i'll be integrating 
