import React from 'react';
import { projects } from '../data/projects';

const host = (url: string) => new URL(url).hostname.replace(/^www\./, '');

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

            {project.image ? (
              <a className="o-proj-shot" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                <div className="o-frame">
                  <div className="o-frame-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <img src={project.image} alt={`${project.title} home page`} loading="lazy" />
                </div>
              </a>
            ) : (
              <div className="o-proj-shot is-type">
                <div className="o-big">ICP</div>
                <div className="o-pillars">
                  {project.pillars?.map((pillar) => (
                    <span key={pillar}>{pillar}</span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
