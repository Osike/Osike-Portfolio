import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="o-quote-band">
      <img src="/group.jpg" alt="" loading="lazy" />
      <div className="o-shade" />
      <div className="o-wrap o-quote-inner">
        <div className="o-kicker" style={{ color: 'var(--aqua)' }}>
          03 · Philosophy
        </div>
        <blockquote>
          “Build tech that solves real problems — with <em>clarity</em>, <em>empathy</em> and{' '}
          <em>impact</em>.”
        </blockquote>
        <div className="o-by">— Shadrack Osike</div>
      </div>
    </section>
  );
};
