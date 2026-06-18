'use client'

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { TiltCard } from '../../components/ui/TiltCard';
import { AnimatedCounter } from '../../components/ui/AnimatedCounter';
import { ParticleField } from '../../components/ui/ParticleField';
import { SERVICES, PROJECTS } from '../../config/constants';
import {
  fadeUp, fadeDown, zoomIn, slideLeft, slideRight,
  staggerContainer, defaultViewport, EASE_SMOOTH,
} from '../../utils/animations';
import {
  ArrowRight, CheckCircle2, Zap, Layers, MessageSquare,
  ArrowUpRight, CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../utils/index';

const WHY_US = [
  { icon: CheckCircle, title: 'Expertise pluridisciplinaire', text: 'Une équipe polyvalente couvrant le développement, la data, l\'IA et la cybersécurité.' },
  { icon: Zap, title: 'Livraison rapide & agile', text: 'Méthodologie agile avec des sprints courts pour des résultats concrets en quelques semaines.' },
  { icon: Layers, title: 'Solutions évolutives', text: 'Des architectures conçues pour s\'adapter à votre croissance sans refonte coûteuse.' },
  { icon: MessageSquare, title: 'Accompagnement continu', text: 'Un interlocuteur dédié et un support réactif tout au long de votre projet et après livraison.' },
];

const PROCESS = [
  { step: '01', title: 'Découverte', desc: 'Analyse de vos besoins, de vos contraintes et définition des objectifs.' },
  { step: '02', title: 'Conception', desc: 'Architecture technique, wireframes et validation du périmètre fonctionnel.' },
  { step: '03', title: 'Développement', desc: 'Sprints agiles avec démos régulières et intégration continue.' },
  { step: '04', title: 'Livraison', desc: 'Déploiement, tests de recette et formation de vos équipes.' },
];

export function ServicesPage() {
  const [active, setActive] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <Layout>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative overflow-hidden pt-36 pb-32 min-h-[55vh] flex items-center bg-[#030d1a]">
        {/* Parallax bg */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <div
            className="absolute inset-[-10%] bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{ backgroundImage: `url(${ASSETS.officeWorkers})` }}
          />
        </motion.div>

        {/* Aurora orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-orb-1 absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-[#1288D9]/25 blur-[130px]" />
          <div className="aurora-orb-2 absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#38b6ff]/15 blur-[100px]" />
        </div>

        {/* Particle field */}
        <div className="absolute inset-0 z-1">
          <ParticleField particleCount={40} color="18, 136, 217" interactive={false} />
        </div>



        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F7FF] to-transparent z-5" />

        <Container className="relative z-10">
          <motion.div style={{ opacity: heroOpacity }}>
            <motion.div
              variants={staggerContainer(0.12, 0.1)}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div variants={fadeDown} className="mb-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38b6ff]" />
                  Ce que nous faisons
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Nos{' '}
                <span className="animate-text-shimmer">Services</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
                De la stratégie à la mise en production, nous vous accompagnons à chaque étape de votre transformation digitale avec des solutions sur mesure, robustes et évolutives.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
                {[
                  { target: 50, suffix: '+', label: 'Projets livrés' },
                  { target: 98, suffix: '%', label: 'Satisfaction' },
                  { target: 40, suffix: '+', label: 'Experts' },
                  { target: 8, suffix: ' ans', label: "D'expérience" },
                ].map(({ target, suffix, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-3xl font-black text-white">
                      <AnimatedCounter target={target} suffix={suffix} />
                    </span>
                    <span className="text-xs text-white/50 font-medium mt-0.5">{label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1288D9] shadow-[0_8px_32px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300">
                  Discuter de votre projet <ArrowRight size={16} />
                </Link>
                <a href="#services-list" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  Découvrir nos services
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── Services Bento Grid ── */}
      <section id="services-list" className="bg-gradient-to-b from-[#F0F7FF] via-white to-white py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#1288D9]/5 blur-3xl" />

        <Container>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.span variants={fadeDown} className="mb-3 inline-block text-[11px] font-bold uppercase tracking-widest text-[#1288D9]">
              Notre expertise
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              6 domaines d'expertise
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl mx-auto text-slate-500 leading-relaxed">
              Cliquez sur un service pour découvrir en détail nos capacités et voir des projets associés.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isOpen = active === service.id;
              return (
                <motion.div key={service.id} variants={zoomIn}>
                  <TiltCard intensity={8} glare>
                    <motion.div
                      onClick={() => setActive(isOpen ? null : service.id)}
                      className={`group relative flex flex-col gap-5 rounded-2xl border p-7 cursor-pointer transition-all duration-400 overflow-hidden card-shine ${
                        isOpen
                          ? 'border-[#1288D9]/40 bg-white shadow-[0_12px_48px_rgba(18,136,217,0.2)] -translate-y-1'
                          : 'border-slate-100 bg-white shadow-[0_2px_16px_rgba(18,136,217,0.06)] hover:shadow-[0_10px_40px_rgba(18,136,217,0.15)] hover:-translate-y-1 hover:border-slate-200'
                      }`}
                    >
                      {/* Top accent bar */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                        animate={{ opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ backgroundColor: service.color }}
                      />

                      {/* Hover glow orb */}
                      <div
                        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                        style={{ backgroundColor: service.color + '25' }}
                      />

                      {/* Icon */}
                      <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${service.color}cc, ${service.color})` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </motion.div>

                      <div className="flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: service.color }}>
                          {service.category}
                        </span>
                        <h3 className="mt-1 text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Features accordion */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: EASE_SMOOTH as any }}
                            className="space-y-2 overflow-hidden border-t border-slate-100 pt-4"
                          >
                            {service.features.map((f) => (
                              <motion.li
                                key={f}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-start gap-2 text-xs text-slate-600"
                              >
                                <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                                {f}
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-300" style={{ color: service.color }}>
                        {isOpen ? 'Réduire' : 'En savoir plus'}
                        <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.25 }}>
                          <ArrowRight size={13} />
                        </motion.span>
                      </div>
                    </motion.div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* ── Process Timeline ── */}
      <section className="bg-white py-24 border-t border-slate-100 relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#1288D9]/3 blur-3xl" />
        <Container>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-14 text-center"
          >
            <motion.span variants={fadeDown} className="mb-3 inline-block text-[11px] font-bold uppercase tracking-widest text-[#1288D9]">
              Notre méthode
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Comment nous travaillons
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Animated connecting line */}
            <div className="hidden lg:block absolute top-8 left-[calc(12.5%+0.5rem)] right-[calc(12.5%+0.5rem)] h-px">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1288D9]/20 via-[#1288D9]/60 to-[#1288D9]/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            <motion.div
              variants={staggerContainer(0.18)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="grid grid-cols-1 gap-8 lg:grid-cols-4"
            >
              {PROCESS.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#1288D9]/20 bg-white shadow-[0_4px_24px_rgba(18,136,217,0.15)]"
                    whileHover={{ scale: 1.1, borderColor: '#1288D9', boxShadow: '0 8px_40px_rgba(18,136,217,0.3)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xl font-extrabold text-[#1288D9]">{step.step}</span>
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#1288D9]/30"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </motion.div>
                  <h3 className="text-lg font-extrabold text-slate-800 group-hover:text-[#1288D9] transition-colors">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-[180px]">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Why Us ── */}
      <section className="bg-[#F8FAFC] py-24 border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.span variants={fadeDown} className="mb-3 inline-block text-[11px] font-bold uppercase tracking-widest text-[#1288D9]">
                Pourquoi nous choisir
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Votre partenaire de{' '}
                <span className="relative inline-block text-[#1288D9]">
                  confiance
                  <span className="absolute left-0 bottom-0.5 h-[3px] w-full rounded-full bg-[#1288D9]/25" />
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-slate-500 leading-relaxed">
                Depuis 8 ans, nous accompagnons des entreprises de toutes tailles dans leur transformation numérique avec rigueur, transparence et passion.
              </motion.p>

              <motion.div variants={staggerContainer(0.1)} className="mt-8 space-y-5">
                {WHY_US.map(({ icon: Icon, title, text }) => (
                  <motion.div
                    key={title}
                    variants={slideLeft}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#1288D9]/10 text-[#1288D9]"
                      whileHover={{ scale: 1.1, backgroundColor: '#1288D9', color: 'white' }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-[#1288D9] transition-colors">{title}</h4>
                      <p className="mt-0.5 text-sm text-slate-500 leading-relaxed">{text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(18,136,217,0.15)]"
            >
              <TiltCard intensity={5}>
                <img src={ASSETS.teamCollaborate} alt="Notre équipe au travail" className="w-full h-[440px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a5ba8]/70 via-transparent to-transparent" />
                {/* Floating stat card */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/95 backdrop-blur-sm px-6 py-4 shadow-lg"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {[
                    { target: 50, suffix: '+', label: 'Projets' },
                    { target: 98, suffix: '%', label: 'Satisfaction' },
                    { target: 40, suffix: '+', label: 'Experts' },
                  ].map(({ target, suffix, label }) => (
                    <div key={label} className="text-center">
                      <p className="text-xl font-extrabold text-[#1288D9]">
                        <AnimatedCounter target={target} suffix={suffix} />
                      </p>
                      <p className="text-xs text-slate-500 font-medium">{label}</p>
                    </div>
                  ))}
                </motion.div>
              </TiltCard>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Featured Projects ── */}
      <section className="bg-white py-24 border-t border-slate-100">
        <Container>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-12 flex items-center justify-between"
          >
            <div>
              <motion.span variants={fadeDown} className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-[#1288D9]">
                Nos réalisations
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Projets récents
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link to="/realisations" className="inline-flex items-center gap-2 text-sm font-bold text-[#1288D9] hover:gap-3 transition-all duration-300 animated-underline">
                Voir tous les projets <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {PROJECTS.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_2px_20px_rgba(18,136,217,0.07)] hover:shadow-[0_8px_36px_rgba(18,136,217,0.18)] hover:-translate-y-2 transition-all duration-400 card-shine"
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <motion.div
                    className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={16} className="text-[#1288D9]" />
                  </motion.div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1288D9]">{project.category}</span>
                  <h3 className="mt-1 font-extrabold text-slate-800 group-hover:text-[#1288D9] transition-colors">{project.name}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── CTA Bottom ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030d1a] via-[#0a2a5e] to-[#1288D9]" />
        <div className="aurora-orb-1 absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#38b6ff]/15 blur-[100px]" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: '28px 28px' }}
        />

        <Container className="relative z-10 text-center">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mx-auto max-w-2xl"
          >
            <motion.span variants={fadeDown} className="mb-4 inline-block text-[11px] font-bold uppercase tracking-widest text-white/50">
              Prêt à démarrer ?
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Parlons de votre projet
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-8">
              Notre équipe est disponible pour analyser votre besoin et vous proposer la solution la plus adaptée à vos objectifs et votre budget.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1288D9] shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                Nous contacter <ArrowRight size={16} />
              </Link>
              <Link to="/realisations" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                Voir nos réalisations
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
}
