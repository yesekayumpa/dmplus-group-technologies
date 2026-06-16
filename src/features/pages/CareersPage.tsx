import { motion } from 'framer-motion';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { MapPin, Clock, Briefcase, ArrowUpRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const JOBS = [
  {
    id: 1,
    title: 'Développeur Full-Stack Senior',
    department: 'Ingénierie',
    location: 'Paris, France',
    type: 'CDI',
    level: 'Senior',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Ingénieur Machine Learning',
    department: 'IA & Data',
    location: 'Remote',
    type: 'CDI',
    level: 'Senior',
    tags: ['Python', 'TensorFlow', 'LLMs'],
  },
  {
    id: 3,
    title: 'Chef de Projet Digital',
    department: 'Gestion de projet',
    location: 'Paris, France',
    type: 'CDI',
    level: 'Manager',
    tags: ['Agile', 'Scrum', 'PMP'],
  },
  {
    id: 4,
    title: 'Consultant Transformation Digitale',
    department: 'Conseil',
    location: 'Hybride',
    type: 'CDI',
    level: 'Confirmé',
    tags: ['ERP', 'Change Management', 'Cloud'],
  },
  {
    id: 5,
    title: 'Designer UX/UI',
    department: 'Design',
    location: 'Remote',
    type: 'Freelance',
    level: 'Confirmé',
    tags: ['Figma', 'Design System', 'Prototypage'],
  },
];

const PERKS = [
  { icon: Zap, title: 'Innovation continue', desc: 'Travaillez sur des projets à la pointe de la tech.' },
  { icon: MapPin, title: 'Flex office', desc: 'Télétravail partiel disponible selon les postes.' },
  { icon: Clock, title: 'Équilibre vie pro/perso', desc: '35h, RTT et congés généreux.' },
  { icon: Briefcase, title: 'Évolution rapide', desc: 'Plans de carrière personnalisés et formations.' },
];

export function CareersPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative bg-[#1288D9] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, white 0%, transparent 60%)' }} />
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-3">Carrières</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Rejoignez notre équipe</h1>
            <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
              Vous êtes passionné(e) par le digital et l'innovation ? Rejoignez une équipe ambitieuse qui construit l'avenir de la transformation digitale.
            </p>
          </motion.div>
        </Container>
      </div>

      <div className="bg-slate-50 py-20">
        <Container>
          {/* Perks */}
          <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 -mt-14">
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-[#1288D9] text-white shadow-md shadow-blue-500/20">
                  <perk.icon size={18} />
                </div>
                <h3 className="text-sm font-bold text-slate-800">{perk.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{perk.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Job listings */}
          <h2 className="mb-8 text-2xl font-extrabold text-slate-900">
            Postes ouverts <span className="ml-2 rounded-full bg-[#1288D9] px-3 py-1 text-sm font-bold text-white">{JOBS.length}</span>
          </h2>
          <div className="space-y-4">
            {JOBS.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <Link
                  to="/contact"
                  className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/30 border border-slate-100 hover:border-[#1288D9] hover:shadow-blue-500/10 transition-all"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1288D9]">{job.department}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">{job.level}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#1288D9] transition-colors">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden sm:flex gap-1.5">
                      {job.tags.map(tag => (
                        <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 group-hover:bg-[#1288D9] transition-colors">
                      <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
