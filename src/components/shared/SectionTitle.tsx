import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn('mb-16 flex flex-col', centered ? 'items-center text-center' : 'items-start')}
    >
      <span className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-[#1288D9]">
        {subtitle}
      </span>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
