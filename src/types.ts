export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  client: string;
  metrics: {
    label: string;
    value: string;
  }[];
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  badge?: string;
  image?: string;
}

export interface ServicePackage {
  id: string;
  serviceType: 'web' | 'marketing';
  number: string;
  name: string;
  tagline: string;
  price?: string;
  pages?: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  note?: string;
  whatsappMessage: string;
}

// Kept for backward compatibility
export type WebsitePackage = ServicePackage;
export type Service = ServicePackage;

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  rating: number;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'AI & ML' | 'Databases & DevOps' | 'Growth & Ads';
  role: string;
  iconName: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
