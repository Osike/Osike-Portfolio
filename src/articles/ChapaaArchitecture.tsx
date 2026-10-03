import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

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

function Node({
  title,
  detail,
  tone = 'default',
}: {
  title: string;
  detail?: string;
  tone?: 'default' | 'gate' | 'side' | 'phone';
}) {
  const tones = {
    default: 'border-teal-500/40 bg-white dark:bg-slate-900',
    gate: 'border-amber-400/70 bg-amber-50 dark:bg-amber-950/40',
    side: 'border-sky-400/60 bg-sky-50 dark:bg-sky-950/30',
    phone: 'border-teal-400 bg-teal-50 dark:bg-teal-950/40',
  };

  return (
    <div className={`rounded-xl border px-4 py-3 text-center shadow-sm ${tones[tone]}`}>
      <p className="text-sm font-semibold leading-snug text-navy dark:text-white">{title}</p>
      {detail && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{detail}</p>
      )}
    </div>
  );
}

function Down({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-2 text-teal-600 dark:text-teal-400">
      <ArrowDown className="h-5 w-5" aria-hidden="true" />
      {label && (
        <span className="text-center text-xs font-medium text-gray-500 dark:text-gray-400">
          {label}
        </span>
      )}
    </div>
  );
}

function SideLink({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <ArrowRight
        className="h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400"
        aria-hidden="true"
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export const ChapaaArchitecture: React.FC = () => {
  return (
    <div className="my-8 space-y-8">
      <figure className="rounded-2xl border border-gray-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950 sm:p-6">
        <figcaption className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
          Request flow
        </figcaption>

        <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-x-4 md:grid-cols-2">
          <div>
            <Node title="IoT AI Cameras / Web browser" />
            <Down label="Biometric capture & liveness" />
          </div>
          <div className="hidden md:block" />

          <Node title="FastAPI Microservice (DeepFace)" />
          <SideLink>
            <Node title="Validation Passed?" tone="gate" />
          </SideLink>

          <Down label="If passed" />
          <div className="hidden md:block" />

          <Node title="Next.js API Route Handlers" />
          <SideLink>
            <Node title="PostgreSQL (Prisma)" tone="side" />
          </SideLink>

          <Down />
          <SideLink>
            <Node
              title="Africa's Talking Insights"
              detail="SIM Swap Check"
              tone="side"
            />
          </SideLink>

          <div>
            <Node title="Africa's Talking Gateways" />
            <Down />
            <Node
              title="User's Phone"
              detail="SMS verdict / voice call / WhatsApp"
              tone="phone"
            />
          </div>
        </div>
      </figure>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-700">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Layer</th>
              <th className="px-4 py-3 font-semibold">Technology Choice</th>
              <th className="px-4 py-3 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {stack.map((row) => (
              <tr
                key={row.layer}
                className="border-t border-gray-200 odd:bg-white even:bg-slate-50 dark:border-slate-700 dark:odd:bg-slate-900 dark:even:bg-slate-800"
              >
                <td className="px-4 py-3 align-top font-medium text-navy dark:text-white">
                  {row.layer}
                </td>
                <td className="px-4 py-3 align-top">{row.tech}</td>
                <td className="px-4 py-3 align-top">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
