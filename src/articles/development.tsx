import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Header } from '../components/Header';
import { ArticleFooter } from '../components/ArticleFooter';
import { articles } from '../data/articles';

const Development: React.FC = () => {
  const article = articles.find(a => a.category === 'development')!;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header />
      {article.image && (
        <section className="relative h-96 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{article.title}</h1>
              <p className="text-xl max-w-2xl mx-auto">{article.excerpt}</p>
            </div>
          </div>
        </section>
      )}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          {!article.image && (
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center">
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center">
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center">
                  <span>{article.readTime} min read</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                {article.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </header>
          )}
          {article.image && (
            <header className="mb-8 text-center">
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center">
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center">
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center">
                  <span>{article.readTime} min read</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                {article.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </header>
          )}
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <ReactMarkdown>{article.content}</ReactMarkdown>
            
            {/* Additional visual elements for development article */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg transform -rotate-1 group-hover:-rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Modern Tech Stack</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Built with cutting-edge technologies for optimal performance and scalability.</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl transform -rotate-1 group-hover:-rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive data visualization and insights for informed decision making.</p>
                </div>
              </div>
            </div>
            
            {/* Featured images section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Development Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5d6f1a1c8b8?q=80&w=600&h=400&fit=crop" 
                    alt="Modern development workspace" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">💻 Modern Workspace</p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&h=400&fit=crop" 
                    alt="Collaborative problem solving" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">🤝 Team Collaboration</p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&h=400&fit=crop" 
                    alt="Continuous learning and growth" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">📚 Learning & Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <ArticleFooter />
    </div>
  );
};

export default Development;