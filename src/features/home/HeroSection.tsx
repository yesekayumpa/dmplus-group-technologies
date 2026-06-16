'use client'

import { motion } from 'framer-motion';
import { SplineScene } from "../../components/ui/splite";
import { Spotlight } from "../../components/ui/spotlight"
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import technologieImg from "../../assets/Technologie.png";

export function HeroSection() {
  return (
    <section className="relative flex w-full items-center min-h-[560px] pt-20 pb-8 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${technologieImg})` }}
      />
      <div className="absolute inset-0 z-0 bg-[#1288D9]/80 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1288D9] via-[#1288D9]/50 to-transparent" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-0"
        fill="white"
      />
      
      <Container className="relative z-10 w-full py-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 py-4 md:py-8 relative z-10 flex flex-col justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm w-fit"
            >
              <span className="flex h-2 w-2 rounded-full bg-white"></span>
              DM+ Technologies
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              Digitaliser pour<br/>mieux performer.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-white/90 max-w-lg leading-relaxed font-medium"
            >
              À la pointe de l'innovation, nous développons des solutions logicielles sur mesure et intégrons les dernières avancées en IA pour votre transformation digitale.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button variant="white" className="font-bold text-[#1288D9] rounded-md px-6 shadow-xl shadow-black/10 hover:scale-105 transition-transform duration-300">
                Nous contacter
              </Button>
              <Button variant="outline-white" className="rounded-md px-6 font-semibold hover:scale-105 transition-all duration-300">
                Voir nos réalisations
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex-[1.4] relative h-[440px]"
          >
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
