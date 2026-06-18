'use client'

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SplineScene } from "../../components/ui/splite";
import { Spotlight } from "../../components/ui/spotlight"
import { Container } from "../../components/ui/Container";
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import technologieImg from "../../assets/Technologie.png";
import { ParticleField } from '../../components/ui/ParticleField';
import { MagneticButton } from '../../components/ui/MagneticButton';

// Each character animates individually — cinema-grade
const SplitText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          transition={{
            delay: delay + i * 0.035,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', transformOrigin: 'bottom center', whiteSpace: 'pre' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

// Word-by-word reveal
const WordReveal = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              delay: delay + i * 0.08,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax for the background
  const bgY = useTransform(scrollY, [0, 600], ['0%', '20%']);
  const contentY = useTransform(scrollY, [0, 400], ['0%', '-8%']);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full items-center min-h-[85vh] overflow-hidden"
    >
      {/* ── Parallax Background ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-[-10%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${technologieImg})` }}
        />
      </motion.div>

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F0F7FF]/90 via-white/80 to-[#E0F2FE]/50" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/50 to-transparent" />

      {/* ── Aurora orbs ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="aurora-orb-1 absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-[#1288D9]/20 blur-[120px]" />
        <div className="aurora-orb-2 absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#38b6ff]/15 blur-[100px]" />
        <div className="aurora-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/10 blur-[80px]" />
      </div>

      {/* ── Particle field ── */}
      <div className="absolute inset-0 z-1">
        <ParticleField particleCount={50} color="18, 136, 217" interactive={true} />
      </div>



      {/* ── Scanline ── */}
      <div className="scanline z-1" />

      {/* ── Spotlight ── */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-1" fill="white" />

      {/* ── Main content ── */}
      <Container className="relative z-10 w-full pt-28 pb-16">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 lg:gap-16"
          style={{ y: contentY, opacity }}
        >
          {/* ── Left text ── */}
          <div className="flex-[1.2] py-4 md:py-8 flex flex-col justify-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 w-fit"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#1288D9]/20 bg-[#1288D9]/5 px-5 py-2 text-[11px] font-bold text-[#1288D9] backdrop-blur-lg shadow-sm tracking-widest uppercase">
                <Sparkles size={11} className="text-[#38b6ff] animate-pulse" />
                DM+ Technologies · Innovation digitale
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#38b6ff] animate-pulse" />
              </span>
            </motion.div>

            {/* Headline — character split */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-slate-900 leading-[1.08] tracking-tight">
              <SplitText text="Digitaliser pour" delay={0.3} className="block mb-2" />
              <span className="block">
                <SplitText text="mieux " delay={0.65} />
                <span className="relative inline-block">
                  <SplitText
                    text="performer."
                    delay={0.82}
                    className="text-[#38b6ff]"
                  />

                </span>
              </span>
            </h1>

            {/* Description — word reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mt-6 max-w-xl"
            >
              <p className="text-slate-600 leading-relaxed font-medium text-base md:text-lg">
                <WordReveal
                  text="À la pointe de l'innovation, nous développons des solutions logicielles sur mesure et intégrons les dernières avancées en IA pour votre transformation digitale."
                  delay={1.5}
                />
              </p>
            </motion.div>


            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <Link to="/contact">
                  <motion.span
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#1288D9] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(18,136,217,0.3)] hover:shadow-[0_16px_48px_rgba(18,136,217,0.4)] transition-shadow duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="absolute inset-0 animate-shimmer opacity-20 bg-white" />
                    <span className="relative">Nous contacter</span>
                    <ArrowRight size={15} className="relative group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Link>
              </MagneticButton>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors duration-300"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Voir nos réalisations
              </motion.button>
            </motion.div>
          </div>

          {/* ── Right 3D scene ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative h-[360px] lg:h-[480px] w-full"
          >
            {/* Glow ring behind spline */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1288D9]/20 to-[#38b6ff]/10 blur-2xl scale-90" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full relative z-10"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
