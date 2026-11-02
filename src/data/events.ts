export interface Event {
  id: string;
  title: string;
  year: number;
  location: string;
  type: 'hackathon' | 'conference' | 'meetup' | 'workshop' | 'summit';
  achievement?: string;
  description: string;
  image?: string;
  articleId?: string;
  highlight?: boolean;
  linkedinLink?: string;
  instagramLink?: string;
}

export const events: Event[] = [
  // 2025 Events
  {
    id: 'kachiri-2025',
    title: 'Kachiri Code Hackathon',
    year: 2025,
    location: 'Kenya',
    type: 'hackathon',
    achievement: 'Winner',
    highlight: true,
    description: 'Emerged victorious in this competitive coding hackathon, showcasing innovative solutions.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack',
    instagramLink: 'https://instagram.com/hp_brains'
  },
  {
    id: 'icp-tum-2025',
    title: 'ICP TUM Innovation Week',
    year: 2025,
    location: 'Technical University of Mombasa',
    type: 'hackathon',
    achievement: '4th Position',
    highlight: true,
    description: 'Secured 4th position in the Internet Computer Protocol hackathon at TUM Innovation Week.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack',
    instagramLink: 'https://instagram.com/hp_brains'
  },
  {
    id: 'djangocon-2025',
    title: 'DjangoCon Africa',
    year: 2025,
    location: 'Africa',
    type: 'conference',
    highlight: true,
    description: 'Participated in the premier Django conference for African developers, learning latest trends.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'gdg-pwani-2025',
    title: 'Build with AI - GDG Pwani',
    year: 2025,
    location: 'Pwani, Kenya',
    type: 'workshop',
    description: 'Explored cutting-edge AI development tools and techniques with Google Developer Group.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'africastalking',
    title: 'Africas Talking',
    year: 2025,
    location: 'Kenya',
    type: 'workshop',
    description: 'Leaning about there apis in the market',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack',
    instagramLink: 'https://instagram.com/hp_brains'
  },
  {
    id: 'depin-summit-2025',
    title: 'DePIN Summit',
    year: 2025,
    location: 'Mombasa',
    type: 'summit',
    description: 'Attended the Decentralized Physical Infrastructure Networks summit, exploring blockchain infrastructure.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'edtech-2025',
    title: 'Ed-Tech Event',
    year: 2025,
    location: 'iHub & SwahiliPot',
    type: 'conference',
    description: 'Explored educational technology innovations and their impact on learning.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'tum-innovation-2025',
    title: 'TUM Innovation Week',
    year: 2025,
    location: 'Technical University of Mombasa',
    type: 'conference',
    description: 'Participated in innovation-focused discussions and tech showcases.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'texas-meetup-2025',
    title: 'University of Texas Meetup',
    year: 2025,
    location: 'SwahiliPot Hub',
    type: 'meetup',
    description: 'Networked with international students and professionals from University of Texas.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'pitching-thursdays-2025',
    title: 'Pitching Thursdays',
    year: 2025,
    location: 'SwahiliPot Hub',
    type: 'meetup',
    description: 'Regular participation in startup pitching sessions and entrepreneurship discussions.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'men-conference-2025',
    title: 'Men Conference - Mental Awareness',
    year: 2025,
    location: 'Kenya',
    type: 'conference',
    description: 'Participated in mental health awareness event focusing on men\'s mental wellness.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'binance-africa-2025',
    title: 'Binance Africa',
    year: 2025,
    location: 'Africa',
    type: 'conference',
    description: 'Attended Binance Africa event exploring cryptocurrency and blockchain developments.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'pwani-innovation-week-2025',
    title: 'Pwani Innovation Week',
    year: 2025,
    location: 'Swahilipot Hub, Mombasa',
    type: 'conference',
    achievement: 'Pitched Barrizii',
    highlight: true,
    description: 'Pitched Barrizii in front of investors under the Deals den program, showcasing innovative transportation solutions.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'ubunifu-hackathon-2025',
    title: 'Ubunifu Hackathon',
    year: 2025,
    location: 'Westerwalle Startup House, Mombasa',
    type: 'hackathon',
    achievement: '3rd Place',
    highlight: true,
    description: 'Developed Afrimote and secured 3rd place in this competitive hackathon event.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'gdg-pwani-devfest-2025',
    title: 'GDG Pwani Dev Fest',
    year: 2025,
    location: 'Lights International School, Mombasa',
    type: 'conference',
    description: 'Participated in Google Developer Group Pwani\'s annual developer festival in December.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'supabase-meetup-2025',
    title: 'Supabase Meet Up',
    year: 2025,
    location: 'Mombasa',
    type: 'meetup',
    description: 'Connected with developers at the Supabase meetup, exploring modern backend solutions.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'git-github-workshop-2025',
    title: 'Git and GitHub Workshop',
    year: 2025,
    location: 'Technical University of Mombasa',
    type: 'workshop',
    achievement: 'Host',
    highlight: true,
    description: 'Hosted an online workshop on Git and GitHub fundamentals under Google Developer Groups (GDG) on Campus, helping students master version control.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },

  // 2026 Events
  {
    id: 'africastalking-mombasa-2026',
    title: "Africa's Talking Mombasa",
    year: 2026,
    location: 'Mombasa',
    type: 'workshop',
    achievement: 'Facilitator',
    highlight: true,
    description: 'Facilitated a hands-on session on SMS, USSD, and webhooks for developers, founders, and students on 24 October 2026.',
    articleId: 'africastalking-mombasa',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack',
    instagramLink: 'https://instagram.com/hp_brains'
  },
  {
    id: 'africas-talking-hackathon-2026',
    title: "Africa's Talking Hackathon",
    year: 2026,
    location: 'Kenya',
    type: 'hackathon',
    achievement: '1st Runners-Up',
    highlight: true,
    description: 'Built Chapaa, an AI anti-fraud platform for scam checks and biometric SIM-swap KYC, and finished 1st runners-up.',
    articleId: 'chapaa-africas-talking',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack',
    instagramLink: 'https://instagram.com/hp_brains'
  },
  {
    id: 'gdg-dar-es-salaam-2026',
    title: 'GDG Dar-es-salaam Dev Fest',
    year: 2026,
    location: 'University of Dar-es-salaam',
    type: 'conference',
    highlight: true,
    description: 'Attended Google Developer Group Dar-es-salaam\'s developer festival in January 2026.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },

  // 2024 Events
  {
    id: 'icp-pwani-2024',
    title: 'ICP Pwani Innovation Week',
    year: 2024,
    location: 'Pwani, Kenya',
    type: 'hackathon',
    achievement: '2nd Runner-up',
    highlight: true,
    description: 'Secured second runner-up position in the Internet Computer Protocol hackathon.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack',
    instagramLink: 'https://instagram.com/hp_brains'
  },
  {
    id: 'pwani-devfest-2024',
    title: 'Pwani DevFest',
    year: 2024,
    location: 'Pwani, Kenya',
    type: 'conference',
    highlight: true,
    description: 'Participated in Google Developer Group\'s flagship annual developer conference.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'django-meetup-2024',
    title: 'Django Social Meetup',
    year: 2024,
    location: 'Mombasa',
    type: 'meetup',
    highlight: true,
    description: 'Connected with Django developers and shared experiences in web development.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'pwani-innovation-2024',
    title: 'Pwani Innovation Week',
    year: 2024,
    location: 'Pwani, Kenya',
    type: 'conference',
    description: 'Engaged in innovation discussions and tech entrepreneurship sessions.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },
  {
    id: 'aya-hq-2024',
    title: 'Aya HQ TUM Workshop',
    year: 2024,
    location: 'Technical University of Mombasa',
    type: 'workshop',
    description: 'Participated in technical workshop focusing on software development practices.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },

  // 2023 Events
  {
    id: 'pwani-devfest-2023',
    title: 'Pwani DevFest',
    year: 2023,
    location: 'Pwani, Kenya',
    type: 'conference',
    description: 'Continued learning journey at the annual Google Developer Group conference.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  },

  // 2022 Events
  {
    id: 'pwani-devfest-2022',
    title: 'Pwani DevFest',
    year: 2022,
    location: 'Pwani, Kenya',
    type: 'conference',
    description: 'Early career participation in tech community events and developer conferences.',
    linkedinLink: 'https://linkedin.com/posts/osike-shadrack'
  }
];
