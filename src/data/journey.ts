export type Role = {
  when: string;
  org: string;
  title: string;
  where: string;
  current?: boolean;
  description?: string;
  points?: string[];
  steps?: { label: string; detail: string }[];
};

export const experience: Role[] = [
  {
    when: 'Oct 2025 — Present',
    org: 'BARRIZII',
    title: 'Chief Executive Officer',
    where: 'Mombasa',
    current: true,
    description:
      'Leading Kenya’s boat booking platform connecting travellers with verified operators along the coast.',
  },
  {
    when: 'Nov 2025 — Aug 2026',
    org: 'GDG on Campus TUM',
    title: 'Software Lead',
    where: 'Mombasa',
    points: [
      'Spearheaded hackathon and prototype initiatives — health intelligence tools and AI platforms built on Google technologies like Gemma.',
      'Guided student developers through hands-on workshops, bridging classroom theory and real-world engineering.',
      'Connected students to regional ecosystems and networks such as Supabase and GDG Pwani.',
    ],
  },
  {
    when: 'Oct 2025 — Jul 2026',
    org: 'Afribot Robotics',
    title: 'Software Engineer',
    where: 'Mombasa',
    description:
      'Delivered training and mentorship in programming, robotics and basic AI; supported troubleshooting, testing and deployment of software in real-world environments.',
  },
  {
    when: 'May — Aug 2025',
    org: 'Swahilipot Hub Foundation',
    title: 'Junior Software Engineer',
    where: 'Mombasa',
  },
  {
    when: '2025',
    org: 'Power Learn Project (PLP)',
    title: 'Student → Certified → Community Volunteer',
    where: 'Remote',
    steps: [
      {
        label: 'Student',
        detail: 'Learned full-stack MERN engineering across project phases in a remote, collaborative cohort.',
      },
      { label: 'Certified', detail: 'Earned the PLP Software Engineering certification.' },
      {
        label: 'Volunteer',
        detail:
          'Came back to give back — managed the Ticketing System, keeping issues resolved for a large community of learners.',
      },
    ],
  },
  {
    when: 'Nov 2024 — Jan 2025',
    org: 'eWAKA Mobility Limited',
    title: 'E-Delivery',
    where: 'Mombasa',
  },
  {
    when: 'Mar 2024 — Mar 2025',
    org: 'Grawesoft',
    title: 'Software Engineer',
    where: 'Mombasa',
  },
  {
    when: 'Jul 2022 — Sep 2023',
    org: 'Every Travel & Tours',
    title: 'IT Support Specialist · Volunteer',
    where: 'Kisumu',
  },
];

export const degree = {
  when: 'Sep 2022 — Nov 2026',
  org: 'Technical University of Mombasa',
  title: 'Bachelor’s degree, Information Technology',
  start: '2022-09-01',
  end: '2026-11-30',
};

export const certifications = [
  { when: 'Oct 2025', issuer: 'OPSWAT Academy', name: 'Introduction to CIP' },
  { when: 'Sep 2025', issuer: 'OPSWAT Academy', name: 'My OPSWAT Portal Orientation Guide' },
  { when: '2025', issuer: 'Power Learn Project (PLP)', name: 'Software Engineering' },
  { when: 'Oct — Nov 2024', issuer: 'Cisco Networking Academy', name: 'Cyber Security' },
  { when: 'Oct 2024', issuer: 'Cisco Networking Academy', name: 'Python' },
  { when: 'Oct 2024', issuer: 'Rise In', name: 'Transition to Blockchain' },
  { when: 'Oct 2024', issuer: 'Rise In', name: 'Certificate' },
];
