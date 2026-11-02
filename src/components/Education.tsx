import React from 'react';
import { certifications, degree, experience } from '../data/journey';

const degreeProgress = () => {
  const start = new Date(degree.start).getTime();
  const end = new Date(degree.end).getTime();
  const ratio = (Date.now() - start) / (end - start);
  return Math.round(Math.min(1, Math.max(0, ratio)) * 100);
};

export const Education: React.FC = () => {
  const progress = degreeProgress();

  return (
    <section id="education" className="o-wrap o-sec">
      <div className="o-sec-head">
        <div className="o-sec-no">
          04<b>Journey</b>
        </div>
        <h2 className="o-sec-title">
          Learning in classrooms, <em>shipping</em> in the field.
        </h2>
      </div>

      <div className="o-journey">
        <div>
          <div className="o-col-h">
            <h3>Experience</h3>
            <span>{experience.length} roles · 2022 — today</span>
          </div>
          {experience.map((role) => (
            <div key={role.org} className="o-row">
              <div className="o-when">
                {role.when}
                {role.current && <span className="o-now">Now</span>}
              </div>
              <div>
                <h4>{role.org}</h4>
                <div className="o-row-what">
                  {role.title} <span>· {role.where}</span>
                </div>
                {role.description && <p>{role.description}</p>}
                {role.points && (
                  <ul className="o-points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {role.steps && (
                  <div className="o-steps">
                    {role.steps.map((step, index) => (
                      <div key={step.label} className="o-step">
                        <div className="o-step-dot">{index + 1}</div>
                        <div>
                          <b>{step.label}</b>
                          <p>{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="o-col-h">
            <h3>Education</h3>
            <span>Degree</span>
          </div>
          <div className="o-degree">
            <div className="o-when">{degree.when}</div>
            <h4>{degree.org}</h4>
            <div className="o-degree-what">{degree.title}</div>
            <div className="o-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
              <i style={{ width: `${progress}%` }} />
            </div>
            <div className="o-bar-cap">
              {progress >= 100 ? 'Graduated November 2026' : 'Final year · graduating November 2026'}
            </div>
          </div>

          <div className="o-col-h" style={{ marginTop: 56 }}>
            <h3>Certifications</h3>
            <span>{certifications.length} credentials</span>
          </div>
          {certifications.map((cert) => (
            <div key={`${cert.issuer}-${cert.name}`} className="o-cert">
              <div>
                <h5>{cert.name}</h5>
                <span>{cert.issuer}</span>
              </div>
              <div className="o-when">{cert.when}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
