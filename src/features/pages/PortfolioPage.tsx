import { motion } from 'framer-motion';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { PROJECTS } from '../../config/constants';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = ['Tous', 'Transformation Digitale', 'Stratégie', 'Optimisation', 'IA & Data'];

const ALL_PROJECTS = [
  ...PROJECTS,
  {
    id: 'delta',
    name: 'Projet Delta',
    category: 'IA & Data',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'epsilon',
    name: 'Projet Epsilon',
    category: 'Transformation Digitale, Données',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'zeta',
    name: 'Projet Zeta',
    category: 'Stratégie de croissance',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
];

export function PortfolioPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative bg-[#1288D9] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 0%, transparent 60%)' }} />
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-3">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Nos Réalisations</h1>
            <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
              Découvrez les projets que nous avons menés avec succès pour nos clients, de la stratégie digitale à l'intégration IA.
            </p>
          </motion.div>
        </Container>
      </div>

      <div className="bg-slate-50 py-20">
        <Container>
          {/* Filter chips */}
          <div className="mb-12 flex flex-wrap gap-3">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${i === 0
                    ? 'bg-gradient-to-r from-blue-600 to-[#1288D9] text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#1288D9] hover:text-[#1288D9]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ArrowUpRight size={18} className="text-[#1288D9]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-[#1288D9]">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#1288D9] transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
