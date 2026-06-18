'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { ASSETS } from '../../utils/index';

const CAROUSEL_DATA = [
  {
    image: ASSETS.teamCollaborate,
    tag: 'Carrières',
    title: "Rejoignez notre équipe",
    subtitle: "Nous recherchons des talents passionnés pour transformer le digital avec nous. Votre prochaine aventure commence ici.",
    buttonText: "Voir les offres",
    accent: '#1288D9',
  },
  {
    image: ASSETS.meeting,
    tag: 'Culture',
    title: "Évoluez avec les meilleurs",
    subtitle: "Rejoignez un environnement stimulant où la collaboration et l'innovation sont au cœur de chaque projet.",
    buttonText: "Découvrir notre culture",
    accent: '#7C3AED',
  },
  {
    image: ASSETS.teamHandshake,
    tag: 'Vision',
    title: "Construisons l'avenir",
    subtitle: "Participez au développement de solutions technologiques d'envergure qui redéfinissent les standards du marché.",
    buttonText: "Rejoindre l'aventure",
    accent: '#059669',
  },
  {
    image: ASSETS.corporate,
    tag: 'Talent',
    title: "Votre talent, notre force",
    subtitle: "Nous offrons un cadre de travail flexible et dynamique pour vous permettre de réaliser votre plein potentiel.",
    buttonText: "Postuler maintenant",
    accent: '#0891B2',
  },
];

export function JoinUsSection() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = CAROUSEL_DATA.length;

  useEffect(() => {
    if (isHovered) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % total), 5000);
    return () => clearInterval(t);
  }, [isHovered, total]);

  const slide = CAROUSEL_DATA[current];
  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  return (
    <section
      className="relative overflow-hidden min-h-[580px] flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Background image carousel ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </AnimatePresence>
      </div>

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-[#030d1a]/80 via-[#030d1a]/60 to-transparent" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#030d1a]/90 via-transparent to-transparent" />
      {/* Side vignette */}
      <div className="absolute inset-y-0 left-0 w-1/3 z-1 bg-gradient-to-r from-[#030d1a]/70 to-transparent" />

      {/* ── Accent color stripe ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`stripe-${current}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 bottom-0 w-1 z-10 origin-top"
          style={{ backgroundColor: slide.accent }}
        />
      </AnimatePresence>

      {/* ── Content ── */}
      <Container className="relative z-10 w-full py-20">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start"
            >
              {/* Tag */}
              <motion.span
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm"
                style={{ borderColor: slide.accent + '50', backgroundColor: slide.accent + '15' }}
              >
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: slide.accent }} />
                {slide.tag}
              </motion.span>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl mb-5">
                {slide.title}
              </h2>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-white/75 leading-relaxed font-medium max-w-lg mb-8">
                {slide.subtitle}
              </p>

              {/* CTA */}
              <Link to="/careers">
                <motion.span
                  className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}cc)`,
                    boxShadow: `0 8px 32px ${slide.accent}50`,
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {slide.buttonText}
                  <motion.span
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <ArrowRight size={14} />
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Controls ── */}
        <div className="absolute bottom-8 right-0 flex items-center gap-4 pr-4 md:pr-8">
          {/* Slide counter */}
          <span className="text-white/40 text-xs font-mono">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          {/* Progress track */}
          <div className="hidden sm:flex items-center gap-2">
            {CAROUSEL_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? 32 : 16, backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                {i === current && (
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ backgroundColor: slide.accent }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    key={current}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            {[
              { Icon: ChevronLeft, action: prev, label: 'Précédent' },
              { Icon: ChevronRight, action: next, label: 'Suivant' },
            ].map(({ Icon, action, label }) => (
              <motion.button
                key={label}
                aria-label={label}
                onClick={action}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
              >
                <Icon size={16} />
              </motion.button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
