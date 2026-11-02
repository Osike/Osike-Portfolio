import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { events, type Event } from '../data/events';
import { chapterNumber } from '../data/chapters';

const typeFilters: { id: Event['type'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'hackathon', label: 'Hackathons' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'conference', label: 'Conferences' },
  { id: 'meetup', label: 'Meetups' },
  { id: 'summit', label: 'Summits' },
];

const isPodium = (achievement?: string) =>
  /winner|runner|place|position/i.test(achievement ?? '');

const COLLAPSED_YEARS = 3;

export const Events: React.FC = () => {
  const [type, setType] = useState<Event['type'] | 'all'>('all');
  const [showAll, setShowAll] = useState(false);

  const years = useMemo(() => {
    const filtered = events.filter((event) => {
      if (type !== 'all' && event.type !== type) return false;
      if (!showAll && type === 'all' && !event.highlight) return false;
      return true;
    });
    const grouped = new Map<number, Event[]>();
    filtered.forEach((event) => {
      grouped.set(event.year, [...(grouped.get(event.year) ?? []), event]);
    });
    return [...grouped.entries()].sort(([a], [b]) => b - a);
  }, [type, showAll]);

  const visibleYears = showAll ? years : years.slice(0, COLLAPSED_YEARS);

  return (
    <section id="events" className="o-wrap o-sec">
      <div className="o-sec-head">
        <div className="o-sec-no">
          05<b>Field log</b>
        </div>
        <h2 className="o-sec-title">
          Hackathons, workshops and <em>rooms</em> worth being in.
        </h2>
      </div>

      <div className="o-log-foot">
        <div className="o-filters" role="group" aria-label="Filter events by type">
          {typeFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`o-chip ${type === filter.id ? 'is-on' : ''}`}
              aria-pressed={type === filter.id}
              onClick={() => setType(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {years.length > COLLAPSED_YEARS && (
          <button type="button" className="o-link-btn" onClick={() => setShowAll((all) => !all)}>
            {showAll ? 'Show recent years' : `View all ${events.length} events`}{' '}
            <span aria-hidden="true">{showAll ? '↑' : '→'}</span>
          </button>
        )}
      </div>

      {visibleYears.length === 0 ? (
        <p className="o-empty">No events of this type yet.</p>
      ) : (
        <div className="o-log">
          {visibleYears.map(([year, items]) => (
            <div key={year} className="o-log-year">
              <div className="o-log-yr">
                {year}
                <small>
                  {items.length} {items.length === 1 ? 'entry' : 'entries'}
                </small>
              </div>
              {items.map((event) => (
                <div key={event.id} className="o-log-item">
                  <h4>{event.title}</h4>
                  <div className="o-log-where">{event.location}</div>
                  <div className="o-badges">
                    {event.achievement ? (
                      <span className={`o-badge ${isPodium(event.achievement) ? 'is-win' : ''}`}>
                        {event.achievement}
                      </span>
                    ) : (
                      <span className="o-badge">{event.type}</span>
                    )}
                    {event.articleId && (
                      <Link to={`/articles/${event.articleId}`} className="o-badge is-chapter">
                        Read Chapter {chapterNumber(event.articleId)} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
