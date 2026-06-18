'use client'

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { TiltCard } from '../../components/ui/TiltCard';
import { AnimatedCounter } from '../../components/ui/AnimatedCounter';
import { ParticleField } from '../../components/ui/ParticleField';
import { PROJECTS } from '../../config/constants';
import { fadeUp, fadeDown, zoomIn, slideLeft, slideRight, staggerContainer, defaultViewport } from '../../utils/animations';
import {
  ArrowUpRight, CheckCircle2, Clock, Zap, Layers, TrendingUp,
  ArrowRight, Filter, Award, Globe, Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/index';

const CATEGORIES = ['Tous', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

const statusIcon: Record<string, React.ReactNode> = {
  'Livré':        <CheckCircle2 size={11} className="inline-block mr-1" />,
  'En production': <Zap size={11} className="inline-block mr-1" />,
  'En cours':     <Clock size={11} className="inline-block mr-1" />,
};

const STATS = [
  { value: 50, suffix: '+', label: 'Projets livrés',    icon: Award },
  { value: 98, suffix: '%', label: 'Satisfaction client', icon: Users },
  { value: 12, suffix: '',  label: 'Secteurs couverts',  icon: Globe },
  { value: 8,  suffix: ' ans', label: "D'expérience",   icon: TrendingUp },
];

export function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY     = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featured = PROJECTS.filter((p) => p.featured);
  const filtered  = PROJECTS.filter((p) => activeCategory === 'Tous' || p.category === activeCategory);

  return (
    <Layout>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative overflow-hidden pt-36 pb-32 min-h-[55vh] flex items-center bg-[#030d1a]">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-[-10%] bg-cover bg-center opacity-25 mix-blend-luminosity"
            style={{ backgroundImage: `url(${ASSETS.programming})` }}
          />
        </motion.div>

        {/* Aurora */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-orb-1 absolute -top-24 left-0 w-[700px] h-[700px] rounded-full bg-[#1288D9]/25 blur-[130px]" />
          <div className="aurora-orb-2 absolute -bottom-24 right-0 w-[600px] h-[600px] rounded-full bg-[#38b6ff]/15 blur-[100px]" />
          <div className="aurora-orb-3 absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-[#7C3AED]/10 blur-[80px]" />
        </div>

        {/* Particles */}
        <div className="absolute inset-0 z-1">
          <ParticleField particleCount={35} color="18, 136, 217" interactive={false} />
        </div>


        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F7FF] to-transparent z-5" />

        <Container className="relative z-10">
          <motion.div style={{ opacity: heroOpacity }}>
            <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" animate="visible" className="max-w-3xl">
              <motion.div variants={fadeDown} className="mb-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38b6ff]" />
                  Nos Réalisations
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Des projets à{' '}
                <span className="animate-text-shimmer">fort impact</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
                De la transformation digitale à l'intelligence artificielle, découvrez les solutions que nous avons conçues et livrées pour nos clients à travers différents secteurs.
              </motion.p>

              {/* Animated stats row */}
              <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8">
                {STATS.map(({ value, suffix, label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 border border-white/10 backdrop-blur-sm">
                      <Icon size={18} className="text-[#38b6ff]" />
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-white">
                        <AnimatedCounter target={value} suffix={suffix} />
                      </p>
                      <p className="text-xs text-white/50 font-medium">{label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── Content ── */}
      <section className="bg-gradient-to-b from-[#F0F7FF] via-white to-[#F8FAFC] py-20 relative">
        <div className="pointer-events-none absolute -right-40 top-[15%] h-[600px] w-[600px] rounded-full bg-[#1288D9]/4 blur-3xl" />

        <Container>
          {/* Featured projects */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-20"
          >
            <motion.div variants={fadeDown} className="mb-8 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1288D9]">⭐ Projets phares</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#1288D9]/30 to-transparent" />
            </motion.div>

            <div className="space-y-6">
              {featured.map((project, idx) => (
                <motion.div
                  key={project.id}
                  variants={idx % 2 === 0 ? slideLeft : slideRight}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_30px_rgba(18,136,217,0.10)] border border-slate-100 hover:shadow-[0_12px_50px_rgba(18,136,217,0.2)] transition-all duration-500 card-shine"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative md:w-[42%] h-60 md:h-auto overflow-hidden flex-shrink-0">
                      <motion.img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
                      <span
                        className="absolute top-4 left-4 flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-full text-white shadow-lg backdrop-blur-sm"
                        style={{ backgroundColor: project.statusColor }}
                      >
                        {statusIcon[project.status]}{project.status}
                      </span>
                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-[#1288D9]/10 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
                          <ArrowUpRight size={22} className="text-[#1288D9]" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-8 flex-1">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1288D9]">{project.category}</span>
                        <h2 className="mt-2 text-2xl font-extrabold text-slate-900 group-hover:text-[#1288D9] transition-colors duration-300">
                          {project.name}
                        </h2>
                        <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-lg">{project.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span key={t} className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#EFF8FF] text-[#1288D9] border border-[#BEE3F8] rounded-full px-3 py-1">
                              <Layers size={9} />{t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-100">
                          <TrendingUp size={16} className="text-[#1288D9]" />
                          <div>
                            <p className="text-[10px] text-slate-400 font-medium">{project.metrics.label}</p>
                            <p className="text-lg font-extrabold text-slate-800">{project.metrics.value}</p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 rounded-full bg-[#1288D9] px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(18,136,217,0.35)] hover:shadow-[0_6px_24px_rgba(18,136,217,0.5)] transition-shadow"
                        >
                          Voir le projet <ArrowRight size={14} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-10 flex flex-wrap items-center gap-3"
          >
            <Filter size={16} className="text-slate-400" />
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-[#1288D9] text-white border-[#1288D9] shadow-[0_4px_16px_rgba(18,136,217,0.3)]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-[#1288D9] hover:text-[#1288D9]'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={zoomIn}
                  exit={{ opacity: 0, scale: 0.88, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard intensity={6} glare className="h-full">
                    <div className="group cursor-pointer flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-[0_2px_20px_rgba(18,136,217,0.07)] border border-slate-100 hover:shadow-[0_8px_36px_rgba(18,136,217,0.18)] transition-all duration-400 card-shine">
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent" />
                        <span
                          className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full text-white backdrop-blur-sm"
                          style={{ backgroundColor: project.statusColor + 'dd' }}
                        >
                          {statusIcon[project.status]}{project.status}
                        </span>
                        <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white/90 uppercase tracking-widest bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                          {project.category}
                        </span>
                        {/* Hover icon */}
                        <motion.div
                          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg"
                          initial={{ opacity: 0, y: 8 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight size={16} className="text-[#1288D9]" />
                        </motion.div>
                      </div>

                      {/* Body */}
                      <div className="flex flex-col flex-1 p-5">
                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#1288D9] transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-3 flex-1">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#EFF8FF] text-[#1288D9] border border-[#BEE3F8] rounded-full px-2.5 py-0.5">
                              <Layers size={8} />{t}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-[10px] font-semibold bg-slate-100 text-slate-400 rounded-full px-2.5 py-0.5">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                          <div>
                            <p className="text-[9px] text-slate-400 uppercase tracking-wide">{project.metrics.label}</p>
                            <p className="text-sm font-extrabold text-slate-800">{project.metrics.value}</p>
                          </div>
                          <motion.div whileHover={{ x: 3, scale: 1.2 }}>
                            <ArrowUpRight size={16} className="text-slate-300 group-hover:text-[#1288D9] transition-colors" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-20 rounded-3xl overflow-hidden relative text-center py-16 px-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#030d1a] via-[#0a2a5e] to-[#1288D9]" />
            <div className="aurora-orb-1 absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#38b6ff]/15 blur-[80px]" />
            </div>
            <div className="relative z-10">
              <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-widest text-white/50">
                Votre prochain projet
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Prêt à transformer votre idée en réalité ?
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
                Discutons de votre projet et construisons ensemble la solution digitale qui vous permettra d'atteindre vos objectifs.
              </p>
              <Link to="/contact">
                <motion.span
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1288D9] shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-shadow"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Démarrer un projet <ArrowRight size={16} />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
}
