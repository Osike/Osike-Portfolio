export type Project = {
  title: string;
  role: string;
  sector: string;
  description: string;
  tech: string[];
  url: string;
  image?: string;
  pillars?: string[];
};

export const projects: Project[] = [
  {
    title: 'Barrizii',
    role: 'Founder · Product & Engineering',
    sector: 'Coastal tourism',
    description:
      'Kenya’s boat booking platform for verified sea tours — fishing trips, snorkeling, sunset cruises and water sports along the coast, with transparent pricing from licensed, insured operators.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    url: 'https://barrizii.com',
    image: '/barrizii-home.jpg',
  },
  {
    title: 'Afiya Pal',
    role: 'Full-stack engineering',
    sector: 'Public health',
    description:
      'AI-powered public health platform for Africa — symptom checker, trusted health education, community events and pathways to verified doctors. Free, 24/7, in English and Swahili.',
    tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    url: 'https://www.afiyapal.co.ke/',
    image: '/afiyapal-home.jpg',
  },
  {
    title: 'Trip-Trac',
    role: 'Logistics system',
    sector: 'Fleet operations',
    description:
      'Fleet operations for trucks, drivers, customers and trips — with a live dashboard for revenue, fleet utilisation and route activity.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    url: 'https://trip-trac.vercel.app/',
    image: '/triptrac-dashboard.jpg',
  },
  {
    title: 'ICP Project',
    role: 'Nonprofit website',
    sector: 'Community',
    description:
      'Website for the Islamic Community Project — a Kenyan nonprofit delivering clean water, orphan care, education scholarships, health support and community infrastructure.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    url: 'https://islamiccommunityproject.co.ke/',
    pillars: ['Clean water', 'Orphan care', 'Scholarships', 'Health'],
  },
];
