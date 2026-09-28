import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Header } from '../components/Header';
import { ArticleFooter } from '../components/ArticleFooter';
import { articles } from '../data/articles';

const categoryColors: Record<string, string> = {
  entrepreneurship: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  b2b: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  tech: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  development: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  insights: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
};

const categoryDefaults: Record<string, string> = {
  entrepreneurship: 'b2b-entrepreneurship-2025',
  development: 'truck-management-development',
  insights: 'african-tech-ecosystem',
  tech: 'hackathon-lessons',
};

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article =
    articles.find((a) => a.id === slug) ??
    articles.find((a) => slug != null && a.id === categoryDefaults[slug]) ??
    articles.find((a) => a.category === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors pt-16">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-navy dark:text-white mb-4">
            Chapter not found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            That chapter does not exist yet — or the link may be outdated.
          </p>
          <Link
            to="/#articles"
            className="inline-flex px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
          >
            Back to Chapter Archives
          </Link>
        </main>
        <ArticleFooter />
      </div>
    );
  }

  const isLoginHero = article.image?.includes('triptrac-login');
  const isPortraitHero = article.image?.includes('afribot-training');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors pt-16">
      <Header />
      {isLoginHero && (
        <section className="bg-[#F5B800]">
          <img
            src={article.image}
            alt="Trip-Trac sign in"
            className="w-full max-h-[70vh] object-contain mx-auto"
          />
        </section>
      )}
      {isPortraitHero && (
        <section className="bg-slate-900">
          <img
            src={article.image}
            alt="Shadrack Osike training at Afribot Robotics"
            className="w-full max-h-[70vh] object-cover object-top mx-auto"
          />
        </section>
      )}
      {article.image && !isLoginHero && !isPortraitHero && (
        <section className="relative h-96 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{article.title}</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">{article.excerpt}</p>
            </div>
          </div>
        </section>
      )}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <header className={`${article.image ? 'text-center' : ''} mb-8`}>
            {(!article.image || isLoginHero || isPortraitHero) && (
              <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">
                {article.title}
              </h1>
            )}
            <div
              className={`flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-4 ${
                article.image ? 'justify-center' : ''
              }`}
            >
              <span className="font-medium">{article.author}</span>
              <span>{article.publishDate}</span>
              <span>{article.readTime} min read</span>
            </div>
            <div
              className={`flex flex-wrap gap-2 mb-6 ${
                article.image ? 'justify-center' : ''
              }`}
            >
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  categoryColors[article.category] ??
                  'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}
              >
                {article.category}
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed [&_img]:my-8 [&_img]:w-full [&_img]:rounded-2xl [&_img]:shadow-lg [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy dark:[&_h2]:text-white [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_strong]:text-navy dark:[&_strong]:text-white">
            <ReactMarkdown
              components={{
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt ?? ''}
                    className={`w-full rounded-2xl shadow-lg my-8 ${
                      String(src).includes('triptrac-')
                        ? 'object-contain bg-black'
                        : 'object-cover max-h-[520px]'
                    }`}
                    loading="lazy"
                  />
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <ArticleFooter />
    </div>
  );
};

export default ArticlePage;
