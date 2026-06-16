import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Container } from '../../components/ui/Container';

export function JoinUsSection() {
  return (
    <section className="bg-[#1288D9] py-12 text-center text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-2xl flex-col items-center"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-white/30 text-white">
            <Briefcase size={32} strokeWidth={1.5} />
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Rejoignez notre équipe</h2>
          <p className="mb-8 text-sm text-white/90">
            Nous recherchons des talents passionnés pour renforcer nos équipes.
          </p>
          <Button variant="white" className="group rounded-md font-bold text-[#1288D9] px-6">
            Voir les offres <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
