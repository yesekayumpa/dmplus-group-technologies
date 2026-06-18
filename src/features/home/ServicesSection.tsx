import { motion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { ServiceCard } from '../../components/shared/ServiceCard';
import { SERVICES } from '../../config/constants';
import { staggerContainer, fadeUp, defaultViewport } from '../../utils/animations';
import { Code2, Cpu, Rocket, Shield, PenTool, Database } from 'lucide-react';

const icons = [Code2, Cpu, Rocket, Shield, PenTool, Database];

export function ServicesSection() {

  return (
    <section className="relative bg-white py-32 overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      
      {/* Aurora orbs */}
      <div className="aurora-orb-1 absolute top-20 left-10 w-[600px] h-[600px] rounded-full bg-[#1288D9]/15 blur-[120px] pointer-events-none" />
      <div className="aurora-orb-2 absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-[#38b6ff]/10 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={defaultViewport} 
            variants={fadeUp}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1288D9] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38b6ff] animate-pulse" />
              Nos Expertises
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={defaultViewport} 
            variants={fadeUp} 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mt-2"
          >
            Solutions technologiques <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38b6ff] to-[#1288D9]">sur mesure</span>
          </motion.h2>
          <motion.p 
            initial="hidden" 
            whileInView="visible" 
            viewport={defaultViewport} 
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed mx-auto"
          >
            Nous transformons vos défis complexes en solutions logicielles élégantes, performantes et évolutives pour propulser votre entreprise.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <ServiceCard {...service} icon={Icon} index={index} />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
