import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown, { type Components } from 'react-markdown';
import { ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { articles, type Article } from '../data/articles';
import {
  categoryLabels,
  chapterNumber,
  formatChapterDate,
  nextChapter,
} from '../data/chapters';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { ChapaaArchitecture } from './ChapaaArchitecture';
import { AfricasTalkingMombasaStory } from './AfricasTalkingMombasaStory';

const ARCH_MARKER = '{{chapaa-architecture}}';

const categoryDefaults: Record<string, string> = {
  entrepreneurship: 'b2b-entrepreneurship-2025',
  development: 'truck-management-development',
  insights: 'african-tech-ecosystem',
  tech: 'hackathon-lessons',
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const plainHeading = (markdown: string) =>
  markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim();

function extractHeadings(content: string) {
  const headings: { text: string; slug: string }[] = [];
  let inFence = false;
  for (const line of content.split('\n')) {
    if (line.trim().startsWith('```')) inFence = !inFence;
    if (inFence) continue;
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      const text = plainHeading(match[1]);
      headings.push({ text, slug: slugify(text) });
    }
  }
  return headings;
}

const textOf = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) return textOf(node.props.children);
  return '';
};

function Figure({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className={src.includes('triptrac-') ? 'is-contain' : ''}>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      {alt && <figcaption>{alt}</figcaption>}
    </figure>
  );
}

function useMarkdownComponents(article: Article, slugs: string[]): Components {
  return useMemo(
    () => ({
      h1: () => null,
      h2: ({ children }) => {
        const slug = slugify(plainHeading(textOf(children)));
        const index = slugs.indexOf(slug);
        return (
          <h2 id={slug}>
            {index >= 0 && <span className="o-n">{String(index + 1).padStart(2, '0')}</span>}
            {children}
          </h2>
        );
      },
      p: ({ node, children }) => {
        const only = node?.children.length === 1 ? node.children[0] : undefined;
        if (only?.type === 'element' && only.tagName === 'img') return <>{children}</>;
        return <p>{children}</p>;
      },
      img: ({ src, alt }) => {
        if (!src || src === article.image) return null;
        return <Figure src={String(src)} alt={alt ?? ''} />;
      },
      a: ({ href, children }) => (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ),
    }),
    [article.image, slugs]
  );
}

function Cover({ article }: { article: Article }) {
  const no = chapterNumber(article.id);
  if (!article.image) {
    return (
      <div className="o-cover is-type">
        <div className="o-cover-cat">
          {categoryLabels[article.category]} · {article.tags.slice(0, 3).join(' · ')}
        </div>
        <div className="o-big" aria-hidden="true">
          {no}
        </div>
        <div className="o-cover-lines" aria-hidden="true">
          {[320, 240, 280, 160, 220].map((width) => (
            <i key={width} style={{ width }} />
          ))}
        </div>
      </div>
    );
  }
  const variant = article.image.includes('triptrac-login')
    ? 'is-contain'
    : article.image.includes('afribot-training')
      ? 'is-top'
      : '';
  return (
    <div className={`o-cover ${variant}`}>
      <img src={article.image} alt="" />
    </div>
  );
}

function Chapter({ article }: { article: Article }) {
  const headings = useMemo(() => extractHeadings(article.content), [article.content]);
  const slugs = useMemo(() => headings.map((h) => h.slug), [headings]);
  const components = useMarkdownComponents(article, slugs);
  const activeSlug = useScrollSpy(slugs);
  const no = chapterNumber(article.id);
  const next = nextChapter(article.id);
  const [before, after] = article.content.split(ARCH_MARKER);

  return (
    <main className="o-wrap">
      <div className="o-crumb">
        <Link to="/#articles">Chapters</Link> / <b>{categoryLabels[article.category]}</b>
      </div>

      <header className="o-ch-head">
        <div className="o-ch-side">
          <div className="o-no">{no}</div>
          <dl>
            <div>
              <dt>Published</dt>
              <dd>{formatChapterDate(article.publishDate)}</dd>
            </div>
            <div>
              <dt>Reading time</dt>
              <dd>{article.readTime} minutes</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{categoryLabels[article.category]}</dd>
            </div>
          </dl>
        </div>
        <div>
          <div className="o-kicker">
            <span className="o-dot" />
            Chapter {no} · {categoryLabels[article.category]}
          </div>
          <h1 className="o-ch-title">{article.title}</h1>
          <p className="o-ch-dek">{article.excerpt}</p>
          <div className="o-byline">
            <img src="/pik.jpg" alt="" />
            <div>
              <strong>{article.author}</strong>
              <span>Software engineer &amp; founder, Barrizii</span>
            </div>
          </div>
        </div>
      </header>

      <Cover article={article} />

      <div className="o-ch-body">
        <aside className="o-toc">
          <h5>In this chapter</h5>
          {headings.map((heading, index) => (
            <a
              key={heading.slug}
              href={`#${heading.slug}`}
              className={activeSlug === heading.slug ? 'is-on' : ''}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById(heading.slug)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <b>{String(index + 1).padStart(2, '0')}</b>
              {heading.text}
            </a>
          ))}
          <div className="o-tagset">
            {article.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </aside>

        <article className="o-prose">
          <ReactMarkdown components={components}>{before}</ReactMarkdown>
          {after !== undefined && (
            <>
              <ChapaaArchitecture />
              <ReactMarkdown components={components}>{after}</ReactMarkdown>
            </>
          )}
        </article>
      </div>

      <section className="o-end">
        <div />
        <div className="o-author">
          <img src="/pik.jpg" alt="" />
          <div>
            <h5>Written by Shadrack Osike</h5>
            <p>
              Software engineer and founder of Barrizii. Writing chapters from the build, the field
              and the community in Mombasa.
            </p>
          </div>
        </div>
      </section>

      <Link to={`/articles/${next.id}`} className="o-next">
        <div>
          <div className="o-kicker">Next · Chapter {chapterNumber(next.id)}</div>
          <h3>{next.title}</h3>
        </div>
        <div className="o-next-go">
          <ArrowRight size={30} />
        </div>
      </Link>
    </main>
  );
}

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article =
    articles.find((a) => a.id === slug) ??
    articles.find((a) => slug != null && a.id === categoryDefaults[slug]) ??
    articles.find((a) => a.category === slug);

  return (
    <div className="o-page">
      <Header />
      {!article ? (
        <main className="o-wrap o-missing">
          <div className="o-kicker">
            <span className="o-dot" />
            Chapter not found
          </div>
          <h1 style={{ marginTop: 20 }}>This page hasn’t been written yet.</h1>
          <p>That chapter does not exist yet — or the link may be outdated.</p>
          <Link to="/#articles" className="o-btn o-btn-primary">
            Back to the chapter archives
          </Link>
        </main>
      ) : article.id === 'africastalking-mombasa' ? (
        <AfricasTalkingMombasaStory />
      ) : (
        <Chapter key={article.id} article={article} />
      )}
      <Footer />
    </div>
  );
};

export default ArticlePage;
