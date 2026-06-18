'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { ParticleField } from '../../components/ui/ParticleField';
import { TiltCard } from '../../components/ui/TiltCard';
import { AnimatedCounter } from '../../components/ui/AnimatedCounter';
import {
  Briefcase, MapPin, Clock, ArrowRight, ChevronDown,
  Users, Globe, Award, Heart, Zap, Coffee, Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/index';
import { staggerContainer, fadeUp, fadeDown, zoomIn, defaultViewport, EASE_SMOOTH } from '../../utils/animations';

const PERKS = [
  { icon: Globe,   label: 'Remote-friendly',      desc: 'Télétravail partiel ou total, nous faisons confiance à nos équipes.' },
  { icon: Zap,     label: 'Stack moderne',          desc: 'React, Python, Kubernetes… on aime les technos à la pointe.' },
  { icon: Award,   label: 'Formation continue',     desc: 'Certifications, conférences, veille tech : on investit en vous.' },
  { icon: Heart,   label: 'Bien-être au travail',   desc: 'Équipes soudées, culture bienveillante et environnement sain.' },
  { icon: Coffee,  label: 'Flexible',               desc: 'Horaires souples, équilibre vie pro / perso respecté au quotidien.' },
  { icon: Users,   label: 'Impact réel',            desc: "Vos contributions touchent directement des milliers d'utilisateurs." },
];

const JOBS = [
  {
    id: 'fe-1',
    title: 'Développeur Front-End React',
    department: 'Engineering',
    type: 'CDI',
    location: 'Paris / Remote',
    level: 'Confirmé (3+ ans)',
    salary: '45 000 – 60 000 €',
    description: 'Concevez des interfaces modernes et performantes pour nos clients grands comptes. Vous travaillerez avec React 19, Framer Motion et Tailwind dans un contexte design-driven.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    badge: 'Urgent',
    badgeColor: '#1288D9',
  },
  {
    id: 'be-1',
    title: 'Ingénieur Back-End Python',
    department: 'Engineering',
    type: 'CDI',
    location: 'Abidjan / Remote',
    level: 'Senior (5+ ans)',
    salary: '50 000 – 70 000 €',
    description: 'Architectez et développez nos API REST et microservices en Python/FastAPI. Vous êtes passionné(e) par les systèmes scalables et la qualité du code.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    badge: null,
    badgeColor: null,
  },
  {
    id: 'ds-1',
    title: 'Data Scientist / ML Engineer',
    department: 'Data & IA',
    type: 'CDI / Stage',
    location: 'Remote',
    level: 'Junior à Senior',
    salary: '40 000 – 65 000 €',
    description: 'Construisez et déployez des modèles ML pour nos clients dans les domaines de la finance, la santé et le retail. MLOps, LLMs et Edge AI vous passionnent.',
    stack: ['Python', 'PyTorch', 'MLflow', 'GCP'],
    badge: 'Nouveau',
    badgeColor: '#059669',
  },
  {
    id: 'pm-1',
    title: 'Product Manager Digital',
    department: 'Product',
    type: 'CDI',
    location: 'Paris',
    level: 'Confirmé (3+ ans)',
    salary: '50 000 – 65 000 €',
    description: 'Pilotez le développement de produits digitaux innovants en collaboration avec les équipes tech et design. Vous excellez dans la gestion des priorités et la communication client.',
    stack: ['Figma', 'Jira', 'Analytics', 'OKRs'],
    badge: null,
    badgeColor: null,
  },
  {
    id: 'ux-1',
    title: 'UX/UI Designer Senior',
    department: 'Design',
    type: 'CDI',
    location: 'Paris / Hybrid',
    level: 'Senior (4+ ans)',
    salary: '48 000 – 62 000 €',
    description: 'Créez des expériences utilisateur exceptionnelles pour des produits complexes. Votre portfolio montre une vraie sensibilité au motion design et aux micro-interactions.',
    stack: ['Figma', 'Principle', 'Prototyping', 'Research'],
    badge: 'Hot',
    badgeColor: '#DC2626',
  },
  {
    id: 'devops-1',
    title: 'DevOps / Cloud Engineer',
    department: 'Infrastructure',
    type: 'CDI',
    location: 'Remote',
    level: 'Confirmé (3+ ans)',
    salary: '52 000 – 68 000 €',
    description: 'Construisez et maintenez notre infrastructure cloud-native sur GCP / AWS. CI/CD, Kubernetes, monitoring proactif : vous aimez les systèmes robustes et automatisés.',
    stack: ['Kubernetes', 'Terraform', 'GCP', 'GitLab CI'],
    badge: null,
    badgeColor: null,
  },
];

function JobCard({ job, isOpen, onToggle }: { job: typeof JOBS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      layout
      className={`relative overflow-hidden rounded-2xl border transition-all duration-400 group cursor-pointer ${
        isOpen
          ? 'border-[#1288D9]/40 bg-white shadow-[0_8px_40px_rgba(18,136,217,0.15)]'
          : 'border-slate-100 bg-white/70 hover:bg-white hover:border-slate-200 hover:shadow-[0_4px_24px_rgba(18,136,217,0.08)]'
      }`}
      onClick={onToggle}
    >
      {/* Left accent line */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 ${isOpen ? 'bg-[#1288D9]' : 'bg-transparent group-hover:bg-[#1288D9]/30'}`} />

      {/* Header */}
      <div className="flex items-start gap-5 p-6">
        {/* Dept icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1288D9]/10 text-[#1288D9] group-hover:bg-[#1288D9] group-hover:text-white transition-all duration-300">
          <Briefcase size={20} strokeWidth={1.75} />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#1288D9] transition-colors duration-300">
              {job.title}
            </h3>
            {job.badge && (
              <span
                className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white"
                style={{ backgroundColor: job.badgeColor! }}
              >
                {job.badge}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1"><Briefcase size={11} />{job.department}</span>
            <span className="flex items-center gap-1"><Clock size={11} />{job.type}</span>
            <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
          </div>
        </div>

        {/* Toggle */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE_SMOOTH as any }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-400 group-hover:border-[#1288D9]/30 group-hover:bg-[#1288D9]/5 group-hover:text-[#1288D9] transition-all duration-300"
        >
          <ChevronDown size={16} />
        </motion.div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE_SMOOTH as any }}
            className="overflow-hidden border-t border-slate-100"
          >
            <div className="p-6 pt-5">
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{job.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Niveau</p>
                  <p className="text-sm font-bold text-slate-700">{job.level}</p>
                </div>
                <div className="rounded-xl bg-[#1288D9]/5 border border-[#1288D9]/10 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#1288D9]/70 mb-1">Rémunération</p>
                  <p className="text-sm font-bold text-[#1288D9]">{job.salary}</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Localisation</p>
                  <p className="text-sm font-bold text-slate-700">{job.location}</p>
                </div>
              </div>

              {/* Stack */}
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {job.stack.map(t => (
                    <span key={t} className="text-xs font-semibold bg-[#EFF8FF] text-[#1288D9] border border-[#BEE3F8] rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
              </div>

              {/* Apply CTA */}
              <Link to="/contact">
                <motion.span
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1288D9] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(18,136,217,0.35)] hover:shadow-[0_8px_32px_rgba(18,136,217,0.5)] transition-shadow duration-300 hover:-translate-y-0.5 transition-transform"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Postuler pour ce poste <ArrowRight size={15} />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CareersPage() {
  const [openJob, setOpenJob] = useState<string | null>('fe-1');
  const [filter, setFilter] = useState('Tous');

  const depts = ['Tous', ...Array.from(new Set(JOBS.map(j => j.department)))];
  const filtered = filter === 'Tous' ? JOBS : JOBS.filter(j => j.department === filter);

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-end pb-24 bg-[#030d1a] pt-24">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url(${ASSETS.teamCollaborate})` }}
        />

        {/* Aurora */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-orb-1 absolute -top-40 -left-20 w-[800px] h-[800px] rounded-full bg-[#1288D9]/20 blur-[140px]" />
          <div className="aurora-orb-2 absolute -bottom-40 right-0 w-[700px] h-[700px] rounded-full bg-[#38b6ff]/12 blur-[120px]" />
          <div className="aurora-orb-3 absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/10 blur-[80px]" />
        </div>

        {/* Particles */}
        <div className="absolute inset-0 z-1">
          <ParticleField particleCount={45} color="18, 136, 217" interactive={false} />
        </div>



        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#F0F7FF] to-transparent z-5" />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeDown} className="mb-6">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-lg shadow-xl">
                <Sparkles size={12} className="text-[#38b6ff] animate-pulse" />
                DM+ Carrières — {JOBS.length} postes ouverts
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight mb-6">
              Rejoignez{' '}
              <span className="animate-text-shimmer">l'aventure</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 text-white/70 font-light">
                DM+ Technologies
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/65 font-medium leading-relaxed max-w-2xl mb-10">
              Rejoignez une équipe passionnée qui construit le futur digital de demain. Innovation, excellence et impact sont au cœur de tout ce que nous créons ensemble.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {[
                { target: 40, suffix: '+', label: 'Talents' },
                { target: 8,  suffix: ' ans', label: "D'existence" },
                { target: 94, suffix: '%', label: 'Rétention' },
                { target: 5,  suffix: '', label: 'Pays' },
              ].map(({ target, suffix, label }) => (
                <div key={label}>
                  <p className="text-2xl font-extrabold text-white">
                    <AnimatedCounter target={target} suffix={suffix} />
                  </p>
                  <p className="text-xs text-white/50 font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── PERKS ── */}
      <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#1288D9]/4 blur-3xl" />
        <Container>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mb-14 text-center">
            <motion.span variants={fadeDown} className="mb-3 inline-block text-[11px] font-bold uppercase tracking-widest text-[#1288D9]">
              Pourquoi nous rejoindre
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Ce qui nous rend différents
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PERKS.map((perk) => (
              <motion.div key={perk.label} variants={zoomIn}>
                <TiltCard intensity={8} glare>
                  <div className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_2px_16px_rgba(18,136,217,0.06)] hover:shadow-[0_8px_36px_rgba(18,136,217,0.14)] hover:-translate-y-1.5 transition-all duration-400 card-shine overflow-hidden relative">
                    <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#1288D9]/5 group-hover:bg-[#1288D9]/10 transition-colors duration-500 blur-xl" />
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1288D9]/10 text-[#1288D9]"
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <perk.icon size={22} strokeWidth={1.75} />
                    </motion.div>
                    <div>
                      <h3 className="font-extrabold text-slate-800 group-hover:text-[#1288D9] transition-colors mb-1.5">{perk.label}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{perk.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── JOB LISTINGS ── */}
      <section id="offers" className="bg-white py-24 border-t border-slate-100">
        <Container>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <motion.span variants={fadeDown} className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-[#1288D9]">
                  Offres d'emploi
                </motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {filtered.length} poste{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
                </motion.h2>
              </div>
              {/* Dept filters */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {depts.map(d => (
                  <motion.button
                    key={d}
                    onClick={() => setFilter(d)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 border ${
                      filter === d
                        ? 'bg-[#1288D9] text-white border-[#1288D9] shadow-[0_4px_16px_rgba(18,136,217,0.3)]'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-[#1288D9] hover:text-[#1288D9]'
                    }`}
                  >
                    {d}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((job) => (
                <motion.div
                  key={job.id}
                  variants={fadeUp}
                  layout
                  exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  transition={{ duration: 0.3 }}
                >
                  <JobCard
                    job={job}
                    isOpen={openJob === job.id}
                    onToggle={() => setOpenJob(openJob === job.id ? null : job.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Spontaneous CTA */}
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-12 rounded-2xl border border-dashed border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1288D9]/10 text-[#1288D9]">
              <Sparkles size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Vous ne trouvez pas votre bonheur ?</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6 leading-relaxed">
              Envoyez-nous votre candidature spontanée. Nous sommes toujours à la recherche de talents exceptionnels.
            </p>
            <Link to="/contact">
              <motion.span
                className="inline-flex items-center gap-2 rounded-2xl bg-[#1288D9] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(18,136,217,0.3)] hover:shadow-[0_8px_32px_rgba(18,136,217,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Candidature spontanée <ArrowRight size={15} />
              </motion.span>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* ── Image CTA Banner ── */}
      <section className="relative overflow-hidden min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.meeting})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030d1a]/85 via-[#0a2a5e]/75 to-[#1288D9]/60" />
        <div className="aurora-orb-1 absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#38b6ff]/15 blur-[80px]" />
        </div>

        <Container className="relative z-10 text-center py-20">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="max-w-2xl mx-auto"
          >
            <motion.span variants={fadeDown} className="mb-4 inline-block text-[11px] font-bold uppercase tracking-widest text-white/50">
              Construisons ensemble
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
              Votre talent mérite le meilleur environnement
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/65 leading-relaxed mb-10">
              Rejoignez DM+ et faites partie d'une équipe qui croit que la technologie peut changer le monde, une ligne de code à la fois.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1288D9] shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                Postuler maintenant <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all duration-300"
              >
                Voir nos offres
              </button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
}
