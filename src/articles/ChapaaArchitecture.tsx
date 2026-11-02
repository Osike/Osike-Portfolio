import React from 'react';

const stack = [
  {
    layer: 'Frontend & API',
    tech: 'Next.js (App Router) + TypeScript, Tailwind CSS, shadcn/ui',
    purpose: 'Responsive UI and robust serverless/route handler endpoints.',
  },
  {
    layer: 'Database & ORM',
    tech: 'PostgreSQL (via Supabase/Neon) + Prisma ORM',
    purpose: 'Relational data integrity for users, audit logs, and reported entities.',
  },
  {
    layer: 'Telecom Integration',
    tech: "Africa's Talking Node.js SDK",
    purpose: 'Managing SMS, Voice, Insights, and WhatsApp notifications.',
  },
  {
    layer: 'AI Classification',
    tech: 'Anthropic API',
    purpose: 'Semantic analysis and structured JSON scam verdict generation.',
  },
  {
    layer: 'Biometric KYC & IoT',
    tech: 'Python FastAPI + DeepFace + IoT AI Cameras',
    purpose: 'High-accuracy facial matching and hardware-level liveness verification.',
  },
];

type Tone = 'default' | 'gate' | 'side' | 'phone';

function Node({ title, detail, tone = 'default' }: { title: string; detail?: string; tone?: Tone }) {
  return (
    <div className={`o-node ${tone === 'default' ? '' : `is-${tone}`}`}>
      {title}
      {detail && <small>{detail}</small>}
    </div>
  );
}

function Lane({ left, arrow, right }: { left: React.ReactNode; arrow?: string; right?: React.ReactNode }) {
  return (
    <div className="o-lane">
      {left}
      <div className="o-h-arrow" aria-hidden="true">
        {arrow}
      </div>
      {right ?? <div />}
    </div>
  );
}

function Down({ label }: { label?: string }) {
  return (
    <div className="o-v-arrow">
      <span>↓ {label}</span>
    </div>
  );
}

export const ChapaaArchitecture: React.FC = () => {
  return (
    <div className="o-arch">
      <figure className="o-arch-flow" style={{ margin: 0 }}>
        <h6>Request flow</h6>
        <Lane left={<Node title="IoT AI cameras / Web browser" />} />
        <Down label="Biometric capture & liveness" />
        <Lane
          left={<Node title="FastAPI microservice" detail="DeepFace matching" />}
          arrow="→"
          right={<Node title="Validation passed?" tone="gate" />}
        />
        <Down label="If passed" />
        <Lane
          left={<Node title="Next.js API route handlers" />}
          arrow="→"
          right={<Node title="PostgreSQL" detail="via Prisma" tone="side" />}
        />
        <Down />
        <Lane
          left={<Node title="Africa’s Talking gateways" />}
          arrow="←"
          right={<Node title="Africa’s Talking Insights" detail="SIM-swap check" tone="side" />}
        />
        <Down />
        <Lane left={<Node title="User’s phone" detail="SMS verdict · voice call · WhatsApp" tone="phone" />} />
      </figure>

      <div className="o-stack" role="table" aria-label="Chapaa technology stack">
        <div className="o-stack-tr is-th" role="row">
          <div role="columnheader">Layer</div>
          <div role="columnheader">Technology</div>
          <div role="columnheader">Purpose</div>
        </div>
        {stack.map((row) => (
          <div key={row.layer} className="o-stack-tr" role="row">
            <div role="cell">
              <b>{row.layer}</b>
            </div>
            <div role="cell">{row.tech}</div>
            <div role="cell">{row.purpose}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
