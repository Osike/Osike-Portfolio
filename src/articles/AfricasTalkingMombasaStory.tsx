import React, { useEffect, useRef, useState } from 'react';
import './mombasa-story.css';

const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap';

const photo = (name: string) => `/at-mombasa/${name}`;
const logo = photo('africas-talking-logo.png');

const sectionLinks = [
  ['01', 'Why it mattered', 'why'],
  ['02', 'What we covered', 'covered'],
  ['03', 'Beyond the code', 'panel'],
  ['04', 'The bigger lesson', 'lesson'],
  ['05', 'Resources', 'resources'],
];

const services = ['SMS', 'USSD', 'Webhooks', 'Voice', 'WhatsApp', 'Airtime'];

const themes = [
  [
    'Winning customer trust',
    'Trust is not something a startup demands from users—it is something it earns by building with them. Users are not just customers or data points; their feedback and daily realities should shape the product from the beginning.',
  ],
  [
    'Fall in love with the idea first',
    'Funding should not be the starting point. Understand the problem deeply, test with real users, and show commitment. Grants, equity, and debt each fit a different stage and goal.',
  ],
  [
    'Shorten idea to product',
    'Emmanuel Madanga emphasized speed: bootstrap early, get a version into users’ hands, learn quickly, and improve. Start small, move fast, and build momentum.',
  ],
];

const ussdUses = [
  'Checking availability for boat rides or tours',
  'Registering for events or services',
  'Collecting customer feedback',
  'Providing account or order status',
  'Creating simple service menus for businesses without a full mobile app',
];

const flow = [
  'A customer sends a message',
  'A USSD menu guides them',
  'A webhook updates the system',
  'An SMS confirms the action',
];

const resources = [
  {
    type: 'Slides',
    title: 'Session presentation',
    text: 'Review the concepts, examples, and practical exercises from the Mombasa session.',
    href: 'https://canva.link/7mkugcqt7xrpwdt',
    action: 'Open in Canva',
  },
  {
    type: 'GitHub',
    title: 'Webhooks starter',
    text: 'Receive real-time delivery reports, incoming messages, and service events.',
    href: 'https://github.com/Osike/webhooks',
    action: 'View repository',
  },
  {
    type: 'GitHub',
    title: 'USSD starter',
    text: 'Build an interactive mobile menu that works without an app or mobile data.',
    href: 'https://github.com/Osike/ussdAT',
    action: 'View repository',
  },
  {
    type: 'GitHub',
    title: 'SMS API starter',
    text: 'Send messages programmatically and explore practical communication workflows.',
    href: 'https://github.com/Osike/ATsmsapi',
    action: 'View repository',
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-link">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionHeading({
  number,
  eyebrow,
  children,
}: {
  number: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <header className="section-heading">
      <div className="section-number">{number}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </header>
  );
}

