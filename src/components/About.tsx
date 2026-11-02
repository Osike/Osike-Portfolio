import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="o-wrap o-sec">
      <div className="o-about">
        <div className="o-sec-no">
          01<b>About</b>
        </div>
        <p className="o-about-lead">
          Entrepreneurial vision, technical depth, and <em>genuine empathy</em> for the people on
          the other side of the screen.
        </p>
        <div className="o-about-copy">
          <p>
            I’m the founder of Barrizii and a software engineer specialising in the MERN stack and
            Django + Python. I’ve built across healthcare, logistics, tourism and community work.
          </p>
          <p>
            My work goes beyond writing code — it’s about understanding problems deeply, crafting
            clear solutions, and making sure technology serves the people who rely on it.
          </p>
          <blockquote>
            “Technology that doesn’t just work — it transforms experiences and creates lasting
            value.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};
