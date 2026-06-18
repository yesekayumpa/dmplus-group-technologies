'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock, Zap, Layers, Filter } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { TiltCard } from '../../components/ui/TiltCard';
import { PROJECTS } from '../../config/constants';
import { fadeUp, zoomIn, staggerContainer, defaultViewport } from '../../utils/animations';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { Link } from 'react-router-dom';

type Project = typeof PROJECTS[0];

const ALL_CATEGORIES = ['Tous', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

const statusIcon: Record<string, React.ReactNode> = {
  'Livré': <CheckCircle2 size={11} className="inline-block mr-1" />,
  'En production': <Zap size={11} className="inline-block mr-1" />,
  'En cours': <Clock size={11} className="inline-block mr-1" />,
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
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
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const all = PROJECTS.filter(
    (p) => activeCategory === 'Tous' || p.category === activeCategory
  );

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-[#F0F7FF] via-white to-[#F8FAFC] py-32 overflow-hidden">
      {/* Decorative blobs with parallax */}
      <motion.div style={{ y: blob1Y }} className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#1288D9]/5 blur-3xl" />
      <motion.div style={{ y: blob2Y }} className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#1288D9]/5 blur-3xl" />

      <Container>
        {/* Header */}
        <SectionTitle 
          subtitle="Nos Réalisations" 
          title="Nos projets phares" 
          description="De la conception à la mise en production, découvrez les solutions à fort impact que nous avons livrées pour nos clients à travers différents secteurs." 
        />



        {/* All Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <AnimatePresence mode="popLayout">
            {all.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA bottom */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-16 flex flex-col items-center gap-5 text-center relative z-10"
        >
          <p className="text-sm font-medium text-slate-500">
            Découvrez l'ensemble de nos projets et cas clients.
          </p>
          <Link
            to="/realisations"
            className="group inline-flex items-center gap-3 rounded-full bg-[#1288D9] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_32px_rgba(18,136,217,0.35)] hover:shadow-[0_12px_40px_rgba(18,136,217,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Voir toutes nos réalisations
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