function ChapterMenu() {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!wrap.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="chapter-menu" ref={wrap}>
      <button
        type="button"
        className={`chapter-menu-btn ${open ? 'is-open' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        In this chapter
        <span aria-hidden="true">{open ? '↑' : '↓'}</span>
      </button>
      {open && (
        <nav className="chapter-menu-list" aria-label="In this chapter">
          {sectionLinks.map(([number, label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              <b>{number}</b>
              {label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

export const AfricasTalkingMombasaStory: React.FC = () => {
  useEffect(() => {
    if (document.querySelector(`link[href="${FONT_HREF}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="at-story">
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-kicker-row">
              <div className="hero-kicker">
                <span>Field report</span>
                <span className="dot" />
                <span>Mombasa, Kenya</span>
                <span className="dot" />
                <span>24 Oct 2026</span>
              </div>
              <ChapterMenu />
            </div>
            <h1>
              Building practical <em>communication tools</em> with Africa&apos;s Talking
            </h1>
            <p className="hero-deck">
              Reflections from a hands-on session where developers, founders, and students
              explored how SMS, USSD, and webhooks can become useful products for Kenyan
              communities.
            </p>
            <a
              className="sponsor-lockup"
              href="https://africastalking.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Event sponsored by Africa's Talking"
            >
              <span>Event sponsored by</span>
              <img src={logo} alt="Africa's Talking" />
              <strong>Africa&apos;s Talking</strong>
            </a>
            <div className="byline">
              <div className="avatar" aria-hidden="true">
                SO
              </div>
              <div>
                <strong>Shadrack Osike · Session reflections</strong>
                <span>10 min read · Mombasa tech community</span>
              </div>
            </div>
          </div>

          <figure className="hero-image-wrap">
            <img
              src={photo('workshop-collaboration.webp')}
              alt="Developers collaborating around laptops during a workshop"
              className="hero-image"
            />
            <div className="hero-sticker" aria-hidden="true">
              <span>Build for</span>
              <strong>every</strong>
              <span>phone</span>
            </div>
            <figcaption>
              <span>01</span>
              Hands-on learning, local context, practical tools.
            </figcaption>
          </figure>
        </section>

        <section className="service-strip" aria-label="Services explored">
          <span className="service-label">The toolkit</span>
          {services.map((service) => (
            <span className="service-pill" key={service}>
              {service}
            </span>
          ))}
          <span className="service-end">Africa&apos;s Talking APIs</span>
        </section>

        <div className="article-layout">
          <aside className="article-aside">
            <p className="aside-title">In this story</p>
            <nav aria-label="Article sections">
              {sectionLinks.map(([number, label, id]) => (
                <a href={`#${id}`} key={id}>
                  <span>{number}</span>
                  {label}
                </a>
              ))}
            </nav>
            <div className="aside-note">
              <span>Core idea</span>
              <p>Communication infrastructure should be accessible to every builder.</p>
            </div>
          </aside>

          <article className="article">
            <p className="lead">
              Facilitating the Africa&apos;s Talking session in Mombasa was a genuinely
              rewarding experience.
            </p>
            <p>
              The room brought together developers, founders, students, and technology
              enthusiasts eager to understand how SMS, USSD, and webhooks can build real
              products for Kenyan users and businesses. The session was hands-on, practical,
              and centered on one key idea: communication infrastructure should be accessible
              to every builder.
            </p>
            <p>
              Africa&apos;s Talking gives developers a simpler way to add communication and
              engagement features to applications through APIs for SMS, USSD, Voice, WhatsApp,
              Airtime, and Mobile Data. In Mombasa, that message felt especially relevant: many
              useful services do not need a complex app or expensive infrastructure to
              start—they can begin with a simple SMS notification, a USSD menu, or a webhook
              that responds to user activity.
            </p>

            <div className="photo-story" aria-label="Scenes from the workshop">
              <figure className="photo-story-main">
                <img
                  src={photo('speaker-presentation.webp')}
                  alt="A workshop facilitator speaking to participants with a microphone"
                />
                <figcaption>
                  <span>From the room</span>
                  Sharing practical lessons with Mombasa&apos;s builder community.
                </figcaption>
              </figure>
              <figure className="photo-story-side">
                <img
                  src={photo('participants-laptop.webp')}
                  alt="Two participants following the workshop on a laptop"
                />
                <figcaption>Hands-on learning kept every idea close to real code.</figcaption>
              </figure>
            </div>

            <section id="why">
              <SectionHeading number="01" eyebrow="The context">
                Why this session mattered
              </SectionHeading>
              <p>
                The workshop focused on tools that solve everyday problems in Kenya and across
                Africa. SMS remains one of the most reliable ways to reach customers, while USSD
                makes digital services accessible even on basic phones without internet
                connectivity. Webhooks then connect these services to modern applications by
                allowing external systems to send real-time data to a developer&apos;s server.
              </p>
              <blockquote>
                <p>
                  “Many useful services can begin with a simple SMS notification, a USSD menu,
                  or a webhook that responds to user activity.”
                </p>
                <cite>— A practical starting point for local builders</cite>
              </blockquote>
              <p>
                For local businesses—especially those in tourism, logistics, retail, education,
                and community services—these tools can support booking confirmations, payment
                alerts, customer support, reminders, surveys, and mobile self-service.
              </p>
            </section>

            <section id="covered">
              <SectionHeading number="02" eyebrow="The workshop">
                What we covered
              </SectionHeading>

              <div className="topic-card">
                <span className="topic-index">01 / 03</span>
                <div>
                  <p className="eyebrow">Reach people directly</p>
                  <h3>SMS with the Africa&apos;s Talking API</h3>
                  <p>
                    We began with SMS because it is often the easiest entry point for
                    developers. Using the Africa&apos;s Talking SMS API and Python SDK,
                    participants explored how to send messages programmatically, handle delivery
                    feedback, and think about SMS as more than a notification channel. The goal
                    was to show that a developer can move from idea to a working messaging
                    workflow quickly—booking confirmations, alerts, OTPs, or promotional updates.
                  </p>
                  <ExternalLink href="https://github.com/Osike/ATsmsapi">
                    Explore the SMS starter repository
                  </ExternalLink>
                </div>
              </div>

              <figure className="article-figure">
                <img
                  src={photo('developer-coding.webp')}
                  alt="Two developers working together at a computer"
                />
                <figcaption>
                  <span>Learning by building</span>
                  From first API call to a working messaging workflow.
                </figcaption>
              </figure>

              <div className="topic-card sea">
                <span className="topic-index">02 / 03</span>
                <div>
                  <p className="eyebrow">No app. No data. Any phone.</p>
                  <h3>USSD for accessible services</h3>
                  <p>
                    USSD allows developers to create interactive menus that users can access by
                    dialing a code, without needing a smartphone app or mobile data. Africa&apos;s
                    Talking describes its USSD gateway as capable of handling thousands of
                    concurrent API requests so developers can deploy applications quickly.
                  </p>
                  <ul className="use-list">
                    {ussdUses.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    Africa&apos;s Talking sends session data such as the session ID, service
                    code, phone number, and user input to a callback URL. The application then
                    responds with either CON to continue the session or END to close it.
                  </p>
                  <div className="code-note">
                    <div>
                      <code>CON</code>
                      <span>Continue the session</span>
                    </div>
                    <div>
                      <code>END</code>
                      <span>Close the session</span>
                    </div>
                  </div>
                  <ExternalLink href="https://github.com/Osike/ussdAT">
                    Explore the USSD starter repository
                  </ExternalLink>
                </div>
              </div>

              <div className="topic-card coral">
                <span className="topic-index">03 / 03</span>
                <div>
                  <p className="eyebrow">React in real time</p>
                  <h3>Webhooks that connect the workflow</h3>
                  <p>
                    A webhook is a URL a server exposes so another system can send it data when
                    something happens. In this ecosystem, callbacks carry delivery reports,
                    incoming messages, and USSD interactions. Instead of checking manually, a
                    webhook-enabled backend receives the event instantly and can update a
                    database, notify an admin, send a confirmation, or start another workflow.
                  </p>
                  <ExternalLink href="https://github.com/Osike/webhooks">
                    Explore the webhooks repository
                  </ExternalLink>
                </div>
              </div>

              <div className="workshop-diptych">
                <figure>
                  <img
                    src={photo('participant-listening.webp')}
                    alt="A participant listening during the technical session"
                  />
                  <figcaption>
                    <span>Listen</span>
                    Ideas, questions, and local context shaped the session.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={photo('coding-workshop.webp')}
                    alt="A participant implementing an exercise on a laptop"
                  />
                  <figcaption>
                    <span>Build</span>
                    Participants turned the concepts into working examples.
                  </figcaption>
                </figure>
              </div>
            </section>

            <section id="panel">
              <SectionHeading number="03" eyebrow="Panel discussion">
                Building beyond the code
              </SectionHeading>
              <p>
                One of the most valuable parts of the session was the panel discussion featuring{' '}
                <strong>Emmanuel Madanga</strong>, CEO of Beyond Data ICT,{' '}
                <strong>Issack</strong>, and <strong>Shadrack Osike</strong>, CEO of BARRIZII.
                While the technical sessions showed participants how to build, the panel
                explored why we build, who we build for, and what it takes to turn technology
                into a trusted and sustainable business.
              </p>

              <div className="themes-grid">
                {themes.map(([title, text], index) => (
                  <div className="theme-card" key={title}>
                    <span>0{index + 1}</span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <p>
                The panel&apos;s overall message was clear: great startups are built through
                trust, persistence, community involvement, and the ability to turn ideas into
                usable products quickly.
              </p>

              <figure className="article-figure">
                <img
                  src={photo('panel-room.webp')}
                  alt="Panel speakers sharing lessons with workshop participants"
                />
                <figcaption>
                  <span>The panel in conversation</span>
                  Technical ability matters most when it stays connected to people, problems,
                  and place.
                </figcaption>
              </figure>

              <div className="panel-gallery">
                <figure>
                  <img
                    src={photo('panel-speakers.webp')}
                    alt="Three panelists discussing technology and entrepreneurship"
                  />
                  <figcaption>
                    <span>Beyond the code</span>
                    Trust, funding, and how quickly an idea can become a product people use.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={photo('session-group.webp')}
                    alt="Four speakers standing together after the session"
                  />
                  <figcaption>
                    <span>Community</span>
                    Collaboration creates opportunity for Mombasa&apos;s growing technology
                    ecosystem.
                  </figcaption>
                </figure>
              </div>
            </section>

            <section id="lesson">
              <SectionHeading number="04" eyebrow="The takeaway">
                The bigger lesson
              </SectionHeading>
              <p>
                The strongest takeaway from the session was that great products do not always
                begin with complicated technology. Sometimes, the most impactful first version
                is simple:
              </p>
              <ol className="flow">
                {flow.map((item, index) => (
                  <li key={item}>
                    <span>{index + 1}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
              <p>
                That chain can power a booking platform, a customer-support tool, a community
                service, or a business automation workflow.
              </p>
            </section>

            <section id="resources">
              <SectionHeading number="05" eyebrow="Keep building">
                Resources from the session
              </SectionHeading>
              <p>
                To make the session easy to revisit, I shared the presentation slides on Canva,
                along with starter repositories for each technical area covered during the
                workshop.
              </p>
              <div className="resources-grid">
                {resources.map((resource, index) => (
                  <a
                    className="resource-card"
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    key={resource.title}
                  >
                    <div>
                      <span className="resource-type">
                        {String(index + 1).padStart(2, '0')} · {resource.type}
                      </span>
                      <h3>{resource.title}</h3>
                      <p>{resource.text}</p>
                    </div>
                    <span className="resource-action">
                      {resource.action} <b aria-hidden="true">↗</b>
                    </span>
                  </a>
                ))}
              </div>
              <div className="sandbox-callout">
                <div className="sandbox-mark">AT</div>
                <div>
                  <p className="eyebrow">Start in the sandbox</p>
                  <h3>Test the idea before going live.</h3>
                  <p>
                    Africa&apos;s Talking provides a free sandbox where developers can create
                    and test SMS, USSD, payments, voice, and airtime resources using a
                    simulator before moving to production.
                  </p>
                </div>
                <ExternalLink href="https://africastalking.com">
                  Visit Africa&apos;s Talking
                </ExternalLink>
              </div>
            </section>
          </article>
        </div>

        <section className="closing">
          <div className="closing-inner">
            <div>
              <p className="eyebrow">Closing thought</p>
              <h2>
                Build what is useful.
                <br />
                Build what is <em>reachable.</em>
              </h2>
              <p>
                Mombasa has a growing community of builders who understand local problems and
                are ready to create practical digital solutions. Sessions like this matter
                because they turn abstract APIs into tangible skills and conversations into
                collaboration. My hope is that participants left not only with working code
                examples, but with the confidence to build services that make communication
                simpler, more accessible, and more useful for the people around them.
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="story-footer">
        <div className="footer-brand">Mombasa · 24 Oct 2026</div>
        <div className="footer-sponsor">
          <span>Sponsored by</span>
          <img src={logo} alt="" />
          <strong>Africa&apos;s Talking</strong>
        </div>
        <a href="#top">Back to top ↑</a>
      </div>
    </div>
  );
};
