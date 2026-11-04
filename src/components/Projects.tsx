import React, { useEffect, useRef, useState } from 'react';
import { projects, type Project } from '../data/projects';

const host = (url: string) => new URL(url).hostname.replace(/^www\./, '');

function SitePreview({ project }: { project: Project }) {
  const [ready, setReady] = useState(false);
  const viewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = viewRef.current;
    if (!el) return undefined;
    const sync = () => {
      el.style.setProperty('--preview-scale', String((el.clientWidth || 1280) / 1280));
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="o-proj-shot">
      <div className={`o-frame ${ready ? 'is-ready' : 'is-loading'}`}>
        <div className="o-frame-bar">
          <i />
          <i />
          <i />
          <span className="o-frame-url">{host(project.url)}</span>
        </div>
        <div className="o-frame-view" ref={viewRef}>
          {project.image ? <img src={project.image} alt="" aria-hidden="true" /> : null}
          <iframe
            src={project.url}
            title={`${project.title} live landing page`}
            loading="lazy"
            onLoad={() => setReady(true)}
          />
          <a
            className="o-frame-hit"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${project.title}`}
          />
        </div>
      </div>
    </div>
  );
}

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="o-wrap o-sec">
      <div className="o-sec-head">
        <div className="o-sec-no">
          02<b>Selected work</b>
        </div>
        <h2 className="o-sec-title">
          Products built for <em>real</em> people and places.
        </h2>
      </div>

      <div className="o-work">
        {projects.map((project, index) => (
          <article key={project.title} className="o-proj">
            <div className="o-proj-info">
              <div className="o-proj-meta">
                <span className="o-no">
                  {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <span>{project.sector}</span>
              </div>
              <h3>{project.title}</h3>
              <div className="o-proj-role">{project.role}</div>
              <p>{project.description}</p>
              <div className="o-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a className="o-proj-visit" href={project.url} target="_blank" rel="noreferrer">
                {host(project.url)} <span aria-hidden="true">↗</span>
              </a>
            </div>

            <SitePreview project={project} />
          </article>
        ))}
      </div>
    </section>
  );
};
