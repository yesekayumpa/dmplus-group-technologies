import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ASSETS } from '../../utils/index';
import { staggerContainer, fadeUp, slideLeft, slideRight, defaultViewport, EASE_SMOOTH } from '../../utils/animations';

export interface AccordionItemData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Assistant Vocal Intelligent',
    description: 'Interaction naturelle en langage humain',
    imageUrl: ASSETS.womanDebugging,
  },
  {
    id: 2,
    title: 'Génération d\'Images',
    description: 'Création visuelle par intelligence artificielle',
    imageUrl: ASSETS.techno,
  },
  {
    id: 3,
    title: 'Chatbot IA + RAG Local',
    description: 'Assistants contextuels sur vos données',
    imageUrl: ASSETS.programming,
  },
  {
    id: 4,
    title: 'Agents Autonomes',
    description: 'Automatisation de workflows complexes',
    imageUrl: ASSETS.technologie,
  },
  {
    id: 5,
    title: 'Analyse Visuelle',
    description: 'Vision par ordinateur en temps réel',
    imageUrl: ASSETS.econResearch,
  },
];

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[300px] md:h-[380px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg
        ${isActive
          ? 'w-[260px] sm:w-[320px] md:w-[400px] shadow-[0_20px_60px_rgba(18,136,217,0.25)]'
          : 'w-[52px] md:w-[64px] hover:brightness-110'
        }
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'}`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/400x450/1288D9/ffffff?text=IA';
        }}
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 transition-all duration-500 ${isActive
          ? 'bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent'
          : 'bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-slate-900/20'
        }`} />

      {/* Active: bottom info */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_SMOOTH }}
          >
            <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-1">
              {item.description}
            </p>
            <h3 className="text-lg font-bold text-white leading-snug">
              {item.title}
            </h3>
          </motion.div>
        </div>
      )}

      {/* Inactive: vertical title */}
      {!isActive && (
        <span className="absolute bottom-20 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-xs font-semibold text-white/80">
          {item.title}
        </span>
      )}

      {/* Active top badge */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3, ease: EASE_SMOOTH }}
          className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#1288D9]/90 backdrop-blur-sm px-3 py-1"
        >
          <Sparkles size={10} className="text-white" />
          <span className="text-[10px] font-bold text-white">IA Générative</span>
        </motion.div>
      )}
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <section className="relative bg-gradient-to-b from-white to-[#F0F7FF] py-24 overflow-hidden">
      {/* Blob */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#1288D9]/6 blur-3xl" />

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-10">

          {/* Left: Text */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="w-full lg:w-5/12 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
           <motion.h2
              variants={slideLeft}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Accélérez vos processus avec{' '}
              <span className="text-gradient">l'IA Générative</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-base text-slate-500 leading-relaxed max-w-lg">
              Déployez des applications d'Intelligence Artificielle performantes et
              sur mesure, parfaitement intégrées à votre infrastructure pour booster
              votre productivité.
            </motion.p>

            {/* Feature list */}
            <motion.ul variants={staggerContainer(0.08)} className="mt-7 space-y-3 text-left">
              {[
                'Intégration à votre SI existant',
                'Modèles open-source & cloud',
                'Traitement sécurisé des données',
              ].map((feat) => (
                <motion.li
                  key={feat}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1288D9]/10">
                    <span className="h-2 w-2 rounded-full bg-[#1288D9]" />
                  </span>
                  {feat}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="w-full lg:w-7/12"
          >
            <div className="flex flex-row items-end justify-center lg:justify-end gap-2 md:gap-3 overflow-x-auto pb-2 snap-x">
              {accordionItems.map((item, index) => (
                <div key={item.id} className="snap-center shrink-0">
                  <AccordionItem
                    item={item}
                    isActive={index === activeIndex}
                    onMouseEnter={() => setActiveIndex(index)}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
