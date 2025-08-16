import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Tag, User, Search } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  category: 'entrepreneurship' | 'b2b' | 'tech' | 'development' | 'insights';
  tags: string[];
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 'b2b-entrepreneurship-2025',
    title: 'Building B2B Solutions: The Entrepreneurial Journey in Enterprise Software',
    excerpt: 'Exploring the complexities and opportunities in B2B entrepreneurship, from understanding enterprise needs to scaling solutions that drive business transformation.',
    content: `# Building B2B Solutions: The Entrepreneurial Journey

As an entrepreneur venturing into the B2B space, I've discovered that building solutions for businesses requires a fundamentally different approach than B2C products. The stakes are higher, the sales cycles longer, but the impact can be transformational.

## Understanding the B2B Landscape

B2B entrepreneurship isn't just about having a great product—it's about understanding complex organizational structures, lengthy decision-making processes, and the critical importance of reliability and scalability.

## Key Lessons from Building LoyaltyTracker

Through building LoyaltyTracker, I've learned that B2B success hinges on:
- Deep customer research and validation
- Building relationships, not just transactions
- Focusing on ROI and measurable outcomes
- Creating solutions that integrate with existing workflows

## The Future of B2B Innovation

The future belongs to B2B solutions that combine technical excellence with deep industry understanding...`,
    author: 'Shadrack Osike',
    publishDate: '2025-08-15',
    readTime: 8,
    category: 'entrepreneurship',
    tags: ['B2B', 'Entrepreneurship', 'SaaS', 'Business Strategy'],
    featured: true
  },
  {
    id: 'truck-management-development',
    title: 'Developing a Truck Management System: From Concept to Implementation',
    excerpt: 'A technical deep-dive into building a comprehensive truck management system, covering logistics optimization, real-time tracking, and fleet management challenges.',
    content: `# Developing a Truck Management System

Currently in development, our truck management system represents the intersection of logistics expertise and modern technology stack.

## Technical Architecture

Built using the MERN stack with Django backend services, the system handles:
- Real-time GPS tracking
- Route optimization algorithms
- Maintenance scheduling
- Driver management
- Fuel consumption analytics

## Key Challenges

The logistics industry presents unique challenges:
- Real-time data synchronization across multiple devices
- Handling offline functionality for remote areas
- Integrating with existing fleet management systems
- Ensuring data accuracy for compliance reporting

## Integration Strategy

We're slowly integrating various components to create a comprehensive solution that addresses the complete logistics workflow...`,
    author: 'Shadrack Osike',
    publishDate: '2025-08-10',
    readTime: 12,
    category: 'development',
    tags: ['Logistics', 'MERN Stack', 'Real-time Systems', 'Fleet Management'],
    featured: true
  },
  {
    id: 'african-tech-ecosystem',
    title: 'The Rising African Tech Ecosystem: Opportunities and Challenges',
    excerpt: 'Analyzing the rapid growth of the African tech scene, from fintech innovations to the challenges entrepreneurs face in scaling across diverse markets.',
    content: `# The Rising African Tech Ecosystem

Having participated in numerous tech events across Kenya and Africa, I've witnessed firsthand the incredible growth and potential of our tech ecosystem.

## Key Growth Areas

The African tech scene is experiencing unprecedented growth in:
- Fintech and mobile money solutions
- AgriTech addressing food security
- HealthTech improving medical access
- EdTech democratizing education

## Challenges We Face

Despite the growth, several challenges persist:
- Limited access to funding
- Infrastructure limitations
- Talent retention issues
- Regulatory uncertainties

## Success Stories and Lessons

From participating in events like DjangoCon Africa and various innovation weeks, I've learned that success in African tech requires understanding local contexts while thinking globally...`,
    author: 'Shadrack Osike',
    publishDate: '2025-08-05',
    readTime: 10,
    category: 'insights',
    tags: ['African Tech', 'Innovation', 'Entrepreneurship', 'Market Analysis'],
    featured: false
  },
  {
    id: 'hackathon-lessons',
    title: 'Lessons from Winning Hackathons: Strategy, Execution, and Team Dynamics',
    excerpt: 'Insights gained from participating in multiple hackathons, including the winning strategies that led to success at Kachiri Code Hackathon 2025.',
    content: `# Lessons from Winning Hackathons

Having participated in numerous hackathons, from ICP events to winning the Kachiri Code Hackathon, I've learned that success requires more than just coding skills.

## Winning Strategies

The key elements that consistently lead to hackathon success:
- Problem selection and validation
- Team composition and dynamics
- Time management and prioritization
- Effective presentation and storytelling

## Technical Excellence vs. Business Value

Many teams focus solely on technical complexity, but judges often look for:
- Real-world problem-solving
- Market potential
- User experience design
- Implementation feasibility

## Building Under Pressure

Hackathons teach valuable lessons about rapid prototyping and working under pressure...`,
    author: 'Shadrack Osike',
    publishDate: '2025-07-28',
    readTime: 6,
    category: 'tech',
    tags: ['Hackathons', 'Competition', 'Team Building', 'Rapid Prototyping'],
    featured: false
  }
];

const categoryColors = {
  entrepreneurship: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  b2b: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  tech: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  development: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  insights: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200'
};

export const Articles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const categories = [...new Set(articles.map(article => article.category))];

  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12 text-amber-500 mr-4" />
            <h2 className="text-4xl font-bold text-navy dark:text-white">
              Chapter Archives
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Thoughts, insights, and stories from my entrepreneurial journey. Each article is a chapter 
            in the ongoing story of building solutions that matter.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-slate-600'
              }`}
            >
              All Chapters
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-8 text-center">
              Featured Chapters
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Article Header */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} min read
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-navy dark:text-white mb-4 leading-tight">
                      {article.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Article Meta */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(article.publishDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map(tag => (
                        <span
                          key={tag}
                          className="flex items-center bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                      className="flex items-center text-amber-600 hover:text-amber-700 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      {expandedArticle === article.id ? 'Show Less' : 'Read Full Chapter'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>

                    {/* Expanded Content */}
                    {expandedArticle === article.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-600"
                      >
                        <div className="prose dark:prose-invert max-w-none">
                          <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
                            {article.content}
                          </pre>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Articles */}
        {regularArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-8 text-center">
              More Chapters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} min
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-navy dark:text-white mb-3 leading-tight">
                      {article.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                      <span>{article.author}</span>
                    </div>

                    <motion.button
                      onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                      className="flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm"
                      whileHover={{ x: 3 }}
                    >
                      Read Chapter
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.button>

                    {/* Expanded Content for Regular Articles */}
                    {expandedArticle === article.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-600"
                      >
                        <div className="prose dark:prose-invert max-w-none text-sm">
                          <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
                            {article.content}
                          </pre>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Book-like Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center bg-amber-100 dark:bg-amber-900 px-6 py-3 rounded-full">
            <BookOpen className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-amber-800 dark:text-amber-200 font-medium">
              More chapters coming soon...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
