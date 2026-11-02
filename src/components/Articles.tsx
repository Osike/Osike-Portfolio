import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../data/articles';
import {
  categoryLabels,
  chapterNumber,
  chaptersNewestFirst,
  formatChapterDate,
} from '../data/chapters';

const [featured, ...others] = chaptersNewestFirst;
const categories = [...new Set(others.map((article) => article.category))];

export const Articles: React.FC = () => {
  const [category, setCategory] = useState<Article['category'] | 'all'>('all');
  const list = others.filter((article) => category === 'all' || article.category === category);

  return (
    <section id="articles" className="o-wrap o-sec">
      <div className="o-sec-head">
        <div className="o-sec-no">
          06<b>Chapter archives</b>
        </div>
        <h2 className="o-sec-title">
          Notes from the build — <em>written</em> as I go.
        </h2>
      </div>

      <div className="o-chapters">
        <Link to={`/articles/${featured.id}`} className="o-ch-feature">
          {featured.image && <img src={featured.image} alt="" loading="lazy" />}
          <div className="o-shade" />
          <div className="o-ch-feature-inner">
            <div className="o-kicker">
              Chapter {chapterNumber(featured.id)} · Latest · {featured.readTime} min read
            </div>
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
            <span className="o-btn o-btn-primary">
              Read the chapter <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>

        <div>
          <div className="o-ch-filters" role="group" aria-label="Filter chapters by category">
            <button
              type="button"
              className={`o-chip ${category === 'all' ? 'is-on' : ''}`}
              aria-pressed={category === 'all'}
              onClick={() => setCategory('all')}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`o-chip ${category === cat ? 'is-on' : ''}`}
                aria-pressed={category === cat}
                onClick={() => setCategory(cat)}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
          {list.map((article) => (
            <Link key={article.id} to={`/articles/${article.id}`} className="o-ch-row">
              <div className="o-no">{chapterNumber(article.id)}</div>
              <div>
                <h4>{article.title}</h4>
                <div className="o-ch-meta">
                  {categoryLabels[article.category]} · {article.readTime} min ·{' '}
                  {formatChapterDate(article.publishDate)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
