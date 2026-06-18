import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '../../components/ui/Container';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { TeamCard } from '../../components/shared/TeamCard';
import { TEAM } from '../../config/constants';
import { staggerContainer, fadeUp, defaultViewport } from '../../utils/animations';

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative bg-white py-32 overflow-hidden border-t border-slate-100">
      {/* Decorative blobs */}
      <motion.div style={{ y }} className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#1288D9]/4 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#38b6ff]/5 blur-3xl" />

      <Container className="relative z-10">
        <SectionTitle 
          title="Rencontrez nos experts" 
          subtitle="L'équipe DM+"
          description="Une équipe de passionnés, unissant leurs expertises pour concevoir des solutions digitales performantes et innovantes." 
        />

        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-10"
        >
          {TEAM.map((member, idx) => (
            <motion.div key={member.name} variants={fadeUp}>
              <TeamCard {...member} index={idx} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
