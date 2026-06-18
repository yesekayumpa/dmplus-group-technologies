import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { fadeUp, staggerContainer, defaultViewport } from '../../utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  description?: string;
}

export function SectionTitle({ title, subtitle, centered = true, description }: SectionTitleProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn('mb-16 flex flex-col', centered ? 'items-center text-center' : 'items-start')}
    >
      {/* Pill label */}
      <motion.div variants={fadeUp}>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1288D9]/20 bg-[#1288D9]/6 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1288D9]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1288D9] animate-pulse" />
          {subtitle}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>

      {/* Optional description */}
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'mt-5 text-base text-slate-500 leading-relaxed',
            centered ? 'max-w-2xl' : 'max-w-xl'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
