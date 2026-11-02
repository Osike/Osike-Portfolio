import React, { useEffect, useRef, useState } from 'react';
import * as emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_wijy3il';
const TEMPLATE_ID = 'template_6tcv8vs';
const PUBLIC_KEY = 'u3rj0Cd53f7nkm2og';

const SUCCESS = 'Your message has been sent successfully! I typically respond within 24-48 hours.';
const FAILURE =
  'Failed to send message. Please try again later or contact me directly at shadyabacus@gmail.com';

const channels = [
  { label: 'Email', value: 'shadyabacus@gmail.com', url: 'mailto:shadyabacus@gmail.com' },
  { label: 'WhatsApp', value: '+254 701 570 902', url: 'https://wa.me/254701570902' },
  { label: 'LinkedIn', value: 'in/osike-shadrack', url: 'https://www.linkedin.com/in/osike-shadrack/' },
  { label: 'GitHub', value: 'github.com/osike', url: 'https://github.com/osike' },
  { label: 'Instagram', value: '@hp_brains', url: 'https://instagram.com/hp_brains' },
];

const emptyForm = { name: '', email: '', subject: '', message: '' };

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    // EmailJS v3 requires init; v4 does not expose it.
    if (typeof emailjs.init === 'function') emailjs.init(PUBLIC_KEY);
  }, []);

  const subject = formData.subject.trim() || `Portfolio Contact: ${formData.name}`;

  const succeed = () => {
    setStatus({ success: true, message: SUCCESS });
    setFormData(emptyForm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const honeypot = form.current.querySelector<HTMLInputElement>('input[name="website"]');
    if (honeypot?.value) {
      setStatus({ success: true, message: SUCCESS });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(succeed, () =>
        emailjs
          .send(
            SERVICE_ID,
            TEMPLATE_ID,
            { name: formData.name, email: formData.email, message: formData.message, subject },
            PUBLIC_KEY
          )
          .then(succeed)
          .catch(() => setStatus({ success: false, message: FAILURE }))
      )
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="o-wrap o-sec">
      <div className="o-contact">
        <div>
          <div className="o-kicker">
            <span className="o-dot" />
            07 · Contact
          </div>
          <h2>
            Let’s build something <em>useful.</em>
          </h2>
          <p className="o-contact-sub">
            Have a product, partnership or speaking invite in mind? I usually reply within a day or
            two.
          </p>
          <div className="o-channels">
            {channels.map((channel) => (
              <a
                key={channel.label}
                className="o-channel"
                href={channel.url}
                target={channel.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <span>{channel.label}</span>
                <span>{channel.value} ↗</span>
              </a>
            ))}
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="o-form" aria-label="Contact form for Shadrack Osike">
          <input type="hidden" name="from_name" value={formData.name} />
          <input type="hidden" name="to_name" value="Shadrack Osike" />
          <input type="hidden" name="subject" value={subject} />
          <div style={{ display: 'none' }}>
            <label htmlFor="website">Website (leave this empty)</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="o-two">
            <div className="o-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
            </div>
            <div className="o-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="o-field">
            <label htmlFor="subject-input">Subject</label>
            <input
              id="subject-input"
              name="subject_input"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="What’s this about?"
            />
          </div>
          <div className="o-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about the project…"
            />
          </div>
          <button type="submit" className="o-btn o-btn-dark" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send message'} <span aria-hidden="true">→</span>
          </button>
          {status && (
            <div className={`o-status ${status.success ? 'is-ok' : 'is-err'}`} role="alert" aria-live="assertive">
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
