import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SITE_CONFIG } from '../../config/constants';
import { Mail, MapPin, Phone, ArrowLeft, ArrowRight, Globe, Share2, Camera } from 'lucide-react';
import { staggerContainer, fadeUp, defaultViewport } from '../../utils/animations';

export function Footer() {
  return (
    <footer className="w-full">
      {/* Top Pagination Bar */}
      <div className="border-t border-slate-100 bg-white py-6">
        <Container className="flex items-center justify-between text-xs font-bold text-slate-700">
          <Link
            to="#"
            className="group flex items-center gap-4 hover:text-[#1288D9] transition-colors duration-300"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-100 group-hover:border-[#1288D9] group-hover:bg-[#1288D9]/5 group-hover:-translate-x-1 transition-all duration-300">
              <ArrowLeft size={16} />
            </span>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Précédent</span>
              DM+ Investment
            </div>
          </Link>
          <Link
            to="#"
            className="group flex items-center gap-4 hover:text-[#1288D9] transition-colors duration-300 text-right"
          >
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Suivant</span>
              DM+ Academy
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-100 group-hover:border-[#1288D9] group-hover:bg-[#1288D9]/5 group-hover:translate-x-1 transition-all duration-300">
              <ArrowRight size={16} />
            </span>
          </Link>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="relative bg-[#030d1a] py-24 text-white overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1288D9]/50 to-transparent" />
        
        {/* Aurora orbs */}
        <div className="aurora-orb-1 absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1288D9]/15 blur-[120px] pointer-events-none" />
        <div className="aurora-orb-2 absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#38b6ff]/10 blur-[100px] pointer-events-none" />
        <div className="aurora-orb-3 absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#7C3AED]/8 blur-[80px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 gap-14 md:grid-cols-4"
          >
            {/* Brand col */}
            <motion.div variants={fadeUp} className="space-y-6">
              <img
                src="/logo.png"
                alt="Digital Mind+ Group"
                className="h-10 w-auto object-contain brightness-[1.2]"
              />
              <p className="text-sm text-slate-400 leading-relaxed max-w-[240px]">
                L'excellence multi-domaine. Un groupe innovant fédérant nos filiales
                spécialisées pour des solutions complètes et intégrées.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Globe, label: 'Website' },
                  { icon: Share2,  label: 'Social' },
                  { icon: Camera, label: 'Media' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#1288D9] hover:border-[#1288D9] text-slate-300 hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(18,136,217,0.3)] transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Filiales */}
            <motion.div variants={fadeUp}>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white/90">
                Nos Filiales
              </h4>
              <ul className="space-y-3">
                {['Marketing', 'Investment', 'Technologies', 'Academy', 'Distribution', 'Aviation'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-[#38b6ff] transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={fadeUp}>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white/90">
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Accueil', to: '/' },
                  { label: 'Nos Services', to: '/#services' },
                  { label: 'Nos Projets', to: '/#projects' },
                  { label: 'Notre Équipe', to: '/#team' },
                  { label: 'Portfolio', to: '/portfolio' },
                  { label: 'Carrières', to: '/careers' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-slate-400 hover:text-[#38b6ff] transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp}>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white/90">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#1288D9] group-hover:text-white text-slate-400 transition-colors">
                      <Mail size={14} />
                    </div>
                    <span>{SITE_CONFIG.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone}`}
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#1288D9] group-hover:text-white text-slate-400 transition-colors">
                      <Phone size={14} />
                    </div>
                    <span>{SITE_CONFIG.contact.phone}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400 group">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 flex-shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </div>
                  <span className="max-w-[160px] leading-relaxed">{SITE_CONFIG.contact.address}</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-20 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row text-[11px] font-medium text-slate-500"
          >
            <p>© {new Date().getFullYear()} DM+ Group. Tous droits réservés.</p>
            <div className="mt-4 flex gap-6 sm:mt-0">
              {['Mentions légales', 'Politique de confidentialité', 'Cookies'].map((link) => (
                <a key={link} href="#" className="hover:text-white transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </footer>
  );
}
