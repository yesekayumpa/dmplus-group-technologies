import { Code, Cpu, Globe } from 'lucide-react';

export const SITE_CONFIG = {
  name: 'DM+ Technologies',
  description: 'Digitaliser pour mieux performer. À la pointe de l\'innovation, DM+ Technologies développe des solutions logicielles sur mesure et intègre les dernières avancées en IA.',
  contact: {
    email: 'contact@dmplus-group.com',
    phone: '+33 1 23 45 67 89',
    address: '123 Avenue de l\'Innovation, 75008 Paris, France',
  },
  socials: {
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  }
};

export const NAVIGATION = [
  { label: 'Accueil', href: '/' },
  { label: 'Filiales', href: '/#filiales' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: '01',
    title: 'Développement logiciel sur mesure',
    description: 'Solutions sur mesure pour répondre à vos besoins spécifiques dans ce domaine.',
    icon: Code,
  },
  {
    id: '02',
    title: 'Solutions IA & Intégration',
    description: 'Solutions sur mesure pour répondre à vos besoins spécifiques dans ce domaine.',
    icon: Cpu,
  },
  {
    id: '03',
    title: 'Transformation digitale',
    description: 'Solutions sur mesure pour répondre à vos besoins spécifiques dans ce domaine.',
    icon: Globe,
  },
];

export const PROJECTS = [
  {
    id: 'alpha',
    name: 'Projet Alpha',
    category: 'Transformation Digitale, Données',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'beta',
    name: 'Projet Beta',
    category: 'Stratégie de croissance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'gamma',
    name: 'Projet Gamma',
    category: 'Optimisation de processus',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
  },
];

export const TEAM = [
  {
    name: 'Jean Dupont',
    role: 'Directeur',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Marie Martin',
    role: 'Expert IA, Adjointe',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Pierre Durand',
    role: 'Chef de Projet',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Sophie Bernard',
    role: 'Responsable Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
];
