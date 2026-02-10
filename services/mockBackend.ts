import { User, ServicePackage } from '../types';

// Simulated delay helper
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const MOCK_SERVICES: ServicePackage[] = [
  {
    id: 'yearly-retainer',
    title: 'The Sovereign Retainer',
    description: 'Ultimate dominion. A yearly contract guaranteeing 24/7 priority access to our architecture team. Immediate crisis intervention, continuous infrastructure evolution, and dedicated shadow CTO services on demand.',
    price: 150000,
    duration: '12 Months / 24-7 Access'
  },
  {
    id: 'web-elite',
    title: 'Bespoke Web Experience',
    description: 'A digital flagship. Custom React/Next.js architecture, WebGL animations, and pixel-perfect responsive design that commands authority.',
    price: 8500,
    duration: '4-6 Weeks'
  },
  {
    id: 'mobile-app',
    title: 'Native Mobile Sanctum',
    description: 'Extend your dominion to the palm of the hand. High-performance native iOS (Swift) and Android (Kotlin) development with offline-first architecture.',
    price: 35000,
    duration: '12-16 Weeks'
  },
  {
    id: 'full-stack',
    title: 'Platform Architecture',
    description: 'The foundation of your empire. Scalable back-end (Node/Python), database design, and high-performance API development.',
    price: 18000,
    duration: '8-10 Weeks',
    tiers: [
      {
        id: 'fs-project',
        name: 'Foundation (Project)',
        price: 18000,
        period: 'One-time',
        features: ['Full Stack MVP Build', 'Scalable DB Architecture', 'API Development', '30 Days Support'],
        description: 'Perfect for launching a new product.'
      },
      {
        id: 'fs-monthly',
        name: 'Evolution (Retainer)',
        price: 5000,
        period: '/ Month',
        features: ['Continuous Feature Dev', 'Server Maintenance', 'Priority Bug Fixes', 'Weekly Code Reviews'],
        description: 'For growing platforms needing constant iteration.'
      },
      {
        id: 'fs-yearly',
        name: 'Empire (Yearly)',
        price: 50000,
        period: '/ Year',
        features: ['Dedicated Lead Developer', 'Unlimited Revisions', '24/7 Uptime Monitoring', 'Shadow CTO Access'],
        description: 'Maximum priority and dedicated resources.'
      }
    ]
  },
  {
    id: 'marketing-auto',
    title: 'Growth Autopilot',
    description: 'Marketing infrastructure that runs while you sleep. Custom CRMs, pixel tracking, and automated funnel sequences.',
    price: 9500,
    duration: '3-4 Weeks',
    tiers: [
      {
        id: 'ma-project',
        name: 'Launchpad (Project)',
        price: 9500,
        period: 'One-time',
        features: ['Funnel Architecture', 'CRM Integration', 'Pixel/Analytics Setup', '3 Email Sequences'],
        description: 'Get your system live and running.'
      },
      {
        id: 'ma-monthly',
        name: 'Cruise Control (Retainer)',
        price: 3500,
        period: '/ Month',
        features: ['Campaign Optimization', 'A/B Testing', 'Audience Refinement', 'Weekly Reporting'],
        description: 'Ongoing management and optimization.'
      },
      {
        id: 'ma-yearly',
        name: 'Dominance (Yearly)',
        price: 35000,
        period: '/ Year',
        features: ['Full-Service Agency Mode', 'Content Strategy', 'Influencer Outreach', 'Quarterly Summits'],
        description: 'Complete hands-off growth management.'
      }
    ]
  },
  {
    id: 'data-suite',
    title: 'Executive Intelligence Suite',
    description: 'See the unseen. Custom-built analytical dashboards consolidating all data streams into a single "God View" for executive decision making.',
    price: 6000,
    duration: '3 Weeks'
  },
  {
    id: 'reputation-arch',
    title: 'Reputation Architecture',
    description: 'Control the narrative. Advanced SEO suppression of negatives, wiki-style authority building, and elite press release distribution networks.',
    price: 4500,
    duration: 'Monthly Retainer'
  },
  {
    id: 'social-arch',
    title: 'Social Ecosystem Setup',
    description: 'Complete channel architecture. Bot integration for auto-replies, bio optimization, and cross-platform content pipeline setup.',
    price: 2800,
    duration: '1 Week'
  },
  {
    id: 'infra-sec',
    title: 'Fortress Infrastructure',
    description: 'Enterprise-grade security suite. Cloudflare configuration, Advanced SSL/TLS termination, DDoS protection, and header hardening.',
    price: 1500,
    duration: '3 Days'
  }
];

// Mock Auth Service
export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    await delay(1000); // Simulate network
    // Mock validation
    if (password.length < 6) throw new Error("Invalid credentials");
    
    const user: User = {
      id: 'user_' + Date.now(),
      name: email.split('@')[0], // Extract name from email for demo
      email,
    };
    
    localStorage.setItem('luxe_user', JSON.stringify(user));
    return user;
  },

  signup: async (name: string, email: string, password: string): Promise<User> => {
    await delay(1200);
    const user: User = {
      id: 'user_' + Date.now(),
      name,
      email,
    };
    localStorage.setItem('luxe_user', JSON.stringify(user));
    return user;
  },

  logout: async () => {
    await delay(500);
    localStorage.removeItem('luxe_user');
  },

  getCurrentUser: (): User | null => {
    const stored = localStorage.getItem('luxe_user');
    return stored ? JSON.parse(stored) : null;
  }
};

// Mock Booking/Payment Service
export const bookingService = {
  processPayment: async (amount: number, cardDetails: any): Promise<boolean> => {
    await delay(2000); // Simulate processing
    // Simple mock validation
    if (cardDetails.number.length < 13) throw new Error("Invalid Card Number");
    return true;
  },

  createBooking: async (userId: string, serviceId: string, date: string, time: string): Promise<string> => {
    await delay(1000);
    return 'BK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }
};