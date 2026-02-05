import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Header } from '../components/Header';
import { ArticleFooter } from '../components/ArticleFooter';
import { articles } from '../data/articles';

const Tech: React.FC = () => {
  const article = articles.find(a => a.category === 'tech')!;

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
                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
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
                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
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
          </div>
        </article>
      </main>
      <ArticleFooter />
    </div>
  );
};

export default Tech;