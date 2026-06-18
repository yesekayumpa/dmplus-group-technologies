import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { PROJECTS } from '../../config/constants';
import { ArrowUpRight, CheckCircle2, Clock, Zap, Layers } from 'lucide-react';

const CATEGORIES = ['Tous', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

const statusIcon: Record<string, React.ReactNode> = {
  'Livré': <CheckCircle2 size={11} className="inline-block mr-1" />,
  'En production': <Zap size={11} className="inline-block mr-1" />,
  'En cours': <Clock size={11} className="inline-block mr-1" />,
};

const ALL_PROJECTS = PROJECTS;

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = ALL_PROJECTS.filter(
    (p) => activeCategory === 'Tous' || p.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative bg-[#1288D9] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-3">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Nos Réalisations</h1>
            <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
              Découvrez les projets que nous avons menés avec succès pour nos clients,
              de la transformation digitale à l'intelligence artificielle.
            </p>
            <div className="mt-8 flex gap-6">
              {[{v:'50+',l:'Projets'},{v:'98%',l:'Satisfaction'},{v:'12',l:'Secteurs'}].map(s=>(
                <div key={s.l}>
                  <p className="text-2xl font-extrabold text-white">{s.v}</p>
                  <p className="text-xs text-white/60">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      <div className="bg-slate-50 py-16">
        <Container>
          {/* Filter chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-[#1288D9] text-white border-[#1288D9] shadow-[0_4px_16px_rgba(18,136,217,0.3)]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#1288D9] hover:text-[#1288D9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                  className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_20px_rgba(18,136,217,0.07)] border border-slate-100 hover:shadow-[0_8px_32px_rgba(18,136,217,0.15)] hover:-translate-y-1 transition-all duration-400"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    {/* Status badge */}
                    <span
                      className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full text-white backdrop-blur-sm"
                      style={{ backgroundColor: project.statusColor + 'dd' }}
                    >
                      {statusIcon[project.status]}
                      {project.status}
                    </span>
                    {/* Hover CTA */}
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ArrowUpRight size={18} className="text-[#1288D9]" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5">
                    <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-[#1288D9]">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#1288D9] transition-colors">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#EFF8FF] text-[#1288D9] border border-[#BEE3F8] rounded-full px-2.5 py-0.5"
                        >
                          <Layers size={8} />{t}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">{project.metrics.label}</p>
                        <p className="text-sm font-extrabold text-slate-800">{project.metrics.value}</p>
                      </div>
                      <ArrowUpRight size={16} className="text-slate-300 group-hover:text-[#1288D9] transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </div>
    </Layout>
  );
}
