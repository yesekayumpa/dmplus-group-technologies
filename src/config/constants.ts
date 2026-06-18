import { Code, Cpu, Globe, ShieldCheck, BarChart3, Smartphone } from 'lucide-react';
import { ASSETS } from '../utils/index';

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
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: '01',
    title: 'Développement logiciel sur mesure',
    description: 'Nous concevons et développons des applications web, mobiles et desktop entièrement personnalisées pour répondre à vos processus métier les plus complexes.',
    icon: Code,
    category: 'Développement',
    image: ASSETS.programming,
    features: [
      'Applications web & mobiles sur mesure',
      'API REST & microservices',
      'Intégrations ERP / CRM / tiers',
      'Architecture cloud-native',
    ],
    color: '#1288D9',
  },
  {
    id: '02',
    title: 'Solutions IA & Intégration',
    description: 'Intégrez la puissance de l\'intelligence artificielle dans vos workflows : vision par ordinateur, NLP, modèles prédictifs et agents autonomes.',
    icon: Cpu,
    category: 'Intelligence Artificielle',
    image: ASSETS.womanDebugging,
    features: [
      'Modèles de machine learning sur mesure',
      'Vision par ordinateur & NLP',
      'Agents IA & automatisation',
      'Intégration de LLMs (GPT, Gemini…)',
    ],
    color: '#7C3AED',
  },
  {
    id: '03',
    title: 'Transformation digitale',
    description: 'Accompagnement stratégique et opérationnel pour moderniser vos systèmes legacy, dématérialiser vos processus et accélérer votre croissance digitale.',
    icon: Globe,
    category: 'Conseil & Stratégie',
    image: ASSETS.employeeWork,
    features: [
      'Audit & roadmap digitale',
      'Migration cloud (AWS, GCP, Azure)',
      'Conduite du changement',
      'Formation & montée en compétences',
    ],
    color: '#059669',
  },
  {
    id: '04',
    title: 'Cybersécurité & Conformité',
    description: 'Protégez vos actifs numériques avec nos experts en sécurité : audits de vulnérabilités, mise en conformité RGPD et SOC2, et plans de réponse aux incidents.',
    icon: ShieldCheck,
    category: 'Sécurité',
    image: ASSETS.meeting,
    features: [
      'Pentest & audit de sécurité',
      'Conformité RGPD & ISO 27001',
      'Chiffrement & gestion des accès',
      'Plan de reprise d\'activité (PRA)',
    ],
    color: '#DC2626',
  },
  {
    id: '05',
    title: 'Data & Business Intelligence',
    description: 'Centralisez, analysez et visualisez vos données pour prendre des décisions éclairées. De la mise en place du data lake aux dashboards temps réel.',
    icon: BarChart3,
    category: 'Data',
    image: ASSETS.econResearch,
    features: [
      'Data lake & entrepôt de données',
      'Dashboards BI (Power BI, Metabase)',
      'Pipelines ETL/ELT automatisés',
      'Analytique avancée & prédictive',
    ],
    color: '#D97706',
  },
  {
    id: '06',
    title: 'Applications mobiles',
    description: 'Conception et développement d\'applications iOS et Android performantes, intuitives et évolutives, avec ou sans backend intégré.',
    icon: Smartphone,
    category: 'Mobile',
    image: ASSETS.surmesure,
    features: [
      'Apps natives iOS & Android',
      'Cross-platform (Flutter, React Native)',
      'UX/UI design premium',
      'Publication & maintenance App Store / Play Store',
    ],
    color: '#0891B2',
  },
];

export const PROJECTS = [
  {
    id: 'smartflow',
    name: 'SmartFlow ERP',
    category: 'Transformation Digitale',
    description: 'Plateforme ERP intelligente conçue sur mesure pour automatiser les processus métier d\'une chaîne de distribution nationale, intégrant des modules RH, finance et logistique.',
    image: ASSETS.officeWorkers,
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    status: 'Livré',
    statusColor: '#10B981',
    metrics: { label: 'Gain de productivité', value: '+42%' },
    featured: true,
  },
  {
    id: 'aivision',
    name: 'AI Vision Analytics',
    category: 'Intelligence Artificielle',
    description: 'Solution de vision par ordinateur pour l\'analyse en temps réel de flux vidéo industriels, détectant automatiquement les anomalies de production avec une précision de 97%.',
    image: ASSETS.womanDebugging,
    tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
    status: 'En production',
    statusColor: '#1288D9',
    metrics: { label: 'Précision de détection', value: '97%' },
    featured: true,
  },
  {
    id: 'portail-citoyen',
    name: 'Portail Citoyen Digital',
    category: 'Service Public & GovTech',
    description: 'Portail numérique unifié pour une mairie permettant aux citoyens d\'accéder à plus de 80 services administratifs en ligne, réduisant drastiquement les déplacements physiques.',
    image: ASSETS.teamCollaborate,
    tech: ['Next.js', 'TypeScript', 'Keycloak', 'Kubernetes'],
    status: 'Livré',
    statusColor: '#10B981',
    metrics: { label: 'Services dématérialisés', value: '80+' },
    featured: false,
  },
  {
    id: 'fintrack',
    name: 'FinTrack Mobile',
    category: 'Fintech & Mobile',
    description: 'Application mobile de gestion financière personnelle avec IA embarquée pour catégoriser automatiquement les dépenses, prévoir les soldes et alerter sur les anomalies.',
    image: ASSETS.finance,
    tech: ['Flutter', 'Dart', 'Firebase', 'Gemini AI'],
    status: 'En cours',
    statusColor: '#F59E0B',
    metrics: { label: 'Utilisateurs bêta', value: '2 500+' },
    featured: false,
  },
  {
    id: 'logismart',
    name: 'LogiSmart Dispatch',
    category: 'Logistique & IoT',
    description: 'Système de dispatch intelligent pour flotte de véhicules, optimisant les tournées en temps réel grâce à des algorithmes d\'optimisation combinatoire et de flux de données IoT.',
    image: ASSETS.econResearch,
    tech: ['Vue.js', 'Python', 'Redis', 'MQTT'],
    status: 'Livré',
    statusColor: '#10B981',
    metrics: { label: 'Réduction des coûts', value: '-28%' },
    featured: false,
  },
  {
    id: 'healthconnect',
    name: 'HealthConnect Pro',
    category: 'Santé & Télémedecine',
    description: 'Plateforme de télémédecine sécurisée connectant patients et professionnels de santé, avec gestion des dossiers médicaux numériques et consultations vidéo chiffrées de bout en bout.',
    image: ASSETS.mainHero,
    tech: ['React Native', 'GraphQL', 'WebRTC', 'AWS'],
    status: 'En production',
    statusColor: '#1288D9',
    metrics: { label: 'Consultations/mois', value: '12 000+' },
    featured: false,
  },
];

export const TEAM = [
  {
    name: 'Jean Dupont',
    role: 'Directeur',
    image: ASSETS.formateurAfrique,
  },
  {
    name: 'Marie Martin',
    role: 'Expert IA, Adjointe',
    image: ASSETS.womanDebugging,
  },
  {
    name: 'Pierre Durand',
    role: 'Chef de Projet',
    image: ASSETS.teamCollaborate,
  },
  {
    name: 'Sophie Bernard',
    role: 'Responsable Marketing',
    image: ASSETS.mainHero,
  },
];
