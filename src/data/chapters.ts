import { articles, type Article } from './articles';

export const chaptersOldestFirst: Article[] = [...articles].sort(
  (a, b) => a.publishDate.localeCompare(b.publishDate) || a.id.localeCompare(b.id)
);

export const chaptersNewestFirst: Article[] = [...chaptersOldestFirst].reverse();

export const chapterNumber = (id: string) =>
  String(chaptersOldestFirst.findIndex((a) => a.id === id) + 1).padStart(2, '0');

export const nextChapter = (id: string) => {
  const index = chaptersOldestFirst.findIndex((a) => a.id === id);
  return chaptersOldestFirst[(index + 1) % chaptersOldestFirst.length];
};

export const categoryLabels: Record<Article['category'], string> = {
  entrepreneurship: 'Entrepreneurship',
  b2b: 'B2B',
  tech: 'Tech',
  development: 'Development',
  insights: 'Insights',
};

export const formatChapterDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
